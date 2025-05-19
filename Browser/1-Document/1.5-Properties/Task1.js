let allli=document.querySelectorAll('li');
for(li of allli){
    text=li.firstChild.data;
    console.log(text);
    let Count = li.querySelectorAll('li').length;
    console.log(`${text}: ${Count}`);
  }
  
