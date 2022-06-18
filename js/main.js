const gitRandomInteger = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const gitRandomFloat = function (min, max, digits = 2) {
  min *= Math.pow(10,digits);
  max *= Math.pow(10,digits);
  return (gitRandomInteger(min, max) / Math.pow(10,digits)).toFixed(digits);
};

gitRandomInteger(0, 10);
gitRandomFloat(0, 10, 2);
