import AddNewPointView from '../view/add-new-point-view.js';
import EditPointView from '../view/edit-point-view.js';
import PointListView from '../view/point-list-view.js';
import PointView from '../view/point-view.js';
import { RenderPosition, render } from '../render.js';

const POINTS_AMOUNT = 3;

export default class ListPresenter {
  listComponent = new PointListView();

  constructor({ listContainer }) {
    this.listContainer = listContainer;
  }

  init() {
    render(this.listComponent, this.listContainer);
    render(new AddNewPointView(), this.listComponent.getElement());
    render(new EditPointView(), this.listComponent.getElement(), RenderPosition.AFTERBEGIN);

    for (let i = 0; i < POINTS_AMOUNT; i++) {
      render(new PointView(), this.listComponent.getElement());
    }
  }
}

