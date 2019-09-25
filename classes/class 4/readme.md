## The Creative Web - Class 3

This week we'll practice what we've learned over the past few classes, from basic rendering of 3D scenes using Three.js
to using images, interaction, and VR.



### Readings (for next class)
A few short readings this week
- [Is VR the Ultimate Empathy Machine?](https://www.wired.com/brandlab/2015/11/is-virtual-reality-the-ultimate-empathy-machine/)
- [Gestalt principles](https://www.interaction-design.org/literature/topics/gestalt-principles)
- [Interaction Design in Virtual Reality](https://www.interaction-design.org/literature/topics/virtual-reality)
- [Elements of Interaction Design](https://www.interaction-design.org/literature/article/what-is-interaction-design)

#### WebVR Template
To begin working on WebVR projects you can refer to the attached WebVR template here.
It includes:
- WebVR button - A cross-platform initialization for WebVR and WebXD devices and displays.
- WebVR Polyfill - This polyfill "fakes" a VR display for unsupported devices (such as iPhones) by rendering a stereo view.
- Base template with a gaze cursor and tap-based interaction (for mobile HMDs such as Google Cardboard and Gear VR).

You're welcome to copy the folder for use in any of your future WebVR projects, just make sure to also copy the associated JS files.

### Resources

#### VR Project examples
- [The Machine to be Another](https://vimeo.com/89556173)
- [The Displaced - NYT](https://docubase.mit.edu/project/the-displaced/) and [video](https://www.youtube.com/watch?v=ecavbpCuvkI&t=128s)
- [Sortie en Mer](https://www.youtube.com/watch?v=Jv8nVOYBUSs)
- [Within VR](https://vr.with.in/)

#### Raycasting and mouse interaction
- [Raycasting explained](https://threejs.org/docs/#api/en/core/Raycaster)
- [Interactive raycasting example](https://threejs.org/examples/?q=raycast#webgl_interactive_raycasting_points)
- [Interaction examples on Three.js](https://threejs.org/examples/?q=interactive)

#### WebVR and portable virtual reality
- [How to use WebVR with Three.js](https://threejs.org/docs/#manual/en/introduction/How-to-create-VR-content)
- [Introduction to WebVR](https://developer.mozilla.org/en-US/docs/Games/Techniques/3D_on_the_web/WebVR)
- [Google Daydream Elements, interactive introduction to VR design principles](https://play.google.com/store/apps/details?id=com.google.vr.unity.ddelements&hl=en)
- [Using the DayDream controller with WebBluetooth and Three.js](https://mrdoob.github.io/daydream-controller.js/)

### Assignment
For next week, continue working on one of the following, and complete in Three.js with or without WebVR:

1. #### Immersive interfaces
Design and implement a new form of interaction or interface that is tailored for 3D interactions and immersive web experiences.
Your design should take into consideration the modalities of 3D space (and immersive web such as VR and AR) the affordances of
3D graphics and space and consider UX as well as UI given an additional dimension.

2. #### Immersive stories
Build a space for a 3D narrative. This could be a narrative over time or over space, a directed story or open exploration
of multiple perspective / elements. Think of how your users will navigate the space, interact with content and how to 
progress through a narrative in a 3D environment (what is the VR equivalent of scrolling or hiting next?)

Some ideas:
- Use images and videos in 3D to build a visual narrative
- Build transitions using interactive element to progress a story
- Explore multiple perspectives using multiple cameras

#### Assignment resources
- [examples for interaction of the Three.js documentation](https://threejs.org/examples/?q=interact)
- [Rendering scenes, remember you can use multiple cameras and build multiple scenes](https://threejs.org/docs/#manual/en/introduction/Creating-a-scene)
- [VR in Three.js - interaction examples at the end of the page](https://threejs.org/docs/#manual/en/introduction/How-to-create-VR-content)
- [Example showing dragging objects in 3D space](https://threejs.org/examples/?q=interacti#webgl_interactive_draggablecubes)
- [Orbit controls and using keyboard keys to move around](https://threejs.org/docs/#examples/en/controls/OrbitControls)
- [Loading 3D models](https://threejs.org/docs/#manual/en/introduction/Loading-3D-models)
- [Reticulum, Interactive WebVR Reticle](https://github.com/skezo/Reticulum)