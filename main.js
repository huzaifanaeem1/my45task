// task # 2
// let personName : string = ("Eric,");
// console.log(`Hello ${personName} would you like to learn some Python today?`);
// ____________________________________________________________________________________________________________________________________
//task # 03
// var personNama: string = ("Huzaifa Naeem")
// //in lowercase
// console.log("lowercase:" , personName.toLowerCase());
// //To uppercase
// console.log("upercase:" , personName.toUpperCase());
// //in title case
// console.log("titlecase:" , personName.replace(/\b\w/g, c => c.toUpperCase()));
// ____________________________________________________________________________________________________________________________________
//task # 04
// let quote: string = ("“A person who never made a mistake never tried anything new.”");
// let author: string = ("Albert Einstein");
// console.log(`${author} once said, ${quote}`);
// ____________________________________________________________________________________________________________________________________
//task # 05
// let famousPerson: string = ("Albert Einstein")
// let quote: string = ("“A person who never made a mistake never tried anything new.”");
// let message: string = (`${famousPerson} once said ${quote}`);
// console.log(message);
// ____________________________________________________________________________________________________________________________________
//task # 06
// let personName: string = ("\t \n Albert Einstein \n \t")
// console.log("Orignal:" , personName);
// console.log("stripped:" , personName.trim());
// ____________________________________________________________________________________________________________________________________
//task # 07-08
// console.log(5 + 3);
// console.log(10 - 2);
// console.log(4 * 2);
// console.log(16 / 2);
// ____________________________________________________________________________________________________________________________________
//task # 09
// var favNumber: string = ("6");
// console.log(`My favorite number is ${favNumber}`);
// ____________________________________________________________________________________________________________________________________
// task # 10
// author: string = ("Huzaifa Naeem");
// Date: ("15feb-02-2024");
// //Adding (+)
// console.log(5 + 3);
// // subtract (-)
// console.log(10 - 2);
// // Multiply (*)
// console.log(4 * 2);
// // Division (/)
// console.log(16 / 2);
// ____________________________________________________________________________________________________________________________________
// task # 11 
// var names = ["Affan", "Ahmed", "Rameez", "Haseeb"];
// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);
// console.log(names[3]);
// ____________________________________________________________________________________________________________________________________
// task # 12
// let names : string [] = ["Affan","Ahmed","Rameez","Haseeb"];
// let message : string = ("do you like a play cricket?")
// console.log(names[0] + " " + message);
// console.log(names[1] + " " + message);
// console.log(names[2] + " " + message);
// console.log(names[3] + " " +  message);
// ____________________________________________________________________________________________________________________________________
// task # 13
// let transportation : string [] = ["Honda motercycle","V8","Alto","Fortunure"];
// transportation.map((items) => console.log(`“I would like to own a” ${items}`));
// ____________________________________________________________________________________________________________________________________
// task 14 
// var guestArrays: string [] = ["Affan", "Ahmed", "Rameez", "Haseeb"];
// guestArrays.map((items) => (console.log(`Dear ${items} , you are invited to the dinner`)));
// ____________________________________________________________________________________________________________________________________
// task # 15
// let guestArray : string [] = ["Affan", "Ahmed", "Rameez", "Haseeb"];
// let canNotAttend : string = "Ahmed";
// let message: string =  ("can not attend the dinner");
// console.log(canNotAttend + " " + message);
// let newGuestArray : string = "Aliyan"
// guestArray [guestArray.indexOf(canNotAttend)] = newGuestArray;
// guestArray.map((items) => console.log(`Dear ${items} you are invited to the dinner`));
// ____________________________________________________________________________________________________________________________________
// task # 16
//      ------------part #1 -----------
//  var guestArray : string[] = ["Anabia", "hasnain","Ali" , "Hunzila"]
//  var canNotattend: string = "Ali";
//  var newGuest: string = "Wajahat";
//  guestArray[guestArray.indexOf(canNotattend)] = newGuest;
//  // console.log(guestArray);
//  // guestArray.map((items)=> console.log(`Dear ${items}
//  //  I found a bigger dinner table so I am invited more peoples.`))
//              // ------------part #2 begning-----------
//  var begGuest : string = "moiz";
//  guestArray.unshift((begGuest))
//  // console.log(guestArray);
//              // ------------part #3 Middle-----------
//  var midGuest: string = "Laiba";
//  var middleIndex = (guestArray.length/ 3)
//  guestArray.splice(middleIndex, 0, midGuest)
//  // console.log(guestArray);
//              // ------------part #4 Appendend-----------
//  guestArray.push("Aliyan")
//  // console.log(guestArray);
//              // ------------part #5 new invitation messages-----------
//  guestArray.map((items)=> console.log(`${items}, You are invited in themore category on dinner`))
// ____________________________________________________________________________________________________________________________________
// task # 17
//                       guests list
// let  guests: string[] = ["Bilal", "Malaika"];
// //                only two peple can be invited
// console.log("Due to limited space, Only two people can be invited for dinner.");
// //                      Removing guests
// while (guests.length > 2){
//     const removeGuest = guests.pop();
//     console.log(`Sorry, ${removeGuest}, you're no longer invited to dinner`);
// }
// // print invitation to the remaining two guests
// guests.forEach((guests) => {
//     console.log(`Dear, ${guests}, you're still invited to dinner.`)
// });
// //           removing last two name  from the list
// guests.push();
// guests.push();
// //            printing the final list
// console.log("final guest list:", guests);
// ____________________________________________________________________________________________________________________________________
// task # 18
// let placeTovisit: string[] = ["Pakistan", "Japan", "China", "Iran", "Afghanistan"]
// //           Print array in orignal array
// console.log("Orignal Order:", placeTovisit);
// //          Print array in Alphabetical Order.
// console.log("Alphabetical order",[...placeTovisit].sort());
// //         the array is still in its orignal order
// console.log("orignal order after sorting", placeTovisit);
// //         Print array in Reverse Alphabetical Order.
// console.log(" Reverse Alphabetical order",[...placeTovisit].sort().reverse());
// //        the array is still in its orignal order
// console.log("orignal order after reverse sorting", placeTovisit);
// //       reverse order of the list 
// placeTovisit.reverse();
// console.log("reverse order:", placeTovisit);
// //  reverse the order of the list again to get back to the orignal order
// placeTovisit.reverse();
// console.log("Back to orignal order", placeTovisit);
// // sort the array in alphabetic order
// placeTovisit.sort((a, b) => b.localeCompare (a))
// console.log("sorting in reverse alphabetic order", placeTovisit);
// ____________________________________________________________________________________________________________________________________
// task # 19
// let invitation: string [] = ["Bilal", "Malaika"];
// let count_invitation: number = invitation.length;
// console.log(`${count_invitation}, people will come to the dinner`);
// ____________________________________________________________________________________________________________________________________
// task # 20
// let City: string[] = ["Islamabad", "Punjab", "Karachi", "Lahore", "Multan"];
// console.log("List of City:");
// console.log(City);
// ____________________________________________________________________________________________________________________________________
// task # 21
// let person: {name: string, fname: string, age: number} = 
// {name:"Huzaifa", fname: "Naeem", age: 16};
// console.log(person);
// ____________________________________________________________________________________________________________________________________
// task # 22
// let day: string[]= ["Monday", "Tuesday", "Wednesday", "Thusrday", "Friday", "Saturday", "Sunday", ]
// // console.log(day{7});
// console.log(day[3]);
// ____________________________________________________________________________________________________________________________________
// task # 23
// let car: string = 'subaru';
// console.log("Is car == 'subaru'? I predicted true.")
// console.log(car == 'subaru');  // True
// console.log("Is car == 'Honda'? I predicted false.")
// console.log(car == 'Honda');  // false
// console.log("Is car === 'subaru'? I predicted true.")
// console.log(car === 'subaru'); // True
// console.log("Is car === 'Sabaru'? I predicted False.")
// console.log(car === 'Sabaru'); // false
// console.log("Is car !== 'Cultus'? I predicted true.")
// console.log(car !== 'Cultus'); // True
// console.log("Is car !== 'subaru'? I predicted false.")
// console.log(car !== 'subaru'); // false
// console.log("Is car != 'V8'? I predicted true.")
// console.log(car != 'V8'); // true
// console.log("Is car !== 'subaru'? I predicted false.")
// console.log(car !== 'subaru'); // false
// console.log("Is car > 'mehran'? I predict true.");
// console.log(car > 'mehran');  // true
// console.log("Is car <= 'Ford'? I predict false.");
// console.log(car <= 'Ford'); // false
// ____________________________________________________________________________________________________________________________________
// task # 24
// let name_1: string = "huzaifa"
// let name_2: string = "huzaifa naeem";
// let name_3: string = " muhammad huzaifa naeem";
// if(name_1 == name_2){
//     console.log("names are equal")
// }else{
//     console.log("names are not equal")
// }
// if(name_1 != name_2){
//     console.log("names are equal")
// }
// if(name_1 != name_3){
//     console.log("names are equal")
// }
// let age_1: number = 18
// let age_2: number =  25
// if(age_1 == 18){
//     console.log("eligible for vote")
// }
// if(age_1 != 25){
//     console.log("eligible for vote in older category")
// }
// if(age_1 <= age_2){    // less
//     console.log("younger")
// }
// if(age_2 >= age_1){    // greater
//     console.log("older")
// }
// if(age_1 == 18 && age_2 == 25){
//     console.log("person is eligible for vote")
// }
// if(age_1 == 18 || age_2 != 25){
//     console.log("person is  not eligible for vote")
// }
// let country: string  [] = ["Pakistan", "China", "Dubai", "Iraq" ]
// if (country.includes("dubai")){
//     console.log("dubai is in  country list")
// }
// ____________________________________________________________________________________________________________________________________
// task # 25
// let alien_color : string = "green";
// if(alien_color == "green"){
//     console.log("you  earn 5 points")
// }
// let alien_color : string = "red";
// if(alien_color == "green"){
//     console.log("no output")
// }
// ____________________________________________________________________________________________________________________________________
// task # 26
// let alein_color : string = "green";
// if(alein_color == "green"){
//     console.log("the player just earned 5 points for shooting the alien.")
// }else{
//     console.log(" the player just earned 10 points.");
// }
// let alein_color : string = "red";
// if(alein_color == "green"){
//     console.log("the player just earned 5 points for shooting the alien.")
// }else{
//     console.log(" the player just earned 10 points.");
// }
// ____________________________________________________________________________________________________________________________________
// task # 27
// let alein_color : string = "green";
// if(alein_color == "green") {
//     console.log("player earned 5 points.")
// } else if (alein_color == "yellow") {
//     console.log("player earned 10 points.")
// } else{
//     console.log(" player earned 15 points.")
// }
// ____________________________________________________________________________________________________________________________________
// task # 28
// let age : number = 84
// if(age < 2) {
//     console.log("you are a baby")
// }else if(age < 4) {
//     console.log("you are a tolder")
// }else if(age < 13) {
//     console.log("you are a kid")
// }else if ( age < 20) {
//     console.log("you are teenager")
// }else if(age < 65) {
//     console.log("you are adult")
// }else{
//     console.log("you are older")
// }
// ____________________________________________________________________________________________________________________________________
// task # 29
// let favFruits: string [] = ["mango", "apple", "watermalon", "kiwi", "peach"]
// if(favFruits.includes("mango")) {
//     console.log("mango")
// }
// if(favFruits.includes("apple")) {
//     console.log("apple")
// }
// if(favFruits.includes("watermalon")) {
//     console.log("watermalon")
// }
// if(favFruits.includes("kiwi")) {
//     console.log("You really like bananas!")
// }
// if(favFruits.includes("peach")) {
//     console.log("You really like bananas!")
// }
// ____________________________________________________________________________________________________________________________________
// task # 30
// let users: string [] = ["admin", "eric", "haseeb", "rameez", "laiba"]
// for(let user of users) {
//     if(user == ("admin")){
//         console.log(" Hello admin, would you like to see a status report?")
//     }else {
//         console.log(`Hello ${user}, thank you for logging in again.`)
//     }
// }
// ____________________________________________________________________________________________________________________________________
// task # 31
// let  users: string [] = [ "eric", "haseeb", "rameez", "laiba", "admin"]
// if (users.length == 0) {
//     console.log("We need to find some users!")
// } else {
//     for (let user of users) {
//         if(user == "admin") {
//             console.log("Hello admin, would you like to see a status report?")
//         } else {
//             console.log(`Hello ${user}, thank you for logging in again.`)
//         }
//     }
// }
// users = []
// if (users.length == 0){
//     console.log("we need to find some users")
// }
// ____________________________________________________________________________________________________________________________________
//task # 32
// let  current_users: string [] = ["admin", "Eric", "Haseeb", "Rameez", "laiba"]
// let  new_users: string [] = ["admin", "laiba", "Noor", "Aliyan", "Affan"]
// let current_users_lower: string [] = current_users.map(user => user.toLowerCase())
// for ( let new_user of new_users){
//     if (current_users_lower.includes (new_user.toLowerCase())){
//         console.log(`Sorry ${new_user}, thats name is taken`)
//     }else{
//         console.log(`yes ${new_user}, is still in avalaible list`)
//     }
// }  
// ____________________________________________________________________________________________________________________________________
// task # 33
// let numbers : number [] =[1,2,3,4,5,6,7,8,9,10]
// for (let number of numbers ) {
// if (number === 1) {
//     console.log(`${number}st`)  //1st
// }else if (number === 2) {
//     console.log(`${number}nd`)  //2nd
// }else if (number === 3) {
//     console.log(`${number}rd`)  //3rd
// }else{
//     console.log(`${number}th`)   //4th, 5th, 6th, 7th, .......
// }
// }
// ____________________________________________________________________________________________________________________________________
// task # 34
// let favourite_pizza: string [] = ["peperoni", "spicy", "chicken"]
// // for (let  pizza of favourite_pizza ) {
// //     console.log(pizza)
// // }
// console.log("\n")
// for (let pizza of favourite_pizza){
//     console.log(`I really like ${pizza} pizza`)
// }
// console.log("\nI really like pizza!")
// ____________________________________________________________________________________________________________________________________
//task # 35
// let animals: string [] = ["loin", "cat", "dog"]
// for(let animal of animals) {
//     console.log(animal)
// }
// console.log("\n")
// for(let animal of animals) {
//     console.log(`A ${animal} has a tail`)
// }
// console.log("\n all of these are greater pets but i love dogs more")
// ____________________________________________________________________________________________________________________________________
// task # 36
// function makeShirt (size: string, text: string): void {
//     console.log(` you order a ${size} shirt that say ${text}`)
// }
// makeShirt('large', '"i love typescript"')
// makeShirt('medium', '"i need a big shirt"')
// ____________________________________________________________________________________________________________________________________
// task # 37
// function makeShirt(size: string = "large",  text: string = "I love typescript"): void{
//     console.log(`you have order a ${size}, shirt that says ${text}`)
// }
// // makeShirt();
// // makeShirt('medium');
// // different size message
// makeShirt("small", "i need a big shirt to wear");
// ____________________________________________________________________________________________________________________________________
// task # 38
// function describe_city ( city: string, country: string = "Pakistan"):void{
//     console.log(`${city} is in ${country}`)
// }
// describe_city("Karachi") // default city
// describe_city("france", "europe") 
// describe_city("Lahore"," Pakistan") // default city
// ____________________________________________________________________________________________________________________________________
// task # 39
// function city_country (city: string, country: string): string {
//     return `${city} , ${country}`
// }
// let c1 = city_country('Lahore', 'Pakistan')
// let c3 = city_country('Paris', 'France')
// let c2 = city_country('Tokyo', 'Japan')
// console.log(c1)
// console.log(c2)
// console.log(c3)
// ____________________________________________________________________________________________________________________________________
// task # 40
// function make_Album (artist: string, title: string): {artist: string; title: string} {
//     const dictionaries = {
//         artist:artist.charAt(0).toUpperCase() + artist.slice(1),
//         title:title.charAt(0).toUpperCase() + title.slice(1)
//     };
//     return dictionaries;
// }
// let album =  make_Album("Haseeb", "Light");
// console.log(album);
//  album =  make_Album("Rameez", "seenbreez");
// console.log(album);
//  album =  make_Album("Affan", "red waves");
// console.log(album);
// ____________________________________________________________________________________________________________________________________
// task # 41
// function show_magicians( magicians: string []): void{
//     for (const magician of magicians) {
//         console.log(magician.charAt(0).toUpperCase() + magician.slice(1))
//     }
// }
// const magician: string [] = ["haseeb", "rameez", "affan"]
// // show_magicians(magician);
// // ----------------------------------------------------------------------------------------------------------
// // task # 42
// function make_great(magicians: string[]) : void{
//     for (let i = 0; i < magicians.length; i++) {
//         magicians[i] = magicians [i]  +  ' the great'
//     }
// }
// const magicians2 : string [] = ["haseeb", "rameez", "affan"]
// // make_great(magicians2)
// // show_magicians(magicians2)
// // ----------------------------------------------------------------------------------------------------------
// // task # 43
// function make_great2 (magicians: string[]): string[]{
//     const great_magicians: string [] = []
//     for (let i = 0; i < magicians.length; i++ ) {
//         great_magicians.push(magicians[i] + ' the great');
//     }
//     return great_magicians;
// }
// const magicians3:  string [] = ["haseeb", "rameez", "affan"]
// const great_magician2: string[] = make_great2  (magicians3)
// show_magicians(magicians3);
// show_magicians(great_magician2)
// ____________________________________________________________________________________________________________________________________
// task # 44
// function sandwich(...item: string[]): void{
//     console.log("Sandwich Order!")
//     for (let i = 0; i < item.length; i ++){
//         console.log(`-${item[i]}`)
//     }
// }
// console.log("enjoy your sandwich Huzaifa Naeem")
// sandwich('vegetable','chicken')
// sandwich('beef','cheese')
// sandwich('garlic chicken','mayo sauce')
// ____________________________________________________________________________________________________________________________________
// task # 45
// type car = {
//     manufacture: string;
//     modle: string;
//     [key: string]: any;
// }
// function creat_car(manufacture: string, modle: string, optional: Record<string, any>): car{
//     return{
//         manufacture,
//         modle,
//         ...optional
//     }
// }
// const mycar: car = creat_car("Suzuki","Cultus", {color: "white", year: 2024}) 
// console.log(mycar);
// ----------------------- COMPLETE TASK ----------------------------------------------
