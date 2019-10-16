#### Chords and Scales (or, pitches together)
## The Creative Web - Class 5

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
- [Playing notes]()

Notes group together in [scales](https://en.wikipedia.org/wiki/Scale_(music)), subsets of the chromatic scale that maintain
harmonic consistency and often have distinct musical and emotional chracteristics, such as being percieved as uplifting (Major)
or melancholic (Minor).
  
[Explore scales on Ableton's Learning Music](https://learningmusic.ableton.com/notes-and-scales/keys-and-scales.html)

Let's work with scales Tone.js:
- [Playing scales]()


#### Time in music (and Tone.js)
Time in music is defined by a combination of a master tempo, often describes in BPM (beats-pet-minute) and the duration of each
individual note played, typically described in parts of a bar or beat, (`1/8`, `1/4`, `1/2`, `1/1`).

[Here's an example of working with time and duration in music on Ableton's Learning Music](https://learningmusic.ableton.com/make-melodies/love-will-tear-us-apart.html)

In this example, notice the combination of a master BPM slider that controls the overall speed of playback, and the set duration of each of the notes.

- [Let's see how to work with time and duration in Tone.js]()


### Understanding Synthesis

#### Timbre and Waveforms
As we've seen before, all discernible sounds are, physically, repeated wave forms. If the amplitude controls the level of a sound (volume) and the frequency the pitch, the shape of a wave defines it's tonal quality.

A key element of working with digital sound, beyond time and pitch, is the timbre, tonality, or character of the notes we're playing.
Modern synthesizers provide incredible control over the "sound" and "character" of a synth.

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


### The Audio Processing Chain

#### Using Effects

### Resources

### Assignment

