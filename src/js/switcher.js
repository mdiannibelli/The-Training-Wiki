const male = document.getElementById("sexchoosermale");
const female = document.getElementById("sexchooserfemale");

const malebody = document.getElementById("male-body-maps");
const femalebody = document.getElementById("female-body-maps");

export const switcherFemale = (id) =>{
    
    const genre = document.getElementById(id);
    malebody.style.display = "flex";
    femalebody.style.display = "none";
}

export const switcherMale = (id) =>{
    
    const genre = document.getElementById(id);
    malebody.style.display = "none";
    femalebody.style.display = "flex";
}


