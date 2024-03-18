const ageinput = document.querySelector(".dob-input");
const agebtton = document.querySelector(".calculate-btn");
const ageresult = document.querySelector(".age-result");

agebtton.addEventListener("click", () => {
    if (ageinput.value === "") 
    {
        alert("please enter your date of birth");

    
    }
     else
     {
        console.log("input", ageinput.value);
        const dob= new Date(ageinput.value);
        console.log("dob", dob);
        const dob_year=dob.getFullYear();
        console.log("dob_year", dob_year);


        const now = new Date();
        console.log("now", now);
        const now_year = now.getFullYear();
        console.log("now_year", now_year);
        const age = now_year-dob_year;
        console.log("age",age);

        ageresult.innerHTML='your age is ${age}';
    }
});