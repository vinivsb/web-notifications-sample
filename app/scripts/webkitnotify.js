/*
* Attach request permisison on load page
* 
*/
window.addEventListener('load', function () {
  Notification.requestPermission(function (status) {
    if (Notification.permission !== status) {
      Notification.permission = status;
    }
  });
});

/*
* A sample with tags on the constructor, for group messages.
*
*/
document.getElementById("sample-with-tags").addEventListener("click", function () {
	if(window.Notification && Notification.permission == "granted"){
		var note3 = new Notification("Hi bro.!", {tag: "tagName"});
		var note4 = new Notification("Hi bro.! This rewrite another", {tag: "tagName"});
	}
});

/*
* Just a sample
*
*/
document.getElementById("sample").addEventListener("click", function () {
	if(window.Notification && Notification.permission == "granted"){
		var note = new Notification("Hey brother!");
		var note2 = new Notification("Hey brother! 2");
	}
});


/*
* A sample with icon on the constructor.
*
*/
document.getElementById("sample-with-icon").addEventListener("click", function () {
	if(window.Notification && Notification.permission == "granted"){
		var note5 = new Notification("Look the awesome HTML5 icon! :P", {icon: "./images/icon.jpg"});
	}
});

/*
* A sample with custom body string.
*
*/
document.getElementById("sample-with-custom-body").addEventListener("click", function () {
	if(window.Notification && Notification.permission == "granted"){
		var note6 = new Notification("With HTML5 icon and..", {icon: "./images/icon.jpg", body: "..a custom body string!"});
	}
});

/*
* A sample with request permission.
*
*/
document.getElementById("sample-require").addEventListener("click", function () {
  Notification.requestPermission(function (status) {
    if (Notification.permission !== status) {
      Notification.permission = status;
    }
  });
});