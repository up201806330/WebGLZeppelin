#ifdef GL_ES
precision highp float;
#endif

attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

varying vec2 vTextureCoord;

uniform float timeFactor;
uniform float flagSpeed;

void main() {
    vTextureCoord = aTextureCoord;

    float offset;

    if (aVertexPosition.x > -0.5)
        offset = -cos((-aVertexPosition.x + timeFactor * (0.5 + (10.0 * flagSpeed) * flagSpeed * 2.0)) * 5.0) * 0.05;

    gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition.x, aVertexPosition.y, aVertexPosition.z + offset, 1.0);
}