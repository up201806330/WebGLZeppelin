<h1>Project Status</h1>

(Check out the "Projects" tab as well)

<h2>Things to Ask</h2>
- [x] Speed is supposed to "reset" when 'W' changes to 'S' and vice-versa?
- [x] Is it supposed to be able to move without changing the speed in a straight line?
- [ ] We create the Textures for the Airship or go ?
- [ ] How not to make the skybox textures nicer (better resolution)? make 8-bit textures?

- [ ] Set Global Ambient light
- [ ] Modo Clamp To Edge


<h2>Part A</h2>

<h3>1. Creation of the base objects</h3>

<h4>1.1 MyCylinder - Cylinder (without the top / bottom)</h4>

- [x] Create Class MyCylinder
- [x] On Plane XZ and Centered on the Origin
- [x] Variable number of sides
- [x] Vertices 
- [x] Indexes
- [x] Normals
- [x] Texture

<h4>1.2 MySphere - Sphere</h4>

- [x] Add Texture

<h4>1.3 Cube Map - Creation of a cubemap for the ambient</h4>

- [x] ...

<h4>1.4 MyVehicle - Preliminary Version</h4>

- [x] Create Class MyVehicle (use MyTriangle or MyPyramid -> used MyTriangle and added extra indexes so see from the other side for debugging purposes)
- [x] Center on the Origin (I THINK IT IS)
- [x] Unitary Size
- [x] Central Axis align in the direction of the ZZ's positive axis (front pointing to +Z)

<h3>2. Interface</h3>

<h4>2.1 Vehicle Control via Keyboard</h4>

- [x] 1. Add to MyInterface
- [x] 2. Add/Change in MyScene
- [x] 3. Vehicle's Position, Orientation and speed and functions turn(), accelerate() and reset()
- [x] 4. Movement using 'W', 'S', 'A', 'D' and 'R'

<h4>2.2 Additional Interface Controls</h4>

- [ ] 1. List Box where appear the different textures of the available envolving landscapes so that the user can change the texture of the cube map in runtime (similarly to the texture in TP04)
- [x] 2. slider in GUI named speedFactor (between 0.1 and 3) that multiplies the value of the displacement's speed each time the "W" or the "S" key is pressed
- [x] 3. slider in GUI named scaleFactor (between 0.5 and 3) that allow scaling of the vehicle to facilitate animation observing

<h2>Part B</h2>

<h3>3. MyVehicle - Dirigivel (Airship)</h3>

<h4>3.1 Airship Modelation</h4>

- [x] Make Blim
- [x] Center of the Ellipsoid in (0, 10, 0)
- [x] Main body with 2 units of length and 1 unit of height / width
- [x] Textures on all objects of the Airship
- [x] Materials on all objects of the Airship
- [x] Submit Picture

<h4>3.2 Airship's aditional animations</h4>

- [x] 1. Propellers' animation: rotation speed -> airship speed
- [x] 2. Vertical "steering wheels" should incline to the left or right when the aircraft changes direction. (see the pdf for a more detailed description)
- [x] 3. Autopilot (see the pdf for a more detailed description)


<h3>4. Terrain</h3>

- [ ] ...

<h3>5. Supply Drop</h3>

<h4>5.1 Supply Drop Creation</h4>

- [x] enum
- [x] constructor
- [x] update
- [x] display
- [x] drop
- [x] land
- [x] "displayFalling"
- [ ] "displayOnLanded"

<h4>5.2 Launch Control</h4>

- [x] 5 supply drops
- [x] "L" to drop
- [x] 3 seconds to hit Y=0
- [ ] landed display

<h3>6. Shaders</h3>

<h4>6.1 Flag</h4>

- [ ] ...

<h4>6.2 Supply Drop Delivery Counter</h4>

- [ ] ...