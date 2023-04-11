// complete this js code
function Person(name, age) {
	return{
		name:name;
		age:age;
	}
greet(){
	console.log("Hello,my name is"+Person.name+", I am"+Person.age+"years old.")
}
}

function Employee(name, age, jobTitle) {
	super()
	return{
		
		jobTitle:jobTitle;
	}
	jobGreet(){
		console.log("Hello,my name is"+Employee.name+", I am"+Employee.age+"years old,and my job title is"+Employee.jobTitle);
	}
}

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
