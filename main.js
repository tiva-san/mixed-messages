/* 
@author tiva-san
@since Jan 26, 2021
@version 1
@discription This node.js program generates a random fortune & prints it to the console. 
To run program, use generateMessage(createArray(weekDay, fortunes, actions)); & run using Node.js
*/

const weekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const fortunes = ['you will receive what you desire most', 'lighting will strike you', 'you will win the lottery', 'your hard work will pay off', 'you\'ll find true love', 'you\'ll have extra good luck'];
const actions = ['drink a lot of smoothies', 'walk backwards', 'be careful', 'meditate everyday', 'express gratitude', 'maintain positive vibes'];

// Returns a nested array 
const createArray = (dayArray, fortunesArray, actionsArray) => {
    const nestedArray = [dayArray, fortunesArray, actionsArray];
    return nestedArray;
};
// Logs a random message to the console
const generateMessage = nestedArray => {
    let day = null;
    let event = null;
    let advice = null;
    for(let i = 0; i < nestedArray.length; i++) {
        // Generates a random index based on current nested array length
        const randomIndex = Math.floor(Math.random() * nestedArray[i].length);
        // Assign random string based on current array (weekDay, fortunes, or actions)
        switch(i) {
            case 0: day = nestedArray[i][randomIndex];
            break;
            case 1: event = nestedArray[i][randomIndex];
            break;
            case 2: advice = nestedArray[i][randomIndex];
            break;
        } 
    }
    console.log(`On ${day}, ${event}. So ${advice}.`);
};

generateMessage(createArray(weekDay, fortunes, actions)); // Logs random fortune