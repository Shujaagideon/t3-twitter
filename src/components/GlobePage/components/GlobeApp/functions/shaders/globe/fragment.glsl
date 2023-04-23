varying vec2 vUv;
uniform vec3 color;

void main(){
  float strength = 1. - (abs(length(vec2(vUv.x - 0.5,vUv.y - 0.5)) - 0.44) * 9.);
  gl_FragColor = vec4(color, strength * 0.5);
}