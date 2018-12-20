function getOgtag(source){
    /*
     * take some meta tag
     */
    return tag
}

//send tag
chrome.extension.sendMessage({
    action: "getOgtag"
    source: getOgtag(document.body)
})
