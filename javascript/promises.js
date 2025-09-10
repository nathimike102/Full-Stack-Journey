function fun1() {
    return new Promise(function(resolve){
        setTimeout(function() {
            resolve(1);
        }, 1000);
    });
}

function fun2(res1) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(1 + res1);
        }, 1000);
    });
}

function fun3(res2) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(1 + res2);
        }, 1000);
    });
}

fun1().then(function(res1){
    console.log('Fun1 completed', res1);
    fun2(res1).then(function(res2){
        console.log('Fun2 completed', res2);
        fun3(res2).then(function(res3){
            console.log('Fun3 completed, final result:', res3);
        });
    });
});
async function executeFunctions() {
    try{
        const result1 = await fun1();
        const result2 = await fun2(result1);
        const result3 = await fun3(result2);
        console.log("result3:", result3);
    } catch (error) {
        console.error("Error occurred:", error);
    }
}
executeFunctions();
