const rawCourses = [ 
    { id: 1, title: "React & Modern ES6", category: "Frontend", price: 150, inStock: true, instructor: { name: "Ahmed", rating: 4.9 } }, 
    { id: 2, title: "Node.js & Express", category: "Backend", price: 180, inStock: true, instructor: { name: "Sara" } }, 
    { id: 3, title: "HTML5 & CSS3 Mastery", category: "Frontend", price: 80, inStock: true, instructor: { name: "Mostafa", rating: 4.8 } }, 
    { id: 4, title: "Legacy PHP Systems", category: "Backend", price: 60, inStock: false, instructor: null }, 
    { id: 5, title: "UI/UX Design Systems", category: "Design", price: 100, inStock: true, instructor: { name: "Omar", rating: 4.7 } } 
];
let uniCat = new Set(rawCourses.map(e => e.category))
console.log(uniCat)

let availableCourses = rawCourses.filter( ele => ele.inStock === true && ele.category === "Frontend")
console.log(availableCourses);

let filterList = availableCourses.map(ele => {return `${ele.title} - Price:${ele.price} | Instructor:${instructorName = ele?.instructor?.name ?? 'N/A'}`});
console.log(filterList);



class UserAccount {
    #password
    constructor(username , password) {
        this.username = username
        this.#password = password}
    verifyPassword(inputPass) { return this.#password === inputPass }
    getAccountInfo() { return { username: this.username }}
    static getSecurityNotice() {return "Don’t share your password" }
}
class AdminAccount extends UserAccount {
    constructor(username , password , role) {
        super(username , password)
        this.role = role }
    getAdminRole() { return this.role }
}
let user = new UserAccount("Menna", "meb*#11");
let adminUser = new AdminAccount("Aya", "Aya*#123", "student");
console.log(user.verifyPassword("meb*#11"));
console.log(adminUser.verifyPassword("Aya*#123"));
console.log(user.getAccountInfo());
console.log(adminUser.getAccountInfo());
console.log(adminUser.getAdminRole());
console.log(UserAccount.getSecurityNotice());



