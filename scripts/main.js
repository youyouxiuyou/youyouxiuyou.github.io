//弹窗hello
//let myvariable = document.querySelector("h1");
alert("欢迎来到堡垒之夜!!");
//简单交互
document.querySelector('html').addEventListener('click',function(){
  alert('别戳我,我怕疼');
})
//图像切换器
let myimage = document.querySelector('img');
myimage.onclick = function(){
        let mySrc = myimage.getAttribute('src');
        if(mySrc === 'images/fortnite1.png') {
            myimage.setAttribute('src',"images/fortnite2.png");
        }
        else {
            myimage.setAttribute('src','images/fortnite1.png');
        }
}
//个性化欢迎信息
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h2');
function setUserName() {
    let myName = prompt('请输入你的名字。');
    localStorage.setItem('name', myName);
    myHeading.textContent =  myName + '期待你加入堡垒大家庭';
  }

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent =  storedName+ '期待你加入堡垒大家庭';
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
    myHeading.textContent = myName + '期待你加入堡垒大家庭';
  }
}
//检查空名字
function setUserName() {
  let myName = prompt('请输入你的名字。');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = myName + '期待你加入堡垒大家庭';
  }
}
