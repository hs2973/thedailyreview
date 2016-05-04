$(document).ready(function(){
	$('#search').submit(function(e){
		alert("clicked");
		e.preventDefault();
		$('#iframeWrapper').attr('src', $('#iframeUrl').val());
	});


});

var target = document.getElementById("drop");
target.addEventListener("dragenter", function(e) {
  // give the user visual feedback
  e.target.classList.add("highlight");
});

target.addEventListener("dragleave", function(e) {
  e.target.classList.remove("highlight");
});

target.addEventListener("dragover", function(e) {
  e.preventDefault();
  return false;
});

target.addEventListener('drop', function(e) {
    // don't let the browser switch to an image!
    alert("hello");
    e.preventDefault();

    // read the data
    var url = e.dataTransfer.getData("url") || e.dataTransfer.getData("text/uri-list");
    alert(url);
    var img = document.createElement("img");
    img.src = url;
    target.appendChild(img);

    e.target.classList.remove("highlight");
});