float noiseCoordinateMult(
  float positionAxis,
  float indentAxis,
  float clampMin,
  float clampMax,
  float coefficientRefraction
) {
  return clamp((positionAxis + indentAxis) * .5, clampMin, clampMax) * coefficientRefraction;
}

#pragma glslify: export(noiseCoordinateMult);
