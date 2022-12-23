chrome.runtime.onInstalled.addListener(function() {
    chrome.tabs.create({url: "https://github.com/sauravhathi/myperfectice-automation-tool#readme"});
});

console.log("background.js loaded");