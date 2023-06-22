import './style.css';
import { addData, refreshData } from './api.js';

const addScoreBtn = document.querySelector('.add-score-btn');
addScoreBtn.addEventListener('click', (e) => {
  refreshData();
  e.preventDefault();
  addData();
});

const refreshBtn = document.querySelector('.refresh-btn');
refreshBtn.addEventListener('click', () => {
  refreshData();
});

window.addEventListener('load', refreshData());
// const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
// const headers = {
//   'Content-Type': 'application/json',
// };
// const body = { 'name': 'scorse' };

// fetch(url, { method: 'POST', headers, body: JSON.stringify(body) })
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });