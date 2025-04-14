const createName = require("./names.js");
const createHobbies = require("./hobbies.js");

function all (){
    const name = createName('andrea', 'maluta');
    const hobbie = createHobbies('film', 'film', 'film');
    return{
        name,
        hobbie
    }
}

const allitem = all();

console.log(allitem);


// const fullName = createName.name(andrea, maluta);

// console.log(fullName);