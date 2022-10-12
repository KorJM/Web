function getFN() { return this.lastName + this.firstName};
function getLastName(obj) { return obj.lastName};

lastName = 'Hong';
kim = 'Kim';
const person = {
    firstName: 'Gildong',
    lastName, 
    kim,
    getFullName2() {return this.lastName + this.firstName},
    getFullName1: getFN,
    getKim: function() {return this.kim}
}

console.log(person.getFullName2());
console.log(person.getFullName1());
console.log(getLastName(person));
console.log(person.getKim());