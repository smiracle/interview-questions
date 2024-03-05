### Interview questions

Created by Steven 2/24/24. This repository provides common technical interview questions and their associated answers.
Scripts here will generate readme files based on JSON data. Code blocks in the readme files are formatted and inserted
into the readme using Prettier. A built-in android app also serves this data using React Native in an easy to digest
format.

For now data is only available for these topics: React, Systems Design, and Javascript.

You can view formatted readme files in the topics/ directory.

#### Prerequisites

- Python global installation.
- Prettier global installation. You'll have to define the path to your prettier executable in the
  [preprocess json data](preprocess_json_data.py) file.
- JQ executable (included).

#### Run the Android app locally in Android Studio emulator

Android app commands must be executed inside of the InterviewQuestions directory that's inside of the repository's root
directory.

- `cd InterviewQuestions`
- `npx react-native run-android`

#### Clear the cache

- `npx react-native start --reset-cache`

#### Clean and rebuild the Android app

These commands can sometimes help resolve issues with a bad build.

- `cd android`
- `./gradlew clean`
- `cd ..`
- `npx react-native run-android`

#### Workflow

To add new information for a topic:

1. Edit the corresponding base, non-formatted, json file in the data/ directory (react.json for example).
2. Run the corresponding command below to generate the formatted JSON using the base JSON.
3. Run the readme generation script. (Both this step and #2 can be run together using the scripts in package.json)
4. View the readme files in topics/ or reload the Android app at will.

#### Generate the formatted JSON

`node format_code_blocks.js [topic]`

- Ex: `node format_code_blocks.js systems_design`

#### Regenerate Readme Files based on the JSON

`./generate-readme.sh [topic]`

- Ex: `./generate-readme.sh systems_design`

### Both at the same time

Alternatively, you can run `npm run s [topic]` which will invoke both the JSON and Readme generation scripts.

-ex: `npm run systems_design`

- On Windows I've found that you need to run these commmands from Powershell and have the JQ directory set in your PATH
  environment variables. Check that JQ is correctly installed with `jq --version`.

#### (Optional) Invoke preprocess_json_data.py

This script is called inside generate-readme.sh, but can be called directly for testing:

`python preprocess_json_data.py systems_design`

## Building an APK for use on Android

Run keytool command to generate the signing key (only need to do this once, not for repeated releases):

```bash
keytool -genkeypair -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
```

Generate apk file for android devices: First, bundle the release version of the app:

```bash
cd android && ./gradlew bundleRelease
```

Next, build the APK with the following command:

```bash
./gradlew assembleRelease
```

The APK is generated at `android/app/build/outputs/apk/release/app-release.apk`
