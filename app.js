// // Qno1:Declare an empty array using JS literal notation to store student names in future.

// let studentName = [];

// let addStudentName = prompt();

// studentName.push(addStudentName);

// document.write(`${addStudentName}`);


// // console.log(`${studentName[0]}`);

// // Qno2:Declare an empty array using JS object notation to store student names in future.

// // let studentNames = new Array();

// // Qno3. Declare and initialize a strings array.

// // let stringVar = ["strings", "hamza"];

// // console.log(`${stringVar[1]}`);

// // Qno4:Declare and initialize a numbers array.

// // let numberVar = [1, 3];

// // console.log(`${numberVar[1]}`);

// // Qno5:Declare and initialize a boolean array.

// // let booleanVar = [true , false];

// // console.log(`${booleanVar[1]}`);

// // Qno6: Declare and initialize a mixed array.

// // let mixedVar = ["Hamza" , "Arif", "Rayan", 55 , 88, 99, true , false ,true ,false];

// // console.log(`${mixedVar[8]}`);

// // Qno7:Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like:

// // let educationQualification = ["<h3>" + "SSC" + "<br>" + "HSC" + "<br>" +  "BCS" + "<br>" +  "BS" + "<br>" + "BCOM" + "<br>" + "MS" + "<br>" +  "M.PHIL" + "<br>" +  "PHD" + "</h3>"];

// // document.write(`${educationQualification}`);

// // // Qno8: Write a program to store 3 student names in an array.Take
// // another array to store score of these three students.
// // Assume that total marks are 500 for each student, display
// // the scores & percentages of students like:

// let squadName = ["Hamza","Ammad","Rayyan","Shayyan"];
// let scoreStudent = [230,480,320,180];
// let totalMarks = [500];

// document.write(`<h1>Top 3 Student Name</h1>`);
// document.write(`Score of ${squadName[0]} is ${scoreStudent[1]}.Percentage: ${scoreStudent[1]*100/500}%<br>`);
// document.write(`Score of ${squadName[2]} is ${scoreStudent[2]}.Percentage: ${scoreStudent[2]*100/500}%<br>`);
// document.write(`Score of ${squadName[3]} is ${scoreStudent[3]}.Percentage: ${scoreStudent[3]*100/500}%<br>`);
// document.write(`Score of ${squadName[1]} is ${scoreStudent[0]}.Percentage: ${scoreStudent[0]*100/500}%<br>`

// // Input student names and scores
// for (let i = 0; i < 3; i++) {
//     let name = prompt(`Enter the name of student ${i + 1}:`);
//     let score = parseFloat(prompt(`Enter the score of ${name} (out of ${totalMarks}):`));

//     // Append to the respective arrays
//     studentNames.push(name);
//     studentScores.push(score);
// }

// // Display scores and percentages
// console.log("\nStudent Scores and Percentages:");
// console.log("--------------------------------");
// for (let i = 0; i < 3; i++) {
//     let percentage = (studentScores[i] / totalMarks) * 100;
//     console.log(`${studentNames[i]}: Score = ${studentScores[i]}, Percentage = ${percentage.toFixed(2)}%`);
// }

// // Qno9:Initialize an array with color names. Display the array
// elements in your browser.


// let colorPut = ["red"+ "<br>" + "green"+ "<br>" + "blue"+ "<br>" +  "yellow" + "<br>" + "orange"+ "<br>" + "pink"];

// document.write(`<h3> ${colorPut} </h3>`);

// Qno10: Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.

// let scoreDecending = [320,230,120,480];

// document.write(`<h1>Score of Students:${scoreDecending.slice(0)}<br></h1>`);
// document.write(`<h1>Ordered Score of Students:${scoreDecending.sort()}</h1>`);


// Qno11:Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

// let mostPopularCitiesNames = ["Karachi","Lahore","Peshawar","Hyderabaad","Islamabad","Quetta","Rawalpindi"];
// let slectedCites = [];
// document.write(`<h2>Cities list:</h2>`);
// document.write(`${mostPopularCitiesNames}`);
// document.write(`<h2>Selected cities list:</h2>`);
// slectedCites = mostPopularCitiesNames.slice(5);
// document.write(`${[slectedCites]}`);


// Qno12:Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

// let addstring = ["This","is","my","cat"]


// document.write(`${[addstring]}`);



