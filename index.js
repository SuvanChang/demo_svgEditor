// JavaScript Document

$(function(){
	
		show=function(ele){
				if(ele=='rect'){
					$('.s_pos').css('display','block');
					$('.s_rect').css('display','block');
					$('.s_cir').css('display','none');
					$('.s_elli').css('display','none');
					$('.s_line').css('display','none');	
				}else if(ele=='cir'){
					$('.s_pos').css('display','block');
					$('.s_cir').css('display','block');
					$('.s_rect').css('display','none');
					$('.s_elli').css('display','none');
					$('.s_line').css('display','none');
					}else if(ele=='elli'){
					$('.s_pos').css('display','block');
					$('.s_elli').css('display','block');
					$('.s_cir').css('display','none');
					$('.s_rect').css('display','none');
					$('.s_line').css('display','none');
						}else if(ele=='line'){
					$('.s_line').css('display','block');
					$('.s_pos').css('display','none');
					$('.s_cir').css('display','none');
					$('.s_elli').css('display','none');
					$('.s_rect').css('display','none');
							}
			}
	
	
		var nodes =[];
		var i;
		var attr=[{x:100,y:100,width:150,height:100,rx:20,ry:20,},
				  {cx:100,cy:100,r:50,},
				  {cx:120,cy:120,rx:80,ry:40},
				  {x1:100,y1:100,x2:300,y2:100},
				  {fill:'white',stroke:'#333',strokeWidth:'2px',},
			]
		$('.rect').click(function(){
				//alert('创建矩形');
				var node = document.createElementNS("http://www.w3.org/2000/svg","rect");
				node.setAttribute('x',attr[0].x);
				node.setAttribute('y',attr[0].y);
				node.setAttribute('width',attr[0].width);
				node.setAttribute('height',attr[0].height);
				node.setAttribute('rx',attr[0].rx);
				node.setAttribute('ry',attr[0].ry);
				node.setAttribute('fill',attr[4].fill);
				node.setAttribute('stroke',attr[4].stroke);
				node.setAttribute('stroke-width',attr[4].strokeWidth);
				nodes.push(node);
				$('svg').append(node);
				i=$(node).index();
				$(node).click(function(){
						//alert($(node).index());
						i=$(node).index();
						show('rect');
					});	
				show('rect');
			})
			
				$('#rect_w').mousedown(function(){
					$('#rect_w').on('mousemove',function(){
						nodes[i].setAttribute('width',$('#rect_w')[0].value);
						})
					})
				$('#rect_h').mousedown(function(){
					$('#rect_h').on('mousemove',function(){
						nodes[i].setAttribute('height',$('#rect_h')[0].value);
						})
					})
				$('#rect_rx').mousedown(function(){
					$('#rect_rx').on('mousemove',function(){
						nodes[i].setAttribute('rx',$('#rect_rx')[0].value);
						})
					})
				$('#rect_ry').mousedown(function(){
					$('#rect_ry').on('mousemove',function(){
						nodes[i].setAttribute('ry',$('#rect_ry')[0].value);
						})
					})
				$('#posX').mousedown(function(){
					$('#posX').mousemove(function(){
						nodes[i].setAttribute('x',$('#posX')[0].value);
						})
					})
				$('#posY').mousedown(function(){
					$('#posY').mousemove(function(){
						nodes[i].setAttribute('y',$('#posY')[0].value);
						})
					})
				$('body').mouseup(function(){
						$('*').unbind('mousemove')
					});
			
		$('.cir').click(function(){
				//alert('创建圆形');
				var node = document.createElementNS("http://www.w3.org/2000/svg","circle");
				node.setAttribute('cx',attr[1].cx);
				node.setAttribute('cy',attr[1].cy);
				node.setAttribute('r',attr[1].r);
				node.setAttribute('fill',attr[4].fill);
				node.setAttribute('stroke',attr[4].stroke);
				node.setAttribute('stroke-width',attr[4].strokeWidth);			
				nodes.push(node);
				$('svg').append(node);
				i=$(node).index();
				$(node).click(function(){
						//alert($(node).index());
						i=$(node).index();
						show('cir')
					});	
				show('cir')
			})
			
				$('#cir_r').mousedown(function(){
					$('#cir_r').on('mousemove',function(){
						nodes[i].setAttribute('r',$('#cir_r')[0].value);
						})
					})
				$('#posX').mousedown(function(){
					$('#posX').mousemove(function(){
						nodes[i].setAttribute('cx',$('#posX')[0].value);
						})
					})
				$('#posY').mousedown(function(){
					$('#posY').mousemove(function(){
						nodes[i].setAttribute('cy',$('#posY')[0].value);
						})
					})

				$('#color').change(function(){
					nodes[i].setAttribute('fill',$('#color')[0].value);
					});
				$('#color_s').change(function(){
					nodes[i].setAttribute('stroke',$('#color_s')[0].value);
					});					
				$('#s_w').mousedown(function(){
					$('#s_w').mousemove(function(){
						nodes[i].setAttribute('stroke-width',$('#s_w')[0].value);
						})
					})
				$('#trans_x').mousedown(function(){
					$('#trans_x').mousemove(function(){
						nodes[i].setAttribute('transform','translate('+$('#trans_x')[0].value+','+$('#trans_y')[0].value+')');
						})
					})
				$('#trans_y').mousedown(function(){
					$('#trans_y').mousemove(function(){
						nodes[i].setAttribute('transform','translate('+$('#trans_x')[0].value+','+$('#trans_y')[0].value+')');
						})
					})					
				$('#rotate').mousedown(function(){
					$('#rotate').mousemove(function(){
						nodes[i].setAttribute('transform','rotate('+$('#rotate')[0].value+' 400 300)');
						})
					})
				$('#scale').mousedown(function(){
					$('#scale').mousemove(function(){
						nodes[i].setAttribute('transform','scale('+$('#scale')[0].value+')');
						})
					})
				$('#delete').click(function(){
						$(nodes[i]).css('display','none');
					})

		$('.elli').click(function(){
				//alert('创建椭圆');
				var node = document.createElementNS("http://www.w3.org/2000/svg","ellipse");
				node.setAttribute('cx',attr[2].cx);
				node.setAttribute('cy',attr[2].cy);
				node.setAttribute('rx',attr[2].rx);
				node.setAttribute('ry',attr[2].ry);
				node.setAttribute('fill',attr[4].fill);
				node.setAttribute('stroke',attr[4].stroke);
				node.setAttribute('stroke-width',attr[4].strokeWidth);
				nodes.push(node);
				$('svg').append(node);
				i=$(node).index();
				$(node).click(function(){
						//alert($(node).index());
						i=$(node).index();
						show('elli');
					});	
				show('elli');
			})
			
				$('#elli_rx').mousedown(function(){
					$('#elli_rx').on('mousemove',function(){
						nodes[i].setAttribute('rx',$('#elli_rx')[0].value);
						})
					})
				$('#elli_ry').mousedown(function(){
					$('#elli_ry').on('mousemove',function(){
						nodes[i].setAttribute('ry',$('#elli_ry')[0].value);
						})
					})
				$('#posX').mousedown(function(){
					$('#posX').mousemove(function(){
						nodes[i].setAttribute('cx',$('#posX')[0].value);
						})
					})
				$('#posY').mousedown(function(){
					$('#posY').mousemove(function(){
						nodes[i].setAttribute('cy',$('#posY')[0].value);
						})
					})
			
		$('.line').click(function(){
				//alert('创建线段');
				var node = document.createElementNS("http://www.w3.org/2000/svg","line");
				node.setAttribute('x1',attr[3].x1);
				node.setAttribute('y1',attr[3].y1);
				node.setAttribute('x2',attr[3].x2);
				node.setAttribute('y2',attr[3].y2);
				node.setAttribute('stroke',attr[4].stroke);
				node.setAttribute('stroke-width',attr[4].strokeWidth);
				nodes.push(node);
				$('svg').append(node);
				i=$(node).index();
				$(node).click(function(){
						//alert($(node).index());
						i=$(node).index();
						show('line');
					});	
				show('line');
			})
				$('#line_x1').mousedown(function(){
					$('#line_x1').on('mousemove',function(){
						nodes[i].setAttribute('x1',$('#line_x1')[0].value);
						})
					})
				$('#line_y1').mousedown(function(){
					$('#line_y1').on('mousemove',function(){
						nodes[i].setAttribute('y1',$('#line_y1')[0].value);
						})
					})
				$('#line_x2').mousedown(function(){
					$('#line_x2').mousemove(function(){
						nodes[i].setAttribute('x2',$('#line_x2')[0].value);
						})
					})
				$('#line_y2').mousedown(function(){
					$('#line_y2').mousemove(function(){
						nodes[i].setAttribute('y2',$('#line_y2')[0].value);
						})
					})

		$('.outlook h2').click(function(){
				if($('.outlook > div').css('display')!= 'none'){
						$('.outlook > div').css('display','none');
					}
			})
		$('.trans h2').click(function(){
				if($('.trans_con').css('display')!= 'block'){
						$('.trans_con').css('display','block');
					} else {
							$('.trans_con').css('display','none');
						}				
			})		
	})