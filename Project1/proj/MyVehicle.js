/**
 * MyVehicle
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyVehicle extends CGFobject {
    constructor(scene) {
		super(scene);
        
        this.triangleFig = new MyTriangle(this.scene);
    }

    display() {
        
        // Centering / aligning the vehicle (triangle at the moment)
        this.scene.rotate(-90*Math.PI/180,1,0,0);
        this.scene.rotate(45*Math.PI/180,0,0,1);
        this.scene.translate(0.5,0.5, 0);

        this.triangleFig.display();

    }

}