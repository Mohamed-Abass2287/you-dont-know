console.log("hello world")

let fruits=["banana","mango","kiwi","pears","avocado"]
console.log(fruits.length)
console.log(fruits[3])

//unshift
fruits.unshift("watermelon")
console.log(fruits)

//shift
fruits.shift()
console.log(fruits)
//pop
fruits.pop()
console.log(fruits)

//spread operator(...)
let new_fruits=[...fruits,"apple","pineapple"]
console.log(new_fruits)

let new_fruits_array=["orange","blackberry",...fruits]
    console.log(new_fruits_array)
    //object
    let person={
        name:'john',
        gender:'male',
        age:34,
        isActive:true,
        friends:["brenda","elvis","collins","alice"]
    }
    console.log(person.age)
    console.log(person.friends[2])
    let btn=document.getElementById('click')
    btn.addEventListener('click',function(e){alert("i have been clicked")})
    console.log("hello world")

let item=student{
    name:amin;
    registration No:122345;
    address:9876;
}
console.log(student.name)
    
