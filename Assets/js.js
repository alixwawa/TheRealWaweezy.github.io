var divTags = document.querySelectorAll("p");
for (var i=0; i < divTags.length; i++) {
    divTags[i].setAttribute("style", "color:green" )
}

//var name = prompt("Hi, What's Your Name?")
 
var submitEl = document.querySelector("#submit");
var nameInput = document.querySelector("#name");
var emailInput = document.querySelector("#email");
var submissionREsponseEl = document.querySelector("#response");

submitEl.addEventListener("click", function(e) {
    e.preventDefault();

    console.log(e);

    var response = "Thanks for joining " + nameInput.value 
    submissionREsponseEl.textContent = response;
});

var newDiv = $("<div>");
newDiv.text("A pleasure to meet you!");
$("#empty-div").append(newDiv);
newDiv.attr("class", "h1");