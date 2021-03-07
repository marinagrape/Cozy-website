let sendButton = document.getElementById('send');
let resetButton = document.getElementById('reset');
let form = document.getElementById('form');


form.addEventListener('submit', function(e){
    e.preventDefault();
})

resetButton.addEventListener('click', function(){
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let phone = document.getElementById('phone');
    let message = document.getElementById('message');

    name.value = '';
    email.value = '';
    phone.value = '';
    message.value = '';
})

sendButton.addEventListener('click', function(e){
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let phone = document.getElementById('phone');
    let message = document.getElementById('message');

    name = name.value;
    localStorage.setItem('name', name);
    
    email = email.value;
    localStorage.setItem('email', email);

    phone = phone.value;
    localStorage.setItem('phone', phone);

    message = message.value;
    localStorage.setItem('message', message);
    
})