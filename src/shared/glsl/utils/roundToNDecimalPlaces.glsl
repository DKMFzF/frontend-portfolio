/*
  функция для сокращения числа по n - знаку
*/
float roundToNDecimalPlaces(float number, int decimalPlaces)
{
  float factor = pow(10.0, float(decimalPlaces));
  return floor(number * factor + 0.5) / factor; // 0.5 нужна для правильного математического округления
}

#pragma glslify: export(roundToNDecimalPlaces);
