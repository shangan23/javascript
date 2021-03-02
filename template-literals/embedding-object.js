//The ${} works fine with any kind of expression, including member expressions and method calls:
var user = {name: 'Caitlin Potter'};
console.log("=>",`Thanks for getting this into V8, ${user.name.toUpperCase()}.`);