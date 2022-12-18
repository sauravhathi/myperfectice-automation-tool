chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.message === "start") {
        if (window.location.href.includes("testSeries/home")) {
            if (confirm("Start Automating?")) {
                localStorage.setItem("stq", request.data.stq);
                automate(request.data.test_series_title);
            } else {
                alert("Your genius is not yet ready to be automated");
            }
        }
    }
    else if (request.message === "attemptTest") {
        if(confirm("Start Attempting Questions?")) {
            attemptTest();
        }
    }
});

async function automate(test_series_title) {
    const test_h4 = document.querySelector(`h4[title="${test_series_title}"]`);
    const flag = test_h4 ? true : false;

    if (confirm(`Are you sure you want to start ${test_series_title}?`) && flag) {
        test_h4.click();
        resumeTest();
        innerResume();
    } else {
        alert("Test Series title not found");
    }

    // code private
    // https://github.com/sauravhathi

}

function sleep(ms = 0) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

async function resumeTest() {
    await sleep(1000);
    const resumeBtn = document.querySelector('a.btn.btn-primary.btn-block.mt-2');
    resumeBtn.click();
}

async function innerResume() {
    await sleep(2000);
    const url = window.location.href;
    console.log(url);
    const id = url.split('id=')[1];
    const testUrl = `https://lpu.myperfectice.com/student/learning-test/${id}`;
    window.location.assign(testUrl);
}

function attemptTest() {

    const inter = setInterval(async () => {
        const count = document.querySelector('li.count').innerText;
        const current = count.split('/')[0].trim();
        const total = count.split('/')[1].trim();
        console.log(current, total);

        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        const randomCheckbox = checkboxes[Math.floor(Math.random() * checkboxes.length)];
        randomCheckbox.click();
        const saveAndNext = document.querySelector('div.save-next-btn > a');
        saveAndNext.click();
        if (current === total) {
            clearInterval(inter);
            const finish = document.querySelector('div.finish-btn > a');
            finish.click();
            await sleep(1000);
            document.querySelector('div.text-center.ng-star-inserted > a.btn.btn-primary.mt-2.mb-5').click();
            await sleep(1000);
            resumeTest();
            innerResume();
        }
    }, 1000);
}

if (window.location.href.includes("/student/learning-test/") && localStorage.getItem("stq") === "true") {
    attemptTest();
}