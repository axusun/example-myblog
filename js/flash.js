/*
* @Author: gj
* @Date:   2017-05-28 17:51:33
* @Last Modified by:   gj
* @Last Modified time: 2017-05-28 19:56:16
*/

'use strict';
$(function(){
	let imgbox = document.querySelector('.flash_head');
    let img = document.querySelector('.flash_head img');
    let imgwidth =img.offsetWidth;
    let flashbox=document.querySelector(".flash_round");
    let dot = document.querySelectorAll('.flash_round>li');


	let ox =0;
    let offset = 0;
    let num;
    let maxw = imgbox.offsetWidth - img.offsetWidth;

    imgbox.addEventListener('touchstart',function(e){  
        let ev = e.changedTouches[0];
        ox = ev.pageX;
        offset=imgbox.offsetLeft;
    },false);
    imgbox.addEventListener('touchmove',function(e){
    	let num = Math.round(this.offsetLeft/imgwidth);
    	console.log(num)
        let ev = e.changedTouches[0];
        let mx = ev.pageX;	
        let movelength=mx-ox;
        let lefts=offset+movelength;
         if(lefts>=0){
                lefts=0
            }
            if(lefts<=-maxw){
                lefts = -maxw
            }
        imgbox.style.left =lefts+'px';

        if(Math.abs(movelength)>imgwidth/2){
            let n =Math.abs(num);
            if(n==2){
                flashbox.style.display="none";
            }else{
                flashbox.style.display="block";
            }
            for(let i =0;i<3;i++){
                dot[i].style.background =`#303030`;
            }
            dot[n].style.background =' #7A16FF';
        }
    },false);

   	imgbox.addEventListener('touchend',function(){      //抬起
        let num = Math.round(this.offsetLeft/imgwidth);
        console.log(num)
        imgbox.style.transition = '0.5s';
        imgbox.style.left = num * imgwidth+'px';
    },false)	
})