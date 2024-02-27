#!/bin/bash

# Take a topic parameter
TOPIC=$1

# Convert the first letter of each word in the TOPIC to uppercase for the header
TOPIC_HEADER=$(echo $TOPIC | sed -r 's/(^|-)(\w)/\U\2/g')

# Define paths
JSON_FILE="InterviewQuestions/data/${TOPIC}.json"
FORMATTED_JSON_FILE="InterviewQuestions/data/${TOPIC}_formatted.json"
PYTHON_SCRIPT="./preprocess_json_data.py"
JQ_PATH="./jq-windows-i386.exe"
OUTPUT_FILE="topics/${TOPIC}_readme.md"

# Run the Python script to format the JSON file
python3 "$PYTHON_SCRIPT" || python "$PYTHON_SCRIPT"  # Fallback to 'python' if 'python3' isn't recognized

# Check if the formatted JSON file exists
if [ ! -f "$FORMATTED_JSON_FILE" ]; then
    echo "Formatted JSON file not found: $FORMATTED_JSON_FILE"
    exit 1
fi

README_CONTENT="# ${TOPIC_HEADER} Topics\n\n## Table of Contents\n"

# Generate the table of contents
while IFS= read -r line; do
    anchor=$(echo "$line" | tr '[:upper:]' '[:lower:]' | sed 's/ /-/g' | sed 's/[^a-z0-9-]//g')
    README_CONTENT+="- [$line](#$anchor)\n"
done < <(jq -r '.questions[].header' "$FORMATTED_JSON_FILE")

README_CONTENT+="\n"

# Generate detailed sections
while IFS= read -r line; do
    # Extract and sanitize header for section
    header=$(echo "$line" | jq -r '.header')
    sanitized_header=$(echo "$header" | tr '[:upper:]' '[:lower:]' | sed 's/ /-/g' | sed 's/[^a-z0-9-]//g')

    # Append header
    README_CONTENT+="### $header\n\n"

    # Append contents
    contents=$(echo "$line" | jq -r '.content[] |
        if .type == "text" or .type == "json" then .value
        elif .type == "code" then "```javascript\n" + .value + "\n```"
        elif .type == "link" then "[\(.displayText)](\(.value))"
        elif .type == "bullets" then .values[] | "- " + .
        elif .type == "image" then "![\(.alt)](\(.path))"
        else empty end')
    README_CONTENT+="$contents\n\n"

    # Append link
    README_CONTENT+="[↑ Back to top](#${TOPIC}-topics)\n\n"
done < <(jq -c '.questions[]' "$FORMATTED_JSON_FILE")

echo -e "$README_CONTENT" > "$OUTPUT_FILE"

echo "README generated successfully at $OUTPUT_FILE."
