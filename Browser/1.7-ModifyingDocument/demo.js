let div = document.createElement('div');
div.innerHTML = "I'm Good!";
let p=document.querySelector('p')
p.before(div)
let div2 = document.createElement('div');
div2.innerHTML = "I'm Ugly!";
p.after(div2)
let div3 = document.createElement('div');
div3.innerHTML = "I'm Bad!";
p.replaceWith(div3) 
let clone=p.cloneNode(true)
document.body.append(clone)