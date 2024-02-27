### Interview questions

Created by Steven 2/24/24. This repository provides common technical interview questions and their associated answers.
Scripts here will generate readme files based on JSON data. Code blocks in the readme files are formatted and inserted
into the readme using Prettier. A built-in android app also serves this data using React Native in an easy to digest
format.

You can view formatted readme files in the topics/ directory.

#### Prerequisites

- Python global installation.
- Prettier global installation. You'll have to define the path to your prettier executable in the
  [preprocess json data](preprocess_json_data.py) file.
- JQ executable (included).

#### Generating the formatted JSON

`node format_code_blocks.js`

#### Regenerating Readme Files based on the JSON

`./generate-readme.sh` Alternatively, you can run `npm run s` which will invoke both the JSON and Readme generation
scripts.

### New commands:

`node format_code_blocks.js systems_design`

`./generate-readme.sh systems_design`

(Optional) For preprocess_json_data.py (called inside generate-readme.sh, but can be called directly for testing):

`python preprocess_json_data.py systems_design`

#### Run the Android app locally

Android app commands must be executed inside of the InterviewQuestions directory that's inside of the repository's root
directory.

- `cd InterviewQuestions`
- `npx react-native run-android`

#### Clean and rebuild the Android app

- `cd android`
- `./gradlew clean`
- `cd ..`
- `npx react-native run-android`
