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

If you want to bypass security warnings on Google Chrome, navigate to this flags page:
`chrome://flags/#allow-insecure-localhost`

And toggle `Enable` on `Allow invalid certificates for resources loaded from localhost`
and click `Relaunch` at the bottom of the page.

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

In this example you may choose your own unique ID and share audio with a rmeote partner, both of your audio streams will be analyzed and visualized.

#### `three.html`
This example integrates real-time WebRTC media streams with Three.js' video textures.

In this example you may choose your own unique ID and share video with a remote partnet.
Each of your video streams will be displayed on a randomly placed rotating cube.


#### Using the `call-peer.js` Peer.js helper

While `Peer.js` is very good at simplifying the `WebRTC` workflow and provides a free TURN server to handle the initial handshake, it's still quite tricky to create a stable connection between multiple peers sharing audio, video and data.

You can use the provided `call-peer.js`, a small helper file that wraps `peer.js` with further simplified methods for connecting and calling peers.

Simply copy `call-peer.js` from the `examples` folder of this class and load it after `peer.js` in your html file.

The helper exposes several global functions, the use of which can be seen in the `basic.html` example.

##### `initPeer()` - Initializing a peer connection

The `initPeer()` method is used to initialize a peer connection via `peer.js` and wait for incoming connections.

It takes the following arguments:
`initPeer(connectionCallback: function(id), dataCallback: function(data, id), mediaCallback: function(stream, id), settings: object)`
- connectionCallback - A callback function called with the id assigned to the local peer connection.
- dataCallback - A callback function called whenever a new data message is received. The first argument is the `data` and the second is the sending `peer id`.
- mediaCallback - A callback function called whenever a new media connectio has been established. The first argument is the incoming [`MediaStream`](https://developer.mozilla.org/en-US/docs/Web/API/MediaStream) object that contains the audio and video streams. The second argument is the remote `peer id`.
- Settings is an object used to configure the local peer connection, it contains 4 optional fields:
  - `video` - Should the peer create a video stream.
  - `audio` - Should the peer create an audio stream.
  - `id` - A predefined id, defaults to a randmoly generated one i
  - `group` - Sould peers create a mesh-network for more than two connected peers at a time.


For example:
```javascript
// To initialize a peer with audio and video streams, with group connections and the id test_id:

initPeer(
  // connection callback
  (id) => console.log("My id is: " + id),
  
  // data callback
  (data, peerId) => console.log("Message from: " peerId, data),
  
  // media callback
  (stream, peerId) => videoElm.srcObject = stream,
  
  // connection settings:
  {
    audio: true, // enable audio stream,
    video: true, // enable video stream,
    group: true, // enable mesh group connections,
    id: 'test_id' // provide a predefined id instead of the default random string
  }
)

```


#### `callPeer()` - Connect to remote peers

To connect to remote peers, simply call the `callPeer(id: string)` method with the id of the remote
peer you're trying to connect to in string form. 

Once a connection has been established the callbacks provided in `initPeer()` will be called with the media streams and data messages.

For example:
```javascript
// To connect to a peer call test_peer_id call
callPeer('test_peer_id')
```

##### - `sendMessage()` - Sending data messages to connceted peers

The `sendMessage()` method can be used to send messages to remote peers as strings or javascript objects.
Sending messages will trigger the `dataCallback` for remote peers. You can only send messages to peer after 
initializing a peer connection with `initPeer()` and connecting to the remotes with `callPeer()`.


The sendMessage`()` method takes the following arguments:
`sendMessage(message: (string | object), [peerId: string])`
- `message` - a string or object message to be sent
- `peerId` - An optional remote peer id, if not provided the message will be sent to all connected peers.

For example:
```javascript
// To send a message to all connected peers:
sendMessage('Hello!')

// To send a message only to test_peer_id, call:
sendMessage('Secret!', 'test_peer_id')
```


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
