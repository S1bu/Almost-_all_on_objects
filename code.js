 // The class needs to explain the object.
let person = {
    firstName: 'Lerato',
    lastName: 'Tshepo',
    age: 27
}
// Display both keys and values
console.log('Display full person object' ,person);

//display only the keys of the objects
console.log("Object.keys(): ", Object.keys(person));

//display only the values of the objects
console.log("Object.value(): ", Object.values(person)); 

//
console.log("Object.entries(): ", Object.entries(person));

//-------------------------------------------------------------------------
//display only the value of the targeted  key
console.log("dot operator: ", person.firstName);

//another way of displaying only the value of the targeted  key
console.log("[] operator: ", person['age']);

//another way of displaying only the value of the targeted  key
console.log("['subject'] operator: ", person['subject']);
//-------------------------------------------------------------------------

//using ternary on object to check if an object has property: 
console.log("Check if an object has property: ", person.hasOwnProperty('subject') ? person.subject : 'subject property wasn\'t found' );

//creating the key subject and assigning it its own array
person.subject = ["HTML", "CSS", "Javascript"]

// Display both keys and values
console.log("Added subject property: ", person);

//will display the key identifiers of the object
let person_3 = {
    firstName: 'Joel',
    lastName: 'Mukanya'
}

Object.keys(person_3).forEach( key => {
    console.log('key = '+ key);
})

//-------created new object and did function expression to concatinate the name and
let person_2 = {
    firstName: 'Lerato',
    lastName: 'Tshepo',
    age: 27,
    fullName: function() {
        return this.firstName.concat(" ", this.lastName)
    }
}
// Display user full name
console.log("Your full name is", person_2.fullName());
//--------------------------------------------------------------------------
console.log('-------------------------------------------------------------------------------------')
console.log('----------------------------------FACTORY FUNCTION-----------------------------------')
console.log('-------------------------------------------------------------------------------------')

//******************/
// Factory function
//******************/
// It is a function that allows us to create and return an object.
// In addition, it does return an object of any class directly.
// When defining a factory function, you should make use of the camel case.
// Example 1
//---------------------------------------
//function that creates a persons details
//----------------------------------------
function createPerson(firstName, lastName) {
    return {
        firstName,
        lastName,
        display: function() {
            return firstName.concat(" ", lastName)
        }
    }
}
const joelDetail = createPerson("Joel", "Mukanya");//adding values Joel and mukanya
console.log("Full name: ", joelDetail.display());
const henryDetail = createPerson("Henry", "Tshepo");//adding values Henry and Tshepo
console.log("Full name: ", henryDetail.display());
//-------------------------------------------------------
function createPerson2(firstName,lastName, salary,  performed) {
    let person = {}
    person.firstName = firstName  //person firstName is assigned to firstname parameter
    person.lastName = lastName //person lasttName is assigned to lastname parameter
    person.salary = salary //person salary is assinged to salary parameter
    person.performed = performed //person performed is assinged to performed parameter
    // Check if the user qualifies for a bonus.
    person.qualified = ()=> {
        if(person.performed)
            person.salary += 500
        else
            person.salary = salary
        return person.salary
    }
 // Return an object
    return person
}
const joelDetail2 = createPerson2('Joel', 'Mukanya', 5000, false);
console.log("Salary: R", joelDetail2.qualified());
//-----------------------------------
//-------Constructor function
//-----------------------------------
// It is used to create objects and return this keyword.
// When creating an object, you must use a new keyword.
// When defining a constructor function, you should make use of the Pascal case.
// NB: This keyword represents an object when it is created.
// Example 1

console.log('-----------------------------------');
console.log('-------Constructor function--------');
console.log('-----------------------------------');

function Person(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
}
let henkDetail2 = new Person('Henk', 'Daniels')
let samDetail2 = new Person('Sam', "Luvuyo")
console.log(henkDetail2);
console.log(samDetail2);
// Example 2
// function Person(firstName, lastName) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.fullName = ()=> {
//         return this.firstName.concat(" ", this.lastName)
//     }
// }


// let henkDetail = new Person('Henk', 'Daniels')
// let samDetail = new Person('Sam', "Luvuyo")
// console.log(henkDetail);
// console.log("Full name:", henkDetail.fullName());
// console.log(samDetail);
// console.log("Full name:", samDetail.fullName());