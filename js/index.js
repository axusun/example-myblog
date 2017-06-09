/*
* @Author: gj
* @Date:   2017-04-29 13:04:33
* @Last Modified by:   gj
* @Last Modified time: 2017-05-10 09:42:23
*/

'use strict';
// $('.class')
// $('#id')
// $('div')
// $(function(){})
function $(selector,ranger=document){
	if(typeof selector=="string"){ 
		if(selector.charAt(0)=="."){
			return ranger.getElementsByClassName(selector.slice(1));
		}else if(selector.charAt(0)=="#"){
			return document.getElementById(selector.slice(1));
		}else if(/^[a-zA-Z][a-zA-Z1-6]{0,8}$/.test(selector)){
			return ranger.getElementsByTagName(selector);
		}else if(/^<[a-zA-Z][a-zA-Z1-6]{0,8}>$/.test(selector)){
			return document.createElement(selector.slice(1,-1));
		}
	}
	else if(typeof selector=="function"){
			// window.onload=function(){
			// 		selector();
			// }
			addEvent(window,"load",selector);
		}
	}


// 添加事件
function addEvent(obj,type,fn){
	obj.addEventListener(type,fn,false);
}


//正则表达式去空
    String.prototype.trims=function(type='l'){
        let reg;
        if(type=='l'){
            reg=/^\s+/;
        }else if(type=='r'){
            reg=/\s+$/;
        }else if(type=='a'){
            reg=/^\s+|\s+$/g;
        }
        return this.replace(reg,'');
    }

//滚轮函数
function mousewheel(obj,up,down){
	obj.addEventListener("mousewheel",fn,false)
		function fn(e){
            let dir = e.wheelDelta;
            if(dir==120){
                up.call(obj);
            }
            if(dir == -120){
                down.call(obj);
            }
		}
	}


//获取对象的属性
function getStyle(obj,attr){
	if(window.getComputedStyle){
		return getComputedStyle(obj,null)[attr];
	}else{
		return obj.currentStyle[attr];
	}
}

//获取设置某一个元素的内容
//html(obj[,content])
//obj 指定的对象
//[content]有，代表设置元素的内容
//没有，代表获取内容
function html(obj,content){
	if(content){
		obj.innerHTML=content;
	}else{
		return obj.innerHTML
	}
}

//获取指定元素的子元素节点
//1.获取所有的子节点
//2.筛选
function getChilds(obj){
	let arr=[];
	let childs=obj.childNodes;
	childs.forEach(function(value,index){
		if(value.nodeType==1){
			arr.push(value)     
		}
	})
	return arr
}

//获取第一个子元素节点
function firstChilds(obj){
	return getChilds(obj)[0]
}	
//获取最后一个子元素节点
function lastChilds(obj){
	return getChilds(obj)[getChilds(obj).length-1];
}
//获取其中一个子元素节点
function numChilds(obj,num){
	return getChilds(obj)[num-1];
}

//获取下一个兄弟元素节点
function getnext(){
	let a=obj.nextSibling;
	if(a===null){
		return false;
	}
	while(a.nodeType!=1){
		a=a.nextSiblingt;
		if(a===null){
			return false;
		}
	}
	return a;

}

//插入到父元素最前
	Node.prototype.pretend=function(ele){
		let firsts=this.firstElementChild;
		this.insertBefore(ele,firsts);
	}

//给一个元素放到另一元素之后
	Node.prototype.insertAfter=function(ele){
		let next=this.nextElementSibling;
		let parent=this.parentNode;
		parent.insertBefore(ele,next);
	}
	Node.prototype.appendTo=function(obj){
		obj.appendChild(this);
	}


//轮播切图，几个图动都可以
			function lunbo(obj,num){
				let btnl=$(".btnleft",obj)[0];
				let btnr=$(".btnright",obj)[0];
				let imgBox=document.getElementsByClassName("imgBox",obj)[0];
				let lis=imgBox.getElementsByTagName("li",imgBox);
				let widths=parseInt(getStyle(lis[0],"width"))+parseInt(getStyle(lis[0],"margin-right"));
				let flag=true;


			t=setInterval(mover,2000);

			//从右往左
			function mover(){
				animate(imgBox,{left:-num*widths},function(){
					for(let i=0;i<2;i++){
						let first=firstChilds(imgBox);
						imgBox.appendChild(first);
						imgBox.style.left=0;
					}
					
					flag=true;
				})	
			}

			//从左往右
			function movel(){
				let first=firstChilds(imgBox);
				let last=lastChilds(imgBox);
				imgBox.insertBefore(last,first);
				imgBox.style.left=-num*widths+"px";
				animate(imgBox,{left:0},function(){
					flag=true;
				})	
			}

			//鼠标移入动画停止
			obj.onmouseover=function(){
				clearInterval(t)
			}
			obj.onmouseout=function(){
				t=setInterval(mover,2000);
			}

			//左右按钮
			btnl.onclick=function(){
				if(flag){
					flag=false;
					movel()
				}
				
			}
			btnr.onclick=function(){
				if(flag){
					flag=false;
					mover()
				}
				
			}

		}




