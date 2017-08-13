// 时间开始
  function check(n) {
    if(n<10){
      n='0'+n;
    }
    return n;
  }
  var t=document.getElementById('time');
  var W=['日','一','二','三','四','五','六']
  function getT() {
    var d=new Date();
    var y=d.getFullYear();
    var M=d.getMonth()+1;
    var D=d.getDate();
    var h=d.getHours();
    var m=d.getMinutes();
    var s=d.getSeconds();
    var w=d.getDay();
    var S=W[w];
    t.innerHTML=y+'年'+M+'月'+D+'日'+check(h)+':'+check(m)+':'+check(s)+' 星期'+S;
  }
  getT();
  setInterval(getT,1000);
 // 时间结束

  // 轮播图开始
  var div=document.getElementById('imgs');
  var ulL=div.getElementsByTagName('ul')[0];
  var imgs=ulL.getElementsByTagName('img');
  var prev=document.getElementById('prev');
  var next=document.getElementById('next');
  var btnL=document.getElementById('btn');
  var btns=btnL.getElementsByTagName('span');
  var btnLen=btns.length;
  var speedL=-imgs[0].width;
  var imgNum=imgs.length;
  var interval=1500;
  var index=0;
  ulL.style.left=speedL*index+'px';
  function moveL() {
    if (index>imgNum-1) {
      index=0;
    }
    if (index<0) {
      index=imgNum-1;
    }
    ulL.style.left=speedL*index+'px';
  }
  function showBtn() {
    for (var j=0;j<btnLen;j++) {
      if (btns[j].className=='on') {
        btns[j].removeAttribute('class');
        break;
      }
    }
    btns[index].className='on';
  }
  prev.onclick=function () {
    index--;
    moveL();
    showBtn();
  }
  next.onclick=function () {
    index++;
    moveL();
    showBtn();
  }
  var timerL=setInterval(next.onclick,interval);
  div.onmouseover=function () {
    clearInterval(timerL);
  }
  div.onmouseout=function () {
    timerL=setInterval(next.onclick,interval);
  }
  for (var i=0;i<btnLen;i++) {
    btns[i].onclick=function () {
      if (this.className=='on') {
        rechartrn;
      }
      var Index=this.getAttribute('index');
      index=Index;
      moveL();
      showBtn();
    }
  }
// 轮播图结束

// 选项卡开始
  function acc(a,b) {
    var btnT=document.getElementById(a);
    var content=document.getElementById(b);
    var lis=btnT.getElementsByTagName('li');
    var section=content.getElementsByTagName('section');
    for (var i=0;i<lis.length;i++) {
      lis[i].index=i;
      lis[i].onclick=function () {
        for (var i=0;i<lis.length;i++) {
          lis[i].className='';
          section[i].className='';
        }
        this.className='active';
        section[this.index].className='show';
      }
    }
  }
  acc('btnT1','content1');
  acc('btnT2','content2');
  acc('btnT3','content3');
  acc('btnT4','content4');
  acc('btnT5','content5');
  acc('btnT6','opbox');
// 选项卡结束