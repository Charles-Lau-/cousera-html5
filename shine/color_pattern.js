var color_list = ["red","orange","yellow","green","blue","indigo","violet"]
var top_position = 25, left_position = 25;
var width = 300, height=300;

function show_pattern(){
	while(width > 50){
		var node = document.createElement("div");
		var count = document.getElementsByTagName("div");
		node.style.top = top_position + 'px'; 
		node.style.left =  left_position + 'px';
		node.style.height = height + 'px';
		node.style.width = width + 'px';
		node.style.background = color_list[Math.floor(Math.random()*7)];
		width  -= 20;
		height -= 20;
		top_position += 10;
		left_position += 10;
		document.getElementById('theBody').appendChild(node);
	}

}
