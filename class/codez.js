function createPhoneNumber(numbers){
  // return "(111) 456-7890 - static
  // return `(11${numbers[2]}) 456-7890` - one dynamic value
  return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
  // return "(111) 456-7890 - static
  return "(numbers(0...2)) numbers(3...5)-numbers(6...9)"



  // other solution
  return '(' + numbers.substring(0, 3) + ') '
      + numbers.substring(3, 6)
      + '-'
      + numbers.substring(6);

  return `(${numbers.substring(0, 3)}) ${numbers.substring(3, 6)}-${numbers.substring(6)}`
}

// concatenaion vs interpolation
// static vs dynamic
// assert.strictEqual(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
// createPhoneNumber([1, 2,3,4,5,6,7,8,9,0]) // "(123) 456-7890"
let numbers = [1,2,3,4,5,6,7,8,9,0]
createPhoneNumber(numbers)
console.log(createPhoneNumber(numbers))

return '(' + numbers.substring(0, 3) + ') '
      + numbers.substring(3, 6)
      + '-'
      + numbers.substring(6);

```rb
(0..10)
(0...10)
```
function booleanToString(b){
  //your code here
  if(b === true) {
    return "true"
  } else {
    return "false"
  }

return b === true ? "true" : "false"

 return b ? "true" : "false"
}

// (condition) ? true : false
// (true or false)
return (b === true) ? "true" : "false"
return b ? "true" : "false"
