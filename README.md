### Interview questions

Uses the shell and the jq library to generate readme files based on JSON data for the purposes of cataloging and
studying interview questions.

Requires python and prettier to be installed globally and the jq executable (included).

Format the json file with `node format_code_blocks.js`

Then run the readme generation script `./generate-readme.sh`

Or run `npm run s` to recompile by calling both scripts.

You can view formatted readme files in the topics/ directory. The only topic covered for now is React.
