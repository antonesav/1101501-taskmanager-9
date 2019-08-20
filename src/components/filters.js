const filters = [
  {title: `all`, count: 0, isChecked: true, isDisabled: false},
  {title: `overdue`, count: 0, isChecked: false, isDisabled: true},
  {title: `today`, count: 0, isChecked: false, isDisabled: true},
  {title: `favorites`, count: 0, isChecked: false, isDisabled: false},
  {title: `repeating`, count: 0, isChecked: false, isDisabled: false},
  {title: `tags`, count: 0, isChecked: false, isDisabled: false},
  {title: `archive`, count: 0, isChecked: false, isDisabled: false},
];

// const filterCount = {
//   'all': function (it) {
//     return it.length;
//   },
//
//   'overdue': function (it) {
//     return it.count;
//   },
//
//   'today': function (it) {
//     return it.count;
//   },
//
//   'favorites': function (it) {
//     return it.filter((task)=> task.isFavorite).length;
//   },
//
//   'repeating': function (it) {
//     return it.filter((task)=> isRepeating(task.repeatingDays)).length;
//   },
//
//   'tags': function () {
//     return countTags.size;
//   },
//
//   'archive': function (it) {
//     return it.filter((task)=> task.isArchive).length;
//   }
// };
const filterCount = {
  all: 0,

  overdue: 0,

  today: 0,

  favorites: 0,

  repeating: 0,

  tags: 0,

  archive: 0,
};

const countTags = new Set();

// Имеется ли хоть 1 повторяющийся день
const isRepeating = (days) => {
  return Object.keys(days).some((day) => {
    return days[day];
  });
};

const renderFilter = (filter) => {
  const {title, count, isChecked, isDisabled} = filter;
  return `
    <input
      type="radio"
      id="filter__${title}"
      class="filter__input visually-hidden"
      name="filter"
      ${isChecked ? `checked` : ``}
      ${isDisabled ? `disabled` : ``}
    />
    <label for="filter__${title}" class="filter__label">
        ${title} <span class="filter__${title}-count">${count}</span>
    </label>`;
};

const getFilters = (markup) => markup.map((filter) => renderFilter(filter));

const fillFilters = (tasks) => {

  for (const task of tasks) {
    countTags.add(...task.tags);
  }

  tasks.forEach((item) => {
    filterCount.all += item ? 1 : 0;
    filterCount.favorites += item.isFavorite ? 1 : 0;
    filterCount.repeating += isRepeating(item.repeatingDays) ? 1 : 0;
    filterCount.tags = countTags.size;
    filterCount.archive += item.isArchive ? 1 : 0;
  });

  Object.keys(filterCount).forEach((item, index) => {
    filters[index].count = filterCount[item];
  });
};

export const getFiltersTemplate = (tasks) => {
  fillFilters(tasks);
  return `
  <section class="main__filter filter container">
    ${getFilters(filters).join(``)}
  </section>`;
};
