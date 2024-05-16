import inquirer from "inquirer";
let gessnum = Math.floor(Math.random() * 10 + 1);
do {
    let answer = await inquirer.prompt([
        {
            message: "(^o^) enter a number between 1-10 : ",
            type: "number",
            name: "num1"
        },
    ]);
    function playagain() {
        if (answer.num1 < gessnum) {
            console.log(" nah u guessed the wrong number, please try again :(");
        }
    }
    if (answer.num1 > gessnum) {
        console.log(" nope wrong u guessed the wrong number, please try again :(");
    }
    if (answer.num1 == gessnum) {
        console.log(" (^.^) yayiee you guessed the number correctly :)");
        process.exit();
    }
    playagain();
} while (true);
