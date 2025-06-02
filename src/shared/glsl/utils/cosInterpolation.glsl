vec3 cosInterpolation(vec3 noInterVector)
{
  return noInterVector * (-.5) + .5;
}

#pragma glslify: export(cosInterpolation)
