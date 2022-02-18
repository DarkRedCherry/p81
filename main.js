 function draw()
{
var canvas = document.getElementById("mycanvas");
if (canvas.getContext) 
{
var ctx= canvas.getContext("2d");
ctx.beginPath();
ctx.strokestyle = "red";
ctx.lineWidth = "1";
ctx.arc(250, 210, 40, 0, 2 * Math.PI);
ctx.stroke();
}
}