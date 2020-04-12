/**
* MyInterface
* @constructor
*/
class MyInterface extends CGFinterface {
    constructor() {
        super();
    }

    init(application) {
        // call CGFinterface init
        super.init(application);
        // init GUI. For more information on the methods, check:
        // http://workshop.chromeexperiments.com/examples/gui
        this.gui = new dat.GUI();
        
        var obj = this;

        //Checkbox element in GUI
        this.gui.add(this.scene, 'displayAxis').name('Display Axis');

        //Slider element in GUI
        this.gui.add(this.scene, 'scaleFactor', 0.1, 5).name('Scale Factor');

        //Display Tangram Checkbox in GUI
        this.gui.add(this.scene, 'displayTangram').name("Tangram");

        //Display Unit Cube Checkbox in GUI
        this.gui.add(this.scene, 'displayUnitCube').name("Unit Cube");

        //Display Quad Checkbox in GUI
        this.gui.add(this.scene, 'displayQuad').name("Quad");

        //Display Quad Cube Checkbox in GUI
        this.gui.add(this.scene, 'displayQuadCube').name("Quad Cube");
        
        //Display Table Top Checkbox in GUI
        this.gui.add(this.scene, 'displayTableTop').name("Table Top");

        //Display Table Leg Checkbox in GUI
        this.gui.add(this.scene, 'displayTableLeg').name("Table Leg");

        //Display Full Table Checkbox in GUI
        this.gui.add(this.scene, 'displayFullTable').name("Full Table");

        //Display Full Chair Checkbox in GUI
        this.gui.add(this.scene, 'displayFullChair').name("Full Chair");

        //Display Table and Chair Checkbox in GUI
        this.gui.add(this.scene, 'displayTableChair').name("Table Chair");

        //Display Classroom Checkbox in GUI
        this.gui.add(this.scene, 'displayClassroom').name("Classroom");

        return true;
    }
}