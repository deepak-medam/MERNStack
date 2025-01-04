const student = {
    name: "Shradha",
    age: 23,
    marks: 94.4,
    city: "delhi"
};

student.city = "Mumbai";
console.log(student);
delete student.age;
console.log(student);