import {getMenuTemplate} from "./components/menu";
import {getSearchTemplate} from "./components/search";
import {getFiltersTemplate} from "./components/filters";
import {getBoardTemplate} from "./components/board";
import {getCardTaskTemplate} from "./components/card";
import {getTaskFormTemplate} from "./components/task-form";
import {getLoadButton} from "./components/load-button";

import {getTask} from "./data";

const CARD_COUNT = 3;
const mainElement = document.querySelector(`.main`);
const mainControlElement = document.querySelector(`.main__control`);

const fragmentElement = document.createDocumentFragment();
const renderComponent = (container, component, data, repeat) => {
  const divElement = document.createElement(`div`);
  if (repeat) {
    for (let i = 0; i < repeat; i++) {
      divElement.innerHTML = new Array(repeat).fill(``).map(data).map(component).join(``);
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
renderComponent(tasksContainer, getCardTaskTemplate, getTask, CARD_COUNT);

renderComponent(boardContainer, getLoadButton());
mainElement.appendChild(fragmentElement);
