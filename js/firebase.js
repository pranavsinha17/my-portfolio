'use strict';

//grab a form
const form = document.querySelector('.form');

//grab an input
const inputName = form.querySelector('#name');
const inputEmail = form.querySelector('#email');
const inputMessage = form.querySelector('#message');



//config your firebase push
var config = {
    apiKey: "AIzaSyDwKYT3-OgGodIYEJjl47TGf4uXC86-7k8",
    authDomain: "pranav4portfolio.firebaseapp.com",
    databaseURL: "https://pranav4portfolio.firebaseio.com",
    projectId: "pranav4portfolio",
    storageBucket: "pranav4portfolio.appspot.com",
    messagingSenderId: "610685077997",
    appId: "1:610685077997:web:804e42572c89420e0c3fe4",
    measurementId: "G-JT6PE7MHPV"
  };


//create a functions to push
    function firebasePush(input1,input2,input3) {


        //prevents from braking
        if (!firebase.apps.length) {
            firebase.initializeApp(config);
        }

        //push itself
        var mailsRef = firebase.database().ref('clients').push().set(
            {
                name: input1.value,
                email:input2.value,
                message:input3.value,
                
            }
        );

    }
    //hello

//push on form submit
    if (form) {
        form.addEventListener('submit', function (evt) {
            evt.preventDefault();
            firebasePush(inputName,inputEmail,inputMessage);

            //shows alert if everything went well.
            return alert('Thank You for your interest...I will soon contact you.');
        })
    }