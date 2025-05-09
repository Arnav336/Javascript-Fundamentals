function showCircle(cx,cy,radius){
    return new Promise(resolve=>{
let div=document.querySelector(".circle");
    div.style.width=div.style.height='0px'
    div.style.left=cx+'px'
    div.style.top=cy+'px'
    setTimeout(() => {
        div.style.width = div.style.height = radius * 2 + 'px';
        
        div.addEventListener('transitionend', function handler() {
          div.removeEventListener('transitionend', handler);
          resolve(div);
        });
      }, 0);
    });
  }
  showCircle(150,150,100).then(div => {
    div.classList.add('message-ball');
    div.append("Hello, world!");
  }).catch(err => {
    console.error("Something went wrong:", err);
  });