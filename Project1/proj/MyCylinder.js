class MyCylinder extends CGFobject {

    constructor(scene, slices) {
        super(scene);
        this.longDivs = slices;
    
        this.initBuffers();
    }


    initBuffers() {
        
        this.vertices = [];
        this.indices = [];
        this.normals = [];
        this.texCoords = [];


    }

}