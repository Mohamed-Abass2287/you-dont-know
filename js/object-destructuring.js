//Object destructuring
const person={
    first_name:"john",
    gender:"male",
    occupation:"software engineer",
    address:{
        city:"nairobi",
        zipcode:"0010"
    },
    age:40,
    language:function(){console.log("i speak french")},
    friends:["alice","benson","philip"]
}
const{first_name,gender,age,language,friends:[ a, b, c], address:{zipcode}}= person
console.log(zipcode)
