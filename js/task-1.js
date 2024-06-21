function slugify(title) {
    const wordsLowerCase = title.toLowerCase();
    const wordsWithSpaces = wordsLowerCase.split(' ');
    const slugExpression = wordsWithSpaces.join('-');

    return slugExpression;
}

console.log(slugify("Arrays for beginners"));
console.log(slugify("English for developer"));
console.log(slugify("Ten secrets of JavaScript")); 
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));