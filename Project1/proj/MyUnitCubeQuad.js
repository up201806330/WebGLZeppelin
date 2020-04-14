/**
 * MyUnitCubeQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCubeQuad extends CGFobject {
    constructor(scene) {
        super(scene);
        this.quad = new MyQuad(this.scene);

        this.initCubeMaterials();
    }

    initCubeMaterials(){
        this.materialBottom = new CGFappearance(this.scene);
        this.materialBottom.setAmbient(0.1, 0.1, 0.1, 1);
        this.materialBottom.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialBottom.setSpecular(0.1, 0.1, 0.1, 1);
        this.materialBottom.setShininess(10.0);
        this.materialBottom.loadTexture('images/split_cubemap/bottom.png');
        this.materialBottom.setTextureWrap('REPEAT', 'REPEAT');

        this.materialTop = new CGFappearance(this.scene);
        this.materialTop.setAmbient(0.1, 0.1, 0.1, 1);
        this.materialTop.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialTop.setSpecular(0.1, 0.1, 0.1, 1);
        this.materialTop.setShininess(10.0);
        this.materialTop.loadTexture('images/split_cubemap/top.png');
        this.materialTop.setTextureWrap('REPEAT', 'REPEAT');

        this.materialSideN = new CGFappearance(this.scene);
        this.materialSideN.setAmbient(0.1, 0.1, 0.1, 1);
        this.materialSideN.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialSideN.setSpecular(0.1, 0.1, 0.1, 1);
        this.materialSideN.setShininess(10.0);
        this.materialSideN.loadTexture('images/split_cubemap/front.png');
        this.materialSideN.setTextureWrap('REPEAT', 'REPEAT');
        
        this.materialSideS = new CGFappearance(this.scene);
        this.materialSideS.setAmbient(0.1, 0.1, 0.1, 1);
        this.materialSideS.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialSideS.setSpecular(0.1, 0.1, 0.1, 1);
        this.materialSideS.setShininess(10.0);
        this.materialSideS.loadTexture('images/split_cubemap/back.png');
        this.materialSideS.setTextureWrap('REPEAT', 'REPEAT');
        
        this.materialSideW = new CGFappearance(this.scene);
        this.materialSideW.setAmbient(0.1, 0.1, 0.1, 1);
        this.materialSideW.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialSideW.setSpecular(0.1, 0.1, 0.1, 1);
        this.materialSideW.setShininess(10.0);
        this.materialSideW.loadTexture('images/split_cubemap/left.png');
        this.materialSideW.setTextureWrap('REPEAT', 'REPEAT');
        
        this.materialSideE = new CGFappearance(this.scene);
        this.materialSideE.setAmbient(0.1, 0.1, 0.1, 1);
        this.materialSideE.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialSideE.setSpecular(0.1, 0.1, 0.1, 1);
        this.materialSideE.setShininess(10.0);
        this.materialSideE.loadTexture('images/split_cubemap/right.png');
        this.materialSideE.setTextureWrap('REPEAT', 'REPEAT');

        //this.bottomMaterial = new CGFtexture(this.scene,'images/mineBottom.png');
        //this.topMaterial = new CGFtexture(this.scene,'images/mineTop.png');
        //this.sideMaterial = new CGFtexture(this.scene,'images/mineSide.png')
    }

    display() {
        //this.scene.scale(1, 1, -1);
        
        // ZX face (higher Y) TOP
        this.scene.pushMatrix();
        this.scene.scale(100,100,100);
        this.scene.rotate(90*Math.PI/180,1,0,0);
        this.scene.translate(0, 0, -0.5);
        this.materialTop.apply();
        this.quad.display();
        this.scene.popMatrix();

        // ZX face (lower Y) BOTTOM
        this.scene.pushMatrix();
        this.scene.scale(100,100,100);
        this.scene.rotate(90*Math.PI/180,1,0,0);
        this.scene.translate(0, 0, 0.5);
        this.scene.scale(1, 1, -1);
        this.materialBottom.apply();
        this.quad.display();
        this.scene.popMatrix();

        // XY face (lower Z) SOUTH
        this.scene.pushMatrix();
        this.scene.scale(100,100,100);
        this.scene.translate(0, 0, -0.5);
        this.materialSideS.apply();
        this.quad.display();
        this.scene.popMatrix();
        
        // XY face (higher Z) NORTH
        this.scene.pushMatrix();
        this.scene.scale(100,100,100);
        this.scene.translate(0, 0, 0.5);
        this.scene.scale(-1, 1, -1); // Needed because texture was outside the cube and inverted
        this.materialSideN.apply();
        this.quad.display();
        this.scene.popMatrix();

        // ZY face (lower X) EAST
        this.scene.pushMatrix();
        this.scene.scale(100,100,100);
        this.scene.rotate(90*Math.PI/180,0,1,0);
        this.scene.translate(0, 0, -0.5);
        this.materialSideE.apply();
        this.quad.display();
        this.scene.popMatrix();

        // ZY face (higher X) WEST
        this.scene.pushMatrix();
        this.scene.scale(100,100,100);
        this.scene.rotate(90*Math.PI/180,0,1,0);
        this.scene.translate(0, 0, 0.5);
        this.scene.scale(-1, 1, -1); // Needed because texture was outside the cube and inverted
        this.materialSideW.apply();
        this.quad.display();
        this.scene.popMatrix();
    }
}