namespace Mapbox.Unity.MeshGeneration.Filters
{
    using UnityEngine;
    using Mapbox.Unity.MeshGeneration.Data;

    [CreateAssetMenu(menuName = "Mapbox/Filters/Type Filter")]
    public class TypeFilter : FilterBase
    {
        public override string Key { get { return "type"; } }
        [SerializeField]
		private string[] _types = null;
        [SerializeField]
		private TypeFilterType _behaviour = 0;

        public override bool Try(VectorFeatureUnity feature)
        {
			var check = false;
			for (int i = 0; i < _types.Length; i++)
			{
				if (_types[i].ToLowerInvariant() == feature.Properties["type"].ToString().ToLowerInvariant())
				{
					check = true;
				}
			}
            return _behaviour == TypeFilterType.Include ? check : !check;
        }

        public enum TypeFilterType
        {
            Include,
            Exclude
        }
    }
}