import * as React from 'react';
import './App.css'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

export default function App() {
  const roomID = "AlokTiwari";
  let myMeeting = async (element) => {

 // generate Kit Token
 const appID = 1884422339;
 const serverSecret = "aac1a778919d8b4303947c36b353b911";
 const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID,  Date.now().toString(),  "Alok Tiwari");

 // Create instance object from Kit Token.
 const zp = ZegoUIKitPrebuilt.create(kitToken);
 // start the call
 zp.joinRoom({
        container: element,
        sharedLinks: [
          {
            name: 'Personal link',
            url:
             window.location.protocol + '//' + 
             window.location.host + window.location.pathname +
              '?roomID=' +
              roomID,
          },
        ],
        scenario: {
         mode: ZegoUIKitPrebuilt.VideoConference,
        },
   });
  };

  return (

    <div
      className='body'
      ref={myMeeting}
      style={{ width: '100vw', height: '100vh'}}
    ></div>
  );
}