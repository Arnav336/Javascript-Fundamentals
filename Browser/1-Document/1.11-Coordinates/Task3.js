function positionAt(anchor, position, elem) {
    let anchorRect = anchor.getBoundingClientRect();

    switch (position) {
      case 'top':
        elem.style.left = anchorRect.left + (anchorRect.width - elem.offsetWidth) / 2 + 'px';
        elem.style.top = anchorRect.top - elem.offsetHeight + 'px';
        break;
      case 'right':
        elem.style.left = anchorRect.right + 'px';
        elem.style.top = anchorRect.top + (anchorRect.height - elem.offsetHeight) / 2 + 'px';
        break;
      case 'bottom':
        elem.style.left = anchorRect.left + (anchorRect.width - elem.offsetWidth) / 2 + 'px';
        elem.style.top = anchorRect.bottom + 'px';
        break;
    }
  }
  function showNote(anchor, position, html) {

    let note = document.createElement('div');
    note.className = "note";
    note.innerHTML = html;
    document.body.append(note);

    positionAt(anchor, position, note);
  }

  let blockquote = document.querySelector('blockquote');

  showNote(blockquote, "top", "note above");
  showNote(blockquote, "right", "note at the right");
  showNote(blockquote, "bottom", "note below");