// Create the button
var button = document.createElement("button");
button.innerHTML = "Click Me";

// Append it somewhere
var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

// Add event handler/ create action for button
button.addEventListener ("click", function() {
    alert("Before FlatIron I knew absolutely nothing about JavaScript")
});