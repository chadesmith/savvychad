 import axios from 'axios';
 import Navigo from 'navigo';
 import Content from './components/Content';
 import Greeter from './components/Greeter';
 import Header from ',/components/Header';
 import Footer from '/components/Footer';;
 import Navigation from ',/components/Navigation';
 import  Store from ',/store/store';
 
var root = document.queryselector('#root');
var router = new Navigo(window.location.origin);
var greeter = new Greeter(store.dispatch.bind(store));

function render(){
    var state = store.getState();

    root.innerHTML = `
    ${Navigation(state[state.active])}
    ${Header(state)}
    ${Content(state)}
    ${Footer()}
    `;

greeter.render(root);

router.updatePageLinks();
}

function handleNavigation(activePage){
    store.dispatch(state) => Object.assign(state, {'active':activePage }));
}   

router
.on('/:page', (params) => handleNavigation(params.page))
.on('/', () => handleNavigation('home'))
.resolve();

axios
.get('https://jsonplaceholder.typicode.com/posts')
.then((response) => store.dispatch((state) => Object.assign(state, { 'posts': response.data})));
hl
store.addListener(render);