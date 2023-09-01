// Array of API URLs to fetch data from
const apiUrls = [
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
  "https://jsonplaceholder.typicode.com/todos/4",
  "https://jsonplaceholder.typicode.com/todos/5",
  "https://jsonplaceholder.typicode.com/todos/6",
  "https://jsonplaceholder.typicode.com/todos/7",
  "https://jsonplaceholder.typicode.com/todos/8",
  "https://jsonplaceholder.typicode.com/todos/9",
  "https://jsonplaceholder.typicode.com/todos/10",
];
const outAll = document.getElementById("output-all");
const outAny = document.getElementById("output-any");

function time(){
	let arr = [];
	let brr = [];
	let s1 = Date.now();
	  for(let i =0;i<apiUrls.length;i++){
		let fet = fetch(apiUrls[i]);
		arr.push(fet);
		
	  }
	 
	let p = Promise.any(arr);
	let val = p.then((data) =>{
		console.log(data);
	})
	let e1 = Date.now();
	let r1 = e1-s1;
	console.log(r1);
	let s2 = Date.now();
	  for(let i =0;i<apiUrls.length;i++){
		let fet = fetch(apiUrls[i]);
		brr.push(fet);
		
	  }
	 
	let pm = Promise.any(arr);
	let val2 = pm.then((data) =>{
		console.log(data);
	})
	let e2 = Date.now();
	let r2 = e2-s2;
	console.log(r2);
	
	outAll.innerText = r1;
	outAny.innerText = r2;


}
 time();




// You can write your code here
