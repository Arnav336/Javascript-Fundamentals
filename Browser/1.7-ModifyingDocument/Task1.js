let text = '<b>text</b>';
elem1.append(document.createTextNode(text));
elem2.innerHTML = text;
elem3.textContent = text;
//1st 2 does the same