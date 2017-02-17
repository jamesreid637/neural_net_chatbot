const readline = require("readline");
function createReadline() {
    rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
};
function createConversation() {
    createReadline();
    rl.question("Say something: ", (answer) => {
        rl.close();
        if (answer != "BREAK CONVERSATION") {
            console.log("Robert says: ")
            createConversation();
        };
    });
};
createConversation();