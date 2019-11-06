## Class 9 - Real-time communication


### HTTPS in local environments
As we've seen before in this class, many browser APIs require secure network
connections in order to let Javascript code access things like the microphone or sensors.
In order to develop such app in our local environments, we need to run a secure local server.

Without getting into details, this means that our server requires a `certificate` that will
identify it to the connecting browser, and be used to establish an `HTTPS` connection.

To generate a new set of certificates, run the following in your development folder:
`openssl req  -nodes -new -x509  -keyout key.pem -out cert.pem`

This will create two files: `key.pem` and `cert.pem`.

To run a secure server in your local development folder:
1. make suer `http-server` is installed by running `npm install -g http-server`
2. Run a secure server with the command `http-server --ssl`

A note: the certificates must be in the same folder in which you're running the `http-server --ssl` command.

### Resources
#### WebRTC and Peer.js
https://webrtc.org/
https://peerjs.com/
https://www.toptal.com/webrtc/taming-webrtc-with-peerjs

#### Recording and steraming a `<canvas>` element
https://developer.mozilla.org/en-US/docs/Web/API/CanvasCaptureMediaStreamTrack
https://muaz-khan.blogspot.com/2017/04/webrtc-capturestream-api.html
https://developers.google.com/web/updates/2016/10/capture-stream
https://webrtc.github.io/samples/src/content/capture/canvas-record/

#### Media APIs in the browser
https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamAudioSourceNode
https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/createMediaStreamSource
