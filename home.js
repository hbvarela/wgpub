var collap = document.getElementsByClassName("collapsible");
var conten = document.getElementsByClassName("content");
var i;

for (i = 0; i < collap.length; i++) {
  collap[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

function colormode(x){
	if (x == 1){
		//Light Mode
		if (document.body.style.backgroundColor == "gainsboro"){
			alert("Already in Light Mode!");
		} else {
			document.body.style.color = "#0f0f0f";
			document.body.style.backgroundColor = "gainsboro";
			for (let j = 0; j < collap.length; j++) {
				collap[j].style.borderColor = "#0f0f0f";
			}
			for (let j = 0; j < conten.length; j++) {
				conten[j].style.borderColor = "#0f0f0f";
			}
		}
	} else if (x == 2){
		//Dark Mode
		if (document.body.style.color == "gainsboro"){
			alert("Already in Dark Mode!");
		} else {
			document.body.style.color = "gainsboro";
			document.body.style.backgroundColor = "#0f0f0f";
			for (let j = 0; j < collap.length; j++) {
  				collap[j].style.borderColor = "gainsboro";
			}
			for (let j = 0; j < conten.length; j++) {
				conten[j].style.borderColor = "gainsboro";
			}
		}
	}
}

function feedback(){
	alert("Thanks for the feedback!");
}