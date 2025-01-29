/*Fullname="Tony stark";
console.log(Fullname);
let ice=20;
let price=100.8;
console.log(price);
console.log(ice);
const student ={
    Name :"Abdul haseeb",
    age :18,
    cgpa :8.4,
    ispass :true,
};
console.log(student.cgpa);
console.log(student["Name"]);
student["age"] = student["age"]+1;
console.log(student["age"]);
student["Name"]="Hassan";
console.log(student["Name"]);
if(student["Name"]=="Hassan")
{
    console.log(student["cgpa"]);
}
function display()
{
    console.log("i am haseeb");
}
display();

let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  buttons.addEventListner('click', (e) => {
    if (e.target.innerHTML == '=') {
      string = eval(string);
      document.querySelector('input').value = string;

    }
    else if (e.target.innerHTML == 'C') {
      string = ""
      document.querySelector('input').value = string;
    }
    else {
      console.log(e.target)
      string = string + e.target.innerHTML;
      document.querySelector('input').value = string;
    }
  })
})
  */
let string = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => { // Corrected spelling and reference
    if (e.target.innerHTML === '=') {
      try {
        string = Function('"use strict"; return (' + string + ')')(); // Safer evaluation
      } catch (error) {
        string = "Error"; // Handle invalid expressions
      }
      document.querySelector('input').value = string;
    } 
    else if (e.target.innerHTML === 'C') {
      string = "";
      document.querySelector('input').value = string;
    } 
    else {
      string += e.target.innerHTML;
      document.querySelector('input').value = string;
    }
  });
});


