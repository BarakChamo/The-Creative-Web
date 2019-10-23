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
Tone.js uses the browser's underlying Media API to access user devices and media, the `getUserMedia()` API.
Right now, this can be useful for us to get access to the local microphone, but later in the class we'll
learn how to use it also connect to remote audio and video streams using WebRTC!

```javascript
//you probably DONT want to connect the microphone
//directly to the master output because of feedback.
var mic = new Tone.UserMedia();

//opening the input asks the user to activate their mic
mic.open()
    .then(function(){
	//promise resolves when input is available
    })
    .catch(function(){
	//promise rejects if the input is unavailable
    });
```

### Getting data out
While connecting the microphone directly to the output might not be something we want to do (as it will trigger a deafening feedback loop), we can use the microphone as a data source by analyzing the input signal!

Just like we can connect an audio source to the `master` output, we can also connect sources to a range of effects, chains and other 
utilities, some of these are a group of `analysis` nodes. Tone.js provides a few different analyzers:

- `Meter` - analyses overall loudness or volume using an RMS Power algorithm
- `Waveform` - captures a window of the sound playing, it represents the compound waveform level over the **time** domain
- `FFT` - A Fast-Fourier transform on the aformentioned waveform, providing levels in frequency buckets, or an analysis of the **frequency** domain

`Meter` provides a single overall `level` value while both `Waveform` and `FFT` provide an array of values over their respective domains (time and frequency).

Here's how to create all three:
```javascript
// create an FFT and Waveform analyzer
const waveform = new Tone.Waveform(32) // minimum bucket size for waveform is 32
const fft = new Tone.FFT(32) // minimum fft bucket size is 16 but we'll match the waveform
const meter = new Tone.Meter() // meter provides a single value

// Connect the source input to all analyzers
source.connect(fft)
source.connect(waveform)
source.connect(meter)

// in your code, read the values from each analyser

function analyze() {
    console.log('Meter - ' + meter.getLevel())
    console.log('FFT - ' + fft.getValue())
    console.log('Waveform - ' + waveform.getValue())
}
```

[Here's an example of using all three analysers](https://github.com/BarakChamo/The-Creative-Web/blob/master/classes/class%207/examples/analysis.html)

### Using control signals
We can also use signal in Tone.js not only as sound but also as a means of controlling other parameters, this is called `modulation` or `automation`. The follower is quite similar to the `meter`, but instead of returning volume levels we can use them as a control.

A `Follower` envelope uses the signal level of one input to control parameters on another, meaning we can use the sound level
on our microphone to control the volume of another synth!

The follower takes two arguments, the duration of the rise and fall of the following envelope, we connect it to any parameter
we wish to modulate on a synth or oscillator:

```javascript
var source = *your audio source, such as a microphone or player*
var follower = new Tone.Follower(0.2, 0.4);

// connect the source as the input of the follower, just like a meter
source.connect(follower)

// then connect the follower not to the output but to the parameter you want to automate
follower.connect(osc.volume)
```

[Here's an example of a microphone and a follower to modulate an oscillator](https://github.com/BarakChamo/The-Creative-Web/blob/master/classes/class%207/examples/follower.html)

### Binding to 3D data


