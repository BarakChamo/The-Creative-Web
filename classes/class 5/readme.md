## The Creative Web - Class 5

This week we begin we move beyond the visual, 2D or 3D, and enter the sonid domain.
For the next few weeks, we'll be dealing with sound on the web: playing sound, making our 
own with synthesizers, visualizing sound and sonifying visual scenes and interactions.

This week, we'll focus on getting sound out - playing back samples and using synthesizers.
Next week we'll explore audio analysis, visualization and sonification.

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

### Assignment
