/*
* @Author: gj
* @Date:   2017-05-29 00:04:48
* @Last Modified by:   gj
* @Last Modified time: 2017-05-29 00:22:04
*/

'use strict';
$(function(){


  	let imgbox = document.querySelector('.main-imgbox');
    let img = document.querySelector('.main-banner .main-imgbox img');
    let imgwidth =img.offsetWidth;

    let dot = document.querySelectorAll('.main-bfb>li');
    imgbox.innerHTML += imgbox.innerHTML; //添加4张图
    let length = imgbox.children.length;  //图的个数
    console.log(length)
    imgbox.style.width = length * imgwidth + 'px';   //总宽


    let ox =0;
    let offset = 0;
    let num;

    imgbox.addEventListener('touchstart',function(e){   //按下
        num = Math.round(imgbox.offsetLeft/imgwidth);
        if(num == 0){
            num =-4;
        }
        if(num == 1-length){
            num = -3;
        }
        imgbox.style.transition = '';
        imgbox.style.left = num * imgwidth+'px';

        let ev = e.changedTouches[0];
        ox = ev.pageX;			//	按下的地方
        offset=imgbox.offsetLeft;
    },false);
    imgbox.addEventListener('touchmove',function(e){    //移动
        let ev = e.changedTouches[0];
        let mx = ev.pageX;				//	移动到的地方
        let movelength = mx-ox;
        let shijizuo =offset+movelength; //实际左  边位置
        imgbox.style.left = shijizuo+'px';

        if((Math.abs(movelength)>imgwidth/2)&&(mx>ox)){
            let n =Math.abs(num%4)-1;
            if(n==-1){
                n=dot.length-1;
            }
            for(let i =0;i<4;i++){
                dot[i].style.width=`0.2rem`;
            }
            dot[n].style.width='0.4rem';
        }
        if((Math.abs(movelength)>imgwidth/2)&&(mx<ox)){
            let n =Math.abs(num%4)+1;
            if(n==dot.length){
                n=0;
            }
            for(let i =0;i<4;i++){
                 dot[i].style.width=`0.2rem`;
            }
            dot[n].style.width='0.4rem';
        }

    },false);

   	imgbox.addEventListener('touchend',function(){      //抬起
        num = Math.round(this.offsetLeft/imgwidth);
        //第几张图
        imgbox.style.transition = '0.5s';
        imgbox.style.left = num * imgwidth+'px';
    },false)

})