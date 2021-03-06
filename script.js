/// First JS function I've ever written:

/*console.log("hello world")
var x = "hello"

x = 5

function moist(rainAmount) {
	console.log("Boy is it wet out here")
	for var( i = 0 ; i < rainAmount; i++) {
		console.log("I am moister than an oyster")
	}
	return "moist"
}
*/


/// JS for personal site


var fancyText = document.getElementById('fancy');
const intervalTime = 150; // milliseconds between character deletion/insertion
const initialPause = 1000; // give the person viewing the website some time to view our site
const callbackPause = 500; // how long we'll wait before we go to the next type-text

function deleteContent(callback) {

    var intervalId = setInterval(function() {
        if (fancyText.innerHTML.length == 0) {
            clearInterval(intervalId);

            if (callback) {
                setTimeout(callback, callbackPause);
            }
        }

        fancyText.innerHTML = fancyText.innerHTML.substring(0, fancyText.innerHTML.length - 1);
    }, intervalTime);

}

function addContent(contentToAdd, callback) {
    var currentIndex = 0;

    var intervalId = setInterval(function() {
        if (currentIndex == contentToAdd.length) {
            clearInterval(intervalId);

            if (callback) {
                setTimeout(callback, callbackPause);
            }
        }

        fancyText.innerHTML = contentToAdd.substring(0, currentIndex);
        currentIndex++;
    }, intervalTime);
}

setTimeout(function() {
    deleteContent(function() {
        addContent("a casual coder", function() {
            deleteContent(function() {
                addContent("a future law school student", function() {
                    deleteContent(function() {
                        addContent("Andrew");
                    })
                });
            });
        });
    });
}, initialPause);