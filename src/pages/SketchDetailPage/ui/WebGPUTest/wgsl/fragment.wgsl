struct Uniforms {
  time: f32,
};

@group(0) @binding(0) var<uniform> uniforms: Uniforms;

@fragment
fn fs_main(@builtin(position) pos: vec4<f32>) -> @location(0) vec4<f32> {
  let r = 0.5 + 0.5 * sin(uniforms.time);
  let g = 0.5 + 0.5 * cos(uniforms.time * 1.5);
  let b = 0.5 + 0.5 * sin(uniforms.time * 0.7);
  return vec4<f32>(r, g, b, 1.0);
}
