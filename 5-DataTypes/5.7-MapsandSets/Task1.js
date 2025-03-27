function unique(arr){
    newset=new Set(arr)
    return newset;
}
let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
console.log(unique(values));