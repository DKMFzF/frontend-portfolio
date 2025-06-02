#pragma glslify: PI = require(../variables.glsl)

vec3 smoothCos(vec3 dryFract)
{
  return cos(dryFract * PI);
}

#pragma glslify: export(smoothCos)
