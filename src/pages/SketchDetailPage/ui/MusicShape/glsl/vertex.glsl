// idea: https://github.com/pavel-mazhuga/portfolio/blob/main/src/app/lab/displaced-sphere/shaders/vertex.glsl

#pragma glslify: smoothNoise3D = require(../../../../../shared/glsl/noise-maps/noise-map-cos-mix.glsl)

uniform float uTime;

varying float vDisplacement;
varying vec2 vUv;
varying vec3 vPosition;

void main() {
  vUv = uv;
  vec4 worldPos = modelMatrix * vec4(position, 1.0);
  float noiseMult = clamp((abs(position.y + 1.) * 0.5) * 3., 0., 1.) * 0.1;
  float displacement = smoothNoise3D((position + uTime * 0.5) * 2. + (sin(uTime * 0.7) * 0.)) * noiseMult;
  vDisplacement = displacement;
  vec3 newPosition = position + normal * displacement;
  vPosition = newPosition;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
}
