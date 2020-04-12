/**
 * MyClassroom
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyClassroom extends CGFobject {
    constructor(scene) {
        super(scene);
        this.tableChair_ = new MyTableChair(this.scene);
        this.wall_ = new MyUnitCubeQuad(this.scene);
        this.floor_ = new MyUnitCubeQuad(this.scene);
    }

    display() {

        // Tables and Chairs Facing the Camera
        this.scene.pushMatrix();
        this.scene.rotate(180*Math.PI/180,0,1,0);

        this.scene.translate(-2,0,-2);
        this.tableChair_.display();
        this.scene.translate(0,0,-1.5);
        this.tableChair_.display();

        this.scene.translate(0,0,-3);
        this.tableChair_.display();
        this.scene.translate(0,0,-1.5);
        this.tableChair_.display();

        this.scene.translate(-5,0,0);
        this.tableChair_.display();
        this.scene.translate(0,0,+1.5);
        this.tableChair_.display();

        this.scene.translate(0,0,3);
        this.tableChair_.display();
        this.scene.translate(0,0,+1.5);
        this.tableChair_.display();

        this.scene.popMatrix();

        // Tables and Chairs Backs Turned to the Camera
        this.scene.pushMatrix();
        this.scene.translate(3,0,2);
        this.tableChair_.display();
        this.scene.translate(0,0,1.5);
        this.tableChair_.display();

        this.scene.translate(0,0,3);
        this.tableChair_.display();
        this.scene.translate(0,0,1.5);
        this.tableChair_.display();
        
        this.scene.translate(5,0,0);
        this.tableChair_.display();
        this.scene.translate(0,0,-1.5);
        this.tableChair_.display();

        this.scene.translate(0,0,-3);
        this.tableChair_.display();
        this.scene.translate(0,0,-1.5);
        this.tableChair_.display();

        this.scene.popMatrix();


        // "Left" Wall
        this.scene.pushMatrix();
        this.scene.setWhite();
        this.scene.scale(0.1, 6, 10);
        this.scene.translate(0, 0.5, 0.5);
        this.wall_.display();
        this.scene.popMatrix();

        // "Right" Wall
        this.scene.pushMatrix();
        this.scene.setWhite();
        this.scene.rotate(90*Math.PI/180,0,1,0);
        this.scene.scale(0.1, 6, 10);
        this.scene.translate(0, 0.5, 0.5);
        this.wall_.display();
        this.scene.popMatrix();

        // Floor
        this.scene.pushMatrix();
        this.scene.setGrey();
        this.scene.rotate(90*Math.PI/180,0,1,0);
        this.scene.scale(10, 0.05, 10);
        this.scene.translate(-0.5, -0.7, 0.5);
        this.floor_.display();
        this.scene.popMatrix();
    }
}