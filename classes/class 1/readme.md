## The Creative Web - Class 1

In this class we took a first stab at Three.js and web-based 3D graphics. 
Three.js is a wrapper around WebGL, a web-based graphics API, that provides high-level
abstractions that make it easier to think of our 3D scenes in known terms: cameras, lights, geometries, etc.

We leared that there are several required components to get a 3D scene rendering,
these can be thought of as digital equivalents of the filmmaking process:
1. [`Scene`](https://threejs.org/docs/#api/en/scenes/Scene) - A 3D space where our objects are placed and arragement together.
2. [`Camera`](https://threejs.org/docs/#api/en/cameras/Camera) - A virtual viewport that is placed in our scene, we'll be seeing our scene through this camera.
3. [`Mesh`](https://threejs.org/docs/#api/en/objects/Mesh) - A mesh is a combination of a `Geometry` and a `Material`, defining the shape and coloring of a 3D object.
4. [`Light`](https://threejs.org/docs/#api/en/lights/Light) - Virtual lights that shine our objects, to be seen by the camera. Lights can be omnidirectional (ambient) or directional.

In `Three.js` we place objects, animate them and render them in code, just like in `p5.js`.
- We use the `init()` method to set up our object and `.add()` them to the scene.
- We then use the `animate()` to move or update our objects every frame.
- We call `renderer.render()` with a specific `Camera` and `Scene` to render that camera's view of the scene to the canvas.

We also learned that all of the objects placed in the scene: camera, lights and meshes, are all extensions of a common base JavaScript class, [`Object3D`](https://threejs.org/docs/#api/en/core/Object3D). This provides us with a common inherited interface for updating the `position`, `rotation`, `scale` and even `activity` and `visitibility` of all of the components in our scenes.

To review the materials of the class refer to the main `index.html` in this folder, the provided resources and examples.

### Examples
1. [Procedural generation and animation (trefoil knot)](https://barakchamo.github.io/The-Creative-Web/classes/class%201/examples/trefoil_knot.html) - [source](https://github.com/BarakChamo/The-Creative-Web/blob/master/classes/class%201/examples/trefoil_knot.html)
2. [Multi-camera scenes and scene helpers](https://barakchamo.github.io/The-Creative-Web/classes/class%201/examples/multi_camera_helpers.html) - [source](https://github.com/BarakChamo/The-Creative-Web/blob/master/classes/class%201/examples/multi_camera_helpers.html)

### Slides
coming soon.

### Resources
[Getting started with Three.js](https://threejs.org/docs/#manual/en/introduction/Creating-a-scene)

[Getting started with GitHub pages](https://guides.github.com/features/pages/)

[Understanding Three.js materials](https://threejs.org/docs/#api/en/materials/MeshPhongMaterial)

[Amazing little game made with Three.js](https://tympanus.net/Tutorials/TheAviator/) and [blog post how-to](https://tympanus.net/codrops/2016/04/26/the-aviator-animating-basic-3d-scene-threejs/)

### Assignment
For next class, please create your own comoposition in Three.js and share it on your class repository as a GitHub page.
At the very least you should have some geometries lit by lights, and rendered by a camera.

You're encouraged to explore the Three.js [docs](https://threejs.org/docs/) and [examples](https://threejs.org/examples/) beyond what we covered in class and find techniques or visual compositions that are interesting to you.

You can also review the new examples provided on the `class 1` page.

Please share your published work on the assignment issue on the class GitHub repository.

#### Prep
1. Signup for GitHub

Sign up for a GitHub account [here](https://github.com/join).


2. Install Git on development computer

Follow the installation process for your OS [here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).


3. Install Visual Studio Code

Download Visual Studio Code [here](https://code.visualstudio.com) and follow the installation.
Install the VS Code React Native Extensions from [here](https://github.com/Microsoft/vscode-react-native).


4. Install Node.js and the Node Package Manager (`npm`)

Download and install Node.js from [here](https://nodejs.org/en/download/), the installation includes `npm`.


#### Sharing work
Being creative on the web means being able to share our work with the world,
so let's begin practicing some good "putting it out there" habbits.

For your first assignment, please create your own GitHub class repository,
call it "My Creative Web", "JS Sketches", "Whatever", just make sure it's `PUBLIC`!

Then, follow the instruction to enable GitHub pages on your repo:
[GitHub pages guide](https://guides.github.com/features/pages/)

Your first assignment is to find a creative experience or experiment
and attempt to recreate it in any web technology you're comfortable with.
If you liked Three.js, use it. If not, use P5.js or anything else you want.

Please post the assignment to your repo as a public GitHub page and post
the link in the [Assignment 1 issue comments](https://github.com/BarakChamo/The-Creative-Web/issues/2).
