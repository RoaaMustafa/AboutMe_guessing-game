'use strict';
let answer1 = confirm('Do You think I\'m good enough to be a developer?');
if (answer1){
    alert('Thank you ');
    console.log(answer1);
}else {
    alert('No you are worng about that');
    console.log(answer1);
}

let answer2 = prompt('Do you think that I like drowing?');
switch (answer2) {
    case 'yes':
    case 'y': 
    answer2 = answer2.toLowerCase   
        alert('You alright, It\'s my hobby');
        console.log(answer2);
        break;
    case 'no':
    case 'n': 
    answer2 = answer2.toLowerCase   
    alert('mmm, You are wrong , It\'s my hobby'); 
    console.log(answer2);
    break;
    default:
        alert('please, put yes/no answer !');
        console.log('you did\'n answer');
        break;
}

let answer3 = prompt('What think my favorite color?, It\'s the pink?');
switch (answer3) {
    case 'yes':
    case 'y': 
    answer3 = answer3.toLowerCase
    alert ('NO, my favorit one is white ');
    console.log(false);
    break;
    case 'no'  :
    case 'n'    :
    answer3 = answer3.toLowerCase   
    alert( 'Yes not pink ');
    console.log(true);
    break;
    default:
        alert('please, answer me it\'s a game' );
        console.log('you did\'n answer');
  break;
}
let myage = confirm('Guess my age! , it\'s 23 or not');
if (myage){
alert('Yes I\'m 23');
console.log(myage + 'you guessed my age  I\'m 23')
}
else{
    alert('No I\'m 23 ');
    console.log(myage +' you don\'t guess my age I\'m 23');
}
let like = prompt('Do like my website ?');
switch (like) {
    case 'yes':
    case 'y': 
    like = like.toLowerCase
        alert ('Thank you');
        console.log(like);
        break;
        case 'no'  :
        case 'n'    :
        like = like.toLowerCase   
        alert( 'Ok, I\'ll try to make it better ');
        console.log(false);
        break;
        default:
            alert('please, answer me it\'s a game' );
            console.log('you did\'n answer');
      break;
    }