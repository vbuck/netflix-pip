function getViD(){
    url=document.location.href;
    start=url.indexOf('url=')+4;
    realURL=decodeURI(url.substring(start));
    alert(realURL);
    return realURL;
}

function setURL(){
    document.getElementById('holder').src=getViD();
};

document.addEventListener('DOMContentLoaded', setURL);
