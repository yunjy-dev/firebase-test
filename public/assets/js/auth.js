// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDOxc7WiUUrK9gCX9wS3BqoM2YnAcJCJbk",
    authDomain: "fir-test-5581c.firebaseapp.com",
    databaseURL: "https://fir-test-5581c.firebaseio.com",
    projectId: "fir-test-5581c",
    storageBucket: "fir-test-5581c.appspot.com",
    messagingSenderId: "109765625144",
    appId: "1:109765625144:web:23b4053b2260f1eac6edcd",
    measurementId: "G-EED8NT9HLC"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

$(document).ready(function($) {
    firebase.auth().onAuthStateChanged(function (user){
        // if (user) { 
        //     console.log('log', user);
        //     // window.location.href="../../index.html";
        // }
        // else { console.log('err','not yet logined');}
        var cu = window.location.href;
        // var n1 = cu.indexOf('login');
        var n1 = cu.indexOf('auth/login');
        console.log('n1', n1);
            
        if(user){
            console.log('log', user);
            if(n1 > 1){
                window.open('../../index.html', '_self', false);
                
            }
            else{
                console.log(user);
                $("#lblemail").text(user.email);
            }
        }else{
            if(n1 < 1){
                window.open('./auth/login/index.html', '_self', false)
            }
        }
    });
});

function signup(){
    firebase.auth().createUserWithEmailAndPassword($("#txtemail").val(), $("#txtpasswd").val()).then(function(user){

    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
      });
      // [END createwithemail]
}


function logout(){
    firebase.auth().signOut().then(function(){

    }, function(error){
        //Do nothing
    })
}
function login(){


    // firebase.auth().signInWithEmailAndPassword(email, password).then(function(result){
    firebase.auth().signInWithEmailAndPassword($("#txtemail").val(), $("#txtpasswd").val()).then(function(result){
        
        //Do nothing

    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorCode+errorMessage)// ...
    });

}