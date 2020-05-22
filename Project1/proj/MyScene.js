/**
* MyScene
* @constructor
*/
class MyScene extends CGFscene {
    constructor() {
        super();
    }
    init(application) {
        super.init(application);
        this.initCameras();
        this.initLights();

        //Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);

        this.setUpdatePeriod(50);
        
        this.enableTextures(true);


        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.sphere = new MySphere(this, 16, 8);
        this.vehicle = new MyVehicle(this);
        this.billboard = new MyBillboard(this);
        this.supplyDrops = [];

        for (var i = 0; i < 5; i++) this.supplyDrops.push(new MySupply(this));
        

        //Objects connected to MyInterface
        this.displayAxis = false;
        this.displaySphere = false;
        this.displayCylinder = false;
        this.numberOfSides = 5;
        this.displayNormals = false;
        this.displayVehicle = true;
        this.displayCubeMap = true;
        this.displayTerrain = true;
        this.scaleFactor = 1;
        this.speedFactor = 1;
        this.selectedTexture = 0;
        this.textureIds = { 'Earth': 0, 'Space': 1};
        this.vehicleCanMove = true;
        
        this.onAutoPilot = false;
        this.suppliesDropped = 0;
        this.supplyOnCooldown = false;
        this.prevUpdate = 0;
        this.currentWait = 0;

        this.cylinder = new MyCylinder(this, this.numberOfSides, 1);

        this.cylinderMaterial = new CGFappearance(this);
        this.cylinderMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.cylinderMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.cylinderMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.cylinderMaterial.setShininess(10.0);
        this.cylinderMaterial.loadTexture('images/brickWall.jpg');

        this.sphereMaterial = new CGFappearance(this);
        this.sphereMaterial.setAmbient(0.1, 0.1, 0.1, 1);
        this.sphereMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
        this.sphereMaterial.setSpecular(0.1, 0.1, 0.1, 1);
        this.sphereMaterial.setShininess(10.0);
        this.sphereMaterial.loadTexture('images/earth.jpg');

        this.cubeMap = new MyUnitCubeQuad(this);
        this.terrain = new MyTerrain(this);
    }

    initLights() {
        /* Ambient light */
        this.ambientLight = 4;
        this.setGlobalAmbientLight(this.ambientLight, this.ambientLight, this.ambientLight, 1.0);

        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }

    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(25, 20, 25), vec3.fromValues(0, 8, 0));
    }

    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }
    
    // called periodically (as per setUpdatePeriod() in init())
    update(t){
        
        for (var i = 0; i < 5; i++) this.supplyDrops[i].update(t);
        
        this.vehicle.update(t);

        if (this.prevUpdate == 0) {
            this.prevUpdate = t;
        }
        var elapsed = t - this.prevUpdate;
        this.prevUpdate = t;
        this.currentWait += elapsed;

        if (this.currentWait >= 200) {
            this.currentWait = 0;
            this.prevUpdate = 0;
            this.supplyOnCooldown = false;
        }

        this.checkKeys();
    }

    updateNumberSides() {
        this.cylinder.updateBuffers(this.numberOfSides);
    }

    updateAppliedTexture(){
        this.cubeMap.updateAppliedTexture();
    }


    sleep(milliseconds) {
        const date = Date.now();
        let currentDate = null;
        do {
          currentDate = Date.now();
        } while (currentDate - date < milliseconds);
    }

    checkKeys() {
        var text = "Keys pressed: ";
        var keysPressed = false;
        // console.log("Autopilot: " + this.onAutoPilot);
        // Check for key codes e.g. in https://keycode.info/

        if (this.gui.isKeyPressed("KeyP")) {
            text += " P ";

            if (this.onAutoPilot) {
                this.onAutoPilot = false;
            }
            else {
                this.onAutoPilot = true;
                this.vehicle.autoPilot();
            }
            keysPressed = true;
            
            this.sleep(100);    // to avoid double/multiple pressing of P in less than 100 ms
        }

        if (this.gui.isKeyPressed("KeyL") && !this.supplyOnCooldown && this.suppliesDropped < 5) {
            
            text += " L ";
            
            this.supplyDrops[this.suppliesDropped++].drop(this.vehicle.x, this.vehicle.y + 9.14, this.vehicle.z);

            this.billboard.update();
            
            this.supplyOnCooldown = true;
            keysPressed = true;
        }

        if (this.gui.isKeyPressed("KeyW") && !this.onAutoPilot) {
            text += " W ";
            this.vehicle.accelerate(this.speedFactor);
            keysPressed = true;
        }

        if (this.gui.isKeyPressed("KeyS") && !this.onAutoPilot) {
            text += " S ";
            this.vehicle.accelerate(-this.speedFactor);
            keysPressed = true;
        }

        if (this.gui.isKeyPressed("KeyA") && !this.onAutoPilot) {
            text += " A ";
            this.vehicle.turn(5);
            keysPressed = true;
        }

        if (this.gui.isKeyPressed("KeyD") && !this.onAutoPilot) {
            text += " D ";
            this.vehicle.turn(-5);
            keysPressed = true;
        }

        if (this.gui.isKeyPressed("KeyR")) {
            text += " R ";
            this.vehicle.reset();

            for (var i = 0; i < 5; i++) this.supplyDrops[i].reset();

            this.suppliesDropped = 0;
            this.billboard.reset();
            keysPressed = true;
        }
    }

    display() {
        // ---- BEGIN Background, camera and axis setup
        // Clear image and depth buffer everytime we update the scene
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        // Initialize Model-View matrix as identity (no transformation
        this.updateProjectionMatrix();
        this.loadIdentity();
        // Apply transformations corresponding to the camera position relative to the origin
        this.applyViewMatrix();
        
        // Draw axis
        if (this.displayAxis)
            this.axis.display();

        this.setDefaultAppearance();

        // ---- BEGIN Primitive drawing section

        var sca = [this.scaleFactor, 0.0, 0.0, 0.0,
            0.0, this.scaleFactor, 0.0, 0.0,
            0.0, 0.0, this.scaleFactor, 0.0,
            0.0, 0.0, 0.0, 1.0
        ];

        if (this.displayCubeMap) {
            this.pushMatrix();
            this.cubeMap.display();
            this.popMatrix();
        }

        if (this.displaySphere) {
            this.pushMatrix();
            this.sphereMaterial.apply();
            this.sphere.display();
            this.popMatrix();
        }

        if (this.displayNormals) this.cylinder.enableNormalViz();
        else this.cylinder.disableNormalViz();

        if (this.displayCylinder) {
            this.pushMatrix();
            this.cylinderMaterial.apply();
            this.cylinder.display();
            this.popMatrix();
        }

        if (this.displayVehicle) {
            this.pushMatrix();
            this.multMatrix(sca); // Vehicle can be scaled with the slider
            this.translate(this.vehicle.x, this.vehicle.y + 10, this.vehicle.z);
            this.rotate(this.vehicle.horizAngle * Math.PI / 180.0, 0, 1, 0);
            this.vehicle.display();
            this.popMatrix();
        }

        this.pushMatrix();
        this.multMatrix(sca);
        for (var i = 0; i < 5; i++) this.supplyDrops[i].display();
        this.popMatrix();
        
        if (this.displayTerrain) {
            this.pushMatrix();
            this.translate(0, -0.48, 0);
            this.terrain.display();
            this.popMatrix();
        }

        this.pushMatrix();
        this.rotate(Math.PI / 2, 0, 1, 0);
        this.translate(-8, 5, 1);
        this.billboard.display();
        this.popMatrix();


        // ---- END Primitive drawing section
    }
}
