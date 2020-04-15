/**
 * MyVehicle
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyVehicle extends CGFobject {
    constructor(scene) {
		super(scene);
        
        this.triangleFig = new MyTriangle(this.scene);

        // this.horizAngle = 0;
        // this.speed = 0;
        // this.x = 0;
        // this.y = 0;
        // this.z = 0;
        this.reset();
    }

    display() {
        
        this.scene.translate(this.x, this.y, this.z);
        this.scene.rotate(this.horizAngle * Math.PI / 180.0, 0, 1, 0);

        // Centering / aligning the vehicle (triangle at the moment)
        this.scene.rotate(-90*Math.PI/180,1,0,0);
        this.scene.rotate(45*Math.PI/180,0,0,1);
        this.scene.translate(0.5,0.5, 0);

        this.triangleFig.display();

    }

    update() {
        this.horizAngleRad = this.horizAngle * Math.PI / 180;

        this.x += this.speed * Math.sin(this.horizAngleRad);
        this.z += this.speed * Math.cos(this.horizAngleRad);
    }

    turn(val) {
        this.horizAngle += val;
    }

    accelerate(val) {
        this.speed += val;
    }

    reset() {
        this.horizAngle = 0;
        this.speed = 0;
        this.x = 0;
        this.y = 0;
        this.z = 0;
    }

}