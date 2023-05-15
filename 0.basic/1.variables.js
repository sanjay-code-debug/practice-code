const accountId = 12345
let accountPassword = "Sanjay"
var accountEmail = "practice@gmail.com"
accountCity ="Gapabandhu Nagar"

let accountPlace;  // this variable is declared but not assign any value

// accountId = 43234;    // const value can not be change

accountEmail = "test@gmail.com"
accountPassword = "Kumar"
accountCity = "Bideipur"


//  not recomended to use var bcz it make issue when we use block scope and functional scope

console.table([accountEmail,accountPassword,accountCity,accountPlace])
