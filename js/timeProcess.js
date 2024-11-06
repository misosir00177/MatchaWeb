let dotAnim = true;

function showClock() {
  let nowTime = new Date();
  let nowMonth = nowTime.getMonth() + 1;
  let nowDate = nowTime.getDate();
  let nowHour = nowTime.getHours();
    let nowMin = nowTime.getMinutes();
  if (nowHour < 10) {
    nowHour = "0" + nowHour.toString();
    } if (nowMin < 10) { 
    nowMin = "0" + nowMin.toString();
    }
    let date = nowMonth.toString() + "/" + nowDate.toString(); 
  document.getElementById("hour").innerText = nowHour.toString();
  document.getElementById("minutes").innerText = nowMin.toString();
  document.getElementById("date").innerText = date.toString();
}
setInterval("showClock()", 1000);
setInterval("dotsAnim()", 500);

function dotsAnim() {
    dotAnim = !dotAnim;
    if(dotAnim) document.getElementById("dots").innerText = "\u0008";
    else document.getElementById("dots").innerText = ":";
}

window.onload = function () {
  showClock();
};
