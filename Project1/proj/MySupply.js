const SupplyStates = {
    INACTIVE:   0,
    FALLING:    1,
    LANDED:     2
};

/**
 * MyVehicle
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyVehicle extends CGFobject {

    constructor(scene) {
		super(scene);
        
        // TODO
        // this.cube = new MyUnitCubeQuad 2 ?

        this.pos;   // [x,y,z]
        this.fallSpeed;
        this.prevUpdate = 0;
        this.state = SupplyStates.INACTIVE;
        
    }

    drop(dropPosition) {
        this.pos = dropPosition;

        this.state = SupplyStates.FALLING;

        // check if it makes sense:
        // this.fallSpeed = dropPosition[1] * intervTempoQuePassou / 3000 ms
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

            // update y
            this.pos[1] = (this.pos[1] - 0.2 < 0) ? 0 : this.pos[1] - 0.2;

            if (this.pos[1] == 0) this.land();
        }
    }

    display() {
        if (this.state == SupplyStates.FALLING) {
            
        }
        else if (this.state == SupplyStates.LANDED) {
            // open box?
        }
    }
}