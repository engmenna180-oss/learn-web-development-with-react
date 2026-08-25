const generateInvoice = (productName, price, taxRate = 0.14, discount = 0 , ...ignore) => {
    const tax = price * taxRate
    const total = price + tax - (discount*price)
    return `Name:${productName}, price:${price}, taxRate:${taxRate}, discount:${discount},tax:${tax}, total:${total}`
}
console.log(generateInvoice("laptop", 20000, 0.15, 0.5));
console.log(generateInvoice("laptop", 20000));
console.log(generateInvoice("laptop", 20000,0.2 , 0.5, 1 ,"Aya", true));

let initialProfile = { id: 101, username: "Karim", role: "Viewer",preferences: ["Email", "SMS"] };
let {username, role} = initialProfile;
console.log(username, role);
let  updatedProfile = { ...initialProfile, role: "Admin" , preferences : [...initialProfile.preferences , "Push Notifications"]};
console.log(initialProfile);
console.log(updatedProfile);