export const getRandomNumber = (count) => {
  return Math.floor(Math.random() * count);
};

export const getRandomDueDate = () => {
  return Date.now() + 1 + getRandomNumber(7) * 60 * 60 * 24 * 1000;
};

export const getRandomValue = (obj, key) => {
  const currentKey = obj[key];
  const currentKeyLength = currentKey.length;
  return currentKey[getRandomNumber(currentKeyLength)];
};

export const getRandomBoolean = () => Boolean(Math.round(Math.random()));

export const createRepeatDays = (data) => {
  const days = {};

  for (const day of data) {
    days[day] = getRandomBoolean();
  }

  return days;
};

export const getTags = (data) => {
  const randomTags = new Array(3);
  return [...randomTags].map(() => data.tags[getRandomNumber(data.tags.length)]);
};

