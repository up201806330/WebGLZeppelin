/**
 * MyUnitCubeQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCubeQuad2 extends CGFobject {
    constructor(scene) {
        super(scene);
        this.quad = new MyQuad(this.scene);

        // this.initCubeMaterials();
    }

    /*
    initCubeMaterials(){
        this.bottom     = new CGFtexture(this.scene, 'images/split_cubemap/bottom.png');
        this.top        = new CGFtexture(this.scene, 'images/split_cubemap/top.png');
        this.left       = new CGFtexture(this.scene, 'images/split_cubemap/left.png');
        this.right      = new CGFtexture(this.scene, 'images/split_cubemap/right.png');
        this.front      = new CGFtexture(this.scene, 'images/split_cubemap/front.png');
        this.back1      = new CGFtexture(this.scene, 'images/split_cubemap/back.png');

        this.materialBottom = new CGFappearance(this.scene);
        this.materialBottom.setAmbient(0.1, 0.1, 0.1, 1);
        this.materialBottom.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialBottom.setSpecular(0.1, 0.1, 0.1, 1);
        this.materialBottom.setShininess(10.0);
        this.materialBottom.setEmission(0.9, 0.9, 0.9, 1);
        this.materialBottom.setTexture(this.bottom);
        this.materialBottom.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');

        this.materialTop = new CGFappearance(this.scene);
        this.materialTop.setAmbient(0.1, 0.1, 0.1, 1);
        this.materialTop.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialTop.setSpecular(0.1, 0.1, 0.1, 1);
        this.materialTop.setShininess(10.0);
        this.materialTop.setEmission(0.9, 0.9, 0.9, 1);
        this.materialTop.setTexture(this.top);
        this.materialTop.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');

        this.materialSideN = new CGFappearance(this.scene);
        this.materialSideN.setAmbient(0.1, 0.1, 0.1, 1);
        this.materialSideN.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialSideN.setSpecular(0.1, 0.1, 0.1, 1);
        this.materialSideN.setShininess(10.0);
        this.materialSideN.setEmission(0.9, 0.9, 0.9, 1);
        this.materialSideN.setTexture(this.front);
        this.materialSideN.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');
        
        this.materialSideS = new CGFappearance(this.scene);
        this.materialSideS.setAmbient(0.1, 0.1, 0.1, 1);
        this.materialSideS.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialSideS.setSpecular(0.1, 0.1, 0.1, 1);
        this.materialSideS.setShininess(10.0);
        this.materialSideS.setEmission(0.9, 0.9, 0.9, 1);
        this.materialSideS.setTexture(this.back);
        this.materialSideS.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');
        
        this.materialSideW = new CGFappearance(this.scene);
        this.materialSideW.setAmbient(0.1, 0.1, 0.1, 1);
        this.materialSideW.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialSideW.setSpecular(0.1, 0.1, 0.1, 1);
        this.materialSideW.setShininess(10.0);
        this.materialSideW.setEmission(0.9, 0.9, 0.9, 1);
        this.materialSideW.setTexture(this.left);
        this.materialSideW.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');
        
        this.materialSideE = new CGFappearance(this.scene);
        this.materialSideE.setAmbient(0.1, 0.1, 0.1, 1);
        this.materialSideE.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialSideE.setSpecular(0.1, 0.1, 0.1, 1);
        this.materialSideE.setShininess(10.0);
        this.materialSideE.setEmission(0.9, 0.9, 0.9, 1);
        this.materialSideE.setTexture(this.right);
        this.materialSideE.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');
    }
    */
    display() {
        //this.scene.scale(1, 1, -1);
        
        // ZX face (higher Y) TOP
        this.scene.pushMatrix();
        this.scene.scale(0.5,0.5,0.5);
        this.scene.rotate(90*Math.PI/180,1,0,0);
        this.scene.translate(0, 0, -0.5);
        this.scene.scale(-1, -1, 1); //Fixed invert
        // this.materialTop.apply();
        this.quad.display();
        this.scene.popMatrix();

        // ZX face (lower Y) BOTTOM
        this.scene.pushMatrix();
        this.scene.scale(0.5,0.5,0.5);
        this.scene.rotate(90*Math.PI/180,1,0,0);
        this.scene.translate(0, 0, 0.5);
        this.scene.scale(1, 1, -1);
        this.scene.scale(-1, 1, 1); //Fixed invert
        // this.materialBottom.apply();
        this.quad.display();
        this.scene.popMatrix();

        // XY face (lower Z) SOUTH
        this.scene.pushMatrix();
        this.scene.scale(0.5,0.5,0.5);
        this.scene.translate(0, 0, -0.5);
        // this.materialSideS.apply();
        this.quad.display();
        this.scene.popMatrix();
        
        // XY face (higher Z) NORTH
        this.scene.pushMatrix();
        this.scene.scale(0.5,0.5,0.5);
        this.scene.translate(0, 0, 0.5);
        this.scene.scale(-1, 1, -1); // Needed because texture was outside the cube and inverted
        // this.materialSideN.apply();
        this.quad.display();
        this.scene.popMatrix();

        // ZY face (lower X) EAST
        this.scene.pushMatrix();
        this.scene.scale(0.5,0.5,0.5);
        this.scene.rotate(90*Math.PI/180,0,1,0);
        this.scene.translate(0, 0, -0.5);
        // this.materialSideE.apply();
        this.quad.display();
        this.scene.popMatrix();

        // ZY face (higher X) WEST
        this.scene.pushMatrix();
        this.scene.scale(0.5,0.5,0.5);
        this.scene.rotate(90*Math.PI/180,0,1,0);
        this.scene.translate(0, 0, 0.5);
        this.scene.scale(-1, 1, -1); // Needed because texture was outside the cube and inverted
        // this.materialSideW.apply();
        this.quad.display();
        this.scene.popMatrix();
    }
}