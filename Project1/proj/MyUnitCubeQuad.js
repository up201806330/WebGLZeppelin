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

    updateAppliedTexture(){
        this.materialBottom.setTexture(this.bottoms[this.scene.selectedTexture]);
        this.materialTop.setTexture(this.tops[this.scene.selectedTexture]);
        this.materialSideN.setTexture(this.fronts[this.scene.selectedTexture]);
        this.materialSideS.setTexture(this.backs[this.scene.selectedTexture]);
        this.materialSideE.setTexture(this.rights[this.scene.selectedTexture]);
        this.materialSideW.setTexture(this.lefts[this.scene.selectedTexture]);
    }

    initCubeMaterials(){
        this.bottom1    = new CGFtexture(this.scene, 'images/split_cubemap/bottom.png');
        this.bottom2    = new CGFtexture(this.scene, 'images/second_tex/bottom.png');
        this.top1       = new CGFtexture(this.scene, 'images/split_cubemap/top.png');
        this.top2       = new CGFtexture(this.scene, 'images/second_tex/top.png');
        this.left1      = new CGFtexture(this.scene, 'images/split_cubemap/left.png');
        this.left2      = new CGFtexture(this.scene, 'images/second_tex/left.png');
        this.right1     = new CGFtexture(this.scene, 'images/split_cubemap/right.png');
        this.right2     = new CGFtexture(this.scene, 'images/second_tex/right.png');
        this.front1     = new CGFtexture(this.scene, 'images/split_cubemap/front.png');
        this.front2     = new CGFtexture(this.scene, 'images/second_tex/front.png');
        this.back1      = new CGFtexture(this.scene, 'images/split_cubemap/back.png');
        this.back2      = new CGFtexture(this.scene, 'images/second_tex/back.png');

        this.bottoms    = [this.bottom1,    this.bottom2];
        this.tops       = [this.top1,       this.top2];
        this.lefts      = [this.left1,      this.left2];
        this.rights     = [this.right1,     this.right2];
        this.fronts     = [this.front1,     this.front2];
        this.backs      = [this.back1,      this.back2];

        this.materialBottom = new CGFappearance(this.scene);
        this.materialBottom.setAmbient(0.1, 0.1, 0.1, 1);
        this.materialBottom.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialBottom.setSpecular(0.1, 0.1, 0.1, 1);
        this.materialBottom.setShininess(10.0);
        this.materialBottom.setTexture(this.bottom1);
        this.materialBottom.setTextureWrap('REPEAT', 'REPEAT');

        this.materialTop = new CGFappearance(this.scene);
        this.materialTop.setAmbient(0.1, 0.1, 0.1, 1);
        this.materialTop.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialTop.setSpecular(0.1, 0.1, 0.1, 1);
        this.materialTop.setShininess(10.0);
        this.materialTop.setTexture(this.top1);
        this.materialTop.setTextureWrap('REPEAT', 'REPEAT');

        this.materialSideN = new CGFappearance(this.scene);
        this.materialSideN.setAmbient(0.1, 0.1, 0.1, 1);
        this.materialSideN.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialSideN.setSpecular(0.1, 0.1, 0.1, 1);
        this.materialSideN.setShininess(10.0);
        this.materialSideN.setTexture(this.front1);
        this.materialSideN.setTextureWrap('REPEAT', 'REPEAT');
        
        this.materialSideS = new CGFappearance(this.scene);
        this.materialSideS.setAmbient(0.1, 0.1, 0.1, 1);
        this.materialSideS.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialSideS.setSpecular(0.1, 0.1, 0.1, 1);
        this.materialSideS.setShininess(10.0);
        this.materialSideS.setTexture(this.back1);
        this.materialSideS.setTextureWrap('REPEAT', 'REPEAT');
        
        this.materialSideW = new CGFappearance(this.scene);
        this.materialSideW.setAmbient(0.1, 0.1, 0.1, 1);
        this.materialSideW.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialSideW.setSpecular(0.1, 0.1, 0.1, 1);
        this.materialSideW.setShininess(10.0);
        this.materialSideW.setTexture(this.left1);
        this.materialSideW.setTextureWrap('REPEAT', 'REPEAT');
        
        this.materialSideE = new CGFappearance(this.scene);
        this.materialSideE.setAmbient(0.1, 0.1, 0.1, 1);
        this.materialSideE.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materialSideE.setSpecular(0.1, 0.1, 0.1, 1);
        this.materialSideE.setShininess(10.0);
        this.materialSideE.setTexture(this.right1);
        this.materialSideE.setTextureWrap('REPEAT', 'REPEAT');
    }

    display() {
        //this.scene.scale(1, 1, -1);
        
        // ZX face (higher Y) TOP
        this.scene.pushMatrix();
        this.scene.scale(100,100,100);
        this.scene.rotate(90*Math.PI/180,1,0,0);
        this.scene.translate(0, 0, -0.5);
        this.scene.scale(-1, -1, 1); //Fixed invert
        this.materialTop.apply();
        this.quad.display();
        this.scene.popMatrix();

        // ZX face (lower Y) BOTTOM
        this.scene.pushMatrix();
        this.scene.scale(100,100,100);
        this.scene.rotate(90*Math.PI/180,1,0,0);
        this.scene.translate(0, 0, 0.5);
        this.scene.scale(1, 1, -1);
        this.scene.scale(-1, 1, 1); //Fixed invert
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