const organizeInstructors = function(instructors) {
  // Put your solution here
  let organized = {};
  for (const info in instructors) {
    let course = instructors[info].course;
    if (organized[course] === undefined) {
      organized[course] = [];
    }
    organized[course].push(instructors[info].name);
  }
  return organized;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));

/*expected output:
{
  iOS: ["Samuel"],
  Web: ["Victoria", "Karim", "Donald"]
}
{
  Blockchain: ["Brendan"],
  Web: ["David", "Carlos"],
  iOS: ["Martha"]
}
Create a function named organizeInstructors
that will receive an array of instructor objects, 
and will return a new object that has the following format:
{
  CourseName: [instructors]
} 
*/