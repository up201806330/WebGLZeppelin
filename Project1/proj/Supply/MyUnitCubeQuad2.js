/**
 * MyUnitCubeQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCubeQuad2 extends CGFobject {
    constructor(scene) {
        super(scene);
        this.quad = new MyQuad(this.scene);

        this.initCubeMaterials();
    }


    initCubeMaterials(){
        this.top = new CGFtexture(this.scene, 'images/crate/crateTop.png');
        this.side = new CGFtexture(this.scene, 'images/crate/crateSide.png');

        this.materialTop = new CGFappearance(this.scene);
        this.materialTop.setAmbient(0.1, 0.1, 0.1, 1);
        this.materialTop.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialTop.setSpecular(0.1, 0.1, 0.1, 1);
        this.materialTop.setShininess(10.0);
        this.materialTop.setEmission(0.9, 0.9, 0.9, 1);
        this.materialTop.setTexture(this.top);
        this.materialTop.setTextureWrap('REPEAT', 'REPEAT');

        this.materialSide = new CGFappearance(this.scene);
        this.materialSide.setAmbient(0.1, 0.1, 0.1, 1);
        this.materialSide.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialSide.setSpecular(0.1, 0.1, 0.1, 1);
        this.materialSide.setShininess(10.0);
        this.materialSide.setEmission(0.9, 0.9, 0.9, 1);
        this.materialSide.setTexture(this.side);
        this.materialSide.setTextureWrap('REPEAT', 'REPEAT');
    }
    
    displayOnFall() {
        
        // ZX face (higher Y) TOP
        this.scene.pushMatrix();
        this.scene.scale(0.5,0.5,0.5);
        this.scene.rotate(90*Math.PI/180,1,0,0);
        this.scene.translate(0, 0, -0.5);
        this.scene.scale(-1, -1, 1); //Fixed invert
        this.materialTop.apply();
        this.quad.display();
        this.scene.popMatrix();

        // ZX face (lower Y) BOTTOM
        this.scene.pushMatrix();
        this.scene.scale(0.5,0.5,0.5);
        this.scene.rotate(90*Math.PI/180,1,0,0);
        this.scene.translate(0, 0, 0.5);
        this.scene.scale(1, 1, -1);
        this.scene.scale(-1, 1, 1); //Fixed invert
        this.quad.display();
        this.scene.popMatrix();

        // XY face (lower Z) SOUTH
        this.scene.pushMatrix();
        this.scene.scale(0.5,0.5,0.5);
        this.scene.translate(0, 0, -0.5);
        this.materialSide.apply();
        this.quad.display();
        this.scene.popMatrix();
        
        // XY face (higher Z) NORTH
        this.scene.pushMatrix();
        this.scene.scale(0.5,0.5,0.5);
        this.scene.translate(0, 0, 0.5);
        this.scene.scale(-1, 1, -1); // Needed because texture was outside the cube and inverted
        this.quad.display();
        this.scene.popMatrix();

        // ZY face (lower X) EAST
        this.scene.pushMatrix();
        this.scene.scale(0.5,0.5,0.5);
        this.scene.rotate(90*Math.PI/180,0,1,0);
        this.scene.translate(0, 0, -0.5);
        this.quad.display();
        this.scene.popMatrix();

        // ZY face (higher X) WEST
        this.scene.pushMatrix();
        this.scene.scale(0.5,0.5,0.5);
        this.scene.rotate(90*Math.PI/180,0,1,0);
        this.scene.translate(0, 0, 0.5);
        this.scene.scale(-1, 1, -1); // Needed because texture was outside the cube and inverted
        this.quad.display();
        this.scene.popMatrix();
    }

    displayOnLanded(openingAngle) {

        // ZX face (lower Y) BOTTOM
        this.scene.pushMatrix();
        this.scene.scale(0.5,0.5,0.5);
        this.scene.rotate(90*Math.PI/180,1,0,0);
        this.scene.translate(0, 0, 0.5);
        this.scene.scale(1, 1, -1);
        this.scene.scale(-1, 1, 1); // Fixed invert
        this.materialTop.apply();
        this.quad.display();
        this.scene.popMatrix();

        // XY face (lower Z) SOUTH
        this.scene.pushMatrix();
        this.scene.scale(0.5,0.5,0.5);
        this.scene.translate(0, -0.5, -0.5);
        this.scene.rotate(-openingAngle*Math.PI/180,1,0,0); // opening rotation angle
        this.scene.translate(0, 0.5, 0);
        this.quad.display();
        this.scene.popMatrix();
        
        // XY face (higher Z) NORTH
        this.scene.pushMatrix();
        this.scene.scale(0.5,0.5,0.5);
        this.scene.translate(0, -0.5, 0.5);
        this.scene.rotate(openingAngle*Math.PI/180,1,0,0); // opening rotation angle
        this.scene.scale(-1, 1, -1); // Needed because texture was outside the cube and inverted
        this.scene.translate(0, 0.5, 0);
        this.quad.display();
        this.scene.popMatrix();

        // ZY face (lower X) EAST
        this.scene.pushMatrix();
        this.scene.scale(0.5,0.5,0.5);
        this.scene.translate(-0.5, -0.5, 0);
        this.scene.rotate(openingAngle*Math.PI/180,0,0,1); // opening rotation angle
        this.scene.rotate(90*Math.PI/180,0,1,0);
        this.scene.translate(0, 0.5, 0);
        this.quad.display();
        this.scene.popMatrix();

        // ZY face (higher X) WEST
        this.scene.pushMatrix();
        this.scene.scale(0.5,0.5,0.5);
        this.scene.translate(0.5, -0.5, 0);
        this.scene.rotate(-openingAngle*Math.PI/180,0,0,1); // opening rotation angle
        this.scene.rotate(90*Math.PI/180,0,1,0);
        this.scene.translate(0, 0.5, 0);
        this.scene.scale(-1, 1, -1); // Needed because texture was outside the cube and inverted
        this.quad.display();
        this.scene.popMatrix();
    }
}
