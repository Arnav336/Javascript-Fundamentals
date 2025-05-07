function showNotification({top = 0, right = 0, html = "", className = ""} = {}) {
    const note = document.createElement("div");
    note.className = "notification";
    if (className) note.classList.add(className);
    note.innerHTML = html;
    note.style.top   = top   + "px";
    note.style.right = right + "px";
    document.body.append(note);
    setTimeout(() => note.remove(), 1200);
  }
  // top‑right “Hello” message
showNotification({
    top: 10,
    right: 10,
    html: "Hello!",
    className: "welcome"
  });
  
