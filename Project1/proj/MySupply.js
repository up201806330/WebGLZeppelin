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

    drop(x,y,z) {
        this.x_ = x;
        this.y_ = y;
        this.z_ = z;
        this.yStart = y;
        this.state = SupplyStates.FALLING;

        // check if it makes sense:
        this.fallSpeed = this.yStart / 3000;
    }

    land() { this.state = SupplyStates.LANDED; }

    // call in MyScene in update(t) 
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
            
            if (this.y_ == FLOOR) this.land();
        }

        else if (this.state == SupplyStates.LANDED && this.openAnimationAngle < 90) {
            this.openAnimationAngle += 5;
        }
        
    }

    display() {
        if (this.state == SupplyStates.FALLING) {
            this.scene.pushMatrix();
            this.scene.translate(this.x_, this.y_, this.z_);
            this.cube.displayOnFall();
            this.scene.popMatrix();
        }
        
        else if (this.state == SupplyStates.LANDED) {
            this.scene.pushMatrix();
            this.scene.translate(this.x_, this.y_, this.z_);
            this.cube.displayOnLanded(this.openAnimationAngle);
            this.scene.popMatrix();
        }
        
    }

    reset() {
        this.state = SupplyStates.INACTIVE;
        this.openAnimationAngle = 0;
    }
}