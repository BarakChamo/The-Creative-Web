## The Creative Web - Class 3

This week we continue exploring interaction in 3D space, using raycasting as a way of mapping 2D screen-based interactions to a 3D space.
This allows us to identify particular meshes, objects, and geometries in our scene and modify or read data from them in response to interaction.

Using raycasting we can:
- Manipulate interactive objects (color, scale, rotation, any other rendering property).
- Read data stored on these objects (using any arbitrary property and format. i.e. `mesh.myData = 123`).
- Manipulate the scene by transforming, enabling and even adding objects to our scene. [See this voxel painting example](https://threejs.org/examples/webgl_interactive_voxelpainter.html).

### Raycasting, continued
Raycasting refers to a technique used to answer a simple question:
Where in 3D space, is a point on the screen (2D space) intersecting?

To find the answer, we must go back from the rendered 2D image into 3D space, we do so by casting a ray from the position of the camera
in the direction of where the mouse is on the screen (in normalized coordinates between -1 and +1).

Three.js provides an easy to use `Raycaster` that does just that, takes a camera and a point on the screen and returns
information about all the objects the ray hit on its way.

Let's see a simple example to understand how raycasting works: [raycasting example](https://BarakChamo.github.io/The-Creative-Web/classes/class%202/examples/raycasting.html)
The source code for the example is [here](https://github.com/BarakChamo/The-Creative-Web/blob/master/classes/class%202/examples/raycasting.html)

[Again, here's an official Three.js example of painting in 3D using raycasting](https://threejs.org/examples/#webgl_interactive_voxelpainter)

### WebVR, going into 3D
Even with raycasting, that allows us to interact with objects in 3D, we are still viewing the scene in 2D, through a flat render from the camera on the screen.
Using [WebVR](https://webvr.info/), a browser-based interface for portable virtual reality, we can turn the browser into a head-mounted display, and experience the web in 3D.

### What exactly is WebVR?
WebVR is a set of browser APIs that allow browser users to experience virtual reality content right on their devices. It supports features
such as stereo-rendering (split eye views), device orientation (for moving and looking around), VR interaction and even support for Vive and Oculus
headsets on compatible setups, so you could run your Three.js sketches on a full-on VR rig.

### How do WebVR and Three.js work together?
WebVR is enabled on Three.js using an extension to the WebGL renderer (that we create using `new THREE.WebGLRenderer()`).
Using WebVR, basically, means the headset replaces the camera in our scene and allows us to look around the scene in a stereo render (two eyes see slightly different angles).
Technically, the following areas are affected:

1. The renderer is VR enabled, meaning it'll position the camera and rotate it according to the direction we look at.
2. Support is added for VR controllers, like the Daydream controller or Vive and Oculus remotes. These work using the same
raycasting method, but the interaction ray is aimed from the controller rather than the camera.
3. On mobile VR, the display also acts as a controller, allowing interaction at the direction of our gaze (with the small circle in the middle of the screen).

With these simple changes, we can now turn any of our Three.js scenes into a portable, interactive VR experience!
But, to get WebVR working in our browser, we need to deal with a little bit of setup:

### Enabling WebVR on Chrome (and the WebVR simulator)

**Enable WebVR flags in Chrome**
1. On both your desktop and mobile, navigate to `chrome://flags`.
2. In the search bar, search for `WebVR`.
3. Enable the flag and restart your browser.

**Simulate WebVR on a desktop**
1. Install the Chrome WebVR emulator [available here](https://chrome.google.com/webstore/detail/webvr-api-emulation/gbdnpaebafagioggnhkacnaaahpiefil?hl=en).
2. WebVR is not supported on local files, so you must server it from a local server or your GitHub pages. (instructions follow)

**Serve WebVR apps to your phone**
1. WebVR is not supported on local files, so you must server it from a local server or your GitHub pages. (instructions follow)
2. Option 1: upload your project files to a server, such as GitHub pages, and navigate to that page on your phone.
2. Option 2: install `http-server` from `npm` globally using the command `npm install -g http-server` and start a local server in the project folder using `http-server`, more on that [here](https://www.npmjs.com/package/http-server).


### Examples
1. [Raycasting (mouse interaction)](https://BarakChamo.github.io/The-Creative-Web/classes/class%202/examples/raycasting.html) - [source](https://github.com/BarakChamo/The-Creative-Web/blob/master/classes/class%202/examples/raycasting.html)
2. [Interaction examples on Three.js](https://threejs.org/examples/?q=interactive)

### Slides
coming soon.

### Readings
A few short readings this week
- [Is VR the Ultimate Empathy Machine?](https://www.wired.com/brandlab/2015/11/is-virtual-reality-the-ultimate-empathy-machine/)
- [Gestalt principles](https://www.interaction-design.org/literature/topics/gestalt-principles)
- [Interaction Design in Virtual Reality](https://www.interaction-design.org/literature/topics/virtual-reality)
- [Elements of Interaction Design](https://www.interaction-design.org/literature/article/what-is-interaction-design)


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

### Assignment
For next week, choose one of the following, and complete in Three.js with or without WebVR:
1. Create a new form of interaction or interface that is designed for 3D spaces and immersive web experiences.
2. ...
