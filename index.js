function createPerson(name,weight,height){
    this.name = name,
    this.weight = weight,
    this.height = height,
    this.bmi = function (){
      let bmi = this.weight / (this.height * this.height);
      return bmi;
    };
}

let people = [
    new createPerson("Sally",60,2.5), 
    new createPerson("Ben",81,3),
    new createPerson("Shelly",50,1.7)
];

function avgBMI(people){
  let sum = 0; 
  for (let person of people){
    sum += person.bmi();
  }
  return sum/people.length; 
}

console.log(avgBMI(people));