import React from 'react';
import './App.css';
import { JitsiMeeting } from '@jitsi/react-sdk';

export default function App() {
  const getUrlParams = (url = window.location.href) => {
    const urlStr = url.split('?')[1];
    return new URLSearchParams(urlStr);
  };

  const randomID = (length) => {
    return Math.random().toString(36).substring(2, 2 + length);
  };

  const roomID = getUrlParams().get('roomID') || randomID(5);

  return (
    <div className='body' style={{ width: '100vw', height: '100vh' }}>
      <JitsiMeeting
        domain="meet.jit.si"
        roomName={roomID}
        configOverwrite={{
          startWithAudioMuted: true,
          disableModeratorIndicator: true,
          startScreenSharing: true,
          enableEmailInStats: false,
        }}
        interfaceConfigOverwrite={{
          DISABLE_JOIN_LEAVE_NOTIFICATIONS: true,
        }}
        userInfo={{
          displayName: 'YOUR_USERNAME',
        }}
        onApiReady={(externalApi) => {
          // Here you can attach custom event listeners to the Jitsi Meet External API
          // You can also store it locally to execute commands
        }}
        getIFrameRef={(iframeRef) => { iframeRef.style.height = '100vh'; }}
      />
      <div style={{ position: 'absolute', bottom: '10px', width: '100%', textAlign: 'center' }}>
        <p>Share this link to join the meeting: <a href={`${window.location.origin}?roomID=${roomID}`}>{window.location.origin}?roomID={roomID}</a></p>
      </div>
    </div>
  );
}
