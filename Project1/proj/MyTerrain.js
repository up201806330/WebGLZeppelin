class MyTerrain extends CGFobject {
    constructor(scene){
        super(scene);
        this.plane = new MyPlane(scene, 20, 0, 8);
        this.shader = new CGFshader(scene.gl, "shaders/terrain.vert", "shaders/terrain.frag");
        
        // Materials and textures initialization

		this.appearance = new CGFappearance(this);
		this.appearance.setAmbient(0.3, 0.3, 0.3, 1);
		this.appearance.setDiffuse(0.7, 0.7, 0.7, 1);
		this.appearance.setSpecular(0.0, 0.0, 0.0, 1);
		this.appearance.setShininess(120);

		// before: this.texture = new CGFtexture(this, "textures/texture.jpg");
		this.texture = new CGFtexture(this, "images/terrainTex.jpg");
		this.appearance.setTexture(this.texture);
    }
}
