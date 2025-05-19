const rect = field.getBoundingClientRect();  

const outerTopLeft      = [rect.left,  rect.top];
const outerBottomRight  = [rect.right, rect.bottom];

const innerTopLeft = [
  rect.left + field.clientLeft,   
  rect.top  + field.clientTop     
];


const innerBottomRight = [
  innerTopLeft[0] + field.clientWidth,
  innerTopLeft[1] + field.clientHeight
];

console.log('outer TL :', outerTopLeft.join(','));
console.log('outer BR :', outerBottomRight.join(','));
console.log('inner TL :', innerTopLeft.join(','));
console.log('inner BR :', innerBottomRight.join(','));
