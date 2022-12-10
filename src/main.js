import PointsModel from './model/points-model.js';
import ListPresenter from './presenter/list-presenter.js';
import { render } from './render.js';
import FilterView from './view/filter-view.js';
import SortView from './view/sort-view.js';

const tripFilterContainer = document.querySelector('.trip-controls__filters');
const siteMain = document.querySelector('.page-main');
const tripEventsContainer = siteMain.querySelector('.trip-events');
const pointsModel = new PointsModel();
const listPresenter = new ListPresenter({
  listContainer: tripEventsContainer,
  pointsModel
});

render(new FilterView(), tripFilterContainer);
render(new SortView(), tripEventsContainer);

listPresenter.init();
