import {getMenuTemplate} from "./components/menu";
import {getSearchTemplate} from "./components/search";
import {getFiltersTemplate} from "./components/filters";
import {getBoardTemplate} from "./components/board";
import {getCardTaskTemplate} from "./components/card";
import {getTaskFormTemplate} from "./components/task-form";
import {getLoadButton} from "./components/load-button";

const CARD_COUNT = 3;
const DEFAULT_COUNT = 0;
const mainElement = document.querySelector(`.main`);
const mainControlElement = document.querySelector(`.main__control`);

const fragmentElement = document.createDocumentFragment();
const renderComponent = (container, component, repeat = DEFAULT_COUNT) => {
  const divElement = document.createElement(`div`);
  if (repeat) {
    for (let i = 0; i < repeat; i++) {
      divElement.innerHTML = component;
      container.appendChild(divElement.firstElementChild);
    }
  } else {
    divElement.innerHTML = component;
    container.appendChild(divElement.firstElementChild);
  }
};

renderComponent(mainControlElement, getMenuTemplate());
renderComponent(fragmentElement, getSearchTemplate());
renderComponent(fragmentElement, getFiltersTemplate());
renderComponent(fragmentElement, getBoardTemplate());

const boardContainer = fragmentElement.querySelector(`.board`);
const tasksContainer = fragmentElement.querySelector(`.board__tasks`);

renderComponent(tasksContainer, getTaskFormTemplate());
renderComponent(tasksContainer, getCardTaskTemplate(), CARD_COUNT);
renderComponent(boardContainer, getLoadButton());
mainElement.appendChild(fragmentElement);
