console.log(username)
console.log(gender)
console.log(userage)
console.log(username)

var username = prompt("Please input your name");
var gender = prompt("Please input your gender; male or female?");
if (gender != 'female' && gender != 'male'){
    var gender = prompt("Please input your gender again; male or female?");
    }    
var userage = prompt("How old are you?");
if (userage <= 0) {
    var userage = prompt ("That's not possible! "+username+", how old are you again?");
}
if (userage <= 0) {
    var userage = prompt ("That's not possible! "+username+", how old are you again?");
}

else if (userage > 0) {
    var welcoming_message = prompt("Would you like to skip the welcoming message? (Y/N)");
}         
    if (welcoming_message == 'N' || welcoming_message == 'n') {

        if (gender === 'male') {
        alert ("Welcome Mr. "+username);}

        if (gender === 'female') {
        alert ("Welcome Ms. "+username);}

    else if (welcoming_message == 'Y'  || welcoming_message == 'y') {
    alert( "As you wish" );
}    
    }
/*
}
if (gender === 'male') {
    alert ("Welcome Mr"+username)
}
else if (gender === 'female') {
    alert ("Welcome Ms"+username)

}
else {

}
*/
/*switch (welcoming_message) {
    case "Y"
    :break;
    case "N"
    :if (userage <= 0) {
    var userage = prompt ("That's not possible! "+username+", how old are you again");
}
    else if (gender === 'male') {
        
        alert ("Welcome Mr. "+username);
    }
    else if (gender === 'female') {

        alert ("Welcome Ms. "+username);
    }
    else {
        var gender = prompt("Please input your gender again; male or female?");
    }
    break;

}
Check later
 
*/