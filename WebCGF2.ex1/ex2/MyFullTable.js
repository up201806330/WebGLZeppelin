/**
 * MyFullTable
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyFullTable extends CGFobject {
    constructor(scene) {
        super(scene);
        this.tableTop_ = new MyTableTop(this.scene);
        this.tableLeg_ = new MyTableLeg(this.scene);
        this.computer = new MyUnitCubeQuad(this.scene);
        this.monitor = new MyUnitCubeQuad(this.scene);
        this.keyboard = new MyUnitCubeQuad(this.scene);
    }

    display() {
        // Table Top
        this.scene.pushMatrix();
        this.scene.translate(0, 0.71, 0);
        this.tableTop_.display();
        this.scene.popMatrix();

        // Table Leg 1/4
        this.scene.pushMatrix();
        this.scene.translate(0.4, 0.35, -0.65);
        this.tableLeg_.display();
        this.scene.popMatrix();

        // Table Leg 2/4
        this.scene.pushMatrix();
        this.scene.translate(-0.4, 0.35, -0.65);
        this.tableLeg_.display();
        this.scene.popMatrix();

        // Table Leg 3/4
        this.scene.pushMatrix();
        this.scene.translate(0.4, 0.35, 0.65);
        this.tableLeg_.display();
        this.scene.popMatrix();

        // Table Leg 4/4
        this.scene.pushMatrix();
        this.scene.translate(-0.4, 0.35, 0.65);
        this.tableLeg_.display();
        this.scene.popMatrix();
        
        // Computer
        this.scene.pushMatrix();
        this.scene.scale(0.3, 0.5, 0.3);
        this.scene.translate(0.92, 0.82, -1.41);
        this.computer.display();
        this.scene.popMatrix();

        // Monitor
        this.scene.pushMatrix();
        this.scene.setBlack();
        this.scene.scale(0.1, 0.7, 0.8);
        this.scene.translate(-1.2, 1.8, 0.15);
        this.monitor.display();
        this.scene.popMatrix();

        // Keyboard
        this.scene.pushMatrix();
        this.scene.setBlack();
        this.scene.scale(0.2, 0.05, 0.7);
        this.scene.translate(1.2, 15.5, 0.4);
        this.monitor.display();
        this.scene.popMatrix();

        // Mouse
        this.scene.pushMatrix();
        this.scene.setBlack();
        this.scene.scale(0.15, 0.05, 0.1);
        this.scene.translate(1.8, 15.5, -3);
        this.monitor.display();
        this.scene.popMatrix();
    }
}