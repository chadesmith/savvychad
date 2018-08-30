/*

var userInput = function userInput(){
    var data = prompt('Type an example of a string, boolean, or number.');

    if(data == null){
        console.log('Please enter data.');
    }
    else if(data == undefined){
        console.log('Your input is undefined.');
    }
    else if(data == ('true' | 'false')){
        console.log('Your input is boolean.');
    }
    else if(data === ''){
        console.log('Your input is a string.');
    }
    else{
        console.log('Your input is a number.');
    }
};

userInput();
*/

var welcomeUser = function welcomeUser(){
    var userName = prompt('what\'s your name?');

    if(!userName){
        welcomeUser();
    }
    else{
        document.querySelector('#greeting').innerHTML = `
        <h3>Welcome to my portfolio page, ${userName}</h3>
        <h4>have fun</h4>`;
    }
};

welcomeUser();
