var left = "";
var right = "";
var str = "";
var func = "";
var command = "";
function Show_fun()
{	
	document.getElementById("string").innerHTML = func;	   	
}
function Show_str()
{	   
	document.getElementById("equally").innerHTML = str;	
}
function Equally()
{
	Operation(str);
	document.getElementById("string").innerHTML = func+=str+" =";
	document.getElementById("equally").innerHTML = left;	
	console.log("str:" + str);
	console.log("left: " + left);
	
	
}
function Operation(number)
{
	if(number == "") number = 0; 
	switch(command){
	case "add": left = left + JSON.parse(number); break;
	default: left = JSON.parse(number); break;}
	console.log("========");
	console.log(command);
	console.log("number:" + number);
	console.log("left: " + left);
	console.log("========");
	command = "";
}

function One()
{
	str +=1;
	Show_str();
}
function Two()
{
	str +=2;
	Show_str();
}
function Three()
{
	str +=3;
	Show_str();
}
function Four()
{
	str +=4;
	Show_str();
}
function Five()
{
	str +=5;
	Show_str();
}
function Six()
{
	str +=6;
	Show_str();
}
function Seven()
{
	str +=7;
	Show_str();
}
function Eight()
{
	str +=8;
	Show_str();
}
function Nine()
{
	str +=9;
	Show_str();
}
function Zero()
{
	str +=0;
	Show_str();
}
function Point()
{
	str +=".";
	Show_str();
}
function Add()
{
	func +=str + " + ";
	Operation(str);
	str = "";
	command = "add";
	Show_fun();
	
}
function Sub()
{
	str +=" - ";
	Show_fun();
}
function Mul()
{
	str +=" * ";
	Show_fun();
}
function Div()
{
	str +=" / ";
	Show_fun();
}
