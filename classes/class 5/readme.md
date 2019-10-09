## The Creative Web - Class 5

This week we begin we move beyond the visual, 2D or 3D, and enter the sonid domain.
For the next few weeks, we'll be dealing with sound on the web: playing sound, making our 
own with synthesizers, visualizing sound and sonifying visual scenes and interactions.

This week, we'll focus on getting sound out - playing back samples and using synthesizers.
Next week we'll explore audio analysis, visualization and sonification.

Before we dive into the details, please review [Ableton's Learning Synths](https://learningsynths.ableton.com/get-started)
for a general introduction to how digital sound and synthesizers work.

### The WebAudio API
The WebAudio API is a powerful sound engine that is embedded in the browser
and exposed as a collection of nodes, generators and modulators, that create
and process sound.

![WebAudio Diagram](https://webaudioapi.com/book/Web_Audio_API_Boris_Smus_html/images/waap_0103.png)

There are many kinds of nodes but generally they fall into these categories:
- *Inputs* - audio sources such as the `<audio/>` tag, audio streams, sound files and oscillators.
- *Effects* - audio processors such as reverb, delays, compressors and gain (volume).
- *Outputs* - audio outputs such a the main speakers, headphones and headsets.

These nodes connect together to create complex and dynamic audio chains that 
can be triggered over time or dynamically in response to interaction and data.

In face, the WebAudio API mimics the interface of a hardware modular synthesizer or patch console,
allowing creative freedom and flexibility in connecting nodes in a variety of ways to create sources,
modulation and effect networks.

![Modular Synth](https://vmp-www.imgix.net/images/modular_synth_header.original.png)

You can think of the WebAudio network of nodes more of a graph that a chain, meaning you
can connect multiple input sources to the same effect, and the same effect to multiple others,
creating branching inputs and outputs and connecting these to controls in your JavaScript code.

![WebAudio Graph](https://webaudioapi.com/book/Web_Audio_API_Boris_Smus_html/images/waap_0104.png)

In this class, we won't have to deal directly with the WebAudio API, just like we did not
have to write WebGL code to create 3D animations 

### Tone.js - Audio and Synthesis library for the web
Tone.js is a full-featured audio library that provides sound interfaces
for audio playback, synthesis, timing and fx procesing. It wraps the WebAudio API
with simple controls to start creating sounds, compositions and sound interactions.


#### Setting up Tone.js
We begin by creating a new source (a Tone.js Synth wraps a WebAudio Oscillator and time-based envelope) and connecting it to the master output, this is equivalent to turning your synth on, and connecting it to your speakers.
```javascript
// Define a new Tone.js Synth
let synth = new Tone.Synth()

// Connect the synth to the master output
synth = synth.toMaster()
```

We can also do this as a short one-liner
```javascript
// Create a synth and connect it to the master output
var synth = new Tone.Synth().toMaster()
```

#### Playing notes
Next, we'll trigger the synth with a specific musical note, for a duration of musical intervals.
In this example, play a `C4` for an eighth-note, or `8n`:
```javascript
	synth.triggerAttackRelease('C3', '8n')
```

More on the `Synth` [here](https://tonejs.github.io/docs/13.8.25/Synth).

We can play multiple notes at the same time, like playing a chord, by passing an array of notes to a `PolySynth`:
```javascript
	// Define a polyphonic synth of a type and a voice count
	var polySynth = new Tone.PolySynth(4, Tone.Synth).toMaster()
	
	// play multiple notes by passing an array of notes
	synth.triggerAttackRelease(['C3', `E3`, `G3`], '8n')
```

More on the `PolySynth` [here](https://tonejs.github.io/docs/13.8.25/PolySynth).

[Here's a working example of a synth playing a C3.](https://jsfiddle.net/barakchamo/67098xyr/19/)


#### Playing sounds

To play simple audio clips, use the `Player`:
```
var player = new Tone.Player("./sound.mp3", function(){
	//the player is now ready	
}).toMaster();
```

To play sampled audio clips like a musical instrument, we can use the `Sampler`, with advanced
control over playback speed, pitch and envelope just like the synth.

Using a sampler you can pass multiple sounds and map them to musical notes:
```javascript
var sampler = new Tone.Sampler({
	"C3" : "path/to/C3.mp3",
	"D#3" : "path/to/Dsharp3.mp3",
	"F#3" : "path/to/Fsharp3.mp3",
	"A3" : "path/to/A3.mp3",
}, function(){
	//the sampler is now ready
	sampler.triggerAttack("D3")
})
```

[ere's an example of a step sequencer made with samplers](https://tonejs.github.io/examples/stepSequencer.html)


#### Playing notes over time
We can define small musical phrases and create sequences on notes using the Tone.js Transport (timing controls) and scheduler.
You can think of the scheduler as a context-aware musical `setTimeout`, a way to schedule function calls in the future that
is tied to the progression of your Tone.js code.
(BTW, this can be used for triggering synths but also for any other code to run)

```javascript
// define a callback function
function play() {
	synth.triggerAttackRelease('C3', '8n')
}

// Set the tempo of our transport (so we can define timing in musical terms)
Tone.Transport.bpm.value = 120

//set the transport to repeat every one measure
Tone.Transport.loopEnd = '1m'
Tone.Transport.loop = true

// Schedule an event
Tone.Transport.schedule(triggerSynth, 0)
```

More on the `Transport` [here](https://tonejs.github.io/docs/13.8.25/Transport).

[Here's a working example of a basic loop using the transport.](https://jsfiddle.net/barakchamo/2nLo0zb1/3/)

The `Transport` is the global timing control for your audio context, and if set to a timing or loop will
affect global time. `Loop` is an alternative for localized sequences that can be turned on and off and combined
with interaction-based triggers, as well as other loops.

```javascript
// Define a loop, providing a callback and call intervals
var loop = new Tone.Loop(function(time){
	synth.triggerAttackRelease("C1", "8n", time)
}, "4n")

// Start the loop and schedule it to stop in 2 measures
loop.start(0).stop('2m')
```

More on the `Loop` [here](https://tonejs.github.io/docs/13.8.25/Loop).

For more complex musical sequences and data scturctures, see the `Part` [here](https://tonejs.github.io/docs/13.8.25/Part) and Sequence [here](https://tonejs.github.io/docs/13.8.25/Sequence).


#### Effects and processing chains
We can connect our synth to a range of effects before connecting it to the master output.
Tone provides many different kinds of built-in effects such as `Reverb`, `Tremolo`, `Phaser` and `Distortion`.

To connect any source to an effect, insest the effect between the input and the output in the chain.
We do this with the `.chain` method that exists on every `source` and `processor` nodes: 
```javascript
// Create a new synth
var synth = new Tone.PolySynth(4, Tone.Synth)

// Create a new reverb effect
var effect = new Reverb()

// Chain the synth and the effect before connecting to the output
synth.chain(effect, Tone.Master)
```

Note that we can chain many different effects and an output with a single call to `node.chain()`

[Here's an example on chaining effects](https://jsfiddle.net/barakchamo/nwcyk973/8/).

### Resources

#### Sound in marketing, interface and scores
- [Coca-Cola's "Try Not to Hear This Ads"](https://adage.com/creativity/work/coca-cola-try-not-hear/2166866)
- [Same Scene, 5 Ways][https://www.youtube.com/watch?v=ktKcnDfWs2c]
- [Sonic Interaction Design](https://en.wikipedia.org/wiki/Sonic_interaction_design)

#### Sound and Music
- [A beginner's guide to synthesis](https://gizmodo.com/a-beginners-guide-to-the-synth-1736978695)
- [Ableton's Learning Synths](https://learningsynths.ableton.com/get-started)
- [Ableton's Learning Music](https://learningmusic.ableton.com/index.html)

#### WebAudio and Tone.js
- [Tone.js Documentation](https://tonejs.github.io/)
- [Tone.js Examples](https://tonejs.github.io/examples/)

### Assignment
