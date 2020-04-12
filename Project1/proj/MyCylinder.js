class MyCylinder extends CGFobject {

    constructor(scene, slices, radius) {
        super(scene);
        this.longDivs = slices;
        this.radius = radius;
    
        this.initBuffers();
    }


    initBuffers() {

        this.vertices = [];
        this.indices = [];
        this.normals = [];
        // this.texCoords = [];
        
        var theta = 0;
        var thetaInc = (2 * Math.PI) / this.longDivs;

        // console.log("Pi/6   : " + Math.PI/6);
        // console.log("Pi/3   : " + Math.PI/3);
        // console.log("Pi/2   : " + Math.PI/2);
        // console.log("2*Pi/3 : " + 2*Math.PI/3);
        // console.log("5*Pi/6 : " + 5*Math.PI/6);
        // console.log("Pi     : " + Math.PI);
        // console.log("3*Pi/2 : " + 3*Math.PI/2);
        // console.log("2*Pi   : " + 2*Math.PI);
        
        for (let longitude = 0; longitude <= this.longDivs; longitude++) {
            
            // console.log("Theta: " + theta);

            //--- Vertices coordinates
            var x = Math.cos(theta); // ca
            // var y = 0;
            var z = Math.sin(theta); // sa
            // console.log("Longitude: " + longitude);
            console.log("x: " + x);
            // console.log("y: " + y);
            console.log("z: " + z);
            console.log("...");
            this.vertices.push(x, 0, z);
            this.vertices.push(x, 1, z);
            
            //--- Indices
            // this.indices = [0,1,2,2,3,4];
            if (longitude != 0){
                this.indices.push((longitude*2), (longitude*2+1), (longitude*2-1));
                this.indices.push((longitude*2), (2*longitude-1), (2*longitude-2));
            }

            //--- Normals
            this.normals.push(x, 0, z);
            this.normals.push(x, 0, z);

            //--- Texture Coordinates


            
            theta += thetaInc;
        }

        // console.log("Size of vertices array: " + this.vertices.length);
        // console.log("Number of vertices    : " + this.vertices.length / 3);

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }


    updateBuffers(complexity){ 
        this.longDivs = complexity;
        this.initBuffers();
        this.initNormalVizBuffers();
    }
}