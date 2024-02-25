### Interview questions
Created by Steven 2/24/24
Repository for information regarding common technical interview questions.
Generates complex readme files based on JSON data.
Also serves up the JSON data in an Android app using React Native.

You can view formatted readme files in the topics/ directory. The only topic covered for now is React.

#### Prerequisites
- Python global installation
- Prettier global installation
- JQ executable (included).

#### Generating the JSON
`node format_code_blocks.js`

#### Regenerating Readme Files
`./generate-readme.sh`
Alternatively, you can run `npm run s` which will invoke both the JSON and Readme generation scripts.

#### Run locally

`cd InterviewQuestions && npx react-native run-android`

#### Clean and rebuild

- `cd android`
- `./gradlew clean`
- `cd ..`
- `npx react-native run-android`
