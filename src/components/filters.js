const filters = [
  {title: `all`, count: 0, isChecked: true, isDisabled: false},
  {title: `overdue`, count: 0, isChecked: false, isDisabled: true},
  {title: `today`, count: 0, isChecked: false, isDisabled: true},
  {title: `favorites`, count: 0, isChecked: false, isDisabled: false},
  {title: `repeating`, count: 0, isChecked: false, isDisabled: false},
  {title: `tags`, count: 0, isChecked: false, isDisabled: false},
  {title: `archive`, count: 0, isChecked: false, isDisabled: false},
];

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

const renderFilters = (markup) => markup.map((filter) => renderFilter(filter));

const fillFilters = (tasks) => {

  for (const task of tasks) {
    countTags.add(...task.tags);
  }

  filters[0].count = tasks.length;
  filters[3].count = tasks.filter((task)=> task.isFavorite).length;
  filters[6].count = tasks.filter((task)=> task.isArchive).length;
  filters[4].count = tasks.filter((task)=> isRepeating(task.repeatingDays)).length;
  filters[5].count = countTags.size;
};

export const getFiltersTemplate = (tasks) => {
  fillFilters(tasks);
  return `
  <section class="main__filter filter container">
    ${renderFilters(filters).join(``)}
  </section>`;
};
