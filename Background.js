function setNotification(vid){
    window.webkitNotifications.createHTMLNotification(chrome.extension.getURL('Player.html?url='+encodeURI(vid))).show();
}

chrome.extension.onMessage.addListener(
    function(request,sender,sendResponse) {
        setNotification(request.vid);
    }
);
