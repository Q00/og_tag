//lister wait chrome request
chrome.extension.onMessage.addListner(function(request, sender){
    if(request.action == "getOgtag"){
	document.body.innerText = request.source
    }
}
//put getOgtag script in some site, and call getOgtag
function onWindowLoad() { chrome.tabs.executeScript(null, {
	file: "getOgtag.js"}, () => {
	    //error
	    if(chrome.extension.lastError){
		document.body.innerText = 'error, can not get og tag : \n ' + chrome.extension.lasterror.message;
	    }
	})
}

window.onload = onWindowLoad
