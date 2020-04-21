/**
 * MyVehicle
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyVehicle extends CGFobject {
    constructor(scene) {
		super(scene);
        
        this.triangleFig = new MyTriangle(this.scene);

        this.mainBody = new MySphere(this.scene, 24, 12);
        // this.bottomBody = new MySphere(this.scene, 16, 8);
        this.bottomBody = new MyCylinderClosed(this.scene, 16, 8);
        this.steering = new MyTrapeze(this.scene);
        this.steeringVert = new MyTrapeze(this.scene);
        this.propeller = new MyUnitCube(this.scene);

        this.maxAnglePropeller = 12;
        this.rotationAngleIncCap = 1.2;

        this.horizAngle = 0;
        this.speed = 0;
        this.rotationAngle = 0;
        this.rotationAngleIncrement = 0;
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.reset();

        this.initMaterials();
    }

    initMaterials(){

        this.materialBody = new CGFappearance(this.scene);
        this.materialBody.setAmbient(0.1, 0.1, 0.1, 1);
        this.materialBody.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialBody.setSpecular(0.1, 0.1, 0.1, 1);
        this.materialBody.setShininess(10.0);
        this.materialBody.loadTexture('images/blimp/body.png');
        this.materialBody.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');

        this.materialWing = new CGFappearance(this.scene);
        this.materialWing.setAmbient(0.1, 0.1, 0.1, 1);
        this.materialWing.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialWing.setSpecular(0.1, 0.1, 0.1, 1);
        this.materialWing.setShininess(10.0);
        this.materialWing.loadTexture('images/blimp/wing.png');
        this.materialWing.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');

        this.materialCabin = new CGFappearance(this.scene);
        this.materialCabin.setAmbient(0.1, 0.1, 0.1, 1);
        this.materialCabin.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialCabin.setSpecular(0.1, 0.1, 0.1, 1);
        this.materialCabin.setShininess(10.0);
        this.materialCabin.loadTexture('images/blimp/cabin.jpg');
        this.materialCabin.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');

    }

    display() {

        // Main Body (bigger section)
        this.scene.translate(0, 10, 0);
        this.scene.pushMatrix();
        this.scene.scale(0.5, 0.5, 1);
        this.materialBody.apply();
        this.mainBody.display();
        this.scene.popMatrix();

        // Cabin
        this.scene.pushMatrix();
        this.scene.scale(0.2, 0.2, 0.4);
        this.scene.translate(0, -3, 0);
        this.materialCabin.apply();
        this.bottomBody.display();
        this.scene.popMatrix();

        // Left Propeller
        this.scene.pushMatrix();
        this.scene.scale(0.04, 0.04, 0.11);
        this.scene.translate(4.5, -13, -2.8);
        this.mainBody.display();
        this.scene.popMatrix();

        // Right Propeller
        this.scene.pushMatrix();
        this.scene.scale(0.04, 0.04, 0.11);
        this.scene.translate(-4.5, -13, -2.8);
        this.mainBody.display();
        this.scene.popMatrix();
        
        // Left Wing
        this.scene.pushMatrix();
        this.scene.scale(0.3, 0.3, 0.3);
        this.scene.translate(0.8, 0, -4);
        this.scene.rotate(-90 * Math.PI / 180, 1, 0, 0);
        this.scene.rotate(90 * Math.PI / 180, 0, 0, 1);
        this.scene.rotate(Math.PI, 0, 1, 0);
        
        this.materialWing.apply();
        this.steering.display();
        this.scene.popMatrix();

        // Right Wing
        this.scene.pushMatrix();
        this.scene.scale(0.3, 0.3, 0.3);
        this.scene.translate(-0.8, 0, -4);
        this.scene.rotate(Math.PI, 0, 0, 1);
        this.scene.rotate(-Math.PI / 2, 0, 1, 0);
        this.scene.rotate(Math.PI / 2, 1, 0, 0);
        this.steering.display();
        this.scene.popMatrix();

        // Bottom Wing
        this.scene.pushMatrix();
        this.scene.translate(0, -0.15, -0.65);
        if (Math.abs(this.horizAngle) >= this.maxAnglePropeller && this.horizAngle > 0) this.scene.rotate( (-this.maxAnglePropeller-90) * Math.PI / 180, 0, 1, 0);
        else if (Math.abs(this.horizAngle) >= this.maxAnglePropeller && this.horizAngle < 0) this.scene.rotate( (this.maxAnglePropeller-90) * Math.PI / 180, 0, 1, 0);
        else this.scene.rotate( (-this.horizAngle-90) * Math.PI / 180, 0, 1, 0);
        this.scene.scale(0.3, 0.3, -0.3);
        this.scene.translate(-2, 0, 0);
        this.steeringVert.display();
        this.scene.popMatrix();

        // Top Wing
        this.scene.pushMatrix();
        this.scene.translate(0, 0.1, -0.65);
        if (Math.abs(this.horizAngle) >= this.maxAnglePropeller && this.horizAngle > 0) this.scene.rotate( (-this.maxAnglePropeller-90) * Math.PI / 180, 0, 1, 0);
        else if (Math.abs(this.horizAngle) >= this.maxAnglePropeller && this.horizAngle < 0) this.scene.rotate( (this.maxAnglePropeller-90) * Math.PI / 180, 0, 1, 0);
        else this.scene.rotate( (-this.horizAngle-90) * Math.PI / 180, 0, 1, 0);
        this.scene.scale(0.3, -0.3, -0.3);
        this.scene.translate(-2, 0, 0);
        this.steeringVert.display();
        this.scene.popMatrix();

        // Left Propeller
        this.scene.pushMatrix();
        this.scene.translate(0.17, -0.52, -0.42);
        this.scene.rotate(this.rotationAngle * 1.1, 0, 0, 1);
        this.scene.scale(0.02, 0.12, 0.008);
        
        this.propeller.display();
        this.scene.popMatrix();

        // Right Propeller
        this.scene.pushMatrix();
        this.scene.translate(-0.17, -0.52, -0.42);
        this.scene.rotate(this.rotationAngle * 1.1, 0, 0, 1);
        this.scene.scale(0.02, 0.12, 0.008);
        this.propeller.display();
        this.scene.popMatrix();

    }

    update() {
        this.horizAngleRad = this.horizAngle * Math.PI / 180;
        this.signSpeed = this.speed > 0 ? 0 : 1;
        this.rotationAngleIncrement = (-1)**(this.signSpeed) * ((Math.abs(60 * this.speed * Math.PI / 180) < this.rotationAngleIncCap) ? Math.abs(60 * this.speed * Math.PI / 180) : this.rotationAngleIncCap);
        this.rotationAngle += this.rotationAngleIncrement;

        // console.log("Speed :" + this.speed);
        // console.log("RotAngInc :" + this.rotationAngleIncrement);
        // console.log("Angle :" + this.rotationAngle);

        this.x += this.speed * Math.sin(this.horizAngleRad);
        this.z += this.speed * Math.cos(this.horizAngleRad);
    }

    turn(val) {
        this.horizAngle += val;
    }

    accelerate(val) {
        // this.speed += val * 0.08;
        this.speed += val * 0.01;
        // console.log(this.speed);
    }

    reset() {
        this.horizAngle = 0;
        this.speed = 0;
        this.x = 0;
        this.y = 0;
        this.z = 0;
        this.rotationAngle = 0;
    }

}