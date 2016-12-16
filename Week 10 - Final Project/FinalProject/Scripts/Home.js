var Home = {};

$(document).ready(function () {
    $(".login").click(Home.logIn());
    $(".createAccount").click(Home.CreateAccount());
});


Home.LogIn = function ()
{

    $.get("Home/GetAccountInformation", function (rawReponseData, status) {
        alert(rawReponseData);
        var deserializedData = JSON.parse(rawReponseData);
        var logins = deserializedData.Data;

        for (var i = 0; i < logins.length; i++) {
            alert(logins[i].username);
            alert(logins[i].password);
        }
    });

    var test = {"username":taras, "password":1234};
    $.ajax
    ({
        url: "Home/GetAccountInformation",
        data: {
            username: $(".username").val(),
            password: $("password").val()
        },
        success: function (result) { alert(result);
            if (deserializedData.Message == "Success")
                Home.ChangeToAccountInfo();
        }
    });
}

Home.ChangeToAccountInfo = function ()
{
    var updateSecond = document.createElement("update2");
    var txt = document.createTextNode("Update");
    document.getElementsByClassName("paragraph2").innerHTML = "<b>AccountName</b><br>EMailAddress<br>CurrentGPA";
    document.getElementsByClassName("alignInputs").innerHTML = "";
    document.getElementsByClassName("login").innerHTML = "Update";
    updateSecond.appendChild(txt);
    document.getElementsByClassName("login").appendChild(updateSecond);
}
Home.CreateAccount = function()
{
    var username = document.forms["user2"]["newUsername"].val();
    var password = document.forms["user2"]["newPassword"].val();
    var email = document.forms["user2"]["email"].val();
    var repeatEmail = document.forms["user2"]["repeatEmail"].val();

    $.ajax
    ({
        url: "Home/CreateAccount",
        data:
        {
            username: $(".newUsername").val(),
            password: $(".newPassword").val(),
            email: $(".email").val(),
            repeatEmat: $(".repeatEmail").val(),    
        },
        success: function (result) {
            alert(result);
            if (deserializedData.Message == "Success")
                Home.ChangeToAccountInfo();
        }

    });

}
