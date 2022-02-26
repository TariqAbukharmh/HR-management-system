'use-strict';

var departments = ['Administration', 'Marketing', 'Development', 'Finance'];
var levels = ['Junior', 'Mid-Senior', 'Senior'];

function Employee(empID, fullName, departmentID, levelID, image){
    this.empID = empID,
    this.fullName = fullName,
    this.department = departments[departmentID],
    this.level = levels[levelID],
    this.image = image
}

Employee.prototype.calculateNetSalary = function(){

    let salary;

    if(this.level == "Senior"){
        salary = getRandomNumberBetween(1500, 2000);
    }
    else if(this.level == "Junior"){
        salary = getRandomNumberBetween(500, 1000);
    }
    else{
        salary = getRandomNumberBetween(1000, 1500);
    }

    this.salary = salary;
    this.netSalary = salary - (salary * (7.5 / 100));
}

Employee.prototype.render = function(){

    let main = document.getElementsByTagName('main')[0];

    main.innerHTML = main.innerHTML +
    "<b>Name</b>: " + this.fullName + "<br />" +
    "<b>Net Salary</b>: " + this.netSalary + "<br />" +
    "-----------------------------------" + "<br />";
    
}


function getRandomNumberBetween(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

var emp1 = new Employee(1000, "Tariq Samha", 1, 0, "img");
var emp2 = new Employee(1001, "husam ali", 2, 1, "img");
var emp3 = new Employee(1002, "urwa Ali", 1, 2, "img");

emp1.calculateNetSalary();
emp2.calculateNetSalary();
emp3.calculateNetSalary();

emp1.render();
emp2.render();
emp3.render();
