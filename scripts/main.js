//弹窗hello
//let myvariable = document.querySelector("h1");
alert("hello!!");
//简单交互
document.querySelector('html').addEventListener('click',function(){
  alert('戳一戳');
})
//图像切换器
let myimage = document.querySelector('img');
myimage.onclick = function(){
        let mySrc = myimage.getAttribute('src');
        if(mySrc === 'images/ayer.png') {
            myimage.setAttribute('src',"images/ayer2.svg");
        }
        else {
            myimage.setAttribute('src','images/ayer.png');
        }
}
//个性化欢迎信息
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('请输入你的名字。');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla 酷毙了，' + myName;
  }

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}
//onclick事件处理器
myButton.onclick = function() {
    setUserName();
 }
function setUserName() {
  let myName = prompt('请输入你的名字。');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla 酷毙了，' + myName;
  }
}
//检查空名字
function setUserName() {
  let myName = prompt('请输入你的名字。');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla 酷毙了，' + myName;
  }
}
