let data = {
    "Fish": {
      "trout": {},
      "salmon": {}
    },
  
    "Tree": {
      "Huge": {
        "sequoia": {},
        "oak": {}
      },
      "Flowering": {
        "apple tree": {},
        "magnolia": {}
      }
    }
  };
  function createTree(container, obj) {
    if (!Object.keys(obj).length) return;
  
    let ul = document.createElement('ul');
  
    for (let key in obj) {
      let li = document.createElement('li');
      li.textContent = key;
  
      let childTree = createTree(document.createElement('div'), obj[key]);
      if (childTree) li.appendChild(childTree);
  
      ul.appendChild(li);
    }
  
    container.appendChild(ul);
    return ul;
  }
  
  let container = document.getElementById("container");
  createTree(container,data)