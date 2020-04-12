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
        this.smallTriangle = new MyTriangleSmall(this.scene);
        this.bigTriangle = new MyTriangleBig(this.scene);

        this.initTangramMaterials();
	}

    initTangramMaterials() {
        this.greenMaterial = new CGFappearance(this.scene);
        this.greenMaterial.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.greenMaterial.setDiffuse(0, 1, 0, 1.0);
        this.greenMaterial.setSpecular(1.0, 1.0, 1.0, 1.0);
        this.greenMaterial.setShininess(10.0);

        this.orangeMaterial = new CGFappearance(this.scene);
        this.orangeMaterial.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.orangeMaterial.setDiffuse(1, 0.5, 0, 1.0);
        this.orangeMaterial.setSpecular(1.0, 1.0, 1.0, 1.0);
        this.orangeMaterial.setShininess(10.0);

        this.lightBlueMaterial = new CGFappearance(this.scene);
        this.lightBlueMaterial.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.lightBlueMaterial.setDiffuse(0, 0.5, 1, 1.0);
        this.lightBlueMaterial.setSpecular(1.0, 1.0, 1.0, 1.0);
        this.lightBlueMaterial.setShininess(10.0);

        this.pinkMaterial = new CGFappearance(this.scene);
        this.pinkMaterial.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.pinkMaterial.setDiffuse(1, 0.5, 1, 1.0);
        this.pinkMaterial.setSpecular(1.0, 1.0, 1.0, 1.0);
        this.pinkMaterial.setShininess(10.0);

        this.purpleMaterial = new CGFappearance(this.scene);
        this.purpleMaterial.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.purpleMaterial.setDiffuse(0.5, 0, 1.0, 1.0);
        this.purpleMaterial.setSpecular(1.0, 1.0, 1.0, 1.0);
        this.purpleMaterial.setShininess(10.0);

        this.redMaterial = new CGFappearance(this.scene);
        this.redMaterial.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.redMaterial.setDiffuse(1.0, 0, 0, 1.0);
        this.redMaterial.setSpecular(1.0, 1.0, 1.0, 1.0);
        this.redMaterial.setShininess(10.0);

        this.yellowMaterial = new CGFappearance(this.scene);
        this.yellowMaterial.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.yellowMaterial.setDiffuse(1, 1, 0, 1.0);
        this.yellowMaterial.setSpecular(1.0, 1.0, 1.0, 1.0);
        this.yellowMaterial.setShininess(10.0);

    }

    display() {

		var diaMatrix = [1.0, 0.0, 0.0, 0.0,
			0.0, 1.0, 0.0, 0.0,
			0.0, 0.0, 1.0, 0.0,
            -1.0, 0.0, 0.0, 1.0];
        

		// Drawing Green Diamond
        this.scene.pushMatrix();
        // this.greenMaterial.apply();
        this.scene.customMaterial.apply(); // Custom Material instead of the Green one

        this.scene.multMatrix(diaMatrix);
        this.diamond.display();
        this.scene.popMatrix();

        // Drawing Orange Triangle
        this.scene.pushMatrix();
        this.orangeMaterial.apply();
        this.scene.rotate(90*Math.PI/180,0,0,1);
        this.scene.translate(-2, 0, 0);
        this.bigTriangle.display();

        // Drawing Light Blue Triangle
        this.lightBlueMaterial.apply();
        this.scene.rotate(180*Math.PI/180,0,0,1);
        this.bigTriangle.display();
        this.scene.popMatrix();

        // Drawing Pink Triangle
        this.scene.pushMatrix();
        //this.scene.setPink();
        this.pinkMaterial.apply();

        this.scene.rotate(180*Math.PI/180,0,0,1);
        this.scene.translate(-1,1,0);
        this.triangle.display();
        this.scene.popMatrix();

        // Drawing Purple Triangle
        this.scene.pushMatrix();
        this.purpleMaterial.apply();
        this.scene.translate(1,0,0);
        this.smallTriangle.display();

        // Drawing Red Triangle
        this.redMaterial.apply();
        this.scene.rotate(180*Math.PI/180,0,0,1);
        this.scene.translate(1,-1,0); 
        this.smallTriangle.display();  
        this.scene.popMatrix();

        // Drawing Yellow Parallelogram
        this.scene.pushMatrix();
        this.yellowMaterial.apply();
        this.scene.rotate(180*Math.PI/180,0,1,0);
        this.scene.scale(1, 1, -1);
        this.scene.translate(0,1,0);
        this.scene.rotate(60*Math.PI/180,0,0,1);
        this.parallelogram.display();
        this.scene.popMatrix();

    }

    enableNormalViz() {
        this.diamond.enableNormalViz();
        this.triangle.enableNormalViz();
        this.parallelogram.enableNormalViz();
        this.smallTriangle.enableNormalViz();
        this.bigTriangle.enableNormalViz();
    }

    disableNormalViz() {
        this.diamond.disableNormalViz();
        this.triangle.disableNormalViz();
        this.parallelogram.disableNormalViz();
        this.smallTriangle.disableNormalViz();
        this.bigTriangle.disableNormalViz();
    }
}