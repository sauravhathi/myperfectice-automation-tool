document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("start").addEventListener("click", function () {
        const test_series = document.getElementById("test_series").value;
        chTab("start", test_series);
    });
});

function chTab(msg, test_series_title) {
chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    let tab = tabs[0];
    chrome.tabs.sendMessage(tab.id, { message: msg, data: test_series_title });
});
}