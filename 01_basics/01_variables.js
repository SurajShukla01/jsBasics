const accountId =123

// accountId = 432  //cannot perform this operation on const

let asdf = "qwrer"
// var asdf = 2342 // cannot dfclare again and again but can be changed again
// var is depreciated also rather use let
console.log(asdf);
asdf = {asdf:"qwrer",}

qwer = [123,432]

console.log(accountId);
console.log(asdf);
console.log(qwer[1]);

console.table([accountId, asdf, qwer])