var index = 0;

function random(){
    var colors = ["Aquamarine","red", "blue", "orange", "yellow", "green", "purple","AntiqueWhite","BlueViolet","Chocolate","crimson","Cyan","DarkSalmon","indigo","NavajoWhite","Navy","MistyRose","RebeccaPurple","SlateBlue","MidnightBlue","black"];
   
    document.getElementsByTagName("body")[0].style.background = colors[index++];
    
    if (index > colors.length-1)
        index = 0;
}
function blue(){
    var colors = ["blue","MediumSlateBlue","DarkSlateBlue","lavender","cyan","DarkCyan","aqua","mediumblue","navy"];
   
    document.getElementsByTagName("body")[0].style.background = colors[index++];
    
    if (index > colors.length-1)
        index = 0;
}
function pink(){
    var colors = ["pink","lightpink","hotpink","deeppink","palevioletred","mediumvioletred","plum","orchid","violet","fuchsia","magenta","darkorchid","purple"];
   
    document.getElementsByTagName("body")[0].style.background = colors[index++];
    
    if (index > colors.length-1)
        index = 0;
}
function red(){
    var colors = ["red","lightsalmon","salmon","crimson","firebrick","lightcoral","darkred","maroon","#680000","#D00000","#F80000","#FF0000"];
   
    document.getElementsByTagName("body")[0].style.background = colors[index++];
    
    if (index > colors.length-1)
        index = 0;
}
function green(){
    var colors = ["green","GreenYellow","LawnGreen","LimeGreen","LightGreen","MediumSpringGreen","SeaGreen","DarkGreen","DarkOliveGreen","YellowGreen"]
   
    document.getElementsByTagName("body")[0].style.background = colors[index++];
    
    if (index > colors.length-1)
        index = 0;
}
function yellow(){
    var colors = ["yellow","gold","PapayaWhip","Khaki","GoldenRod","Orange","LightYellow","#FFFF33","#FFCC33","DarkOrange","#ffdb4d","#ffeb99","#ff9900","#ffd699","#ffff66"];
   
    document.getElementsByTagName("body")[0].style.background = colors[index++];
    
    if (index > colors.length-1)
        index = 0;
}
function brown(){
    var colors = ["brown","Chocolate","Peru","SaddleBrown","Sienna","tan","BurlyWood","SandyBrown","#804000","#331a00"];
   
    document.getElementsByTagName("body")[0].style.background = colors[index++];
    
    if (index > colors.length-1)
        index = 0;
}