


var name = 'Mehmet'
var age = 39

var name_object = {firstName: 'Mehmet', lastName: 'Ermis'}

var truth = true

var sheets = ['HTML', 'CSS']
var a = null

var students = {
    firstName: 'Mehmet',
    lastName: 'Ermis',
    age: 39,
    height: 178,

    fullName: function(){
        return this.firstName + ' ' + this.lastName
    }
}

const ageValue = students.age
console.log(ageValue)
console.log(students.fullName())

