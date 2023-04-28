var code=document.getElementById('btn')
var c=document.getElementById('c')
var a=document.getElementsByTagName('body')
var table=[
    0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'
]
code.addEventListener('click',change)
function change(){
    var color='#'
    for(var i=0;i<6;i++){
        color+=table[Math.floor(Math.random()*16)]
    }
    c.innerHTML=color
    a[0].style.backgroundColor = color
}