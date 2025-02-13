﻿/**
Copyright (c)  2019, Francisco Xavier Dos Santos Fonseca (Ordem dos Engenheiros n.º 84598), and Technical University of Delft. 
All rights reserved. 

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met: 

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer. 

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution. 

3. All advertising materials mentioning features or use of this software must display the following acknowledgement: 
This product includes software developed by the Technical University of Delft. 

4. Neither the name of  the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY  COPYRIGHT HOLDER "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL  COPYRIGHT HOLDER BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/



using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.SceneManagement;

public class ChallengeIconGUIScript : MonoBehaviour {

	public GameObject challengeIcon;	// this is the whole icon being generated
	public Image challengeImage;
	public Text challengeTitle;
	public Text challengeDistance;
	[HideInInspector]
	public ChallengeInfo challenge;


	public void NavigateToSelectedChallenge()
	{
		Debug.Log ("[ChallengeIconGUIScript] " + challengeTitle.text + ", with ID: " + challenge._id);

		// This 
		SceneManager.UnloadSceneAsync (3);
		//DestroyObjectsFromScene ();
		GameManager.instance.LoadObjectsFromGameSceneMeteor ();

		// set the compass to follow something (in case you have challenges. you have to change this later)
		//GameManager.instance.FollowChallenge (challenge, true);
		GameManager.instance.FollowChallenge (challenge._id, true);
	}

	public void NavigateToSelectedChallengeInChallengesCanvasMenu()
	{
		Debug.Log ("[NavigateToSelectedChallengeInChallengesCanvasMenu] " + challengeTitle.text + ", with ID: " + challenge._id);

		ChallengesCanvasMenuManager.instance.CloseCanvas ();

		//StartCoroutine (ChallengesCanvasMenuManager.instance.LoadChallengesFromTheServer());

		// set the compass to follow something (in case you have challenges. you have to change this later)
		//GameManager.instance.FollowChallenge (challenge, true);
		GameManager.instance.FollowChallenge (challenge._id, true);
	}
}
