/**
 * MyTableLeg
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTableLeg extends CGFobject {
    constructor(scene) {
        super(scene);
        this.tableLeg = new MyUnitCubeQuad(this.scene);
    }

    display() {
        this.scene.pushMatrix();
        this.scene.setTableLegColor();
        this.scene.scale(0.15,0.7,0.15);
        this.tableLeg.display();
        this.scene.popMatrix();
    }
}