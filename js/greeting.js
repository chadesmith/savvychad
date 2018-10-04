export default function welcomeUser(){
    var userName = prompt('What\'s your name?');

    if(userName === ''){
        welcomeUser();
    }
    else{
        document.querySelector('#greeting').innerHTML = `
          <h3>This is the "Stone in Love page !", ${userName}</h3>
          <h4>Thank you for your interest!</h4>
        `;
    }
}