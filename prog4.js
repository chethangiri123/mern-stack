// function getMiddleLetter(str) {
//     if (str.length === 0) {
//         console.log("The string is empty.");
//         return;
//     }
    
//     const middleIndex = Math.floor(str.length / 2);
//     const middleLetter = str[middleIndex - (str.length % 2 === 0 ? 1 : 0)]; // Adjust for 0-based index
//     console.log("Middle letter:", middleLetter);
// }

// // Test with the string "BOSCHO"
// getMiddleLetter("BOSCHO");
const str = "GIRI";
const lengthOfString = str.length;

console.log("The length of the string is:", lengthOfString);






function checkAttendanceCriteria(totalClasses, attendedClasses) {
    if (totalClasses <= 0) {
        console.log("Total classes must be greater than 0.");
        return;
    }

    const attendancePercentage = (attendedClasses / totalClasses) * 100;

    if (attendancePercentage >= 75) {
        console.log(`Eligible! Attendance percentage is ${attendancePercentage.toFixed(2)}%.`);
    } else {
        console.log(`Not eligible. Attendance percentage is ${attendancePercentage.toFixed(2)}%.`);
    }
}

// Example Usage
const totalClasses = 100;  // Total classes conducted
const attendedClasses = 80; // Classes attended by the person

checkAttendanceCriteria(totalClasses, attendedClasses);





function categorizeStudent(grade) {
    let category;

    switch (grade.toUpperCase()) { // Ensure case-insensitivity
        case "A++":
        case "A+":
        case "A":
            category = "Merit Category";
            break;
        case "B++":
        case "B+":
        case "B":
            category = "Average Category";
            break;
        case "C++":
        case "C+":
        case "C":
            category = "Below Average Category";
            break;
        default:
            category = "Invalid Grade";
    }

    console.log(`The grade ${grade} falls under: ${category}`);
}

// Example Usage
categorizeStudent("A++"); // Merit Category
categorizeStudent("B+");  // Average Category
categorizeStudent("C");   // Below Average Category
categorizeStudent("D");   // Invalid Grade







function processNumbers() {
    const results = [];
    const repeats = new Map(); // To store and count repeated results

    for (let i = 1; i <= 100; i++) {
        let result = i;

        // Apply operation for multiples of 2
        if (i % 2 === 0) {
            result *= 5;
        }

        // Apply operation for multiples of 3
        if (i % 3 === 0) {
            result /= 3;
        }

        // Store the result
        results.push(result);

        // Check for repetitions and count them
        if (repeats.has(result)) {
            repeats.set(result, repeats.get(result) + 1);
        } else {
            repeats.set(result, 1);
        }
    }

    // Filter out results with no repetitions
    const repeatedResults = Array.from(repeats.entries()).filter(([key, value]) => value > 1);

    // Output results
    console.log("Final Results:", results);
    console.log("Repeated Results:", repeatedResults);
}

// Run the program
processNumbers();









function generateNumbers() {
    const result = [];

    // Generate first 5 multiples of 2
    for (let i = 1; i <= 5; i++) {
        result.push(i * 2);
    }

    // Generate next 5 multiples of 5
    for (let i = 1; i <= 5; i++) {
        result.push(i * 5);
    }

    // Generate next 5 multiples of 7
    for (let i = 1; i <= 5; i++) {
        result.push(i * 7);
    }

    // Generate next 5 multiples of 10
    for (let i = 1; i <= 5; i++) {
        result.push(i * 10);
    }

    console.log("Generated Numbers:", result);
}

// Run the program
generateNumbers();












function printOddNumberedAlphabets() {
    const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const result = [];

    for (let i = 0; i < alphabets.length; i++) {
        // Check if the position (index) is odd
        if (i % 2 !== 0) {
            result.push(alphabets[i]);
        }
    }

    console.log("Odd-Numbered Alphabets:", result.join(" "));
}

// Run the program
printOddNumberedAlphabets();






function printReverseAlphabets() {
    const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const reversedAlphabets = alphabets.split("").reverse().join("");
    console.log("Alphabets in reverse order:", reversedAlphabets);
}

// Run the program
printReverseAlphabets();












