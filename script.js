$( document ).ready(function() {
    console.log( "ready!" );

    $( ".question1" ).hide()
    $( ".question4" ).hide()
    $( ".question2" ).hide()
    $( ".question3" ).hide() 
    $( "#results" ).hide() 
    $( "#showScore" ).hide() ;  

    $( '#start' ).click(function() {
      $( ".question1" ).show(); 
      $( "#start-div" ).empty(); 
    });

var score = 1000 ; 
var initials = ''; 

function losePoints(){
 score = score - 100
} ;

function gainPoints(){
     score = score + 100 
}; 



 $( ".wrong" ).click(function() {
  losePoints();
  $( "#score" ).empty()
  console.log(score)
  $( "#score" ).append(score ) 

  });

  
  $( "#right1" ).click(function() {
    gainPoints();
    $( "#score" ).empty()
    $('.question1').hide();
    $( ".question2" ).show();
    $( "#showScore" ).show()
    $( "#score" ).append(score ) 
  });
  $( "#right2" ).click(function() {
    gainPoints();
    $( "#score" ).empty()
    $('.question2').hide();
    $( ".question3" ).show();
    $( "#score" ).append(score )   
  });
  $( "#right3" ).click(function() {
    gainPoints();
    $( "#score" ).empty()
    $('.question3').hide();
    $( ".question4" ).show();
    $( "#score" ).append(score ) 
  });
  $( "#right4" ).click(function() {
    gainPoints();
    $( "#score" ).empty()
    $('.questions').empty();
    $( "#results" ).show();
    $( "#score" ).append(score); 
    // alert('Your Score is ' + score + ' points!' )
    initials = prompt('Your score is ' + score + '.' + ' Please enter your initials!')
  });


  // $( "#again" ).click(function() {
  //   // $( "#score" ).empty();
  //   $('.questions').empty();
  //   $( ".question1" ).show();
  //   // $( "#score" ).append(score);
  //   // var score = 1000; 
    
  // });  

console.log(score)





// $( "#results" ).click(function() {
//   alert('Your score is ' + score + '!!')
// });




var score1= localStorage.setItem(score);
var score2= localStorage.setItem(score);
var score3= localStorage.setItem(score);
});

