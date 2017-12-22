$(function() {
  const config = {
    apiKey: "AIzaSyCFW7ylQ2im6knlgQVAXjxDjmncECjAWC8",
    authDomain: "mymaynoothproject-231017.firebaseapp.com",
    databaseURL: "https://mymaynoothproject-231017.firebaseio.com",
    projectId: "mymaynoothproject-231017",
    storageBucket: "mymaynoothproject-231017.appspot.com",
    messagingSenderId: "508311719577"
  };
  //firebase.initializeApp(config);
    document.getElementById("ButStud").addEventListener("click",r =>{
       $("#CustLog").css("display","block");
        
        $("#BusLog").css("display","none");
       });
 
document.getElementById("ButBus").addEventListener("click",r =>{
       $("#CustLog").css("display","none");
        
        $("#BusLog").css("display","block");
       });
    $(".js-form").on("submit", event => {
    event.preventDefault();
    const email = $("#js-email").val();
    const password = $("#js-password").val();
    const message = " Sign In Successful";
    var dt = new Date();
    var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
    console.log(email, password);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        $(".incorrect").css("display", "none");
        firebase.database().ref("testSignIn").push({
            email,
            message,
            time,
          },function(error){
            if(error)
                console.log(error);
            else
                window.location.replace("homeMyMaynooth.html")
            
        });
      })
      .catch(error => {
        $(".incorrect").css("display", "block");
      });
    
  });
    $(".js-formBus").on("submit", event => {
    event.preventDefault();
    const email = $("#js-email2").val();
    const password = $("#js-password2").val();
    const message = " Sign In Successful";
    var dt = new Date();
    var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
    console.log(email, password);
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        $(".incorrect").css("display", "none");
        firebase.database().ref("testSignIn").push({
            email,
            message,
            time,
          },function(error){
            if(error)
                console.log(error);
            else
                window.location.replace("BusinessHome.html")
            
        });
      })
      .catch(error => {
        $(".incorrect").css("display", "block");
      });
    
  });
});