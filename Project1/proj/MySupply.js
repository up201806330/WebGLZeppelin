const SupplyStates = {
    INACTIVE:   0,
    FALLING:    1,
    LANDED:     2
};

const FLOOR = 0.25;

/**
 * MyVehicle
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MySupply extends CGFobject {

    constructor(scene) {
		super(scene);
        
        this.cube = new MyUnitCubeQuad2(this.scene);

        this.x_;
        this.y_;
        this.z_;
        this.yStart;
        this.fallSpeed;
        this.openAnimationAngle = 0;
        this.state = SupplyStates.INACTIVE;
        
    }

    // called when the supply crate drop key is pressed
    drop(x,y,z) {
        this.x_ = x;
        this.y_ = y;
        this.z_ = z;
        this.yStart = y;
        this.state = SupplyStates.FALLING;
        this.fallSpeed = this.yStart / 3000; // v = s / t
    }

    // called when the supply crate hits the ground
    land() { this.state = SupplyStates.LANDED; }

    // called in MyScene in update(t)
    update(t) {
        
        if (this.prevUpdate == 0) {
            this.prevUpdate = t;
        }
        var elapsed = t - this.prevUpdate;
        this.prevUpdate = t;
        
        if (this.state == SupplyStates.FALLING) {
            // calculate delta y
            var deltaY = elapsed * this.fallSpeed;
            
            // update y
            this.y_ = ( (this.y_ - deltaY) < FLOOR) ? FLOOR : this.y_ - deltaY;
            
            // check if the center of the crate has hit y=0.25 which means that
            // the bottom of the crate is at y=0.0
            if (this.y_ == FLOOR) this.land();
        }

        // rotation update of the crate sides
        else if (this.state == SupplyStates.LANDED && this.openAnimationAngle < 90) {
            this.openAnimationAngle += 5;
        }
        
    }

    display() {
        this.scene.pushMatrix();
        this.scene.translate(this.x_, this.y_, this.z_);

        if (this.state == SupplyStates.FALLING) { this.cube.displayOnFall(); }
        else if (this.state == SupplyStates.LANDED) { this.cube.displayOnLanded(this.openAnimationAngle); }
        this.scene.popMatrix();
    }

    reset() {
        this.state = SupplyStates.INACTIVE;
        this.openAnimationAngle = 0;
    }
}