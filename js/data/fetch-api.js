import {
  showSystemMessage
} from '../utils/util.js';
import { getGeneratedAdvertisements } from './generation/datagen.js';

const SERVER_URL = 'https://26.javascript.pages.academy/keksobooking';
const ADVERTISEMENT_DATA_SERVICE = `${SERVER_URL}/data`;
//Переменная для сохранения данных сервиса
let advertisementsData = [];
// Функция загрузки объявлений
const getAdvertisementsAll = (beforeLoad, onSuccess, onError, generateData) => {
  beforeLoad();
  //Получаем данные из сервиса или работаем со сгенерированным набором
  if (!generateData) {
    fetch(ADVERTISEMENT_DATA_SERVICE)
      .then((response) => {
        if (response.ok) {
          return response.json()
            .then((data) => {
              advertisementsData = data;
              onSuccess(advertisementsData);
            });
        } {
          onError(response.status, response.statusText);
        }
      })
      .catch((err) => {
        showSystemMessage(`Не удалось загрузить данные: ${err}`, false);
      });
  } else {
    //отображение сгенерированных данных
    advertisementsData = getGeneratedAdvertisements();
    onSuccess(advertisementsData);
  }
};
//постинг формы документа
const postAdvertisementSingle = (body, onSuccess, onError) => {
  fetch(SERVER_URL, {
    method: 'POST',
    body,
  }, )
    .then((response) => {
      if (response.ok) {
        showSystemMessage('Объявление успешно размещено!', true);
        onSuccess();
      } else {
        onError(response.status, response.statusText);
      }
    })
    .catch((err) => {
      showSystemMessage(`Не удалось отправить данные: ${err}`, false);
    });
};

export {
  advertisementsData,
  getAdvertisementsAll,
  postAdvertisementSingle
};
