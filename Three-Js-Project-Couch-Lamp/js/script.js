import * as THREE from 'three';



//import orbitcontrol for mouse-controlled camera movements 
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';


// Four texture images (blue, red, brown, white) are imported, which will be applied to the couch. //

import blue from '../img/blueecouch.jpg';
import red from '../img/graycouch.jpg';
import brown from '../img/browncouch.jpg';
import white from '../img/grayycouch.jpg';
import wall from '../img/wall1.jpg';
import floorr from '../img/floor.jpg';
import L_head from '../img/head_l.jpg';
import L_stand from '../img/base_m.jpg';

// click = 1;: This Global variable is used to track how many times the user has clicked. It controls which texture is applied to the couch. //

var click = 1;



//var stream = "https://cdn.rawgit.com/ellenprobst/web-audio-api-with-Threejs/57582104/lib/TheWarOnDrugs.m4a";
//var stream = "G:/Three Js Project/src/music/sad.mp3";

// This constructor set the camera height and movement speed //
var socket = {
    height: 8.5,
    speed: 0.01
}


// Getting our window size //
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
};



// A scene is created to hold all 3D objects
const scene = new THREE.Scene();
/**
 A camera is set up with a perspective view, meaning objects appear smaller as they get further away, like in real life. The camera is positioned to view the scene from a certain height and distance.
*/

// Basic camera
const camera = new THREE.PerspectiveCamera(
    85, // angle
    sizes.width / sizes.height, // aspect ratio
    0.1, // near appear smaller
    1000 // far
);

//camera.position.set(0, socket.height, 33);: Sets the camera's initial position. It's placed at (x=0, y=8.5, z=33) which gives a view of the entire scene from a certain height.//
camera.position.set(0, socket.height, 33);


// Texture looder //

const textureLoader = new THREE.TextureLoader();
//scene.background = textureLoader.load('https://thumbs.dreamstime.com/z/brick-wall-lights-old-stage-31525641.jpg');


// An audio stream is loaded and played in the background using the AudioLoader and AudioListener features of Three.js.

/*
const listener = new THREE.AudioListener();
scene.add( listener );


// create a global audio source
const sound = new THREE.Audio( listener );

// load a sound and set it as the Audio object's buffer
const audioLoader = new THREE.AudioLoader();
audioLoader.load( stream, function( buffer ) {
	sound.setBuffer( buffer ); //sound.setBuffer(buffer): Sets the audio data to the sound source.
	sound.setLoop( true );
	sound.setVolume( 0.5 );
    
	sound.play();
}
  

);

*/


/**
  The couch is created as a group of 3D objects using THREE.Mesh, each representing parts of the couch (like the seat, back, arms). The textureLoader is used to apply the blue couch texture initially.
 */
// Couch container
const couch = new THREE.Group()
scene.add(couch);

//Body//
//Body1//
var body1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 10.38, 15),
    new THREE.MeshBasicMaterial({


        map: textureLoader.load(blue)

    })

);
body1.position.x = -12;
body1.position.y = 9.55;
body1.position.z = -18.18;
body1.rotation.y = Math.PI / 2
couch.add(body1);

//Body2//

var body2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 10.38, 15),
    new THREE.MeshBasicMaterial({

        map: textureLoader.load(blue)

    })

);
body2.position.x = 3;
body2.position.y = 9.55;
body2.position.z = -18.18;
body2.rotation.y = Math.PI / 2
couch.add(body2);


// body3

var body3 = new THREE.Mesh(
    new THREE.BoxGeometry(12.18, 4.32, 15),
    new THREE.MeshBasicMaterial({

        map: textureLoader.load(blue)
    })

);
body3.position.x = -12;
body3.position.y = 2.25;
body3.position.z = -12.50;
body3.rotation.y = Math.PI / 2
couch.add(body3);

// body4

var body4 = new THREE.Mesh(
    new THREE.BoxGeometry(12.18, 4.32, 15),
    new THREE.MeshBasicMaterial({

        map: textureLoader.load(blue)
    })

);
body4.position.x = 3;
body4.position.y = 2.25;
body4.position.z = -12.50;
body4.rotation.y = Math.PI / 2
couch.add(body4);

// body 5

var body5 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 7.38, 12.1),
    new THREE.MeshBasicMaterial({

        map: textureLoader.load(blue)
    })

);
body5.position.x = 11;
body5.position.y = 3.8;
body5.position.z = -12.50;

couch.add(body5);

// body 6

var body6 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 7.38, 12.1),
    new THREE.MeshBasicMaterial({

        map: textureLoader.load(blue)
    })

);
body6.position.x = -20;
body6.position.y = 3.8;
body6.position.z = -12.50;

couch.add(body6);


/**
  A lamp is added with a head (a cylinder) and a stand (a box). Like the couch, textures are applied to make it look realistic. It’s also given a PointLight source, which illuminates the room.
 */
// Lamp container
const lamp = new THREE.Group()
scene.add(lamp);

// Head //

const head = new THREE.Mesh(
    new THREE.CylinderGeometry(7.44, 4.5, 8.06),
    new THREE.MeshPhongMaterial({

        //transparent: true,

        map: new THREE.TextureLoader().load(L_head),

    })

);

head.position.x = 22;
head.position.y = 17.8;
head.position.z = -12.50;
head.rotation.x = Math.PI
lamp.add(head);

// Stand //

const stand = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 15.25),
    new THREE.MeshBasicMaterial({

        map: new THREE.TextureLoader().load(L_stand),
    })

);
stand.position.x = 22;
stand.position.y = 8.8;
stand.position.z = -12.50;
stand.rotation.x = Math.PI / 2
lamp.add(stand);

// Basement //

const base = new THREE.Mesh(
    new THREE.PlaneGeometry(10, 10),
    new THREE.MeshBasicMaterial({

        map: new THREE.TextureLoader().load(L_stand),
    })

);
base.position.x = 22;
base.position.y = 0.8;
base.position.z = -12.50;
base.rotation.x -= Math.PI / 2
lamp.add(base);



// Floor //
const floor = new THREE.Mesh(
    new THREE.PlaneGeometry(250, 200),
    new THREE.MeshStandardMaterial({

        map: new THREE.TextureLoader().load(floorr),
        wireframe: false,
        side: THREE.DoubleSide

    })
);
floor.receiveShadow = true
floor.rotation.x = -0.5 * Math.PI;
floor.position.y = 0;
scene.add(floor);
/**
 Lights
*/
//AmbientLight provides overall light to the scene. //
const ambientLight = new THREE.AmbientLight(0xb9d5ff, 0.4);
scene.add(ambientLight);


// PointLight simulates the lamp's light and casts shadows. //
const lampLight = new THREE.PointLight(0xffffff)
lampLight.castShadow = true
lampLight.shadow.mapSize.width = 512
lampLight.shadow.mapSize.height = 512
lampLight.shadow.camera.far = 7.5

lampLight.position.set(15.5, 3, 2.7)
lamp.add(lampLight)


//renderer //

renderer = new THREE.WebGLRenderer();
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.setClearColor('black');
document.body.appendChild(renderer.domElement);

// Camera add to screen //
scene.add(camera);

// Create a room Geometry //

const geometry = new THREE.BoxGeometry(170, 40, 70);

const material = new THREE.MeshStandardMaterial({
    map: new THREE.TextureLoader().load(wall),
});

material.side = THREE.BackSide;
const room = new THREE.Mesh(geometry, material);
room.position.y = 19;
room.receiveShadow = true;
scene.add(room);


// Move the camera around object using MOUSE movment //

const orbit = new OrbitControls(camera, renderer.domElement);
orbit.enableDamping = true;
orbit.update();





// When the user clicks on the scene, the useClick function changes the texture of the couch. //

function useClick(event) {

    if (click <= 4) {
        click += 1;
    } else {
        click = 1;
    }

    //There are four possible textures (blue, red, brown, white), and they cycle through with each click. This is handled by updating the materials of the couch bodies (body1 to body6) based on the current click value.
    
    const textureLoader1 = new THREE.TextureLoader();

    switch (click) {
        case 1:
            var body1 = new THREE.Mesh(
                new THREE.BoxGeometry(1, 10.38, 15),
                new THREE.MeshBasicMaterial({

                    map: textureLoader1.load(blue)


                })

            );

            var body2 = new THREE.Mesh(
                new THREE.BoxGeometry(1, 10.38, 15),
                new THREE.MeshBasicMaterial({
                   
                    map: textureLoader1.load(blue)


                })

            );

            var body3 = new THREE.Mesh(
                new THREE.BoxGeometry(12.18, 4.32, 15),
                new THREE.MeshBasicMaterial({
                    
                    map: textureLoader1.load(blue)
                })

            );

            var body4 = new THREE.Mesh(
                new THREE.BoxGeometry(12.18, 4.32, 15),
                new THREE.MeshBasicMaterial({
                    
                    map: textureLoader1.load(blue)
                })

            );

            var body5 = new THREE.Mesh(
                new THREE.BoxGeometry(1, 7.38, 12.1),
                new THREE.MeshBasicMaterial({
                   
                    map: textureLoader1.load(blue)
                })

            );

            var body6 = new THREE.Mesh(
                new THREE.BoxGeometry(1, 7.38, 12.1),
                new THREE.MeshBasicMaterial({
                    
                    map: textureLoader1.load(blue)
                })

            );


            break;
        case 2:
            var body1 = new THREE.Mesh(
                new THREE.BoxGeometry(1, 10.38, 15),
                new THREE.MeshBasicMaterial({

                   
                    map: textureLoader1.load(red)


                })

            );

            var body2 = new THREE.Mesh(
                new THREE.BoxGeometry(1, 10.38, 15),
                new THREE.MeshBasicMaterial({
                    
                    map: textureLoader1.load(red)


                })

            );

            var body3 = new THREE.Mesh(
                new THREE.BoxGeometry(12.18, 4.32, 15),
                new THREE.MeshBasicMaterial({
                   
                    map: textureLoader1.load(red)
                })

            );

            var body4 = new THREE.Mesh(
                new THREE.BoxGeometry(12.18, 4.32, 15),
                new THREE.MeshBasicMaterial({
                    
                    map: textureLoader1.load(red)
                })

            );

            var body5 = new THREE.Mesh(
                new THREE.BoxGeometry(1, 7.38, 12.1),
                new THREE.MeshBasicMaterial({
                    
                    map: textureLoader1.load(red)
                })

            );

            var body6 = new THREE.Mesh(
                new THREE.BoxGeometry(1, 7.38, 12.1),
                new THREE.MeshBasicMaterial({
                    
                    map: textureLoader1.load(red)
                })

            );

            break;

        case 3:
            var body1 = new THREE.Mesh(
                new THREE.BoxGeometry(1, 10.38, 15),
                new THREE.MeshBasicMaterial({

                   
                    map: textureLoader1.load(brown)


                })

            );

            var body2 = new THREE.Mesh(
                new THREE.BoxGeometry(1, 10.38, 15),
                new THREE.MeshBasicMaterial({
                    
                    map: textureLoader1.load(brown)


                })

            );

            var body3 = new THREE.Mesh(
                new THREE.BoxGeometry(12.18, 4.32, 15),
                new THREE.MeshBasicMaterial({
                    
                    map: textureLoader1.load(brown)
                })

            );

            var body4 = new THREE.Mesh(
                new THREE.BoxGeometry(12.18, 4.32, 15),
                new THREE.MeshBasicMaterial({
                    
                    map: textureLoader1.load(brown)
                })

            );

            var body5 = new THREE.Mesh(
                new THREE.BoxGeometry(1, 7.38, 12.1),
                new THREE.MeshBasicMaterial({
                    
                    map: textureLoader1.load(brown)
                })

            );

            var body6 = new THREE.Mesh(
                new THREE.BoxGeometry(1, 7.38, 12.1),
                new THREE.MeshBasicMaterial({
                   
                    map: textureLoader1.load(brown)
                })

            );

            break;

        case 4:
            var body1 = new THREE.Mesh(
                new THREE.BoxGeometry(1, 10.38, 15),
                new THREE.MeshBasicMaterial({

                    
                    map: textureLoader1.load(white)


                })

            );

            var body2 = new THREE.Mesh(
                new THREE.BoxGeometry(1, 10.38, 15),
                new THREE.MeshBasicMaterial({
                    
                    map: textureLoader1.load(white)


                })

            );

            var body3 = new THREE.Mesh(
                new THREE.BoxGeometry(12.18, 4.32, 15),
                new THREE.MeshBasicMaterial({
                    
                    map: textureLoader1.load(white)
                })

            );

            var body4 = new THREE.Mesh(
                new THREE.BoxGeometry(12.18, 4.32, 15),
                new THREE.MeshBasicMaterial({
                   
                    map: textureLoader1.load(white)
                })

            );

            var body5 = new THREE.Mesh(
                new THREE.BoxGeometry(1, 7.38, 12.1),
                new THREE.MeshBasicMaterial({
                    
                    map: textureLoader1.load(white)
                })

            );

            var body6 = new THREE.Mesh(
                new THREE.BoxGeometry(1, 7.38, 12.1),
                new THREE.MeshBasicMaterial({
                    
                    map: textureLoader1.load(white)
                })

            );

            break;

    }


    body1.position.x = -12;
    body1.position.y = 9.55;
    body1.position.z = -18.18;
    body1.rotation.y = Math.PI / 2
    couch.add(body1);

    body2.position.x = 3;
    body2.position.y = 9.55;
    body2.position.z = -18.18;
    body2.rotation.y = Math.PI / 2
    couch.add(body2);

    body3.position.x = -12;
    body3.position.y = 2.25;
    body3.position.z = -12.50;
    body3.rotation.y = Math.PI / 2
    couch.add(body3);

    body4.position.x = 3;
    body4.position.y = 2.25;
    body4.position.z = -12.50;
    body4.rotation.y = Math.PI / 2
    couch.add(body4);

    body5.position.x = 11;
    body5.position.y = 3.8;
    body5.position.z = -12.50;
    couch.add(body5);

    body6.position.x = -20;
    body6.position.y = 3.8;
    body6.position.z = -12.50;

    couch.add(body6);
}

window.addEventListener('click', useClick);


//Tracking the pc current time// 
const clock = new THREE.Clock()

//creat a arrow function//
const tick1 = () => {

    // Here getElapsedTime() is Keeps track of the total time that the clock has been running.// 
    const elapsedTime = clock.getElapsedTime();  
    const lampLightAngle = elapsedTime * 0.25;
    const keyangle = elapsedTime * 0.10;
    //console.log(lampLightAngle);

    lampLight.position.z = Math.sin(lampLightAngle) / 4
    lampLight.position.y = Math.sin(lampLightAngle * 3)


    document.addEventListener('keydown', onDocumentKeyDown, false);
    function onDocumentKeyDown(event) {

        
        var keycode = event.keyCode;
        switch (keycode) {
            case 37: //left
                     
               camera.position.x += Math.sin(camera.rotation.y - Math.PI / 2) * socket.speed;
               camera.position.z += -Math.cos(camera.rotation.y - Math.PI / 2) * socket.speed;

                break;
            case 38: //up
                camera.position.x -= Math.sin(camera.rotation.y) * socket.speed;
                camera.position.z -= -Math.cos(camera.rotation.y) * socket.speed;
                break;
            case 39: //right
                 camera.position.x += Math.sin(camera.rotation.y + Math.PI / 2) * socket.speed;
                 camera.position.z += -Math.cos(camera.rotation.y + Math.PI / 2) * socket.speed;
                break;
            case 40: //down
                camera.position.x += Math.sin(camera.rotation.y) * socket.speed;
                camera.position.z += -Math.cos(camera.rotation.y) * socket.speed;
                break;

            case 81:  // turn(q)

                camera.rotation.y = 4 * Math.sin(keyangle);
               
                break;

        }

        
    }

    

    // Call tick1 again on the next frame
    window.requestAnimationFrame(tick1);

   //Add camera & scene to renderer
    renderer.render(scene, camera);
    console.log(tick1);

}

tick1(); // call the tick1 function //


//Create a  Responsible canvas//

window.addEventListener("resize", () => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    renderer.render(scene, camera); 
});