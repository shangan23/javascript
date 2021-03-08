/*
* Tagged template usecase: 

* Internationalization 
* https://jaysoo.ca/2014/03/20/i18n-with-es2015-template-literals/


* Embedded HTML/XML
* jsx`<a href="${url}">${text}</a>` // becomes React.DOM.a({ href: url }, text)

* DSLs for code execution
* var childProcess = sh`ps ax | grep ${pid}`; 

* Sanitize HTML for XSS attacks
*/

//Tagged Template
let person = 'Mike';
let age = 28;

function myTag(stringsArray, personExp, ageExp) {
  let str0 = stringsArray[0]; // "That "
  let str1 = stringsArray[1]; // " is a "
  let str2 = stringsArray[2]; // "."

  let ageStr;
  if (ageExp > 99){
    ageStr = 'centenarian';
  } else {
    ageStr = 'youngster';
  }

  // > &gt; < &lt;
  // We can even return a string built using a template literal
  return `${str0}${personExp}${str1}${ageStr}${str2}`;
}

let output = myTag`That ${ person } is a ${ age }.`;

console.log("=>",output);
console.log()
