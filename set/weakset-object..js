// WeakSet
/*
  WeakSet is not iterable.
  The major advantage of using a WeakSet over a Set is memory benefits.
*/

const weakset = new WeakSet();

//weakset.add('message', 'helloworld');
//TypeError: Invalid value used in weak set
//Cannot use a string as the key

let address = {
  street: '1st Main Street',
  state: 'California',
  country: 'US',
  street: 'WallStreet'
};

weakset.add(address);

console.log(weakset);
/*
WeakSet {{…}}
[[Entries]]
0:
value: {street: "1st Main Street", state: "California", country: "US"}
__proto__: WeakSet
*/

console.log(weakset.has(address));

//delete
console.log(weakset.delete(address));

console.log(weakset);

//weakset is not iterable