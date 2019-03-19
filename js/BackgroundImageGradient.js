/**
 * author: arvin
 * date: 2018/12/20 17:07
 */

//功能实现主函数
window.onload = ()=>{
    var timer;

    //背景图片数组，尾标为奇数一个数组，尾标为偶数一个数组
    var oddBackgroundImage = ["images/jpg/bg01.jpg",
                              "images/jpg/bg03.jpg"];
    var evenBackgroundImage = ["images/jpg/bg02.jpg",
                               "images/jpg/bg04.jpg"];

    var oddLength = oddBackgroundImage.length;
    var evenLength = evenBackgroundImage.length;
    var oddDiv = document.getElementById("oddBackgroundImage");
    var evenDiv = document.getElementById("evenBackgroundImage");
    var interval = oddDiv.style.transitionDuration;
    var oddIndex = 0, evenIndex = 0, index = 1;

    clearInterval(timer);
    timer = setInterval(()=>{
        //由于是一直循环，index随着当前页面的长时间存在会变得很大，我并不知道其对系统某方面性能是否会造成影响
        //所以在此推出另一个版本
        /**
         * 设置一个变量来统判断第一次循环的第一张图片是否已被切换即可,例如:
         * var lock = false;
         */
        index++;
        var flag = index % 2;
        if(flag == 0){
            if(index > 2){
                if(evenIndex == (evenLength - 1)){
                    evenIndex = 0;
                }else{
                    evenIndex++;
                }
                evenDiv.style.backgroundImage = "url(" + evenBackgroundImage[evenIndex] + ")";
            }
            oddDiv.style.opacity = 0;
            evenDiv.style.opacity = 1;
        }else{
            if(oddIndex == (oddLength - 1)){
                oddIndex = 0;
            }else{
                oddIndex++;
            }
            oddDiv.style.backgroundImage = "url(" + oddBackgroundImage[oddIndex] + ")";
            oddDiv.style.opacity = 1;
            evenDiv.style.opacity = 0;
            //lock = true;
        }
    },10000)
    //设置为20秒切换一次，由于CSS的transition会占用这20s的时间，transition的时间为3s，当两者差距越大时，影响越小。
}