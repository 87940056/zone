$(function(){
	var box=$('.box'),
		lis=$('.box>li'),
		mask=$('.mask'),
		close=$('.close'),
		btnL=$('.btnL'),
		btnR=$('.btnR'),
		imgs=$('.mask img'),
		// cw=document.documentElement.clientWidth,
		cw=$(window).outerWidth(),
		flag=true,
		flagFalse=$('.mask').children(),
		index;
	lis.on('click',function(){
		// console.log(this);
		var imgPath=$(this).find('img').prop('src');
		mask.show();
		$(mask).find('img').prop('src',imgPath);
		index=$(this).index()   //获取下标
	});
	close.on('click',function(){
		mask.hide();
	});
	btnR.on('click',function(){
		index++;
		if(index==lis.length){
			index=0;
		}
		var imgPath=lis.eq(index).find('img').prop('src');
		$('img',mask).prop('src',imgPath);
	})
	btnL.on('click',function(){
		index--;
		if(index<0){
			index=lis.length-1;
		}
		var imgPath=lis.eq(index).find('img').prop('src');
		$('img',mask).prop('src',imgPath);
	})
	imgs.on('click',function(e){
		var x=e.pageX;
		if(x>cw/2+150){
			btnR.triggerHandler('click');
		}
		if(x<cw/2-150){
			btnL.triggerHandler('click');
		}
	})

	// $(document).on('mousedown',false);
	$(document).on('mousedown',function(){
		return false;
	});
	
	// mask空白处双击关闭方法一
		// flagFalse.on('mouseenter',function(){
		// 	flag=false;
		// });
		// flagFalse.on('mouseleave',function(){
		// 	flag=true;
		// });
		// mask.on('dblclick',function(){
		// 	if(flag){
		// 		mask.hide();
		// 	}
		// })
	// mask空白处双击关闭方法二
		$(document).on('dblclick',mask,function(e){
			var obj=e.target;
			// console.log(e.target);
			if(!($(obj).is(flagFalse))){
				mask.hide();
			}
		})






})