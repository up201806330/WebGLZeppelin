/**
 * MyBillboard
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyBillboard extends CGFobject {
    constructor(scene) {
        super(scene);

        this.boardFront = new MyPlane(this.scene, 10);
        this.boardBack = new MyPlane(this.scene, 10);
        this.support = new MyQuad(this.scene);
        this.progressBar = new MyPlane(this.scene, 10);

        this.initMaterials();
        this.initShaders();
    }

    initMaterials() {
        this.frontAppearance = new CGFappearance(this.scene);
        this.frontAppearance.setAmbient(0.1, 0.1, 0.1, 1);
        this.frontAppearance.setDiffuse(0.9, 0.9, 0.9, 1);
        this.frontAppearance.setShininess(10.0);
        this.frontAppearance.loadTexture('images/billboard/billboardFront.png');
        this.frontAppearance.setTextureWrap('REPEAT', 'REPEAT');

        this.backAppearance = new CGFappearance(this.scene);
        this.backAppearance.setAmbient(0.1, 0.1, 0.1, 1);
        this.backAppearance.setDiffuse(0.9, 0.9, 0.9, 1);
        this.backAppearance.setShininess(10.0);
        this.backAppearance.loadTexture('images/billboard/billboardBack.png');
        this.backAppearance.setTextureWrap('REPEAT', 'REPEAT');

        this.steelAppearance = new CGFappearance(this.scene);
        this.steelAppearance.setAmbient(0.1, 0.1, 0.1, 1);
        this.steelAppearance.setDiffuse(0.9, 0.9, 0.9, 1);
        this.steelAppearance.setShininess(10.0);
        this.steelAppearance.loadTexture('images/billboard/steel.png');
        this.steelAppearance.setTextureWrap('REPEAT', 'REPEAT');
    }

    initShaders() {
        this.progressShader = new CGFshader(this.scene.gl,'shaders/billboard.vert','shaders/billboard.frag');
        this.progressShader.setUniformsValues({drops: this.scene.suppliesDropped})
    }

    update() {
        this.progressShader.setUniformsValues({ suppliesDropped: this.scene.suppliesDropped});
    }

    reset() {
        this.progressShader.setUniformsValues({ suppliesDropped: this.scene.suppliesDropped });
    }

    display() {        

        // Progress Bar
        this.scene.pushMatrix();
        this.scene.setActiveShader(this.progressShader);
        this.scene.translate(0.0, -0.2, 0.0);
        this.scene.scale(1.2, 0.2, 1.0);
        this.progressBar.display();
        this.scene.popMatrix();

        this.scene.setActiveShader(this.scene.defaultShader);
        
        // Front
        this.scene.pushMatrix();
        this.frontAppearance.apply();
        this.scene.translate(0, 0.0, -0.01);
        this.scene.scale(2.0, 1.0, 1.0);
        this.boardFront.display();
        this.scene.popMatrix();

        // Back
        this.scene.pushMatrix();
        this.backAppearance.apply();
        this.scene.translate(0, 0.0, -0.02);
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.scene.scale(2.0, 1.0, 1.0);
        this.boardFront.display();
        this.scene.popMatrix();

        // Support 1
        this.scene.pushMatrix();
        this.steelAppearance.apply();
        this.scene.translate(0.9, -1.0, -0.01);
        this.scene.scale(0.2, 1, 1);
        this.support.display();
        this.scene.popMatrix();

        // Support 2
        this.scene.pushMatrix();
        this.steelAppearance.apply();
        this.scene.translate(-0.9, -1.0, -0.01);
        this.scene.scale(0.2, 1, 1);
        this.support.display();
        this.scene.popMatrix();
    }

}