// Collapsible
var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");

        var content = this.nextElementSibling;

        if (content.style.maxHeight) { //if no msg from user
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }

    });
}

function getTime() { //to get current time 

    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();

    if (hours < 10) {
        hours = "0" + hours; //05 : 19
    }

    if (minutes < 10) {
        minutes = "0" + minutes; //12 : 02
    }

    let time = hours + ":" + minutes;
    return time;
}

// Gets the first message
function firstBotMessage() {
    let firstMessage = "How's it going?"
    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

    let time = getTime();

    $("#chat-timestamp").append(time); //using Jquery to simplify out element selection
    document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();

// Retrieves the response
function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';

    $("#chatbox").append(botHtml); //JQuery to refer the chatbox

    document.getElementById("chat-bar-bottom").scrollIntoView(true); //makes space for new msg
}

//Gets the text text from the input box and processes it
function getResponse() {
    let userText = $("#textInput").val();
    //retrieves text from input box

    if (userText == "") {
        userText = "I love your Work!";
    }

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val(""); //JQuery
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true); //makes space for new msg

    setTimeout(() => { //simulate a small delay as if the bot/server is taking time 
            getHardResponse(userText);
        }, 1000) //1 sec delay 

}

// Handles sending text via button clicks
function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    //Uncomment this if you want the bot to respond to this buttonSendText event
    // setTimeout(() => {
    //     getHardResponse(sampleText);
    // }, 1000)
}

function sendButton() {
    getResponse();
}

function heartButton() {
    buttonSendText("Heart clicked!")
}

// Press enter to send a message
$("#textInput").keypress(function(e) { //JQuery
    if (e.which == 13) { //13 is key code for enter
        getResponse();
    }
});