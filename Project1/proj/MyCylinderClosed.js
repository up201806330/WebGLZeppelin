class MyCylinderClosed extends CGFobject {

    constructor(scene, slices, radius) {
        super(scene);
        this.cylinder = new MyCylinder(scene, slices, radius);
        this.bottom = new MyTop(scene, slices);
        this.bottom.initBuffers();

    
    }

    display() {
        this.cylinder.display();
        this.scene.pushMatrix();
        this.scene.rotate(Math.PI / 2, 1, 0, 0)
        this.bottom.display();
        this.scene.popMatrix();
    }

}