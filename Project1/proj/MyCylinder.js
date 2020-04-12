class MyCylinder extends CGFobject {

    constructor(scene, slices) {
        super(scene);
        this.longDivs = slices;
    
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

        console.log("Pi/2: " + Math.PI/2);
        console.log("Pi: " + Math.PI);
        console.log("3*Pi/2: " + 3*Math.PI/2);
        console.log("2*Pi: " + 2*Math.PI);

        for (let longitude = 0; longitude <= this.longDivs; longitude++) {
            
            console.log("Theta: " + theta);

            //--- Vertices coordinates
            var x = Math.round(Math.cos(theta));
            var y = 0;
            var z = Math.round(Math.sin(-theta));
            console.log("x: " + x);
            console.log("y: " + y);
            console.log("z: " + z);
            this.vertices.push(x, y, z);

            //--- Indices

            //--- Normals

            //--- Texture Coordinates

            
            theta += thetaInc;
        }


        this.primitiveType = this.scene.gl.TRIANGLES;
        this.initGLBuffers();
    }
}