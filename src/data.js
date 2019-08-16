import {getRandomDueDate} from "./util";
import {getRandomBoolean} from "./util";
import {getRandomValue} from "./util";
import {createRepeatDays} from "./util";
import {getTags} from "./util";

const dataMock = {
  description: [`Изучить теорию`, `Сделать домашку`, `Пройти интенсив на соточку`],
  tags: [`homework`, `theory`, `practice`, `intensive`, `keks`],
  color: [`black`, `yellow`, `blue`, `green`, `pink`],
  dayOfWeek: [`Mo`, `Tu`, `We`, `Th`, `Fr`, `Sa`, `Su`]
};

export const getTask = () => {
  return {
    description: getRandomValue(dataMock, `description`),
    dueDate: getRandomDueDate(),
    repeatingDays: createRepeatDays(dataMock.dayOfWeek),
    tags: new Set(getTags(dataMock)),
    color: getRandomValue(dataMock, `color`),
    isFavorite: getRandomBoolean(),
    isArchive: getRandomBoolean()
  };
};

const TASKS_COUNT = 20;

export const mockTasks = () => {
  const tasks = [];
  for (let i = 0; i < TASKS_COUNT; i++) {
    tasks.push(getTask());
  }

  return tasks;
};
