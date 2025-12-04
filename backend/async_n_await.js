// Callback -> Promise -> Async/Await

/*
Callback version
====================
-> calling a function that takes a callback (function called through another function)
*/
const getUserDetails = (userId, callback) => {
    console.log("Fetching user details using callback...");
    callback({userId : userId, name : "Nathi"});
}

const getUserSubjects = (userId, callback) => {
    console.log("Fetching user subjects using callback for", userId);
    callback(["Maths", "Science", "English"]);
}

const printSubjects = (subjects) => {
    console.log("User subjects are:", subjects);
}

getUserDetails(1, (user) => {
    getUserSubjects(user.name, (subjects) => {
        printSubjects(subjects);
    })
});


/*
Promise version
================
-> returning a Promise that resolves after some operation (handle callback hell)
-> has .then() and .catch() methods to handle resolved and rejected cases
*/
const getUserDetailsPromise = (id) => {
    console.log("Fetching user details using Promise...");
    return new Promise((resolve, reject) => {
        resolve({userId : id, name : "Nathi"});
        reject("Error fetching user details");
    });
}

const getUserSubjectsPromise =(id) => {
    console.log("Fetching user subjects using Promise for", id);
    return new Promise((resolve, reject) => {
        resolve (["Maths", "Science", "English"]);
        reject("Error fetching user subjects");
    });
}

const printSubjectsPromise = (subjects) => {
    console.log("User subjects are:", subjects);
}

getUserDetailsPromise(1)
.then((user) => {
    return getUserSubjectsPromise(user.name);
})
.then((subjects) => {
    printSubjectsPromise(subjects);
})
.catch((error) => {
    console.log(error);
});


/*
Async/Await version
====================
-> syntactic sugar over Promises (makes asynchronous code look synchronous)
-> uses async keyword before function and await keyword before Promise
*/
const getUserDetailsAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({name : "Nathi"})
        }, 2000);
    })
};

const getAll = async() => {
    console.log("First line printed");
    const result = await getUserDetailsAsync("h9");
    console.log(result);
    console.log("Last line Printed");
}

getAll();