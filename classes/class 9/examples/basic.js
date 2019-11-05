// Handle prefixed versions
navigator.getUserMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia)



// State
var me = {}
var myStream
var peers = {}

// initialize call
initPeer()


// Start everything up
function initPeer() {
  if (!navigator.getUserMedia) return unsupported()

  getLocalStream(function(err, stream) {
    if (err || !stream) return;

    connectToPeerJS()
  })
}

// Connect to PeerJS and get an ID
function connectToPeerJS(callback) {
  display('Connecting to PeerJS...')

  // create new Peer.js connection
  me = new Peer()

  // handle incoming call
  me.on('call', handleIncomingCall)

  // handle open connections
  me.on('open', function() {

    display('Connected.')
    display('ID: ' + me.id)
  })

  // handle connection errors
  me.on('error', function(err) {
    display(err)
  })

  // handle incoming data connections
  me.on('connection', function(connection) {
    display('New data connection from ' + connection.peer +'.')
    
    var peer = getPeer(connection.peer)
    peer.dataChannel = connection

    connection.on('data', function(data) {
      display('Message from ' + connection.id + ': ' + data + '.')
    })
  });
}

function callPeer(peerId, shouldCall, shouldConnect, streamCallback, dataCallback) {
  display('Calling ' + peerId + '...')
  
  // create new peer connection
  var peer = getPeer(peerId)
  
  /* Handle audio / video */ 

  // Create new media stream
  peer.outgoing = me.call(peerId, myStream)
  
  // handle errors
  peer.outgoing.on('error', function(err) {
    display(err)
  })
  
  // listen for incoming media streams
  peer.outgoing.on('stream', function(stream) {
    display('Connected to ' + peerId + '.')
    
    // call back with stream
    if(streamCallback) streamCallback(stream)
    else addIncomingStream(peer, stream)
  })
  
  
  /* Handle Data channels */
  
  // // create new data stream
  peer.dataChannel = me.connect(peerId)
  
  peer.dataChannel.on('open', function(){
  //   // listen for incoming data messages
    peer.dataChannel.on('data', function(message) {
      display('Message from ' + peerId + ': ' + message + '.')
      if(dataCallback) streamCallback(data)
    })
  })
}

function sendMessage(message) {
  // send message to all peers
  Object.values(peers).forEach(peer => peer.dataChannel.send(message))
}

// When someone initiates a call via PeerJS
function handleIncomingCall(incoming) {
  display('Answering incoming call from ' + incoming.peer)

  //  get peer object by ID
  var peer = getPeer(incoming.peer)
  peer.incoming = incoming
  incoming.answer(myStream)

  peer.incoming.on('stream', function(stream) {
    addIncomingStream(peer, stream)
  })
}

// Add the new audio stream. Either from an incoming call, or
// from the response to one of our outgoing calls
function addIncomingStream(peer, stream) {
  display('Adding incoming stream from ' + peer.id)
  peer.incomingStream = stream;
  playStream(stream)

}

// Create an <audio> element to play the audio stream
// Create an <video> element to play the video stream
function playStream(stream) {
  // Handle incoming audio
  if(stream.getAudioTracks().length) {
    var audio = document.createElement('audio')
    audio.autoplay = true
    
    document.body.appendChild(audio)
    audio.srcObject = stream
  } 

  // Handle incoming video
  if(stream.getVideoTracks().length) {
    var video = document.createElement('video')
    video.autoplay = true
    
    document.getElementById('videos').appendChild(video)
    video.srcObject = stream
  } 

}

// Get access to the microphone
function getLocalStream(callback) {
  display('Trying to access your microphone. Please click "Allow".')
  navigator.getUserMedia (
    {video: true, audio: true},

    function success(audioStream) {
      display('Microphone is open.')
      myStream = audioStream;
      if (callback) callback(null, myStream)
    },

    function error(err) {
      display('Couldn\'t connect to microphone. Reload the page to try again.')
      if (callback) callback(err)
    }
  )
}


////////////////////////////////////

// Helper functions
function getPeer(peerId) {
    if(!peers[peerId])
        peers[peerId] = {id: peerId}
    
    return peers[peerId]
}

function unsupported() {
  display("Your browser doesn't support getUserMedia.")
}

function display(message) {
  var disp = document.getElementById('display') 
  if(disp) {
    var msgElm = document.createElement('div')
    msgElm.innerText = message
    disp.appendChild(msgElm)
  } else {
    console.log(message)
  }
}