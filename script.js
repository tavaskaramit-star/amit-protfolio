document.querySelector("form")
.addEventListener("submit", function(e){

e.preventDefault();

alert("Thank You! Message Sent Successfully.");

this.reset();

});