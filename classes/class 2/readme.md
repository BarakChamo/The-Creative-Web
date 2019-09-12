## The Creative Web - Class 2

In the first class we took our first steps with Three.js and 3D graphics on the web.
We learned what makes a 3D `scene`, namely a `camera`, some `lights` and a `mesh` to render, made of a `geometry` and a `material`.
We can already start making some interesting 3D compositions, varying them over time in the `animate()`
function and modifying parameters such as `position` and `rotation` on a mesh, or `color` on a `material`.

Let's start by reviewing Week 1's new examples, [available here](https://github.com/BarakChamo/The-Creative-Web/tree/master/classes/class%201/examples).

Now that we have a fundamental understanding of Three's API, we can start thinking of interesting ways to combine it with other
tools, libraries and techniques we know to make interesting interactive projects:
- [Magic Words - A web-based VR experience using Google Poly, Speech recognition and WebVR](https://barakchamo.com/experiments#/magic-words/)
- [UberViz - Audio visualization with Three.js and the WebAudio API](https://uberviz.io/viz/word-problems/)
- [Audio reactive particles using Three.js and Tone.js](https://avseoul.net/particleEqualizer/)
- [Optical flow particles audio visualization with Web Audio and Web cam](https://epok.tech/work/tendrils/)
- [UFO sightings globe (using data in Three.js)](http://mayaontheinter.net/ufo/)
- [Within, a VR home](https://vr.with.in/)
- [Going Home, an interactive 3D film](http://goinghome.302chanwoo.com/)

The more we expand our toolset, and the more we learn how to bend these APIs and libraries to our will, the more creative
we can get in connecting the dots in new and interesting ways.

This week we'll look at making our 3D scenes interact with the browser "outside the canvas" a little bit more.

#### Loading images and videos
Using built-in browser APIs, such as `drag & drop`, the `<video/>` element and the media API (to gain access to webcams)
we can make our scenes use images and videos from the internet or from the user's computer via in-browser APIs.

The first example in this class, [the panorama viewer](https://barakchamo.github.io/The-Creative-Web/classes/class%202/examples/panorama-viewer.html),
displays a rotating view of an equirectangular image. Try dragging and dropping another image onto the browser window,
the view in the scene will update. You can review the source code [here](https://github.com/BarakChamo/The-Creative-Web/blob/master/classes/class%202/examples/panorama-viewer.html).

How else can we use images and videos in our scenes? Here are some official examples:
- [Using the WebCam](https://threejs.org/examples/webgl_materials_video_webcam.html)
- [Using images on mesh materials](https://threejs.org/examples/#webgl_loader_imagebitmap)
- [Using video on meshes](https://threejs.org/examples/#webgl_materials_video)

#### Raycasting
Raycasting refers to a technique used to answer a simple question:
Where in 3D space, is a point on the screen (2D space) intersecting?

To find the answer, we must go back from the rendered 2D image into 3D space, we do so by casting a ray from the position of the camera
in the direction of where the mouse is on the screen (in normalized coordinates between -1 and +1).

Three.js provides an easy to use `Raycaster` that does just that, takes a camera and a point on the screen and returns
information about all the objects the ray hit on its way.

Let's see a simple example to understand how raycasting works: [raycasting example](https://BarakChamo.github.io/The-Creative-Web/classes/class%202/examples/raycasting.html)
The source code for the example is [here](https://github.com/BarakChamo/The-Creative-Web/blob/master/classes/class%202/examples/raycasting.html)

[Here's an official Three.js example of painting in 3D using raycasting](https://threejs.org/examples/#webgl_interactive_voxelpainter)

### Examples
1. [Raycasting (mouse interaction)](https://BarakChamo.github.io/The-Creative-Web/classes/class%202/examples/raycasting.html) - [source](https://github.com/BarakChamo/The-Creative-Web/blob/master/classes/class%202/examples/raycasting.html)
2. [Panorama viewer](https://barakchamo.github.io/The-Creative-Web/classes/class%202/examples/panorama-viewer.html) - [source](https://github.com/BarakChamo/The-Creative-Web/blob/master/classes/class%202/examples/panorama-viewer.html)

### Slides
coming soon.

### Readings
- [Elements of Interaction Design](https://www.interaction-design.org/literature/article/what-is-interaction-design)

### Resources

#### JavaScript stuff
- [Understanding JavaScript events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)
- [getUserMedia, or how to get webcam video streaming in the browser](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia)
- [Drag & Drop interaction in the browser](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API)

#### Using images and video
- [VideoTexture explained](https://threejs.org/docs/#api/en/textures/VideoTexture)
- [Using the ImageLoader](https://threejs.org/docs/#api/en/loaders/ImageLoader)

#### Raycasting and mouse interaction
- [Raycasting explained](https://threejs.org/docs/#api/en/core/Raycaster)
- [Interactive raycasting example](https://threejs.org/examples/?q=raycast#webgl_interactive_raycasting_points)

### Assignment
For next class, expand upon your assignment from week 1:
Find an inspiring example online you'd like to recreate or make your own composition.

For week 2:
  1. Add video (either from a file or a webcam) or images to material. 
     How can steraming video be incorporated into your sketches to make them more interesting and interactive?
  
  2. Use raycasting to add interaction to your scene. 
     Extra credit: make your interaction smooth and interpolated over time, like we saw in class.
     
  3. Publish your work to a GitHub page and post it to the Class 2 issue.
