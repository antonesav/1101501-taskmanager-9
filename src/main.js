import {getMenuTemplate} from "./components/menu";
import {getSearchTemplate} from "./components/search";
import {getFiltersTemplate} from "./components/filters";
import {getBoardTemplate} from "./components/board";
import {getCardTaskTemplate} from "./components/card";
import {getLoadButton} from "./components/load-button";
import {mockTasks} from "./data";

const TASKS_COUNT_ON_CLICK = 8;

const mainElement = document.querySelector(`.main`);
const mainControlElement = document.querySelector(`.main__control`);

const renderTasks = (arrayTasks) => {
  let tasksShow = 0;
  const tasks = arrayTasks;

  return {
    render: (container, count) => {

      if (count >= tasks.length) {
        count = tasks.length;
        document.querySelector(`.load-more`).remove();
      }

      let arraySlice = tasks.splice(0, count);

      arraySlice.map((item) => container.insertAdjacentHTML(`beforeend`, getCardTaskTemplate(item)));
      tasksShow += count;
    },

    getVisible: () => tasksShow,

    getLength: () => tasks.length,

    getAll: () => tasks
  };
};

const tasks = renderTasks(mockTasks());

const onLoadClick = () => {
  tasks.render(tasksContainer, TASKS_COUNT_ON_CLICK);
};

mainControlElement.insertAdjacentHTML(`beforeend`, getMenuTemplate());
mainElement.insertAdjacentHTML(`beforeend`, getSearchTemplate());
mainElement.insertAdjacentHTML(`beforeend`, getFiltersTemplate(tasks.getAll()));
mainElement.insertAdjacentHTML(`beforeend`, getBoardTemplate());

const boardContainer = document.querySelector(`.board`);
const tasksContainer = document.querySelector(`.board__tasks`);

tasks.render(tasksContainer, 7);

boardContainer.insertAdjacentHTML(`beforeend`, getLoadButton());
document.querySelector(`.load-more`).addEventListener(`click`, onLoadClick);
