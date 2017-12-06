 var rootRef=firebase.database().ref().child("Events");

 rootRef.on("child_added", snap => {
  
  var provider=snap.child("provider".val());
  var name=snap.child("name".val());
  var description=snap.child("description".val());
  var ARTS=snap.child("ARTS".val());
  var CSSE=snap.child("CSSE".val());
  var OTHER=snap.child("OTHER".val());

  $("#table_body").append("<tr><td>"+provider+"</td></td>"+name+
                      "</td><td>"+description+"</td><td>"+ARTS+"</td><td>"+CSSE+"</td><td>"+OTHER+"</td></tr>");

  });

