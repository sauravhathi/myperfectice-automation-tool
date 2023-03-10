# Myperfectice Automation Tool

This is a chrome extension to automate the process of taking tests on https://lpu.myperfectice.com/. It is a work in progress.

## Youtube Video

[![How to automate myperfectice test series using chrome extension](https://user-images.githubusercontent.com/61316762/208298118-7e7f0b04-b490-41e0-b01b-36ffc7616f12.png)](https://youtu.be/gMq_H5oOA0c)

## Screenshots

![image](https://user-images.githubusercontent.com/61316762/207877863-fbf8f8fb-1ede-45b7-8a61-7ce440fe7c1e.png)

## Hint

#### For First Question
![Screenshot 2022-12-15 203355](https://user-images.githubusercontent.com/61316762/207896149-cb7a5169-3bc9-44d7-b47c-17fed510a46e.png)

#### For All Questions except 1st Question
![Screenshot 2022-12-15 203723](https://user-images.githubusercontent.com/61316762/207896335-925daaec-9e4c-4565-ba62-d3cfbe15e871.png)

## How to use

1. Clone the repo 'git clone https://github.com/sauravhathi/myperfectice-automation-tool.git'
2. Open chrome://extensions/
3. Enable developer mode
4. Click on 'Load unpacked'
5. Select the folder where you cloned the repo
6. Click on the extension icon
7. Enter the test series name
8. Check the STQ checkbox if you want to attempt STQ questions
9. Click on 'Start' to start the test
10. Wait for the opening of the test page
11. If you checked the STQ checkbox, then don't click on 'STQ' button. The extension will automatically attempt all test questions.

`Note:` If you are getting an error, try reloading the page and then use the extension.

## How it works

1. The extension injects a script into the page to automate the process of taking tests.

## How to contribute

1. Fork the repo
2. Clone the repo
3. Create a new branch
4. Make changes
5. Commit and push
6. Create a pull request

## License

[MIT](https://github.com/sauravhathi/myperfectice-automation-tool/blob/master/LICENCE)
