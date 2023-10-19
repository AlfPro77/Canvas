canvas=document.getElementById("MyCanvas");
color="red";
ctx=canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", my_mouse_down);
function my_mouse_down(e){
    mouse_x=e.clientX-canvas.offsetLeft;
    mouse_y=e.clientX-canvas.offsetTop;
console.log("x="+ mouse_x + "y="+ mouse_y);
    circle(mouse_x,mouse_y)
}
function circle(mouse_x,mouse_y){
    ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(mouse_x,mouse_y,40,0,2*Math.PI);
ctx.stroke();
}