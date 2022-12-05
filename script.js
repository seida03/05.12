const name=document.getElementById("name")
const surname=document.getElementById("surname")
const age=document.getElementById("age")
const email=document.getElementById("email")
// const man=document.getElementById("man")
// const woman=document.getElementById("woman")
const btn=document.getElementById("btn")
const genders=document.querySelectorAll("input[type=checkbox]")


btn.addEventListener("click", function(e){
    e.preventDefault();
    let gender;
    genders.forEach(element=>{
        if(element.checked){
    gender=element.value
        }
    })
    let userobj={
        name:name.value,
        surname:surname.value,
        age:age.value,
        email:email.value,
        gender:gender
    }
    
    let hey=JSON.stringify(userobj)
    
    window.localStorage.setItem("ouruser", hey)
    console.log(JSON.parse(window.localStorage.getItem("ouruser")));
})
