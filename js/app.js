'use strict';
let totalscore=0;
let username = prompt('What\'s your name?');
alert('Welcome ' + username);
document.write('Thank you for visiting ' + username);

function q1(){
  let answer1 = prompt('Question.1: Do You think I\'m good enough to be a developer?','yes/no');
  switch (answer1.toLowerCase()) {
  case 'yes':
  case 'y':
    alert('Thank you');
    totalscore++;
    // console.log(answer1);
    break;
  case 'no':
  case 'n':
    alert('No you are worng about that');
    // console.log(answer1);
    break;
  default:
    alert('please, put yes/no answer !');
    break;
  }
}
q1();
function q2 (){
  let answer2 = prompt('Question.2:Do you think that I like drowing?','yes/no');
  switch (answer2.toLowerCase()){
  case 'yes':
  case 'y':
    alert('You alright, It\'s my hobby');
    totalscore++;
    // console.log(answer2);
    break;
  case 'no':
  case 'n':
    alert('mmm, You are wrong , It\'s my hobby');
    //console.log(answer2);
    break;
  default:
    alert('please, put yes/no answer !');
    // console.log('you did\'n answer');
    break;
  }
}
q2();
function q3(){
  let answer3 = prompt('Question.3: What do  think my favorite color?, It\'s the pink?','yes/no');
  switch (answer3.toLowerCase()){
  case 'yes':
  case 'y':
    alert ('NO, my favorit one is white ');
    // console.log(false);
    break;
  case 'no' :
  case 'n' :
    alert( 'Yes not pink ');
    totalscore++;
    //console.log(true);
    break;
  default:
    alert('please, answer me it\'s a game' );
    //console.log('you did\'n answer');
    break;
  }
}
q3();
let myage = prompt('Question.4: Guess my age! , it\'s 23 or not');
switch (myage.toLowerCase()) {
case 'yes':
case 'y':
  alert('Yes I\'m 23');
  totalscore++;
  //console.log(myage + 'you guessed my age  I\'m 23')
  break;
case 'no':
case 'n':
  alert('No I\'m 23 ');
  break;
  //console.log(myage +' you don\'t guess my age I\'m 23');
default:
  alert('please yes/no');
  break;
}

let like = prompt('Question.5: Do like my website ?');
switch (like.toLowerCase()) {
case 'yes':
case 'y':
  alert ('Thank you');
  totalscore++;
  //console.log(like);
  break;
case 'no' :
case 'n' :
  alert( 'Ok, I\'ll try to make it better');
  //console.log(false);
  break;
default:
  alert('please, answer me it\'s a game');
  //console.log('you did\'n answer');
  break;
}

let guessnum = prompt('Question.6: Guess a number between 1-10 I\'ll tell you what\'s my favorite number , you have only 4 attempts');
for ( let i=1 ; i<4 ;i++){
  guessnum = parseInt(guessnum);
  if (guessnum===3) {
    alert('you guessed');
    totalscore++;
    break;
  }else if (guessnum>3){
    //alert('Too high '+'Try again');
    guessnum = prompt('Too high Try again');
  } else if (guessnum<3){
    //alert('Too low ' + 'Try again');
    guessnum = prompt('Too low Try again');
  }else{
    guessnum = prompt('answer please');
  }
  if(i===4){
    alert('Thank you to try The number is 3');
    break;
  }
}

let guessmovie = ['pabilon','me before you','inception','fault in our stars','shawshank redemption','ocean 8','up'];
//console.log(guessmovie.every);
let score =0;
for (let i= 1 ; i<=6; i++){
  let possipleanswer=prompt(' Question.7: Guess my Best movie ,you have only 6 attepmts');
  possipleanswer = possipleanswer.toLowerCase();
  for(let j=0;j<guessmovie.length;j++){
    if(possipleanswer===guessmovie[j]){

      alert('you guessed');
      i=7;
      break;

    }


  }

  if(i===6){
    alert('you take all the attempts');
  }
}
if (score>1) {
  totalscore++;
}

alert(' Thank you  ' + username + '  your score is  '+ score + '  these are my best movies:  '+ ' 1.'+ guessmovie[0]+ ' 2.'+ guessmovie[1]+
' 3.'+ guessmovie[2]+' 4.'+ guessmovie[3]+' 5.'+ guessmovie[4]+ ' 6.'+ guessmovie[5]+' 7.'+ guessmovie[6]);

alert('Your total score is ' + totalscore +'/7 '+ ' Thank You' );
