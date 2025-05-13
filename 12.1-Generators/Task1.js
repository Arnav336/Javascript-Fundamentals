function* pseudoRandom(seed){
    let value=seed;{
        while (true){
            let next=value*16807%2147483647
            yield next
            value=next
        }
    }
}
let generator=pseudoRandom(1);
console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)