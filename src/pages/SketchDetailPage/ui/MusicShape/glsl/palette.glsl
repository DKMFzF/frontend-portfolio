
// idea: https://github.com/pavel-mazhuga/portfolio/blob/main/src/app/glsl-utils/palette.glsl

vec3 palette(float t, vec3 a, vec3 b, vec3 c, vec3 d) {
    return a + b * cos(6.28318 * (c * t + d));
}

#pragma glslify: export(palette)
