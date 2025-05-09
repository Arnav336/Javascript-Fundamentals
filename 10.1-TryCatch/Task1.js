//finally keyword guarantees cleanup when the flow exits from the try catch block in every situation even if an exception is thrown
function f(){
    try {
        return a + b
    } catch (error) {
        console.log(error);
    } finally {
        console.log("Cleanup");
    }}
    f();/*ReferenceError: a is not defined
    at f (/home/neo/Javascript-Fundamentals/10.1-TryCatch/error.js:4:5)
    at Object.<anonymous> (/home/neo/Javascript-Fundamentals/10.1-TryCatch/error.js:10:1)
    at Module._compile (node:internal/modules/cjs/loader:1364:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1422:10)
    at Module.load (node:internal/modules/cjs/loader:1203:32)
    at Module._load (node:internal/modules/cjs/loader:1019:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:128:12)
    at node:internal/main/run_main_module:28:49
    Cleanup*/
    
    //Throw
    function f1(){
        try{
            console.log("Try");
            throw new Error("Custom Error");
        } catch (error) {
            console.log(error);
        } finally {
            console.log("Cleanup");
        }
    }
    f1()/*Try
    Error: Custom Error
        at f1 (/home/neo/Javascript-Fundamentals/10.1-TryCatch/error.js:25:15)
        at Object.<anonymous> (/home/neo/Javascript-Fundamentals/10.1-TryCatch/error.js:32:1)
        at Module._compile (node:internal/modules/cjs/loader:1364:14)
        at Module._extensions..js (node:internal/modules/cjs/loader:1422:10)
        at Module.load (node:internal/modules/cjs/loader:1203:32)
        at Module._load (node:internal/modules/cjs/loader:1019:12)
        at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:128:12)
        at node:internal/main/run_main_module:28:49
    Cleannup! */