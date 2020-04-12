/**
 * MyTableTop
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTableTop extends CGFobject {
    constructor(scene) {
        super(scene);
        this.counter = new MyUnitCubeQuad(this.scene);
    }

    display() {
        this.scene.pushMatrix();
        this.scene.setTableTopColor();
        this.scene.scale(1,0.1,1.5);
        this.counter.display();
        this.scene.popMatrix();
    }
}