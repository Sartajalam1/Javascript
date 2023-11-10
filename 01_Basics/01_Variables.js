const accountId  = 1444553;
let accountEmail = "sartaj62@.com";
var accountpassword = "12345";
accountCity = "Chennai";

// accountId = 2; // No change Becoz Const varible use;
accountEmail = "chennai73@gmail.com";
accountpassword = "21211212";
accountCity =  "Tamil nadu";
let accountState; // Not declare value , Print undefined;

console.log(accountId);

console.table([accountId, accountEmail,accountId, accountCity,accountState]);

/* Prefer not to use var
 becoz  of issue in block and functional scope
 */
