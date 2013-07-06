function isPIP() {
    return document.location.href.match(/&pipmode=true/);
}

function getViD() {
    return document.location.href+'&pipmode=true';
}

function openPIP() {
    chrome.extension.sendMessage({
        vid: getViD()
    });
}

function closeTab() {
    chrome.tabs.query({
        active: true,
        windowId: chrome.windows.WINDOW_ID_CURRENT
    },function(tabs) {
        chrome.tabs.remove(tabs);
    });
}

if(!isPIP()) {
    if(confirm('Do you want to play as picture-in-picture (PIP)?')) {
        openPIP();
        closeTab();
    }
}
