let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
  ];
  
  let seenMessages = new WeakSet();
  seenMessages.add(messages[0]);
  seenMessages.add(messages[1]);
  seenMessages.add(messages[0]);
  console.log("Read message 0: " + seenMessages.has(messages[0])); 
  messages.shift();