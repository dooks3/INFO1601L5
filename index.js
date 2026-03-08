//object literal
let bob = {
  fname: "bob",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1603',
      grades: [ 89, 34, 67 ]
    },
    {
      course: 'INFO 1601',
      grades: [ 89, 34, 67 ]
    }
  ]
};

let sally = {
  fname: "sally",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1601',
      grades: [ 100, 89, 79 ]
    }
  ]
};

let paul = {
  fname: "paul",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1600',
      grades: [ 89, 34, 67 ]
    }
  ]
};


const students = [bob, sally, paul];


// Average Grade Function

function getAverageGrade(student, course){
    
    for(let c of student.transcript){
      if(c.course === course){
        let sum = 0; 
        for(let grade of c.grades){
          sum+=grade;
        }
        return sum/c.grades.length;  
      }
    }
    return -1; 
}
  

function getAssignmentMark(student, course, num){
  // assume num argument is between 1 and 3 to correspond with assignment number
  for(let c of student.transcript){
    if(c.course === course){
      return c.grades[num -1]; // num -1 is used because that will be the relevant index of the grade
    }
  }
  return -1; 
}

function averageAssessment(students,courseName, assignment){
  let sum = 0; 
  let count = 0; 

  for(let student of students){
    let mark = getAssignmentMark(student, courseName, assignment);

    if(mark!= -1){
      count++; 
      sum+=mark; 
    }
  }

  if (count == 0){
    return -1; 
  }

  return sum/count; 

}

console.log(getAverageGrade(bob, "INFO 1603"));
console.log(getAssignmentMark(sally, "INFO 1601", 2));
console.log(averageAssessment(students, "INFO 1601", 1));