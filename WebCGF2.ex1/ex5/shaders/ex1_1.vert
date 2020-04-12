#ifdef GL_ES
precision highp float;
#endif

attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

/*
uniform float normScale;
varying vec4 coords;
varying vec4 normal;
*/

uniform float normScale;
varying vec4 coords;

void main() {
    /*
    // This gives the "same" result but without the blank ring
    vec4 vertex=vec4(aVertexPosition+aVertexNormal*normScale*0.1, 1.0);
    gl_Position = uPMatrix * uMVMatrix * vertex;
    coords = gl_Position/10.0; // why the 10.0 ?
    */
    
    // is * normScale * 0.1 necessary ?
    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition * normScale*0.1, 1.0);

	coords=gl_Position/10.0;

}