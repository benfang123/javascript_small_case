function animate(obj,target,callback){
					// if(callback){
					// 	callback();
					// }
					clearInterval(obj.timer);
					 obj.timer=setInterval((env)=>{
						 // obj.step=Math.ceil((target-obj.offsetLeft)/10);
						 obj.step=(target-obj.offsetLeft)/10;
						 var step=obj.step>0?Math.ceil(obj.step):Math.floor(obj.step);
						if(obj.offsetLeft==target){
							clearInterval(obj.timer);
							callback && callback();
						}
						obj.style.left=(obj.offsetLeft+step)+'px';
						console.log(document.body.clientWidth);
					},15);
				}