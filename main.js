import './style.css';
import { UsersApp } from './src/users/users-app';

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Crud App</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
  </div>
`;

const element = document.querySelector(".card");
UsersApp(element);