﻿//
// Fingers Gestures
// (c) 2015 Digital Ruby, LLC
// http://www.digitalruby.com
// Source code may be used for personal or commercial projects.
// Source code may NOT be redistributed or sold.
// 

using System.Collections;
using System.Collections.Generic;
using System.Text;
using UnityEngine;

namespace DigitalRubyShared
{
    public class FingersImageAutomationScript : MonoBehaviour
    {
        public UnityEngine.UI.RawImage Image;
        public Material LineMaterial;
        public UnityEngine.UI.Text MatchLabel;
        public UnityEngine.UI.InputField ScriptText;
        public UnityEngine.UI.InputField ImageNameText;
        public UnityEngine.UI.Button BulkImportButton;

        [Tooltip("Whether to auto-add non-matches to the list of possible images")]
        public bool AutoAddImages;

        public ImageGestureRecognizer ImageGesture { get; private set; }
        protected ImageGestureImage LastImage { get; private set; }
        protected ImageGestureImage MatchedImage { get; private set; }
        protected Dictionary<ImageGestureImage, string> RecognizableImages = new Dictionary<ImageGestureImage, string>();

        private List<List<Vector2>> lineSet = new List<List<Vector2>>();
        private List<Vector2> currentPointList;
        private TapGestureRecognizer tap;

        /// <summary>
        /// Create a texture from an image gesture image
        /// </summary>
        /// <param name="image">Image</param>
        /// <returns>Texture</returns>
        public static Texture2D CreateTextureFromImageGestureImage(ImageGestureImage image)
        {
            Texture2D texture = new Texture2D(ImageGestureRecognizer.ImageColumns, ImageGestureRecognizer.ImageRows, TextureFormat.ARGB32, false, false);
            texture.filterMode = FilterMode.Point;
            texture.wrapMode = TextureWrapMode.Clamp;
            for (int y = 0; y < ImageGestureRecognizer.ImageRows; y++)
            {
                for (int x = 0; x < ImageGestureRecognizer.ImageColumns; x++)
                {
                    // each bit in the row can be checked as well if Pixels is not available
                    // if ((imageGesture.Image.Rows[y] & (ulong)(1 << x)) == 0)
                    if (image.Pixels[x + (y * ImageGestureRecognizer.ImageRows)] == 0)
                    {
                        texture.SetPixel(x, y, Color.clear);
                    }
                    else
                    {
                        texture.SetPixel(x, y, Color.white);
                    }
                }
            }
            texture.Apply();
            return texture;
        }

        /// <summary>
        /// Create an image gesture image from a texture
        /// </summary>
        /// <param name="texture">Texture</param>
        /// <param name="scorePadding">Score padding</param>
        /// <returns>ImageGestureImage or null if dimensions of texture do not match ImageGestureRecognizer.ImageColumns and ImageGestureRecognizer.ImageRows.</returns>
        public static ImageGestureImage CreateImageGestureImageFromTexture(Texture2D texture, float scorePadding = 0.0f)
        {
            if (texture.width != ImageGestureRecognizer.ImageColumns || texture.height != ImageGestureRecognizer.ImageRows)
            {
                return null;
            }

            ulong[] rows = new ulong[ImageGestureRecognizer.ImageRows];
            Color32[] pixels = texture.GetPixels32();
            for (int row = 0; row < texture.height; row++)
            {
                for (int col = 0; col < texture.width; col++)
                {
                    Color32 pixel = pixels[(row * texture.width) + col];
                    ulong hasValue = (pixel.a > 100 ? 1ul : 0ul);
                    rows[row] |= (hasValue << col);
                }
            }
            return new ImageGestureImage(rows, ImageGestureRecognizer.ImageColumns, scorePadding);
        }

        public void DeleteLastScriptLine()
        {
            if (ScriptText != null)
            {
                string[] lines = ScriptText.text.Split(new string[] { System.Environment.NewLine }, System.StringSplitOptions.RemoveEmptyEntries);
                if (lines.Length > 0)
                {
                    ScriptText.text = string.Join(System.Environment.NewLine, lines, 0, lines.Length - 1);
                }

                if (AutoAddImages && ImageGesture.GestureImages.Count > 0 && ImageNameText != null && ImageNameText.text.Length != 0)
                {
                    ImageGesture.GestureImages.RemoveAt(ImageGesture.GestureImages.Count - 1);
                }
            }
        }

        public void BulkImport()
        {

#if UNITY_EDITOR

            string path = UnityEditor.EditorUtility.OpenFolderPanel("Load png image textures", "", "");
            StringBuilder scriptText = new StringBuilder();
            foreach (string pngFile in System.IO.Directory.GetFiles(path, "*.png"))
            {
                string fileName = System.IO.Path.GetFileNameWithoutExtension(pngFile);
                int pos = fileName.IndexOf('_');
                if (pos >= 0)
                {
                    fileName = fileName.Substring(0, pos);
                }
                Texture2D tex = new Texture2D(1, 1, TextureFormat.ARGB32, false, false);
                tex.LoadImage(System.IO.File.ReadAllBytes(pngFile));
                Texture2D scaled = ScaleTexture(tex, ImageGestureRecognizer.ImageRows, ImageGestureRecognizer.ImageColumns);
                ImageGestureImage image = CreateImageGestureImageFromTexture(scaled);
                Destroy(tex);
                Destroy(scaled);
                scriptText.Append(image.GetCodeForRowsInitialize(fileName));
                scriptText.AppendLine(",");
                if (AutoAddImages)
                {
                    ImageGesture.GestureImages.Add(image);
                    RecognizableImages[image] = fileName;
                }
            }
            ScriptText.text = scriptText.ToString();

#endif

        }

        protected virtual void OnEnable()
        {
            tap = new TapGestureRecognizer();
            tap.StateUpdated += Tap_Updated;

            ImageGesture = new ImageGestureRecognizer();
            ImageGesture.StateUpdated += ImageGestureUpdated;
            ImageGesture.MaximumPathCount = 2;
            ImageGesture.MaximumPathCountExceeded += MaximumPathCountExceeded;
            ImageGesture.ThresholdUnits = 0.0f;
            if (RecognizableImages != null)
            {
                ImageGesture.GestureImages = new List<ImageGestureImage>(RecognizableImages.Keys);
            }

            FingersScript.Instance.AddGesture(tap);
            FingersScript.Instance.AddGesture(ImageGesture);

            // imageGesture.Simulate(752, 382, 760, 365, 768, 348, 780, 335, 789, 329, 802, 327, 814, 336, 828, 354, 837, 371, 841, 381, 841, 386);

#if !UNITY_EDITOR

            BulkImportButton.gameObject.SetActive(false);

#endif

        }

        protected virtual void OnDisable()
        {
            if (FingersScript.HasInstance)
            {
                FingersScript.Instance.RemoveGesture(tap);
                FingersScript.Instance.RemoveGesture(ImageGesture);
            }
        }

        protected virtual void Update()
        {
            if (Input.GetKeyDown(KeyCode.Escape))
            {
                if (Input.GetKeyDown(KeyCode.LeftShift))
                {
                    UnityEngine.SceneManagement.SceneManager.LoadScene(0);
                }
                else
                {
                    ResetLines();
                }
            }
            else if (Input.GetKey(KeyCode.Space))
            {
                if (lineSet.Count != 0)
                {
                    if (ImageNameText != null && string.IsNullOrEmpty(ImageNameText.text))
                    {

#if UNITY_EDITOR

                        UnityEditor.EditorUtility.DisplayDialog("Error", "Please enter an image name in the top right text box", "OK");

#endif

                    }
                    else
                    {
                        UpdateImage();
                    }
                    ResetLines();
                }
            }
        }

        public Texture2D ScaleTexture(Texture src, int width, int height)
        {
            RenderTexture rt = RenderTexture.GetTemporary(width, height, 0, RenderTextureFormat.ARGB32, RenderTextureReadWrite.Linear);
            Graphics.Blit(src, rt);

            RenderTexture currentActiveRT = RenderTexture.active;
            RenderTexture.active = rt;
            Texture2D tex = new Texture2D(rt.width, rt.height, TextureFormat.ARGB32, false, false);

            tex.ReadPixels(new Rect(0, 0, tex.width, tex.height), 0, 0);
            tex.Apply();

            RenderTexture.ReleaseTemporary(rt);
            RenderTexture.active = currentActiveRT;

            return tex;
        }

        private void UpdateImage()
        {
            Texture2D t = CreateTextureFromImageGestureImage(LastImage);
            Image.texture = t;

            if (MatchedImage == null)
            {
                MatchLabel.text = "No match";

                // no match add a script entry
                if (ScriptText != null)
                {
                    ScriptText.text += LastImage.GetCodeForRowsInitialize(ImageNameText == null ? null : ImageNameText.text) +
                        "," + System.Environment.NewLine;

                    if (AutoAddImages && ImageNameText != null && ImageNameText.text.Length != 0)
                    {
                        ImageGesture.GestureImages.Add(LastImage);
                        RecognizableImages[LastImage] = ImageNameText.text;
                    }
                }
            }
            else
            {
                MatchLabel.text = "Match: " + RecognizableImages[MatchedImage];
            }

            MatchLabel.text += " (" + ImageGesture.MatchedGestureCalculationTimeMilliseconds + " ms)";

            ImageGesture.Reset();
        }

        private void AddTouches(ICollection<GestureTouch> touches)
        {
            GestureTouch? t = null;
            foreach (GestureTouch tt in touches)
            {
                t = tt;
                break;
            }
            if (t != null)
            {
                Vector3 v = new Vector3(t.Value.X, t.Value.Y, 0.0f);
                v = Camera.main.ScreenToWorldPoint(v);

                // Debug.LogFormat("STW: {0},{1} = {2},{3}", t.Value.X, t.Value.Y, v.x, v.y);

                currentPointList.Add(v);
            }
        }

        private void ImageGestureUpdated(DigitalRubyShared.GestureRecognizer imageGesture)
        {
            if (imageGesture.State == GestureRecognizerState.Ended)
            {
                AddTouches(imageGesture.CurrentTrackedTouches);
                // note - if you have received an image you care about, you should reset the image gesture, i.e. imageGesture.Reset()
                // the ImageGestureRecognizer doesn't automaticaly Reset like other gestures when it ends because some images need multiple paths
                // which requires lifting the mouse or finger and drawing again
                LastImage = ImageGesture.Image.Clone();
                MatchedImage = (ImageGesture.MatchedGestureImage == null ? null : ImageGesture.MatchedGestureImage.Clone());
            }
            else if (imageGesture.State == GestureRecognizerState.Began)
            {
                // began
                currentPointList = new List<Vector2>();
                lineSet.Add(currentPointList);
                AddTouches(imageGesture.CurrentTrackedTouches);
            }
            else if (imageGesture.State == GestureRecognizerState.Executing)
            {
                // moving
                AddTouches(imageGesture.CurrentTrackedTouches);
            }
        }

        private void ResetLines()
        {
            currentPointList = null;
            lineSet.Clear();
            ImageGesture.Reset();
        }

        private void MaximumPathCountExceeded(object sender, System.EventArgs e)
        {
            ResetLines();
        }

        private void Tap_Updated(DigitalRubyShared.GestureRecognizer gesture)
        {
            if (gesture.State == GestureRecognizerState.Ended)
            {
                UnityEngine.Debug.Log("Tap Gesture Ended");
            }
        }

        private void OnRenderObject()
        {
            if (LineMaterial == null)
            {
                return;
            }

            GL.PushMatrix();
            LineMaterial.SetPass(0);
            GL.LoadProjectionMatrix(Camera.main.projectionMatrix);
            GL.Begin(GL.LINES);
            foreach (List<Vector2> lines in lineSet)
            {
                for (int i = 1; i < lines.Count; i++)
                {
                    GL.Color(Color.white);
                    GL.Vertex(lines[i - 1]);
                    GL.Vertex(lines[i]);
                }
            }
            GL.End();
            GL.PopMatrix();
        }
    }
}
