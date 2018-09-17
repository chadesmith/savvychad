 import axios from 'axios';
 import Navigo from 'navigo';
import Navigation from ',/component/Navigation';
import Header from ',/component/Header';
import Content from './component/Content';
import Footer from ',/component/Footer';
import * as State from './store';
import Posts from ',/posts';

var root = document.queryselector('#root');
var router = new Navigo(window.location.origin);
var newState = Object.assign({}, State);

function render(state){
    root.innerHTML = `
${Navigation(state[state.active])}
${Header(state[state.active])}
${Content(state)}
${Footer()}
`;

 router.updatePageLinks();
}

function handleNavigation(activePage){
     newState.active = activePage;

 render(newState);
}










router
    .on('/:page', (params) => handleNavigation(params.page))
    .on('/', () => handleNavigation('home'))
    .resolve();


axios 
.get('http://jsonplaceholder.typicode.com/post'); //returns a promise
.then(response) => {
    newState.posts = response.data;

render(newState);
});