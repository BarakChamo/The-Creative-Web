## The Creative Web - Class 7

### Getting sounds in
While making noise with Synthesizers can be gret fun, expecially when these synths live right inside the browser, sometimes we want to use our own sounds and recordings and not have to define long arrays of notes and sequences.

Today we'll be learning how to get audio data, both live inputs and pre-recorded, into the browser!

#### Using the Tone.js `Player`
The player is the simplest way to get an audio file playing within Tone.js, and it gives us quite a lot of control over how an audio file is played back in the browser.

Tone.js `Player`s are initialized with a URL to an audio file, or an `AudioBuffer`, such as the one from an `<audio/>` tag or an audio recording (which we will cover later), the second argument is a callback function that will be called once the audio file is loaded and ready for playback. Just like `Synth`, the player needs to be connected to an output in order for sound to play, we'll connect it to the master:

```javascript
const player = new Tone.Player("./path/to/sample.mp3", function onLoad(){ ... }).toMaster();
```

The player exposes a few useful methods in addition to the `source` methods:
- `Player.start()` starts the audio player
- `Player.stop()` stops the player
- `Player.load(URL)` loads a new audio file
- `Player.seek()` moves the player to a particular point in the file
- `Player.restart()` restarts playback from the beginning of the file
- `Plauer.setLoopPoints(from, to)` sets the loop range in seconds

There are some properties that we can set on the player to change its behaviour:
- `Player.loop` - will make the player loop once started, either the entire range or the range set with `setLoopPoints()`
- `Player.volume` - will control the volume of playback
- `Player.mute` - will mute the playback
- `Player.state` - indicates the current player status (either `started` or `stopped`)
- `Player.reverse` - revereses the direction of playback
- `Player.playbackRate` - The playback rate, 1 is normal speed and can be sped up or down

[Here's the player example on Tone.js](https://tonejs.github.io/examples/player.html)
[And an example project using the `Player`](https://github.com/BarakChamo/The-Creative-Web/blob/master/classes/class%207/examples/player.html)


#### Using the Tone.js `Sampler`
The `Sampler` allows us to take audio samples and play them like an instrument, giving us both repitching and envelope control in
an insterface very similar to a `Synth`. Using a Sampler you can create an instrument from a single sample and build autotune like interfaces!

Let's see how to create a sampler instrument from one or more samples:

```javascript
// We begin by creating a Tone.js sampler
// Unlike the player, we can provide multiple samples of the same source sound captured at different piitches
// and the sampler will interpolate between them depending on the note we play
const sampler = new Tone.Sampler({
	"C3" : "path/to/C3.mp3",
	"D#3" : "path/to/Dsharp3.mp3",
	"F#3" : "path/to/Fsharp3.mp3",
	"A3" : "path/to/A3.mp3",
}, function(){
  // this function is called once all the samples are loaded
  
	//sampler will repitch the closest sample
	sampler.triggerAttackRelease("D3")
}).toMaster()
```

[Here's an example on using the `Player`](https://github.com/BarakChamo/The-Creative-Web/blob/master/classes/class%207/examples/player.html)

#### Using the Tone.js `Microphone`


### Getting data out

