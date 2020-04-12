/**
 * MyDiamond
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCube extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			-0.5, -0.5, -0.5,	//0
			0.5,  -0.5, -0.5,	//1
			-0.5,  0.5, -0.5,	//2
                  0.5,   0.5, -0.5,	//3
                  -0.5, -0.5,  0.5, //4
                  0.5,  -0.5,  0.5, //5
                  -0.5,  0.5,  0.5, //6
                  0.5,   0.5,  0.5, //7
		];

		//Counter-clockwise reference of vertices
		this.indices = [
            //All are double sided
            //xy faces
            0, 1, 2,
            0, 2, 1,  

            1, 3, 2,
            1, 2, 3,
            
            ////

            4, 5, 7,
            4, 7, 5,

            4, 6, 7,
            4, 7, 6,

            //xz faces

            0, 4, 5,
            0, 5, 4,

            0, 1, 5,
            0, 5, 1,

            /////

            2, 6, 7,
            2, 7, 6,

            2, 3, 7,
            2, 7, 3,

            //yz faces

            0, 2, 6,
            0, 6, 2,

            0, 4, 6,
            0, 6, 4,

            //////

            1, 3, 7,
            1, 7, 3,

            1, 5, 7,
            1, 7, 5,
            
            
		];

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}