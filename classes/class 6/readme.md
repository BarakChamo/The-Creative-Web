## The Creative Web - Class 6

### The Elements of Music
Music can be described in many ways and analyzed from perspectives ranging
from cultural influences to mathematical relationships, all of which open up a world of musical exploration.

For the purposes of our short introduction to music and sound on the web, I think we can benefit from a simpler definition:
`Music is organized sound`, coined by *Edgard Varèse*.

Thinking of music in terms of organization and structure gives us a framework for both analysis and construction, and understanding the relationships between the different elements mean we can start thinking of algorithmic approaches for incorporating sound and music in our work.

So, what are the elements of music? Let's begin with a subset:
- Pitch - How dominantly high or low a sound is percieved, as well as discrete audio frequencies.
- Duration and form - The lengths or sounds and relationship between them (and silence) over time.
- Timbre - The tonal quality and characteristics of each sound.

These elements come together in more complex forms to create the language and terms we use to describe music:
- Notes - can represent a pitch over a duration of musical time. 
- Rhythm - A repeated pattern of sounds.
- Scales - Groups of notes with particular melodic and harmonic characteristics.
- Chords - Notes of a scale played in a group.
- Progressions - Notes of a scale played over time.
- Texture - The tonal layering of multiple instruments of varying timbres.

It's clear that from very simple building blocks: A sound at a particular `pitch`, with a particular `timbre` over a specified `duration`, the whole of music can emerge.

#### Pitches, Notes and Frequencies
In Western music, the fundamental division of frequencies and pitches into discrete notes in the [Chromatic Scale](https://en.wikipedia.org/wiki/Chromatic_scale), this scale represents every white and black, out of which all subscales
are composed, such as the Major, Minor and Pentatonic scales, each with their own distinct characteristics.

[Here's an example of continuous pitch with synths on Ableton's Learning Synths.](https://learningsynths.ableton.com/making-changes/pitch)
[Check out the Notes and Scales section of Ableton's Learning Music to learn more.](https://learningmusic.ableton.com/notes-and-scales/notes-and-scales.html)

Let's work with notes Tone.js:
- [Playing notes](https://github.com/BarakChamo/The-Creative-Web/blob/master/classes/class%206/examples/notes.html)
- [Tone.js Synth documentation](https://tonejs.github.io/docs/13.8.25/Synth)

```javascript
// Create a new synthesizer and connect it to the master output (speakers)
const synth = new Tone.Synth().toMaster()

// We can play the synth using musical terms
// Play a C4 note on the synth for an 8th note
synth.triggerAttackRelease('C4', '8n')

// Or we can play the synth using physical terms
// Play the frequency 440hz (A4) for 1 second
synth.triggerAttackRelease(440, 1)
```

Notes group together in [scales](https://en.wikipedia.org/wiki/Scale_(music)), subsets of the chromatic scale that maintain
harmonic consistency and often have distinct musical and emotional chracteristics, such as being percieved as uplifting (Major)
or melancholic (Minor).
  
[Explore scales on Ableton's Learning Music](https://learningmusic.ableton.com/notes-and-scales/keys-and-scales.html)

Let's work with chords Tone.js:
- [Playing chords](https://github.com/BarakChamo/The-Creative-Web/blob/master/classes/class%206/examples/polyphony.html)
- [Tone.js PolySynth documentation](https://tonejs.github.io/docs/13.8.25/PolySynth)

```javascript
// To play multiple sounds simultaniously, we have to create a PolySynth, it will create several synths internally.
// You can create a poly synth from any of the Tone.js synths, let's create one with the basic Tone.Synth
// The first argument is the max number of voices and the second is the synth to use 
const synth = new Tone.PolySynth(6, Tone.Synth).toMaster();

// We can now play multiple notes by passing an array of notes or frequencies
synth.triggerAttackRelease(["C4", "E4", "A4"], "4n");
```



#### Time in music (and Tone.js)
Time in music is defined by a combination of a master tempo, often describes in BPM (beats-pet-minute) and the duration of each
individual note played, typically described in parts of a bar or beat, (`1/8`, `1/4`, `1/2`, `1/1`).

[Here's an example of working with time and duration in music on Ableton's Learning Music](https://learningmusic.ableton.com/make-melodies/love-will-tear-us-apart.html)

In this example, notice the combination of a master BPM slider that controls the overall speed of playback, and the set duration of each of the notes.

- [Loops in Tone.js](https://github.com/BarakChamo/The-Creative-Web/blob/master/classes/class%206/examples/loops.html)

```javascript
// Begin by defining a synth and connecting it to the master output
const synth = new Tone.MembraneSynth().toMaster()

//create a loop and pass it a handler
// Note that all the loop does is trigger the callback in accordance with musical time
// It's up to you to actually play a synthesizer inside, or do anything else!
const loop = new Tone.Loop(function(time){

// Trigger a synth on every run of the loop
  synth.triggerAttackRelease("C1", "8n", time)

}, "4n")


//Start the loop immediately
loop.start(0)

// Stop the loop in two measures
loop.stop('2m')

// Finally, start the global Tone.js transport, it's the same as hitting Play on a record player!
Tone.Transport.start()
```

To create more complex compositions and trigger custom events, use the `Part` instead of a `Loop`

- [Let's see how to work with time and duration in Tone.js](https://github.com/BarakChamo/The-Creative-Web/blob/master/classes/class%206/examples/parts.html)

```javascript
// Begin by defining a synth and connecting it to the master output
const synth = new Tone.DuoSynth().toMaster()

// Create a Tone.js Part and pass a callback function and an array of events
// Each event must have a `time` key but could also hold any other information, the callback will receive the event as an argument
var part = new Tone.Part(function(time, event) {
    // the events will be given to the callback with the time they occur
    // Here we read the note and dur (duration) keys to trigger a different note for a different duration every time
    synth.triggerAttackRelease(event.note, event.dur, time)
  }, [
    { time : 0, note : 'C4', dur : '4n'},
    { time : {'4n' : 1, '8n' : 1}, note : 'E4', dur : '8n'},
    { time : '2n', note : 'G4', dur : '16n'},
    { time : {'2n' : 1, '8t' : 1}, note : 'B4', dur : '4n'}
  ]
)

//start the part at the beginning of the Transport's timeline
part.start(0)

// You can mark the part to loop
part.loop = true

// And finally, start the global transport
Tone.Transport.start()
```

### Understanding Synthesis

#### Timbre and Waveforms
As we've seen before, all discernible sounds are, physically, repeated wave forms. If the amplitude controls the level of a sound (volume) and the frequency the pitch, the shape of a wave defines it's tonal quality.

A key element of working with digital sound, beyond time and pitch, is the timbre, tonality, or character of the notes we're playing.
Modern synthesizers provide incredible control over the "sound" and "character" of a synth.

[Let's experiment with Timbre and different synths on Ableton's Learning Synths](https://learningsynths.ableton.com/synth-basics/changing-the-sound)

Tone.js provides a range of different synths, [here are a few in an example](https://github.com/BarakChamo/The-Creative-Web/blob/master/classes/class%206/examples/synths.html)

#### Envelopes
An important aspect of the sound of an instrument, beyond the timbre, is how the various elements of the sound change over time.
Think of a hit of a key of a piano for example, or plucking a guitar string: the sound begins with a loud, percussive introduction 
and slowly diminishes in amplitude, fading over a long tail and often decreasing not only in volume but also in pitch.

These elements of an instrument's sound can be generally described as dynamics and modulation - how parameters of the sound modify and modulate over time.

It's unlikely we want our sounds to harshly start and stop when we hit a key or play a note, and to control the dynamics in relation to the playing of notes we can use an `envelope` - a four-stage curve that defines parameter values (starting with volume) over different phases of a note's playback:

An envelope is typically denoted in `ADSR`:
`A (attack)` - The initial phase upon a note or sound's start.
`D (decay)` - The phase following the attack, usually transitioning from a percussive introduction to a sustain pitch.
`S (sustain)` - The continuous phase of a note, like when a key is being held down.
`R (release)` - The diminishing phase after a note has been released.

These can be visualized as a graph with multiple linear interpolations:
![ADSR Envelope](https://libremusicproduction.com/sites/default/files/answers/adsrenvelope.png)

Here's an example of using envelopes on [Ableton's Learning Synths](https://learningsynths.ableton.com/envelopes/change-over-time)
Learn more about synth envelopes [here](https://github.com/Tonejs/Tone.js/wiki/Envelope).

[Let's create a custom envelope in Tone.js](https://github.com/BarakChamo/The-Creative-Web/blob/master/classes/class%206/examples/envelope.htm)

#### Using Effects
`TBC`

### Resources

#### Music and Synthesis
- [Ableton's Learning Synths](https://learningsynths.ableton.com/synth-basics/changing-the-sound)
- [Ableton's Learning Music](https://learningmusic.ableton.com/make-melodies/love-will-tear-us-apart.html)

#### Tone.js
- [Getting Started](https://tonejs.github.io/)
- [Documentation](https://tonejs.github.io/docs/)
- [Examples](https://tonejs.github.io/examples/oscillator.html)

#### Examples
- [Playing single notes](https://github.com/BarakChamo/The-Creative-Web/blob/master/classes/class%206/examples/notes.html)
- [Playing multiple notes and chords](https://github.com/BarakChamo/The-Creative-Web/blob/master/classes/class%206/examples/polyphony.html) 
- [Tone.js Synthesizers](https://github.com/BarakChamo/The-Creative-Web/blob/master/classes/class%206/examples/synths.html)
- [Playing a simple loop](https://github.com/BarakChamo/The-Creative-Web/blob/master/classes/class%206/examples/notes.html)
- [Playing more complex parts](https://github.com/BarakChamo/The-Creative-Web/blob/master/classes/class%206/examples/parts.html)
- [The synth ADSR envelope](https://github.com/BarakChamo/The-Creative-Web/blob/master/classes/class%206/examples/envelope.html)
- [An example of audiovisualization with Three.js and Tone.js](https://github.com/BarakChamo/The-Creative-Web/blob/master/classes/class%206/examples/envelope.html)

### Assignment
For next class, use your new `Tone.js` and incorporate sound and music into an interactive web project.

For your project, choose one of the following:
1. *A sonic interface* - Using `Three.js`, `P5.js` or any other tool, create an interface for playing sound and music using `Tone.js`, think of how to visualize different qualities of sound we discussed in class (`pitch`, `timbre`, `duration`) and how much creative freedom or formal constrains you'd like to give your users in playing or interacting with your interface (i.e., are you building a piano or a theremin?).

2. *An audio-driven experience* - Using `Three.js`, `P5.js` or any other tool, create an interactive interface, experiment or experience that changes or progresses in response to audio-based events (time, parts, loops, etc.). 

For example, how could an audiovisual scene change every note or every beat to keep it interesting, how could elements of an interactive narrative project respond to musical events and data?

Use `Tone.js` `Loop` and `Part` to trigger events and call code in time with musical events and think of how best to visualize different elements of sound and music (`pitch`, `timbre`, `duration`).

You're of course welcome to incorporate both into a single project!
