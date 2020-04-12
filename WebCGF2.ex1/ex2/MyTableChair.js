/**
 * MyTableChair
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTableChair extends CGFobject {
    constructor(scene) {
        super(scene);
        this.fullChair_ = new MyFullChair(this.scene);
        this.fullTable_ = new MyFullTable(this.scene);
    }

    display() {

        // Table
        this.scene.pushMatrix();
        this.fullTable_.display();
        this.scene.popMatrix();

        // Chair
        this.scene.pushMatrix();
        this.scene.translate(0.9, 0, 0.15);
        this.fullChair_.display();
        this.scene.popMatrix();
    }
}