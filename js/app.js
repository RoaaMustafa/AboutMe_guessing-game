'use strict';
let username = prompt('What\'s your name?');
alert('Welcome ' + username);
document.write('Thank you for visiting ' + username);

let answer1 = prompt('Do You think I\'m good enough to be a developer?','yes/no');
switch (answer1.toLowerCase()) {
    case 'yes':
    case 'y': 
    alert('Thank you');
    console.log(answer1); 
        break;
    case 'no':
    case 'n':  
    alert('No you are worng about that');
    console.log(answer1);  
    break;
    default:
        alert('please, put yes/no answer !');
        break;
} 

let answer2 = prompt('Do you think that I like drowing?','yes/no');
switch (answer2.toLowerCase()){
    case 'yes':
    case 'y': 
        alert('You alright, It\'s my hobby');
        console.log(answer2);
        break;
    case 'no':
    case 'n': 
    alert('mmm, You are wrong , It\'s my hobby'); 
    console.log(answer2);
    break;
    default:
        alert('please, put yes/no answer !');
        console.log('you did\'n answer');
        break;
}

let answer3 = prompt('What think my favorite color?, It\'s the pink?','yes/no');
switch (answer3.toLowerCase()){
    case 'yes':
    case 'y': 
    alert ('NO, my favorit one is white ');
    console.log(false);
    break;
    case 'no'  :
    case 'n'    :   
    alert( 'Yes not pink ');
    console.log(true);
    break;
    default:
        alert('please, answer me it\'s a game' );
        console.log('you did\'n answer');
  break;
}
let myage = prompt('Guess my age! , it\'s 23 or not');
switch (myage.toLowerCase()) {
    case 'yes':
    case 'y':
        alert('Yes I\'m 23');
        console.log(myage + 'you guessed my age  I\'m 23')       
        break;
    case 'no':
    case 'n':
        alert('No I\'m 23 ');
        console.log(myage +' you don\'t guess my age I\'m 23');   
    default:
        alert('please yes/no  ');  
        break;
}

let like = prompt('Do like my website ?');
switch (like.toLowerCase()) {
    case 'yes':
    case 'y': 
        alert ('Thank you');
        console.log(like);
        break;
        case 'no'  :
        case 'n'    :  
        alert( 'Ok, I\'ll try to make it better');
        console.log(false);
        break;
        default:
            alert('please, answer me it\'s a game');
            console.log('you did\'n answer');
      break;
    }