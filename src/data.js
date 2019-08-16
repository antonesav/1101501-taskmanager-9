const getRandomNumber = (count) => {
  return Math.floor(Math.random() * count);
};

export const getRandomDueDate = () => {
  return Date.now() + 1 + getRandomNumber(7) * 60 * 60 * 24 * 1000;
};

export const getRandomValue = (key) => {
  const currentKey = dataMock[key];
  const currentKeyLength = currentKey.length;
  return currentKey[getRandomNumber(currentKeyLength)];
};

export const getRandomBoolean = () => Boolean(Math.round(Math.random()));

const dataMock = {
  description: [`Изучить теорию`, `Сделать домашку`, `Пройти интенсив на соточку`],
  // dueDate: getRandomDueDate(),
  tags: [`homework`, `theory`, `practice`, `intensive`, `keks`],
  color: [`black`, `yellow`, `blue`, `green`, `pink`],
  dayOfWeek: [`Mo`, `Tu`, `We`, `Th`, `Fr`, `Sa`, `Su`]
};

const createRepeatDays = () => {
  const days = {};

  for (const day of dataMock.dayOfWeek) {
    days[day] = getRandomBoolean();
  }

  return days;
};

const getTags = () => {
  const randomTags = new Array(3);
  return [...randomTags].map(() => dataMock.tags[getRandomNumber(dataMock.tags.length)]);
};

export const getTask = () => {
  return {
    description: getRandomValue(`description`),
    dueDate: getRandomDueDate(),
    repeatingDays: createRepeatDays(),
    tags: new Set(getTags()),
    color: getRandomValue(`color`),
    isFavorite: getRandomBoolean(),
    isArchive: getRandomBoolean()
  };
};
