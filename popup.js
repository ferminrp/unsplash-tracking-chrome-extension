function abbrNum(r,t){t=Math.pow(10,t);for(var a=["k","m","b","t"],n=a.length-1;n>=0;n--){var e=Math.pow(10,3*(n+1));if(e<=r){1e3==(r=Math.round(r*t/e)/t)&&n<a.length-1&&(r=1,n++),r+=a[n];break}}return r}

$.getJSON('https://api.unsplash.com/users/ferminrp/statistics?client_id=cf05c7bd686ac28a242a77ef0d1a52cae2cffbc6161801abeab6440d8213d5c2', function(data) {
    //data is the JSON string
    console.log(data.downloads.total);
    var downloads = abbrNum(data.downloads.total,2);
    var views = abbrNum(data.views.total,2);
    var likes = abbrNum(data.likes.total,2);
    $('#downloads').text(downloads);
    $('#views').text(views);
    $('#likes').text(likes);
    chrome.browserAction.setBadgeText({text:downloads});
});



/*chrome.browserAction.setBadgeBackgroundColor({color:"red"}); chrome.browserAction.setBadgeText({text:downloads});*/
