import './style.css';
import { addData, refreshData } from './api.js';

const addScoreBtn = document.querySelector('.add-score-btn');
addScoreBtn.addEventListener('click', (e) => {
  e.preventDefault();
  refreshData();
  addData();
});

window.addEventListener('load', refreshData);

const refreshBtn = document.querySelector('.refresh-btn');
refreshBtn.addEventListener('click', () => {
  refreshData();
});
