// Количество знаков после запятой
const DEFAULT_DIGITS = 2;
//Функция генерации целого
const getRandomInteger = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
//Функция генерации дробного
const getRandomFloat = (min, max, digits = DEFAULT_DIGITS) =>
//Возведение в степень для того, чтобы учитывать количество разрядов при генерации чисел
  (getRandomInteger(min * Math.pow(10, digits), max * Math.pow(10, digits)) / Math.pow(10, digits));

export{getRandomInteger,getRandomFloat};
