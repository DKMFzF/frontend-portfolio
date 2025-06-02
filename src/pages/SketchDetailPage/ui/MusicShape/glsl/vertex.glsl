uniform float uTime;

// idea: https://github.com/pavel-mazhuga/portfolio/blob/main/src/app/lab/displaced-sphere/shaders/vertex.glsl

varying float vDisplacement;
varying vec2 vUv;
varying vec3 vPosition;

float noise(vec3 p) {
  vec3 i = floor(p);
  vec4 a = dot(i, vec3(1., 57., 21.)) + vec4(0., 57., 21., 78.);
  vec3 f = cos((p-i)*acos(-1.))*(-.5)+.5;
  a = mix(sin(cos(a)*a),sin(cos(1.+a)*(1.+a)), f.x);
  a.xy = mix(a.xz, a.yw, f.y);
  return mix(a.x, a.y, f.z);
}

void main() {
  vUv = uv;
  vec4 worldPos = modelMatrix * vec4(position, 1.0);
  float noiseMult = clamp((abs(position.y + 1.) * 0.5) * 3., 0., 1.) * 0.1;
  float displacement = noise((position + uTime * 0.4) * 2. + (sin(uTime * 0.7) * 0.)) * noiseMult;
  vDisplacement = displacement;
  vec3 newPosition = position + normal * displacement;
  vPosition = newPosition;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
}
