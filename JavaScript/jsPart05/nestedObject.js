const classInfo ={
    aman : {
        grade : "A+",
        city : "Delhi"
    },
    shradha : {
        grade : "A",
        city : "pune"
    },
    karan : {
        grade : "O",
        city : "Mumbai"
    }
}

console.log(classInfo.shradha.city);
classInfo.shradha.city = "gurgaon";
console.log(classInfo.shradha.city);