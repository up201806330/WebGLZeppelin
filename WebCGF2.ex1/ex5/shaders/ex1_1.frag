#ifdef GL_ES
precision highp float;
#endif

varying vec4 coords;


void main() {
    
    vec4 yellow = vec4(1.0, 1.0, 0.0, 1.0);
    vec4 light_dark_blue = vec4(0.5, 0.55, 1.0, 1.0);

    if (coords.y > 0.5)
        gl_FragColor = yellow;
    else
        gl_FragColor = light_dark_blue;
    
}