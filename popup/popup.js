document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("start").addEventListener("click", function () {
        const test_series = document.getElementById("test_series").value;
        const stqTrue = document.getElementById("stqTrue").checked;
        chTab("start", { test_series_title: test_series, stq: stqTrue });
    });
    document.getElementById("attemptTest").addEventListener("click", function () {
        chTab("attemptTest", "");
    }
    );
});

function chTab(msg, { test_series_title, stq }) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        let tab = tabs[0];
        chrome.tabs.sendMessage(tab.id, { message: msg, data: { test_series_title, stq } });
    });
}