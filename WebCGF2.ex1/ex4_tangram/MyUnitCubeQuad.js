/**
 * MyUnitCubeQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCubeQuad extends CGFobject {
    constructor(scene) {
        super(scene);
        this.sides = new MyQuad(this.scene);
        this.top = new MyQuad(this.scene);
        this.bottom = new MyQuad(this.scene);
    }

    display() {

        this.material = new CGFappearance(this);
        this.material.setAmbient(0.1, 0.1, 0.1, 1);
        this.material.setDiffuse(0.9, 0.9, 0.9, 1);
        this.material.setSpecular(0.1, 0.1, 0.1, 1);
        this.material.setShininess(10.0);
        this.material.loadTexture('images/mineBottom.png');
        this.material.setTextureWrap('REPEAT', 'REPEAT');

        this.material.apply();

        // XY face (lower Z)
        this.scene.pushMatrix();
        //this.scene.setLightBlue();
        this.scene.translate(0, 0, -0.5);
        this.bottom.display();
        this.scene.popMatrix();

        this.material.setTexture(new CGFtexture(this,'images/mineTop.png'));
        
        // XY face (higher Z)
        this.scene.pushMatrix();
        //this.scene.setLightBlue();
        this.scene.translate(0, 0, 0.5);
        this.top.display();
        this.scene.popMatrix();

        this.material.setTexture(new CGFtexture(this,'images/mineSide.png'));

        // ZY face (lower X)
        this.scene.pushMatrix();
        //this.scene.setLightBlue();
        this.scene.rotate(90*Math.PI/180,0,1,0);
        this.scene.translate(0, 0, -0.5);
        this.sides.display();
        this.scene.popMatrix();

        // ZY face (higher X)
        this.scene.pushMatrix();
        //this.scene.setLightBlue();
        this.scene.rotate(90*Math.PI/180,0,1,0);
        this.scene.translate(0, 0, 0.5);
        this.sides.display();
        this.scene.popMatrix();

        // ZX face (higher Y)
        this.scene.pushMatrix();
        //this.scene.setLightBlue();
        this.scene.rotate(90*Math.PI/180,1,0,0);
        this.scene.translate(0, 0, -0.5);
        this.sides.display();
        this.scene.popMatrix();

        // ZX face (lower Y)
        this.scene.pushMatrix();
        //this.scene.setLightBlue();
        this.scene.rotate(90*Math.PI/180,1,0,0);
        this.scene.translate(0, 0, 0.5);
        this.sides.display();
        this.scene.popMatrix();


        
    }

}