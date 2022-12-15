chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.message === "start"){
        if (window.location.href.includes("testSeries/home")) {
            if(confirm("Start Automating?")) {
                automate(request.data);
            }else{
                alert("Your genius is not yet ready to be automated");
            }
        }
    }
});

function automate(test_series_title) {
    const test_h4 = document.querySelector(`h4[title="${test_series_title}"]`);
    const flag = test_h4 ? true : false;

if (confirm(`Are you sure you want to start ${test_series_title}?`) && flag) {
    test_h4.click();
    setTimeout(() => {
        const resumeBtn = document.querySelector('.btn-primary');
        resumeBtn.click();
    }, 2000);
    setTimeout(() => {
        const url = window.location.href;
        console.log(url);
        const id = url.split('id=')[1];
        const testUrl = `https://lpu.myperfectice.com/student/learning-test/${id}`;
        window.location.href = testUrl;
    }, 4000);

} else {
    alert("Test Series title not found");
}


// code private
// https://github.com/sauravhathi


}
