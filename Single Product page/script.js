let mainimage =document.getElementById('mainimage');
let smallimage=document.getElementsByClassName('image');
smallimage[0].onclick= ()=>{
    mainimage.src=smallimage[0].src;
}
smallimage[1].onclick= ()=>{
    mainimage.src=smallimage[1].src;
}
smallimage[2].onclick= ()=>{
    mainimage.src=smallimage[2].src;
}




function cart(){
    var a,b,c,d;
    a=document.getElementById('first').value;
    b=a*344.99;
    document.getElementById('second').value=b;
    c=(b*5.7)/100;
    document.getElementById('third').value=c;
    d=b+c;
    document.getElementById('four').value=d;
}

let ans=document.getElementById('first');
ans.addEventListener('keyup',cart);