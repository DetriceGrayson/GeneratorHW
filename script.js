
//Generate random passowrd
function generate(){

    //set password lenght/complexity
    let complexity = document.getElementById("slider").value;

    //let possible password values 
    let values = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()-_=+";

    let password ="";

    //create for loop to change password characters
    for(var i = 0; i <= complexity; i++ ){

        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length -1)));
    
        
    }
    
    //add password to text box display area
    document.getElementById("display").value = password;  
    
    //add password to previously generated passwords section
    document.getElementById("lastNums").innerHTML += password + "<br />";
    

}
