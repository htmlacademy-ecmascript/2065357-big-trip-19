import PointsModel from './model/points-model.js';
import ListPresenter from './presenter/list-presenter.js';
import TripInfoPresenter from './presenter/trip-info-presenter.js';
import { render } from './framework/render.js';
import AddNewPointButtonView from './view/add-new-point-button-view.js';
import FilterModel from './model/filter-model.js';
import FilterPresenter from './presenter/filter-presenter.js';
import PointsApiService from './points-api-service.js';

const AUTHORIZATION = 'Basic fG3425Efdsk355';
const END_POINT = 'https://19.ecmascript.pages.academy/big-trip';

const tripMain = document.querySelector('.trip-main');
const tripFilterContainer = tripMain.querySelector('.trip-controls__filters');
const siteMain = document.querySelector('.page-main');
const tripEventsContainer = siteMain.querySelector('.trip-events');
const pointsModel = new PointsModel({
  pointsApiService: new PointsApiService(END_POINT, AUTHORIZATION)
});
const filterModel = new FilterModel();

const newPointButtonComponent = new AddNewPointButtonView({
  onNewPointButtonClick: handleNewPointButtonClick
});

const listPresenter = new ListPresenter({
  listContainer: tripEventsContainer,
  pointsModel,
  filterModel,
  onNewPointDestroy: handleNewPointButtonClose
});

const filterPresenter = new FilterPresenter({
  filterContainer: tripFilterContainer,
  filterModel,
  pointsModel
});

const tripInfoPresenter = new TripInfoPresenter({
  tripInfoContainer: tripMain,
  pointsModel
});

function handleNewPointButtonClick() {
  listPresenter.createPoint();
  newPointButtonComponent.element.disabled = true;
}

function handleNewPointButtonClose() {
  newPointButtonComponent.element.disabled = false;
}

render(newPointButtonComponent, tripMain);
newPointButtonComponent.element.disabled = true;

pointsModel.init()
  .finally(() => {
    if (pointsModel.points.length) {
      newPointButtonComponent.element.disabled = false;
    }
  });
tripInfoPresenter.init();
filterPresenter.init();
listPresenter.init();
