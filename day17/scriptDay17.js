//01
const user = {
    firstName: "Elias",
    lastName: "Carballo",
    age: 33,
    country: "Argentina",
    city: "Mar del Plata"
};

let jSonUser = JSON.stringify(user);
localStorage.setItem('user', jSonUser)
console.log(localStorage);

//the rest is pretty much all the same exercises i've been already doing. gonna skip it in the name of the bigger picture