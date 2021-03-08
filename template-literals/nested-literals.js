var user = {name: 'Caitlin Potter'};

// Nesting template literals
console.log("=>",`Thanks for getting this into V8, level-1.${`level-2.${`level-3 >${user.name}`}`}.`);