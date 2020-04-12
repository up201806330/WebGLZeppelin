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
        this.texCoords = [];
        
        var theta = 0;
        var thetaInc = (2 * Math.PI) / this.longDivs;
        var tex = 0;
        var texInc = 1 / this.longDivs; // dividing the 1 ("whole dimension") by the number of sides it'll need to cover

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
            var x = - Math.cos(theta);
            var z = + Math.sin(theta);

            console.log("x: " + x);
            console.log("z: " + z);
            console.log("...");
            this.vertices.push(x, 0, z);
            this.vertices.push(x, 1, z);
            
            //--- Indices
            if (longitude != 0){
                this.indices.push((longitude*2), (longitude*2+1), (longitude*2-1));
                this.indices.push((longitude*2-1), (longitude*2-2), (longitude*2));
                // this.indices.push((longitude*2), (2*longitude-1), (2*longitude-2)); // -> 2nd way it works for thw last one (I think)
            }

            //--- Normals
            this.normals.push(x, 0, z);
            this.normals.push(x, 0, z);
            // DOUBT é suposto as normais estarem paralelas
            // às bases (que não existem) do cilindro?

            //--- Texture Coordinates
            // DOUBT é suposto ser uma coisa deste género?
            this.texCoords.push(tex, 1);
            this.texCoords.push(tex, 0);

            
            theta += thetaInc;
            tex += texInc;
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