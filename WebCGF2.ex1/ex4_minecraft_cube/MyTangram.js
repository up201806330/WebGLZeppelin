/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangram extends CGFobject {
	constructor(scene) {
		super(scene);

		this.diamond = new MyDiamond(this.scene);
        this.triangle = new MyTriangle(this.scene);
        this.parallelogram = new MyParallelogram(this.scene);
        this.smallTrianglePurple = new MyTriangleSmall(this.scene, 0);
        this.smallTriangleRed = new MyTriangleSmall(this.scene, 1);
        this.bigTriangleLightBlue = new MyTriangleBig(this.scene, 0);
        this.bigTriangleOrange = new MyTriangleBig(this.scene, 1);
	}
	

    display() {

        this.scene.scale(0.25, 0.25, 0.25)

		var diaMatrix = [1.0, 0.0, 0.0, 0.0,
			0.0, 1.0, 0.0, 0.0,
			0.0, 0.0, 1.0, 0.0,
            -1.0, 0.0, 0.0, 1.0];
        

		// Drawing Green Diamond
        this.scene.pushMatrix();
		//this.scene.setGreen();
        this.scene.multMatrix(diaMatrix);
        this.diamond.display();
        this.scene.popMatrix();

        // Drawing Orange Triangle
        this.scene.pushMatrix();
        //this.scene.setOrange();  
        this.scene.rotate(90*Math.PI/180,0,0,1);
        this.scene.translate(-2, 0, 0);
        this.bigTriangleOrange.display();

        // Drawing Light Blue Triangle
        //this.scene.setLightBlue();
        this.scene.rotate(180*Math.PI/180,0,0,1);
        this.bigTriangleLightBlue.display();
        this.scene.popMatrix();

        // Drawing Pink Triangle
        this.scene.pushMatrix();
        //this.scene.setPink();
        this.scene.rotate(180*Math.PI/180,0,0,1);
        this.scene.translate(-1,1,0);
        this.triangle.display();
        this.scene.popMatrix();

        // Drawing Purple Triangle
        this.scene.pushMatrix();
        //this.scene.setPurple();
        this.scene.translate(1,0,0);
        this.smallTrianglePurple.display();

        // Drawing Red Triangle
        //this.scene.setRed();
        this.scene.rotate(180*Math.PI/180,0,0,1);
        this.scene.translate(1,-1,0); 
        this.smallTriangleRed.display();  
        this.scene.popMatrix();

        // Drawing Yellow Parallelogram
        this.scene.pushMatrix();
        //this.scene.setYellow();
        this.scene.rotate(80*Math.PI/180,0,0,1);
        this.scene.translate(1,0.19,0);
        this.parallelogram.display();
        this.scene.popMatrix();

    }
}