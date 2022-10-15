'use strict';
/*import './react.css';*/
/*

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    React.createElement(
        "h1",
        {children: 'Hello!'},
    )
);*/







// show password function

const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');
const show = document.querySelector('#show');
const show2 = document.querySelector('#show2');

show.addEventListener('click', () => {
    if (show.classList.contains('show-pass')){
        password.setAttribute("type", "text");
    }
})

show2.addEventListener('click', () => {
    if (show2.classList.contains('show-pass')){
        password2.setAttribute("type", "text");
    }
})

// regexp for email

