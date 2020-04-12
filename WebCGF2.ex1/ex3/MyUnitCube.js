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
            this.vertices = [];

            for (var i = 0; i < 8; i++) {
                  // 0
                  this.vertices.push(-0.5);
                  this.vertices.push(-0.5);
                  this.vertices.push(-0.5);

                  // 1
                  this.vertices.push(0.5);
                  this.vertices.push(-0.5);
                  this.vertices.push(-0.5);

                  // 2
                  this.vertices.push(-0.5);
                  this.vertices.push(0.5);
                  this.vertices.push(-0.5);

                  // 3
                  this.vertices.push(0.5);
                  this.vertices.push(0.5);
                  this.vertices.push(-0.5);

                  // 4
                  this.vertices.push(-0.5);
                  this.vertices.push(-0.5);
                  this.vertices.push(0.5);

                  // 5
                  this.vertices.push(0.5);
                  this.vertices.push(-0.5);
                  this.vertices.push(0.5);

                  // 6
                  this.vertices.push(-0.5);
                  this.vertices.push(0.5);
                  this.vertices.push(0.5);
                  
                  // 7
                  this.vertices.push(0.5);
                  this.vertices.push(0.5);
                  this.vertices.push(0.5);

            }
            

            //Counter-clockwise reference of vertices
            
            this.indices = [
                  //All are double sided
                  //xy faces
                  0, 1, 2,
                  2, 1, 0,  
      
                  1, 3, 2,
                  2, 3, 1,
                  
                  ////
                  4, 5, 7,
                  7, 5, 4,
      
                  4, 6, 7,
                  7, 6, 4,
      
                  //xz faces
                  0, 4, 5,
                  5, 4, 0,
      
                  0, 1, 5,
                  5, 1, 0,
      
                  /////
                  2, 6, 7,
                  7, 6, 2,
      
                  2, 3, 7,
                  7, 3, 2,
      
                  //yz faces
                  0, 2, 6,
                  6, 2, 0,
      
                  0, 4, 6,
                  6, 0, 4,
      
                  //////
                  1, 3, 7,
                  7, 3, 1,
      
                  1, 5, 7,
                  7, 5, 1,
       
            ];

		// this.indices = [
            // //All are double sided
            // //xy faces
            // 0, 1, 2,
            // 0, 2, 1,  

            // 1, 3, 2,
            // 1, 2, 3,
            
            // ////
            // 4, 5, 7,
            // 4, 7, 5,

            // 4, 6, 7,
            // 4, 7, 6,

            // //xz faces
            // 0, 4, 5,
            // 0, 5, 4,

            // 0, 1, 5,
            // 0, 5, 1,

            // /////
            // 2, 6, 7,
            // 2, 7, 6,

            // 2, 3, 7,
            // 2, 7, 3,

            // //yz faces
            // 0, 2, 6,
            // 0, 6, 2,

            // 0, 4, 6,
            // 0, 6, 4,

            // //////
            // 1, 3, 7,
            // 1, 7, 3,

            // 1, 5, 7,
            // 1, 7, 5,
 
            // ];
            

            this.normals = []
            
            for (var i = 0; i < 4; i++)
                  this.normals.push(0, 0, -1);

            for (var i = 0; i < 4; i++)
                  this.normals.push(0, 0, 1);
            
            for (var i = 0; i < 4; i++) {
                  this.normals.push(-1, 0, 0);
                  this.normals.push(1, 0, 0);
            }

            for (var i = 0; i < 2; i++) {
                  for (var j = 0; j < 2; j++)
                        this.normals.push(0, -1, 0);
                  for (var k = 0; k < 2; k++)
                        this.normals.push(0, 1, 0);
            }


		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;
            this.initNormalVizBuffers();
		this.initGLBuffers();
      }
}