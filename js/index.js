export const users = [
    { id: 1, name: 'Джейсон Стейтем', age: 57, email: 'stethem@gmail.com' },
    { id: 2, name: 'Арнольд Шварценеггер', age: 77, email: 'arnolyd@gmail.com' },
    { id: 3, name: 'Юра Ткач', age: 40, email: 'yuriytkach@gmail.com' }
  ];
  import { users } from './data';
import template from './templates/template.hbs';


const container = document.getElementById('app');

const renderedHtml = template({ users });

container.innerHTML = renderedHtml;
import { users } from './data';
import template from './templates/template.hbs';

const container = document.getElementById('app');
const filterForm = document.getElementById('filter-form');
const ageInput = document.getElementById('age-filter');

function renderUsers(filteredUsers) {
  const renderedHtml = template({ users: filteredUsers });
  container.innerHTML = renderedHtml;
}

renderUsers(users);

filterForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const age = ageInput.value;
  const filteredUsers = users.filter(user => user.age > age);
  renderUsers(filteredUsers);
});