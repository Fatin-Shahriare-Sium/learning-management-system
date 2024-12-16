"use client";

import React, { useEffect, useState } from "react";
import { gapi } from "gapi-script";
import YouTube from "react-youtube";
const YOUTUBE_VIDEO_ID = "kLzGH4C1lcw";
const CLIENT_ID = "767133034347-bfrqop8lch9i8rth55t8abk4m0p1lk71.apps.googleusercontent.com";
const API_KEY = "AIzaSyBYFLQ6b7cZvxRHEDPvTV3R5SoLVAidVAE";
const SCOPES = "https://www.googleapis.com/auth/youtube.readonly";

export default function PrivateYouTubeVideo() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [error, setError] = useState(null);
  let ACC_TOKEN = "ya29.a0ARW5m76Izjdhrcbo4YLfFQtLipjV_oGi1RIHWLUFDVRgmxs7_XBrYCcKv_cAMDdans46IFFwJOZPtWrYpX2kFrui3sGK-S4tvOJeQx3_7nnxqQ2kYrltxDUqKG3ITUb9WCVBMIQ37qTQwVWFGnfBkVn7nC20WuavNgaCgYKATsSARASFQHGX2MiUg96SVHcZs0GOuOU6kMp6A0169";

  useEffect(() => {
    // Load Google API Client
    fetch("https://www.googleapis.com/youtube/v3/videos?id=kLzGH4C1lcw", {
      headers: {
        Authorization: `Bearer ${ACC_TOKEN}`,
      },
    }).then((res) => {
      if (res.ok) {
        setIsAuthorized(true);
      }
      console.log("res video yt", res.body);
    });
    // gapi.load("client:auth2", () => {
    //   gapi.client
    //     .init({
    //       apiKey: API_KEY,
    //       clientId: CLIENT_ID,
    //       scope: SCOPES,
    //     })
    //     .then(() => {
    //       const authInstance = gapi.auth2.getAuthInstance();
    //       if (authInstance.isSignedIn.get()) {
    //         setIsAuthorized(true);
    //       } else {
    //         authInstance
    //           .signIn()
    //           .then((res) => {
    //             console.log("auth res google", res);
    //             setIsAuthorized(true);
    //           })
    //           .catch(setError);
    //       }
    //     });
    // });
  }, []);

  const renderVideo = () => {
    if (isAuthorized) {
      return <YouTube videoId={YOUTUBE_VIDEO_ID} />;
      //return <iframe width="560" height="315" src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>;
    } else if (error) {
      return <p>Error: {error.message}</p>;
    } else {
      return <p>Loading...</p>;
    }
  };

  return (
    <div>
      <h1>Private YouTube Video</h1>
      {renderVideo()}
    </div>
  );
}
