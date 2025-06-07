#pragma glslify: palette = require(../../../../../shared/glsl/palette.glsl)

uniform float uTime;
uniform vec3 uGlowColor;
uniform float uGlowSize;

uniform float uGlowLength;
uniform float uGlowFalloff;

varying float vDisplacement;
varying vec2 vUv;
varying vec3 vPosition;

varying vec3 vViewDir;
varying vec3 vGlowDir;

vec3 yellowRedPurplePinkPalette(float t) {
    vec3 color1 = vec3(1.0, 1.0, 0.0);
    vec3 color2 = vec3(1.0, 0.0, 0.0);
    vec3 color3 = vec3(0.5, 0.0, 1.0);
    vec3 color4 = vec3(1.0, 0.5, 1.0);
    
    if (t < 0.33) {
        return mix(color1, color2, t * 3.0);
    } else if (t < 0.66) {
        return mix(color2, color3, (t - 0.33) * 3.0);
    } else {
        return mix(color3, color4, (t - 0.66) * 3.0);
    }
}

vec3 applyGlow(vec3 color, float intensity) {
    float glow = smoothstep(0.0, uGlowSize, intensity);
    float falloff = pow(glow, 10.0) * 5.0;
    return mix(color, uGlowColor, falloff);
}

void main() {
    vec2 uv = vUv;

    vec3 color = 
        vec3((0.1 + length(vPosition.y * vDisplacement)) * 0.8
        + vec3(pow(length(vDisplacement), 1.2)) * 7.);

    // Используем новую палитру
    float palettePos = clamp(color.z, 0.0, 1.0);
    color = yellowRedPurplePinkPalette(palettePos) * 1.2;
    
    float glowIntensity = pow(vDisplacement, 1.5) * 5.0;
    color = applyGlow(color, glowIntensity);
    
    float rim = 1.0 - abs(dot(normalize(vPosition), vec3(0.0, 0.0, 1.0)));
    float rimGlow = pow(rim, 3.0) * 2.0;
    color += uGlowColor * rimGlow;

    float baseGlow = pow(vDisplacement, 2.0) * 2.0;
    
    float directionalGlow = dot(normalize(vPosition), vGlowDir);
    directionalGlow = smoothstep(-1.0, 1.0, directionalGlow);
    directionalGlow = pow(directionalGlow, uGlowFalloff) * uGlowLength;

    float totalGlow = baseGlow + directionalGlow;

    color += uGlowColor * totalGlow * 5.0;

    gl_FragColor = vec4(color, 1.0);
    #include <colorspace_fragment>
}
