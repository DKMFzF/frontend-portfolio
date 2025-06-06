#pragma glslify: smoothNoise3D = require(../../../../../shared/glsl/noise-maps/noise-map-cos-mix.glsl)
#pragma glslify: noiseCoordinateMult = require(../../../../../shared/glsl/utils/noiseCoordinateMult.glsl)

uniform float uTime;
uniform vec3 uViewDirection;
uniform vec3 uGlowDirection;

varying float vDisplacement;
varying vec2 vUv;
varying vec3 vPosition;

varying vec3 vViewDir;
varying vec3 vGlowDir;

void main() {
  vUv = uv;
  vec4 worldPos = modelMatrix * vec4(position, 1.0);
  
  float coefficientRefraction = .1;
  float indentAxis = 2.;
  float clampMin = -1.;
  float clampMax = 1.;
  float speedAnimation = 0.25;
  float displacementDitails = 1.;

  float noiseMultX = noiseCoordinateMult(
    position.x,
    indentAxis,
    clampMin,
    clampMax,
    coefficientRefraction
  );
  float noiseMultInvertX = noiseCoordinateMult(
    -position.x,
    indentAxis,
    clampMin,
    clampMax,
    coefficientRefraction
  );

  float noiseMultPeak = noiseCoordinateMult(
    position.x,
    3.,
    -1.,
    1.,
    .1
  );
  
  float displacement = 
    (smoothNoise3D((position + uTime * speedAnimation) * displacementDitails + (cos(uTime * 2.) * .1)) * noiseMultX) +
    (smoothNoise3D((position + uTime * speedAnimation) * displacementDitails + (cos(uTime * .1) * .1)) * noiseMultInvertX) +
    (smoothNoise3D((position + uTime * speedAnimation) * displacementDitails + (cos(uTime * .1) * .1)) * noiseMultPeak);
  
  vDisplacement = displacement;
  vec3 newPosition = position + normal * displacement;
  vPosition = newPosition;

  vViewDir = normalize(uViewDirection - vPosition);
  vGlowDir = uGlowDirection;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
}
