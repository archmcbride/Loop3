var students = [{
 name: 'Liz',
 age: 25,
 city: 'Boulder'
},{
 name: 'Meghan',
 age: 27,
 city: 'Denver'
},{
 name: 'Trent',
 age: 32,
 city: 'Boulder'
},{
 name: 'Chelsea',
 age: 24,
 city: 'Boulder'
},{
 name: 'Amir',
 age: 18,
 city: 'Denver'
}];


/*<em>Problem:</em>

<pre>
Liz
Meghan
Trent
Chelsea
Amir
</pre>

<em>Solution:</em>

<pre>
for(var i=0; i &lt; students.length; i++) {
 console.log(students[i].name);
}
</pre>

*/
//PROBLEM 1: 25 27 32 24 18
//console.log(25 27 32 24 18)
// for (var i=0; i<students.length; i++) {
// 	console.log(students[i].age)
// }

//PROBLEM 2: Liz, Boulder Meghan, Denver Trent, Boulder Chelsea, Boulder Amir, Denver

// for (var i=0; i<students.length; i++) {
// 	console.log(students[i].name + ", " + students[i].city)
// }

//PROBLEM 3: Liz is from Boulder Trent is from Boulder Chelsea is from Boulder
//Only need the first 3, plus a string, plus their city

 // for (var i = 0; i < students.length; i++) {
 // 	//console.log(students[i].city)
 // 	if (students[i].city === "Boulder") {
 // 		console.log(`${students[i].name} is from ${students[i].city}`)
 // 	}
 // }

 //PROBLEM 4 Meghan is older than 25 Trent is older than 25

for (var i = 0; i < students.length; i++) {
 	//console.log(students[i].city)
 	if (students[i].age >25) {
 		console.log(`${students[i].name} is older than 25`)
 	}
 }












