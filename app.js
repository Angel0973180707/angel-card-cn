const SHEET_URL = "你的大陆服务器API地址";

async function loadData(){
  try{
    const res = await fetch(SHEET_URL);
    const data = await res.json();

    document.getElementById("name").innerText = data.name;
    document.getElementById("unit").innerText = data.unit;
    document.getElementById("service").innerText = data.service;

  }catch(e){
    document.getElementById("name").innerText = "数据加载失败";
  }
}

function copyLink(){
  navigator.clipboard.writeText(window.location.href);
  alert("链接已复制");
}

if('serviceWorker' in navigator){
  navigator.serviceWorker.register('sw.js');
}

loadData();
