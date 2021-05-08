//Object.freeze()
// Makes the object properties read only Whereas Object.seal() will allow modification to existing values
//Does not allow adding new property
//Does not allow deleting existing property

let taxFiling = {
  lastday: "Yesterday",
  excuse: "lame"
};
console.log(taxFiling.lastday);
Object.freeze(taxFiling);

//Error: Cannot add property extensionDate, object is not extensible
//taxFiling.extensionDate = "DayAfterTomorrow";
taxFiling.lastday = "today";
// Cannot assign to read only property 'lastday' of object
console.log(taxFiling.lastday);
console.log(taxFiling);
