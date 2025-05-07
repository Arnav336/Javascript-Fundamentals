function positionAt(anchor, position, elem){
    
    const rect = anchor.getBoundingClientRect();
    elem.style.position = 'fixed';
  
    switch (position){
  
      case 'top':                 
        elem.style.left = rect.left + 'px';
        elem.style.top  = rect.top - elem.offsetHeight + 'px';
        break;
  
      case 'right':               
        elem.style.left = rect.right + 'px';
        elem.style.top  = rect.top + 'px';
        break;
  
      case 'bottom':              
        elem.style.left = rect.left + 'px';
        elem.style.top  = rect.bottom + 'px';
        break;
  
      default:
        console.warn('positionAt: unknown position "'+position+'"');
    }
  }

  function showNote(anchor, position, html){
    const note = document.createElement('div');
    note.className = 'note';
    note.innerHTML = html;
    document.body.append(note);
    positionAt(anchor, position, note);
  }
  
  const blockquote = document.querySelector('blockquote');
  
  showNote(blockquote, 'top',    'note above');
  showNote(blockquote, 'right',  'note at the right');
  showNote(blockquote, 'bottom', 'note below');