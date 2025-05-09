function getCoords(elem) {
    let box = elem.getBoundingClientRect();
  
    return {
      top: box.top + window.pageYOffset,
      left: box.left + window.pageXOffset
    };
  }
  
  function showNote(anchor, position, html) {
    let note = document.createElement('div');
    note.className = "note";
    note.innerHTML = html;
    document.body.append(note);
  
    positionAt(anchor, position, note);
  }
  
  function positionAt(anchor, position, elem) {
    elem.style.position = 'absolute';
    
    let anchorCoords = getCoords(anchor);
    switch(position) {
      //Outside positioning
      case "top-out":
        elem.style.left = anchorCoords.left + "px";
        elem.style.top = anchorCoords.top - elem.offsetHeight + "px";
        break;
  
      case "right-out":
        elem.style.left = anchorCoords.left + anchor.offsetWidth + "px";
        elem.style.top = anchorCoords.top + "px";
        break;
  
      case "bottom-out":
        elem.style.left = anchorCoords.left + "px";
        elem.style.top = anchorCoords.top + anchor.offsetHeight + "px";
        break;
      
        //Inside positioning
      case "top-in":
        elem.style.left = anchorCoords.left + "px";
        elem.style.top = anchorCoords.top + "px";
        break;
  
      case "right-in":
        elem.style.width = '150px';
        elem.style.left = anchorCoords.left + anchor.offsetWidth - elem.offsetWidth + "px";
        elem.style.top = anchorCoords.top + "px";
        break;
  
      case "bottom-in":
        elem.style.left = anchorCoords.left + "px";
        elem.style.top = anchorCoords.top + anchor.offsetHeight - elem.offsetHeight + "px";
        break;
    }
  }
  