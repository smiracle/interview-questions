import json
import subprocess
import sys
import os

script_dir = os.path.dirname(os.path.realpath(__file__))
prettier_path = os.path.join(script_dir, 'node_modules', '.bin', 'prettier')

# On Windows, the Prettier executable is named 'prettier.cmd'
if os.name == 'nt':
    prettier_path += '.cmd'

def format_with_prettier(code_str, parser='babel'):
    try:
        result = subprocess.run([prettier_path, '--parser', parser, '--print-width', '80'], input=code_str, capture_output=True, text=True, shell=True)
        if result.returncode == 0:
            return result.stdout
        else:
            print("Error formatting code:", result.stderr)
            return code_str
    except Exception as e:
        print("Exception during formatting:", e)
        return code_str

def format_json_content(json_str):
    try:
        parsed_json = json.loads(json_str)
        return json.dumps(parsed_json, indent=2)
    except json.JSONDecodeError as e:
        print("Error decoding JSON:", e)
        return json_str

def preprocess_json_data(file_path, topic):
    with open(file_path, 'r') as file:
        data = json.load(file)

    for question in data['questions']:
        for content in question['content']:
            if content['type'] == 'code':
                content['value'] = format_with_prettier(content['value'])
            elif content['type'] == 'json':
                content['value'] = format_json_content(content['value'])

    # Dynamically create the output file name based on the topic
    output_file_path = f'InterviewQuestions/data/{topic}_formatted.json'
    with open(output_file_path, 'w') as file:
        json.dump(data, file, indent=4)

if __name__ == "__main__":
    # Take topic from command line argument
    topic = sys.argv[1]  # Assuming the topic is passed as the first argument
    file_path = f'InterviewQuestions/data/{topic}.json'
    preprocess_json_data(file_path, topic)  # Pass topic to the function
