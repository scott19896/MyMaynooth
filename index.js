 var rootRef=firebase.database().ref().child("Events/Entertainment"); //use to retrieve entertainment events
 var rootRef2=firebase.database().ref().child("Events/Food"); //use to retrieve food offers
 
 rootRef.on("child_added", snap => { //fill the empty event table 
  
  var provider=snap.child("provider".val()); 
  var name=snap.child("name".val());
  var description=snap.child("description".val());
  var ARTS=snap.child("ARTS".val());
  var CSSE=snap.child("CSSE".val());
  var OTHER=snap.child("OTHER".val());
  
   $("#table_body").append("<tr><td>"+provider+"</td></td>"+name+
                      "</td><td>"+description+"</td><td>"+ARTS+"</td><td>"+CSSE+"</td><td>"+OTHER+"</td></tr>");

  });


 rootRef2.on("child_added", snap => {  //fill food table
  
  var provider=snap.child("provider".val());
  var name=snap.child("name".val());
  var description=snap.child("description".val());


  $("#table_body").append("<tr><td>"+provider+"</td></td>"+name+
                      "</td><td>"+description+"</td></tr>");

  });

