(function(){
var b=document.body,leaves=['🍃','🌿','🍂','🌱','☘️'];
for(var i=0;i<7;i++){var l=document.createElement('div');l.className='leaf';l.textContent=leaves[i%5];l.style.cssText='left:'+Math.random()*100+'%;--sz:'+(12+Math.random()*8)+'px;--d:'+(7+Math.random()*6)+'s;--dl:'+(-Math.random()*10)+'s;';b.appendChild(l);}
})();
