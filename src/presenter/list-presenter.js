import EditPointView from '../view/edit-point-view.js';
import PointListView from '../view/point-list-view.js';
import PointListMessageView from '../view/point-list-empty-message-view.js';
import PointView from '../view/point-view.js';
import { render } from '../render.js';
import { isEscapeKey } from '../utils.js';


export default class ListPresenter {
  #listContainer = null;
  #pointsModel = null;

  #listComponent = new PointListView();

  #listPoints = [];

  constructor({ listContainer, pointsModel }) {
    this.#listContainer = listContainer;
    this.#pointsModel = pointsModel;
  }

  init() {
    this.#listPoints = [...this.#pointsModel.points];

    render(this.#listComponent, this.#listContainer);

    if (this.#listPoints.length > 0) {
      for (let i = 0; i < this.#listPoints.length; i++) {
        this.#renderPoint(this.#listPoints[i]);
      }
    } else {
      render(new PointListMessageView(), this.#listComponent.element);
    }
  }

  #renderPoint(point) {
    const pointComponent = new PointView({ point });
    const pointEditComponent = new EditPointView({ point });

    const pointRollupButton = pointComponent.element.querySelector('.event__rollup-btn');
    const editPointForm = pointEditComponent.element.querySelector('form');
    const editRollupButton = editPointForm.querySelector('.event__rollup-btn');

    const escapeKeydownHandler = (evt) => {
      if (isEscapeKey) {
        closeEditPointFormHandler(evt);
      }
    };

    const replaceFormToPoint = () => {
      this.#listComponent.element.replaceChild(pointComponent.element, pointEditComponent.element);
      editRollupButton.removeEventListener('click', replaceFormToPoint);
      document.removeEventListener('keydown', escapeKeydownHandler);
      editPointForm.removeEventListener('submit', closeEditPointFormHandler);

    };

    const replacePointToForm = () => {
      this.#listComponent.element.replaceChild(pointEditComponent.element, pointComponent.element);
      editRollupButton.addEventListener('click', replaceFormToPoint);
      document.addEventListener('keydown', escapeKeydownHandler);
      editPointForm.addEventListener('submit', closeEditPointFormHandler);
    };

    pointRollupButton.addEventListener('click', replacePointToForm);

    function closeEditPointFormHandler(evt) {
      evt.preventDefault();
      replaceFormToPoint();
    }

    render(pointComponent, this.#listComponent.element);
  }
}
