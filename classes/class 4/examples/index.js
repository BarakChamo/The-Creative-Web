var stats, scene, renderer, cubesContainer;
var camera, shouldInteract, rayInput, hit;

var cameraTarget = new THREE.Vector3(0,0,0);
var raycaster = new THREE.Raycaster();

// Bootstrap the animation
init();
animate();

// init the scene
function init() {
    renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xffffff, 0);

    // VR UPDATE 1 - enable VR rendering
    // Enable vr rendering on the renderer
    renderer.vr.enabled = true

    // VR UPDATE 2 - create the VR button
    // Create VR Button (a cross-platform VR session starter)
    document.body.appendChild(THREE.WEBVR.createButton(renderer))

    // Append the renderer's <canvas> element to the screen
    document.getElementById('container').appendChild(renderer.domElement);

    // Resize canvas when the screen resizes
    document.addEventListener('resize', function() {
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
    }, false);

    // create the root scene
    scene = new THREE.Scene();


    /* Camera, reticle & ray input */

    // create the view camera
    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100 );
    camera.position.set(0, 0, 0);
    scene.add(camera);

    // VR UPDATE 3 - create the crosshair reticle marker and parent to the camera
    var reticle = new THREE.Mesh(
        new THREE.RingBufferGeometry(0.66 / 50, 1 / 50, 32),
        new THREE.MeshBasicMaterial( {color: 0x000000, opacity: 0.5, transparent: true, side: THREE.DoubleSide })
    );
    
    reticle.position.set(0, 0, -1);
    reticle.lookAt(camera.position);
     
    camera.add(reticle);

    // // Initialize new ray input
    rayInput = new RayInput.default(camera, renderer.domElement);
    rayInput.setSize(renderer.getSize());
    
    // Register a callback when an object is selected.
    rayInput.on('rayover', (mesh) => {
        // Called when an object was selected.
        hit = mesh
    });

    // Register a callback when an object is selected.
    rayInput.on('rayout', (mesh) => {
        // Called when an object was selected.
        hit = null
    });

    /* Lights */

    // Add lights to the scene
    var light1	= new THREE.AmbientLight( Math.random() * 0xffffff );
    scene.add( light1 );

    // Add random directional light at random position
    var light2	= new THREE.DirectionalLight( Math.random() * 0xffffff );
    light2.position.set( Math.random(), Math.random(), Math.random() ).normalize().multiplyScalar(3);
    light2.lookAt(cameraTarget); // Tell the camera to aim at our cameraTarget
    scene.add( light2 );

    // Add another random light
    var light3	= new THREE.DirectionalLight( Math.random() * 0xffffff );
    light3.position.set( Math.random(), Math.random(), Math.random() ).normalize().multiplyScalar(3);
    light3.lookAt(cameraTarget); // Tell the camera to aim at our cameraTarget
    scene.add(light3);


    /* Geometry */ 
    
    var geometry, material, mesh, randomPoint;
    var numCubes = 5;
    var cubes = [];
    
    // VR UPDATE 4 - Move the objects away from the center of the scene
    // Mobile VR cameras are always at position (0,0,0)
    cubesContainer = new THREE.Object3D();
    cubesContainer.position.set(0, 0, -2.5);
    cubesContainer.rotation.set(Math.PI / 2, 0, 0);
    scene.add(cubesContainer);

    for (let i = 0; i < numCubes; i++) {
        // Create a cube gemetry
        geometry = new THREE.SphereGeometry( 0.5, 0.5, 0.5 );
            
        // Create a new material for every mesh so we can color them separately
        material = new THREE.MeshPhongMaterial({color: `hsl(${Math.random() * 360}, 40%, 60%)`});
        material.flatShading = true;

        pointX = Math.sin(2 * Math.PI * (i / numCubes));
        pointZ = Math.cos(2 * Math.PI * (i / numCubes));

        mesh	= new THREE.Mesh( geometry, material );
        mesh.position.set(pointX, 0.5, pointZ);
        mesh.rotation.set(0.5, 0.5, 0.5);
        mesh.n = Math.random();

        // Add mesh to the container
        cubesContainer.add(mesh);
        cubes.push(mesh);
        rayInput.add(mesh);
    }

    // Notice we are using pointer events instead of mouse or touch
    renderer.domElement.addEventListener('pointerdown', () => {shouldInteract = true})
    renderer.domElement.addEventListener('pointerup', () => {shouldInteract = false})
    document.addEventListener('selectstart', () => {shouldInteract = true})
    document.addEventListener('selectend', () => {shouldInteract = false})
}

// animation loop
function animate() {
    // VR UPDATE 5 - user the renderer's animation loop
    // This is optional in desktop web but required for VR 
    renderer.setAnimationLoop(render);
}
// render the scene
function render() {
    /* Raycasting */
    
    // update the inputRay
    rayInput.update();

    // VR UPDATE 6 - Raycasting in the direction of the gaze from the center of the screen (0, 0)
    // Perform a ray cast from the camera, in the direction of the headset in 3d space
    raycaster.setFromCamera({ x: 0, y: 0 }, camera);

    // Extract intersected objects (from a particular scene or parent Object3D)
    var intersections = raycaster.intersectObjects(cubesContainer.children);

    // Map intersected meshes to the hits array
    hits = intersections.map(intersection => intersection.object)

    // actually render the scene
    renderer.render( scene, camera );

    // re-Rotate the camerea to look at the cameraTarget at the center of the scene
    camera.lookAt(cameraTarget);

    // iterate over all objects in a scene
    scene.traverse(function(object3d, i){
        // Check if the current object is a THREE.Mesh (rather than a light, camera, etc.)
        if( object3d instanceof THREE.Mesh === false )	return

        // Rotate object based on `n` coefficient
        if(object3d.n) {
            object3d.rotateY(0.01 * object3d.n);
            object3d.rotateX(0.02 * object3d.n);
            object3d.rotateZ(0.03 * object3d.n);
        }
        
        /* Try animating transitions here! */ 

        // Check if current mesh is hit by the raycast
        const scale = object3d.scale.x;
        let newScale;
        
        // Check if the current traveresed object is intersected
        if(hits.includes(object3d)) {
            newScale = Math.min(1.25, scale + 0.025);
            
            if(shouldInteract)
                object3d.material.color.offsetHSL(0.01, 0, 0)
        }
        else
            newScale = Math.max(1, scale - 0.025);

        object3d.scale.set(newScale, newScale, newScale)
    })
}
