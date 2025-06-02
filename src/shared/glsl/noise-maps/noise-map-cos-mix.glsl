#pragma glslify: PI = require(../variables.glsl)
#pragma glslify: smoothCos = require(../utils/smoothCos.glsl)
#pragma glslify: cosInterpolation = require(../utils/cosInterpolation.glsl)

/*
  Функция для создания псевдосучайного шума.
  Она создаёт "плавный" 3D-шум (как облака или мраморная текстура)
*/
float smoothNoise3D(vec3 param) // на вход получаем точку в 3D пространстве (вершину)
{
  // сначала входная точка разделяется на целую часть
  // было: (0.27, 1.24, 2.25)
  // стало: (0, 1, 2)
  vec3 integer = floor(param); // целая часть координаты куба, в котором находится точка
  
  // это значение нам нужно что бы расчитать интерапаляцию и сделать
  // плавный переход между вершинами
  vec3 dryFract = param - integer; // это вычисление дробной части вершины

  // (param - integer) * acos(-1.) - эта операция даёт волну от 1 до -1
  // так как у нас dryFract это дробное значение оно располагается от 0 до 1
  // по этому умножение на PI даёт плавный результат казался ещё плавнее
  // можно использовать косиносувую интерпаляцию -> было: [-1, 1] стало [0, 1]
  vec3 smoothFract = cosInterpolation(smoothCos(dryFract)); // применяем функцию плавного интерполяционного ядра
  
  // создаём четыре псевдослучайных числа для вершин куба
  // вычисления (например integer(2, 1, 0)):
  // 1. dot(integer, vec3(1., 57., 21.)) -> 2*1 + 1*57 + 0*21 = 59;
  // 2. 59 + vec4(0., 57., 21., 78.);
  // функция dot выступает как хеш-функция, она даёт рандомный результат от значения integer
  vec4 pseudorandomNumber = dot(integer, vec3(1., 57., 21.)) + vec4(0., 57., 21., 78.); // применяем сколярное (dot) произведение для базовго хеша
  
  // делаем линейную интерпаляцию значений
  pseudorandomNumber = mix(
    sin(cos(pseudorandomNumber) * pseudorandomNumber),
    sin(cos(1. + pseudorandomNumber) * (1. + pseudorandomNumber)),
    smoothFract.x
  );

  pseudorandomNumber.xy = mix(
    pseudorandomNumber.xz,
    pseudorandomNumber.yw,
    smoothFract.y
  );
  
  return mix(pseudorandomNumber.x, pseudorandomNumber.y, smoothFract.z);
}

#pragma glslify: export(smoothNoise3D)
