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
        // this.normals = [];
        // this.texCoords = [];

        var phi = 0;
        var theta = 0;
        var thetaInc = (2 * Math.PI) / this.longDivs;
        var latVertices = this.longDivs + 1;

        console.log("Pi/6   : " + Math.PI/6);
        console.log("Pi/3   : " + Math.PI/3);
        console.log("Pi/2   : " + Math.PI/2);
        console.log("2*Pi/3 : " + 2*Math.PI/3);
        console.log("5*Pi/6 : " + 5*Math.PI/6);
        console.log("Pi     : " + Math.PI);
        console.log("3*Pi/2 : " + 3*Math.PI/2);
        console.log("2*Pi   : " + 2*Math.PI);

        for (let longitude = 0; longitude <= this.longDivs; longitude++) {

            console.log("Theta: " + theta);

            //--- Vertices coordinates
            var x = Math.cos(theta);
            var y = 0;
            var z = Math.sin(-theta);
            // console.log("Longitude: " + longitude);
            console.log("x: " + x);
            console.log("y: " + y);
            console.log("z: " + z);
            this.vertices.push(x, y, z);
            
            //--- Indices
            this.indices = [0,1,2];
            // if (longitude <= this.longDivs) {
            //     var current = longitude;
            //     var next = current + latVertices;
            //     console.log("Current : " + current);
            //     console.log("Next    : " + next);
            //     this.indices.push( current + 1, current, next);
            //     this.indices.push( current + 1, next, next +1);
            // }

            //--- Normals

            //--- Texture Coordinates

            
            theta += thetaInc;
        }

        console.log("Size of vertices array: " + this.vertices.length);
        console.log("Number of vertices    : " + this.vertices.length / 3);

        

        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }


    updateBuffers(complexity){ 
        this.longDivs = Math.round(complexity);
        this.initBuffers();
    }
}