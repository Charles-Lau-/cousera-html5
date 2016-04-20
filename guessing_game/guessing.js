var num = Math.floor(Math.random()*100)+1
var guesses = 0;

function guessing_game(){
	var finished = false;
	while(!finished){
		g_text = prompt("I am guessing a number between 1 to 100, can you guess it");	
		g_num = parseInt(g_text);
		guesses += 1;
		if(isNaN(g_num)){
			alert("please input a number");
		}
		else if(g_num > 100 && g_num < 0){
			alert("your number is not in the range");
		}
		else if(g_num < num){
			alert("your number is too small");
		}
		else if(g_num > num){
			alert("your number is too large");
			}
		else{
			alert("correct! you have guesses " + guesses +" times");
			break;
		}	
		}	
	}
