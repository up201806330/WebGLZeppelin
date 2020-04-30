/**
 * MyTrapeze
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTrapeze extends CGFobject {
    constructor(scene) {
		super(scene);

        this.trianglePart = new MyTriangle(this.scene);
        this.rectanglePart = new MyQuad(this.scene);
    }

    display() {
        
        this.scene.pushMatrix();
        this.scene.scale(0.5, -0.5, 0.5);
        this.scene.translate(3, 1, 0);
        this.trianglePart.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0.5, -0.5, 0);
        this.rectanglePart.display();
        this.scene.popMatrix();

    }
}