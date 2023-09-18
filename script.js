// Function to count the number of vowels in a name
function countVowels(name) {
    // Convert the name to lowercase to handle both uppercase and lowercase vowels
    const lowercaseName = name.toLowerCase();

    // Initialize a variable to keep track of the vowel count
    let vowelCount = 0;

    // Define an array of vowels
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    // Iterate through each character in the name
    for (let i = 0; i < lowercaseName.length; i++) {
        const char = lowercaseName[i];

        // Check if the character is a vowel
        if (vowels.includes(char)) {
            vowelCount++;
        }
    }

    return vowelCount;
}

// Example usage
const userName = "John Doe"; // Replace with the user's input

const numberOfVowels = countVowels(userName);

console.log(`Number of vowels in the name: ${numberOfVowels}`);
