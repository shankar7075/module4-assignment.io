(function () {

   Hello Yaakov
   Good Bye John
   Good Bye Jen
   Good Bye Jason
   Hello Paul
   Hello Frank
   Hello Larry
   Hello Paula
   Hello Laura
   Good Bye Jim

   WARNING!!! WARNING!!!
   The code does NOT currently work! It is YOUR job to make it work
   as described in the requirements and the steps in order to complete this
   assignment.
   WARNING!!! WARNING!!!


  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];


  for (var i = 0; i < names.length; i++) {

   
     var firstLetter = names[i].charAt(0).toLowerCase();

    
    if (firstLetter === 'j') {
       byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }
})();
