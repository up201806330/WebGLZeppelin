/**
 * MyFlag
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyFlag extends CGFobject {
    constructor(scene) {
        super(scene);
        this.flag = new MyPlane(this.scene, 15);
        this.cable =  new MyQuad2(this.scene);

        this.initAppearence(this.scene);
    }

    initAppearence(scene) {

        // Flag Appearance
        this.flagAppearance = new CGFappearance(this.scene);
        this.flagTexture = new CGFtexture(scene, 'images/flag/ThisIsFine.png');
        this.flagAppearance.setAmbient(0.9, 0.9, 0.9, 1);
        this.flagAppearance.setDiffuse(0.9, 0.9, 0.9, 1);
        this.flagAppearance.setSpecular(0.1, 0.1, 0.1, 1);
        this.flagAppearance.setShininess(10.0);
        this.flagAppearance.loadTexture('images/flag/ThisIsFine.png');
        this.flagAppearance.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');
        // this.flagAppearance.setTextureWrap('REPEAT', 'REPEAT');

        this.ropeAppearance = new CGFappearance(this.scene);
        // this.ropeTexture = new CGFtexture(scene, 'images/rope.png');
        this.ropeAppearance.setAmbient(0.9, 0.9, 0.9, 1);
        this.ropeAppearance.setDiffuse(0.9, 0.9, 0.9, 1);
        this.ropeAppearance.setSpecular(0.1, 0.1, 0.1, 1);
        this.ropeAppearance.setShininess(10.0);
        this.ropeAppearance.loadTexture('images/flag/rope.png');
        this.ropeAppearance.setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');

    }

    update(t, s) {
        this.scene.vehicle.flagSide1.setUniformsValues({ timeFactor: t });
        this.scene.vehicle.flagSide2.setUniformsValues({ timeFactor: t });
        this.scene.vehicle.flagSide1.setUniformsValues({ flagSpeed: s });
        this.scene.vehicle.flagSide2.setUniformsValues({ flagSpeed: s });
    }

    display() {
        // Flag Side 1
        this.scene.pushMatrix();
        this.flagAppearance.apply();
        this.scene.setActiveShader(this.scene.vehicle.flagSide1);
        this.flagTexture.bind(1);
        this.scene.scale(1.0, 0.4, 0.85);
        this.scene.translate(0, 0, -0.6);
        this.scene.rotate(90 * Math.PI/180, 0, 1, 0);
        this.flag.display();
        this.scene.popMatrix();

        // Flag Side 2
        this.scene.pushMatrix();
        this.flagAppearance.apply();
        this.scene.setActiveShader(this.scene.vehicle.flagSide2);
        this.flagTexture.bind(1);
        this.scene.scale(1.0, 0.4, 0.85);
        this.scene.translate(0, 0, -0.6);
        this.scene.rotate(-90 * Math.PI/180, 0, 1, 0);
        this.flag.display();
        this.scene.popMatrix();

        // Cables
        this.scene.pushMatrix();
        this.ropeAppearance.apply();
        this.scene.setActiveShader(this.scene.defaultShader);
        this.scene.translate(0, 0.1, 0.415);
        this.scene.scale(1.0, 0.03, 1.0);
        this.scene.rotate(90 * Math.PI/180, 0, 1, 0);
        this.cable.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.ropeAppearance.apply();
        this.scene.setActiveShader(this.scene.defaultShader);
        this.scene.translate(0, -0.1, 0.415);
        this.scene.scale(1.0, 0.03, 1.0);
        this.scene.rotate(90 * Math.PI/180, 0, 1, 0);
        this.cable.display();
        this.scene.popMatrix();
    }

}