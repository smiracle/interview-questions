const fs = require("fs");
const prettier = require("prettier");

const dataPath = "./InterviewQuestions/data/react.json";
const formattedDataPath = "./InterviewQuestions/data/react_formatted.json";

// Read the JSON file
let data = JSON.parse(fs.readFileSync(dataPath, "utf8"));

// Format code blocks
data.questions.forEach((question) => {
  question.content.forEach((content) => {
    if (content.type === "code" && typeof content.value === "string") {
      try {
        // Format the code using Prettier
        content.value = prettier.format(content.value, { parser: "babel" });
      } catch (error) {
        console.error("Error formatting code block:", error.message);
        // Keep the original code block if there's an error
      }
    }
  });
});

// Write the formatted data back to a new JSON file
fs.writeFileSync(formattedDataPath, JSON.stringify(data, null, 2));

console.log("Code blocks formatted and saved to", formattedDataPath);
