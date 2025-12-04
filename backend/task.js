const myFun = () => {
	console.log("First line");
	setTimeout(() => {
		console.log("Second line");
	}, 2000);
	console.log("Third line");
}

myFun();

const myFunAsync = () => {
	return new Promise((resolve, reject) => {
		resolve("Second Line from Async");
	})
}

const myFun2 = async() => {
	console.log("First line from Async");
	let result = await myFunAsync();
	console.log(result);
	console.log("Third Line from Async");
}

myFun2();