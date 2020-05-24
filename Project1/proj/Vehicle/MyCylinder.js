class MyCylinder extends CGFobject {

    constructor(scene, slices, radius) {
        super(scene);
        this.slices = slices;
        this.radius = radius;
    
        this.initBuffers();
    }

    initBuffers() {

        this.vertices = [];
        this.indices = [];
        this.normals = [];
        this.texCoords = [];
        
        var theta = 0;
        var thetaInc = (2 * Math.PI) / this.slices; // dividing the 2*PI (360 degrees) by the number of sides

        var texture = 0;
        var textureInc = 1 / this.slices; // dividing the 1 ("whole dimension") by the number of sides it'll need to cover
        
        
        for (let longitude = 0; longitude <= this.slices; longitude++) {

            //--- Vertices coordinates
            var x = - Math.cos(theta);
            var z = + Math.sin(theta);

            this.vertices.push(x, 0, z);
            this.vertices.push(x, 1, z);
            
            //--- Indices
            if (longitude != 0){
                this.indices.push((longitude * 2), (longitude * 2 + 1), (longitude * 2 - 1));
                this.indices.push((longitude * 2 - 1), (longitude * 2 - 2), (longitude * 2));
                // this.indices.push((longitude * 2), (longitude * 2 - 1), (longitude * 2 - 2)); // -> tested it and it works as well instead of the previous one
            }

            //--- Normals
            this.normals.push(x, 0, z);
            this.normals.push(x, 0, z);

            //--- Texture Coordinates
            this.texCoords.push(texture, 1);
            this.texCoords.push(texture, 0);

            theta += thetaInc;
            texture += textureInc;
        }

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }


    updateBuffers(complexity){ 
        this.slices = complexity;
        this.initBuffers();
        this.initNormalVizBuffers();
    }
}
