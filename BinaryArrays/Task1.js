function concat(arrays){
    let total=arrays.reduce((acc,value)=>acc+value.length,0);
    let result=new Uint8Array(total);
    let length=0;
    for(let array of arrays){
        result.set(array,length)
        length+=array.length;
    }
    return result;
}

let array1 = new Uint8Array([1, 2, 3]);
let array2 = new Uint8Array([4, 5, 6]);
let array3 = new Uint8Array([7, 8, 9]);
let arrays = [array1, array2, array3,array1];
console.log(concat(arrays)); 


