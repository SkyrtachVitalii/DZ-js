// let auto= {
//     wheels: 4,
//     type: "sedan"
// }


 const auto = Object.create(
     {
         getAge(){
             return new Date().getFullYear() - this.createYear;
         }
     },
     {
         wheels: {
            value: 4,
            enurable: true,
            writable: true,
            configurable: true
         },
         type:{
            value: "sedan",
            enurable: true,
            writable: true
         },
         createYear:{
             value: 2000,
             enurable: true,
             writable: true
         },
         age:{
             get(){
                 return new Date().getFullYear() - this.createYear;
             },
             set(val){
                 this.createYear = new Date().getFullYear() - val;
                document.getElementById("age").innerText = val;
                console.log("ви намагаєтесь змінити значення на ", val)
            }
         }
         
     }
)

for(let key in auto){
    console.log(key, ": ", auto[key]);
}

console.log(auto);

document.getElementById("age").innerText = auto.age;