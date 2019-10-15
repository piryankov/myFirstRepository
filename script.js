function phonePassword(){
    var inputPwd = document.getElementById("inputPwd").value;
    var btn = document.getElementById("btn");
    var result = document.getElementById("result");

    var password = "123456";
    var message = "";
    var errors = 0;
    var success = 0;

    if(inputPwd.length != 6){
        message = "Must be exactly 6 symbols. <span style='color: red;'> Try again!</span>";
        document.getElementById("result").innerHTML = message;
        errors++;
    }else if(inputPwd != password){
        message = "Incorrect password. <span style='color: red;'> Try again!</span>";
        document.getElementById("result").innerHTML = message;
        errors++;
    }else{
        message = "Correct password. <span style='color: green;'>Congratulations!</span>";
        document.getElementById("result").innerHTML = message;
        success++;
    }

    console.log("Success count: " + success + " | Error count: " + errors);

    
}