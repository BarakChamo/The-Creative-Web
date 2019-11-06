## Class 9 - Real-time communication

### Peer-to-peer communication in the browser




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

### Examples
Several examples are provided, showing how to set up a basic Peer.js connection and how to integrate 
WebRTC media streams with Three.js and Tone.js.

Note  the `call-peer.js` file I provided in the examples folder, which will server as yet another
level of abstraction to the rather convoluted process of establishing WebRTC connections with `Peer.js`.

#### `basic.html`
This example shows how to set up a media stream and data connection, allowing you to:
1. Create a new WebRTC connection with a random ID.
2. Connect to another peer.
3. Share audio and video
4. send messages with the data channel connection

#### `tone.html`
This example integrates real-time WebRTC media streams with Tone.js' audio analysis features.

In this example you may choose your own unique ID and share audio with a rmeote partner, both 
of your audio streams will be analyzed and visualized.

#### `three.html`
This example integrates real-time WebRTC media streams with Three.js' video textures.

In this example you may choose your own unique ID and share video with a remote partnet.
Each of your video streams will be displayed on a randomly placed rotating cube.

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
