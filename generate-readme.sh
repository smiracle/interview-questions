#!/bin/bash

# Define the JSON file for the React category
JSON_FILE="/c/Repos/interview-questions/data/react.json"

# Define the absolute path to jq
JQ_PATH="/c/Users/stvnm/jq/jq-windows-i386.exe"

# Check if jq and JSON file exist
if [ ! -f "$JSON_FILE" ]; then
    echo "JSON file not found: $JSON_FILE"
    exit 1
fi

if [ ! -f "$JQ_PATH" ]; then
    echo "jq not found at: $JQ_PATH"
    exit 1
fi

# Define the output file path
OUTPUT_FILE="topics/react_readme.md"

# Initialize README content
README_CONTENT="# React Topics\n\n## Table of Contents\n"

# Generate the table of contents
TOC=$($JQ_PATH -r '.questions[] | "- [" + .header + "](#" + (.header | ascii_downcase | gsub(" "; "-")) + ")"' "$JSON_FILE")
README_CONTENT+="$TOC\n\n"

# Generate detailed questions and answers including bullet points
DETAILS=$($JQ_PATH -r '.questions[] | "\n### \(.header)\n" + (.content | map(if .type == "text" then .value elif .type == "code" then "```javascript\n\(.value)\n```" elif .type == "link" then "[\(.displayText)](\(.value))" elif .type == "bullets" then (.values[] | " - \(.)") else empty end) | join("\n\n")) + "\n\n[↑ Back to top](#table-of-contents)"' "$JSON_FILE")

# Append the detailed questions and answers to README content
README_CONTENT+="$DETAILS"

# Write the complete content to the output file
echo -e "$README_CONTENT" > "$OUTPUT_FILE"

echo "$OUTPUT_FILE generated successfully."
