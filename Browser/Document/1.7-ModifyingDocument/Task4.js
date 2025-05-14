function countDescendants(li) {
    let ul = li.querySelector('ul');
    if (!ul) return 0;
  
    let total = 0;
  
    for (let childLi of ul.children) {
      if (childLi.tagName === 'LI') {
        total += 1 + countDescendants(childLi);
      }
    }
  
    li.firstChild.textContent = li.firstChild.textContent.trim() + ` [${total}]`;
  
    return total;
  }
  
  let rootLis = document.querySelector('ul').children;
  for (let li of rootLis) {
    countDescendants(li);
  }
  