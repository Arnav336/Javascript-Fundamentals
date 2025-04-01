function sumloop(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
  }
  
console.log( sumloop(100) );

function sumrecursive(n){
    let sum=0;
    if(n==1){
        return 1
    }
    else{
       return sum=n+sumrecursive(n-1)
    }
}
console.log(sumrecursive(100))