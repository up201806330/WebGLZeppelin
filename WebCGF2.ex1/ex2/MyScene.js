/**
* MyScene
* @constructor
*/
class MyScene extends CGFscene {
    constructor() {
        super();
    }
    init(application) {
        super.init(application);
        this.initCameras();
        this.initLights();

        //Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0);

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.tangram = new MyTangram(this);
        this.unitCube = new MyUnitCube(this);
        this.quad = new MyQuad(this);
        this.unitQuadCube = new MyUnitCubeQuad(this);
        this.tableTop = new MyTableTop(this);
        this.tableLeg = new MyTableLeg(this);
        this.fullTable = new MyFullTable(this);
        this.fullChair = new MyFullChair(this);
        this.tableChair = new MyTableChair(this);
        this.classroom = new MyClassroom(this);

        //Objects connected to MyInterface
        this.displayAxis = true;
        this.scaleFactor = 1;

        this.displayTangram = false;
        this.displayUnitCube = false;
        this.displayQuad = false;
        this.displayQuadCube = false;
        this.displayTableTop = false;
        this.displayTableLeg = false;
        this.displayFullTable = false;
        this.displayFullChair = false;
        this.displayTableChair = false;
        this.displayClassroom = true;
    }
    
    initLights() {
        // this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setPosition(30, 25, 30, 5);
        this.lights[0].setDiffuse(1, 1, 1, 1);
        this.lights[0].enable();
        this.lights[0].update();

        this.lights[1].setPosition(5, -20, 5, -5);
        this.lights[1].setDiffuse(1, 1, 1, 1);
        this.lights[1].enable();
        this.lights[1].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(15, 15, 15), vec3.fromValues(0, 0, 0));
    }
    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }
    

    // Colors 
    setWhite() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }

    setRed() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(1, 0, 0, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }

    setPink() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(1, 0.5, 1, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }

    setPurple() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.5, 0, 1, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }

    setGreen() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0, 1, 0, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }

    setYellow() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(1, 1, 0, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }

    setBlue() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0, 0, 1, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }

    setLightBlue() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0, 0.5, 1, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }

    setOrange() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(1, 0.5, 0, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }

    setBlack() {
        this.setAmbient(0, 0, 0, 0.5);
        this.setDiffuse(0.0, 0.0, 0.0, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }

    setGrey() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.4196078431372549, 0.403921568627451, 0.403921568627451, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }

    setTableTopColor() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.9098039215686274, 0.8980392156862745, 0.8627450980392157);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }

    setTableLegColor() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.13725490196078433, 0.1803921568627451, 0.21176470588235294);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }

    // ------------------------------------

    display() {
        // ---- BEGIN Background, camera and axis setup
        // Clear image and depth buffer everytime we update the scene
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        // Initialize Model-View matrix as identity (no transformation
        this.updateProjectionMatrix()
        this.loadIdentity();
        // Apply transformations corresponding to the camera position relative to the origin
        this.applyViewMatrix();
        
        // Draw axis
        if (this.displayAxis)
            this.axis.display();

        
        this.setDefaultAppearance();

        var sca = [this.scaleFactor, 0.0, 0.0, 0.0,
                    0.0, this.scaleFactor, 0.0, 0.0,
                    0.0, 0.0, this.scaleFactor, 0.0,
                    0.0, 0.0, 0.0, 1.0];

        this.multMatrix(sca);

        // ---- BEGIN Primitive drawing section

        this.pushMatrix();
        this.rotate(-90*Math.PI/180,1,0,0);


        if (this.displayTangram) {
            this.pushMatrix();
            this.translate(2.5, -4.5, 0);
            this.tangram.display();
            this.popMatrix();
        }

        if (this.displayUnitCube) {
            this.pushMatrix();
            this.setWhite();
            this.scale(5,9,1);
            this.translate(0.5, -0.5, -0.6);
            this.unitCube.display();
            this.popMatrix();
        }
           
        if (this.displayQuad) {
            this.pushMatrix();
            this.setLightBlue();
            this.quad.display();
            this.popMatrix();
        }

        
        if (this.displayQuadCube) {
            this.pushMatrix();
            this.setWhite();
            this.scale(5,9,1);
            this.translate(0.5, -0.5, -0.6);
            this.unitQuadCube.display();
            this.popMatrix();
        }

        this.rotate(+90*Math.PI/180,1,0,0);

        this.popMatrix();


        // Testing Table Top
        this.pushMatrix();
        if (this.displayTableTop) {
            this.translate(0, 0, 0);
            this.tableTop.display();
        }
        this.popMatrix();
        
        // Testing Table Leg
        this.pushMatrix();
        if (this.displayTableLeg) {
            this.translate(0, 0, 0);
            this.tableLeg.display();
        }
        this.popMatrix();

        // Testing Table
        this.pushMatrix();
        if (this.displayFullTable) {
            this.fullTable.display();
        }
        this.popMatrix();

        // Testing Chair
        this.pushMatrix();
        if (this.displayFullChair) {
            this.fullChair.display();
        }
        this.popMatrix();


        // Testing Table and Chair
        this.pushMatrix();
        if (this.displayTableChair) {
            this.tableChair.display();
        }
        this.popMatrix();

        // Testing Classroom
        this.pushMatrix();
        if (this.displayClassroom) {
            this.classroom.display();
        }
        this.popMatrix();
        
        // ---- END Primitive drawing section
    }
}