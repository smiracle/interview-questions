const fs = require("fs");
const prettier = require("prettier");

async function formatCodeBlocks(topic) {
  try {
    const dataPath = `./InterviewQuestions/data/${topic}.json`;
    const formattedDataPath = `./InterviewQuestions/data/${topic}_formatted.json`;

    let data = JSON.parse(fs.readFileSync(dataPath, "utf8"));

    data.questions.forEach((question) => {
      question.content.forEach(async (content) => {
        if (content.type === "code" && typeof content.value === "string") {
          try {
            content.value = await prettier.format(content.value, { parser: "babel" });
          } catch (error) {
            console.error("Error formatting code block:", error.message);
          }
        }
      });
    });

    fs.writeFileSync(formattedDataPath, JSON.stringify(data, null, 2));
    console.log("Code blocks formatted and saved to", formattedDataPath);
  } catch (error) {
    console.error("Error during code formatting:", error.message);
  }
}

const topic = process.argv[2];
if (topic) {
  formatCodeBlocks(topic);
} else {
  console.log("Please specify a topic as the first argument.");
}
