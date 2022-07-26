import { resetDefaultMarker } from './map/map-api.js';
import { beforeLoad, onPageLoading } from './form-api.js';
import { getAdvertisementsAll } from './data/fetch-api.js';
import { placeAdvertisements } from './map/map-manager.js';
import { handleError} from './utils/util.js';

//блокируем все формы на странице
onPageLoading();
//получаем все данные и, при успехе, разблокируем формы и размещаем объявления
getAdvertisementsAll(beforeLoad,placeAdvertisements,handleError,false);
resetDefaultMarker();
