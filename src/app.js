import { sum } from './math.js';
import './app.css';
import webpackImage from './webpack.jpg';

window.addEventListener('DOMContentLoaded', () => {
    const el = document.querySelector('#app');
    el.innerHTML = `
        <h1> 1 + 2 = ${sum(1, 2)}</h1>
        <image src="${webpackImage}" alt="webpack" />
        `
})