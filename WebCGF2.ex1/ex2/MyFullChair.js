/**
 * MyFullChair
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyFullChair extends CGFobject {
    constructor(scene) {
        super(scene);
        this.chairLeg_ = new MyTableLeg(this.scene);
        this.chairSeat_ = new MyUnitCubeQuad(this.scene);
        this.chairBack_ = new MyUnitCubeQuad(this.scene);
    }

    display() {
        var x = 0.325;
        var z = 0.295;

        // Chair Seat
        this.scene.pushMatrix();
        this.scene.setTableLegColor();
        this.scene.scale(0.65,0.11,0.6);
        this.scene.translate(0, 3.3, 0);
        this.chairSeat_.display();
        this.scene.popMatrix();

        // Chair Back
        this.scene.pushMatrix();
        this.scene.setTableLegColor();
        this.scene.scale(0.11, 0.75, 0.6);
        this.scene.translate(2.45, 1.055, 0);
        this.chairBack_.display();
        this.scene.popMatrix();

        // Chair Leg 1/4
        this.scene.pushMatrix();
        this.scene.scale(0.8, 0.475, 0.8);
        this.scene.translate(x, 0.3, -z);
        this.chairLeg_.display();
        this.scene.popMatrix();

        // Chair Leg 2/4
        this.scene.pushMatrix();
        this.scene.scale(0.8, 0.475, 0.8);
        this.scene.translate(x, 0.3, z);
        this.chairLeg_.display();
        this.scene.popMatrix();

        // Chair Leg 3/4
        this.scene.pushMatrix();
        this.scene.scale(0.8, 0.475, 0.8);
        this.scene.translate(-x, 0.3, -z);
        this.chairLeg_.display();
        this.scene.popMatrix();

        // Chair Leg 4/4
        this.scene.pushMatrix();
        this.scene.scale(0.8, 0.475, 0.8);
        this.scene.translate(-x, 0.3, z);
        this.chairLeg_.display();
        this.scene.popMatrix();

    }
}