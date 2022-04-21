console.log(username)
console.log(gender)
console.log(userage)
console.log(username)

var username = prompt("Please input your name");
var gender = prompt("Please input your gender; male or female?");

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
        if (gender != 'female' && gender != 'male'){
            alert ("Welcome "+username);}

        if (gender === 'male') {
        alert ("Welcome Mr. "+username);}

        if (gender === 'female') {
        alert ("Welcome Ms. "+username);}
    }
    else if (welcoming_message == 'Y'  || welcoming_message == 'y') {
        alert ("As you wish");}    

 var yes_no_qs = ["", "" , ""];
 while  (yes_no_qs[0] === "" && yes_no_qs[1] === "" &&yes_no_qs[2] === "" ) {
     yes_no_qs = [prompt ("Are you happy?"),prompt ("Do you like coding?"),prompt ("Do you mind helping?")];
     var ans = "Invalid"
     alert (ans)}

 for (let i = 0; i < yes_no_qs.length; i++) {
 console.log(yes_no_qs[i]);
 }
