// function checkingavailable(inventory){
//     for (let i=0;i<inventory.length;i++){
//         if (inventory[i]==0){
//             console.log("item is not available");

//         }
//         else{
//             console.log("item is available");

//         }
//     }
// };
// const inventory = [20,40,30,0];
// checkingavailable(inventory)



// const rankingGrade= (grades)=>{
// grades.forEach(element => {
//     if (element >= 85){
//         console.log(`Your score is ${element} and your grade is A`); 
//     }
//     else if (element<85 && element >=70){
//         console.log(`Your score is ${element} and your grade is B`);
//     }
//     else if (element <70 && element >= 60){
//         console.log(`Your score is ${element} and your grade is C`);
//     }
//     else if (element <60 && element >= 50){
//         console.log(`Your score is ${element} and your grade is D`);
//     }
//     else{
//         console.log(`Your score is ${element} and your grade is E`);

//     }

// });
// }
// let grades = [55,33,70,85,40,20,90,60]
// rankingGrade(grades);


// const rankgrade = (grade)=>{
//     for (i=0;i<grade.length; i++){
//         if (grade[i]>=85){
//             console.log(`score:${grade[i]} your grade: A`)
//         }
//         else if (grade[i]<85 && grade[i]>=70){
//             console.log(`score:${grade[i]} your grade: B`);
//         }
//         else if (grade[i]<70 && grade[i]>=60){
//             console.log(`score:${grade[i]} your grade: C`);

//         }
//         else if (grade[i]<60 && grade[i]>=50){
//             console.log(`score:${grade[i]} your grade: D`);

//         }
//         else{
//             console.log(`score:${grade[i]} your grade: E`);
//         }
//     }
// }
// let grade = [55,33,70,85,40,20,90,60];
// // rankgrade(grade);


// function rankingwithObject(gradeswithRanking){
//     gradeswithRanking.forEach(item =>{
//         let grade;
//         if (item.score>=85){
//             grade = "A";
//         }
//         else if (item.score<85 && item.score>=70){
//             grade = "B";
//         }
//         else if (item.score<70 && item.score>=60){
//             grade = "C";

//         }
//         else if (item.score<60 && item.score>=50){
//             grade = "D";
//         }
//         else{
//             grade = "E"
//         }
//         console.log(`score:${item.score} grade:${grade}`);
//     });
// }
// gradeswithRanking = [{"score": 96 , "name":"Abel"},{"score":85 ,"name":"rahwa"}];
// rankingwithObject(gradeswithRanking);
// const loginAttempt = function (){
//     let loginAttempt = 1;
//     while(loginAttempt<=3){
//         console.log(`login Attempt ${loginAttempt}`);
//         loginAttempt++

//     }
// }
// loginAttempt();


// const loginAttempt =()=>{
// let loginAttempt = 1;
// while(loginAttempt<=3){
//     console.log(`login Attempt ${loginAttempt}`);
//     loginAttempt+=1

// }};
// loginAttempt();



// const loginAttemptWhile=()=>{
// let loginAttempt =1
// do {
//     console.log(`login attempt ${loginAttempt}`);
//     loginAttempt +=1
// }
// while(loginAttempt<=3);
// };
// loginAttemptWhile()

// const notification = (notificationType) => {
//     notificationType.forEach(element => {
//         switch (element) {
//             case "email":
//                 console.log(`Send Email`);
//                 break;
//             case 'sms':
//                 console.log("send sms");
//                 break;
//             case "push":
//                 console.log("send push notification");
//                 break;
//             default:
//                 console.log("Notification type not supported");

//         }
//     });
// }
// notification(["sms", "email", "push"])

function giveAccessForRoles(roles) {
    roles.forEach(role => {
        switch (role) {
            case "Admin":
                console.log(`For ${role.toLowerCase()}: Admin Access`);
                break;
            case "Viewer":
                console.log(`For ${role.toLowerCase()}: Viewer Access`);
                break;
            case "Editor":
                console.log(`For ${role.toLowerCase()}: Editor Access`);
                break;
            case "Commentor":
                console.log(`For ${role.toLowerCase()}: Commentor Access`);
                break;
            default:
                console.log(`For ${role.toLowerCase()}: no access`);
        }

    })
}
roles = ["Admin", "Viewer", "Editor", "Commentor", "Guest"]
giveAccessForRoles(roles);