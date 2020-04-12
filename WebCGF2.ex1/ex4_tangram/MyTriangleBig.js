/**
 * MyTriangleBig
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTriangleBig extends CGFobject {
	constructor(scene, color) {
		super(scene);
		this.initBuffers(color);
	}
	initBuffers(color) {
		this.vertices = [
			-2, 0, 0,	//0
			0, 2, 0,	//1
			2, 0, 0 	//2
		];

		//Counter-clockwise reference of vertices
		this.indices = [
            0, 1, 2,
            2, 1, 0
		];

		if(color == 0){ //Light Blue
            this.texCoords = [
                0, 0,
                1, 0,
                0.5, 0.5,
            ];
        }
        else{ //Orange
            this.texCoords = [
                0.5, 0.5,
                1, 0, 
                1, 1,
            ];
        }

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}
