import json
import subprocess

# Define the path to the Prettier executable
prettier_path = r"C:\Users\stvnm\AppData\Roaming\npm\prettier.cmd"

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

def preprocess_json_data(file_path):
    with open(file_path, 'r') as file:
        data = json.load(file)

    for question in data['questions']:
        for content in question['content']:
            if content['type'] == 'code':
                content['value'] = format_with_prettier(content['value'])
            elif content['type'] == 'json':
                content['value'] = format_json_content(content['value'])

    with open('InterviewQuestions/data/react_formatted.json', 'w') as file:
        json.dump(data, file, indent=4)

preprocess_json_data('InterviewQuestions/data/react.json')
