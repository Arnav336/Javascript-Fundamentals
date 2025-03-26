let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
  ];
  let readmessages=new WeakMap();
  const date1="2/02/2018"
  const date2=new Date(2018,2,3)
  readmessages.set(messages[0],date1)
  readmessages.set(messages[1],date2)
  console.log(readmessages)
