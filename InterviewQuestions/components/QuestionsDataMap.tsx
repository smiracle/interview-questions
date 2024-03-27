import {Question} from './Question';
import awsQuestions from '../data/aws_formatted.json';
import reactQuestions from '../data/react_formatted.json';
import systemsDesignQuestions from '../data/systems_design_formatted.json';
import cssQuestions from '../data/css_formatted.json';
import dataStructuresAndAlgorithmsQuestions from '../data/data_structures_and_algorithms_formatted.json';
import dockerQuestions from '../data/docker_formatted.json';
import dotnetQuestions from '../data/dotnet_formatted.json';
import htmlQuestions from '../data/html_formatted.json';
import javaQuestions from '../data/java_formatted.json';
import javascriptQuestions from '../data/javascript_formatted.json';
import machineLearningQuestions from '../data/machine_learning_formatted.json';
import nodejsQuestions from '../data/nodejs_formatted.json';
import nosqlQuestions from '../data/nosql_formatted.json';
import postgresqlQuestions from '../data/postgresql_formatted.json';
import pythonQuestions from '../data/python_formatted.json';
import restQuestions from '../data/rest_formatted.json';
import rustQuestions from '../data/rust_formatted.json';
import securityQuestions from '../data/security_formatted.json';
import shellQuestions from '../data/shell_formatted.json';
import soapQuestions from '../data/soap_formatted.json';
import sqlQuestions from '../data/sql_formatted.json';
import techStacksAndToolsQuestions from '../data/tech_stacks_and_tools.json';
import typescriptQuestions from '../data/typescript_formatted.json';

export type TopicFileName =
  | 'aws_formatted'
  | 'css_formatted'
  | 'data_structures_and_algorithms_formatted'
  | 'docker_formatted'
  | 'dotnet_formatted'
  | 'html_formatted'
  | 'java_formatted'
  | 'javascript_formatted'
  | 'machine_learning_formatted'
  | 'nodejs_formatted'
  | 'nosql_formatted'
  | 'postgresql_formatted'
  | 'python_formatted'
  | 'react_formatted'
  | 'rest_formatted'
  | 'rust_formatted'
  | 'security_formatted'
  | 'shell_formatted'
  | 'soap_formatted'
  | 'sql_formatted'
  | 'systems_design_formatted'
  | 'tech_stacks_and_tools_formatted'
  | 'typescript_formatted';

export const topics = [
  {name: 'AWS', fileName: 'aws_formatted'},
  {name: 'CSS', fileName: 'css_formatted'},
  {
    name: 'Data Structures and Algorithms',
    fileName: 'data_structures_and_algorithms_formatted',
  },
  {name: 'Docker', fileName: 'docker_formatted'},
  {name: '.NET', fileName: 'dotnet_formatted'},
  {name: 'HTML', fileName: 'html_formatted'},
  {name: 'Java', fileName: 'java_formatted'},
  {name: 'JavaScript', fileName: 'javascript_formatted'},
  {name: 'Machine Learning', fileName: 'machine_learning_formatted'},
  {name: 'Node.js', fileName: 'nodejs_formatted'},
  {name: 'NoSQL', fileName: 'nosql_formatted'},
  {name: 'PostgreSQL', fileName: 'postgresql_formatted'},
  {name: 'Python', fileName: 'python_formatted'},
  {name: 'React', fileName: 'react_formatted'},
  {name: 'REST', fileName: 'rest_formatted'},
  {name: 'Rust', fileName: 'rust_formatted'},
  {name: 'Security', fileName: 'security_formatted'},
  {name: 'Shell Scripting', fileName: 'shell_formatted'},
  {name: 'SOAP', fileName: 'soap_formatted'},
  {name: 'SQL', fileName: 'sql_formatted'},
  {name: 'Systems Design', fileName: 'systems_design_formatted'},
  {name: 'TechStacksAndTools', fileName: 'tech_stacks_and_tools_formatted'},
  {name: 'TypeScript', fileName: 'typescript_formatted'},
];

const validatedAWSQuestions: {questions: Question[]} = awsQuestions as {
  questions: Question[];
};

const validatedCSSQuestions: {questions: Question[]} = cssQuestions as {
  questions: Question[];
};
const validatedDataStructuresAndAlgorithmsQuestions: {questions: Question[]} =
  dataStructuresAndAlgorithmsQuestions as {
    questions: Question[];
  };

const validatedReactQuestions: {questions: Question[]} = reactQuestions as {
  questions: Question[];
};

const validatedDockerQuestions: {questions: Question[]} = dockerQuestions as {
  questions: Question[];
};
const validatedDotnetQuestions: {questions: Question[]} = dotnetQuestions as {
  questions: Question[];
};
const validatedHTMLQuestions: {questions: Question[]} = htmlQuestions as {
  questions: Question[];
};
const validatedJavaQuestions: {questions: Question[]} = javaQuestions as {
  questions: Question[];
};
const validatedJavascriptQuestions: {questions: Question[]} =
  javascriptQuestions as {questions: Question[]};
const validatedMachineLearningQuestions: {questions: Question[]} =
  machineLearningQuestions as {questions: Question[]};
const validatedNodejsQuestions: {questions: Question[]} = nodejsQuestions as {
  questions: Question[];
};
const validatedNosqlQuestions: {questions: Question[]} = nosqlQuestions as {
  questions: Question[];
};
const validatedPostgresqlQuestions: {questions: Question[]} =
  postgresqlQuestions as {questions: Question[]};
const validatedPythonQuestions: {questions: Question[]} = pythonQuestions as {
  questions: Question[];
};
const validatedRestQuestions: {questions: Question[]} = restQuestions as {
  questions: Question[];
};
const validatedRustQuestions: {questions: Question[]} = rustQuestions as {
  questions: Question[];
};
const validatedSecurityQuestions: {questions: Question[]} =
  securityQuestions as {questions: Question[]};
const validatedShellQuestions: {questions: Question[]} = shellQuestions as {
  questions: Question[];
};
const validatedSoapQuestions: {questions: Question[]} = soapQuestions as {
  questions: Question[];
};
const validatedSQLQuestions: {questions: Question[]} = sqlQuestions as {
  questions: Question[];
};
const validatedSystemsDesignQuestions: {questions: Question[]} =
  systemsDesignQuestions as {questions: Question[]};

const validatedTechStacksAndToolsQuestions: {questions: Question[]} =
  techStacksAndToolsQuestions as {
    questions: Question[];
  };
const validatedTypeScriptQuestions: {questions: Question[]} =
  typescriptQuestions as {
    questions: Question[];
  };

export const topicToDataMap: Record<TopicFileName, {questions: Question[]}> = {
  aws_formatted: validatedAWSQuestions,
  css_formatted: validatedCSSQuestions,
  data_structures_and_algorithms_formatted:
    validatedDataStructuresAndAlgorithmsQuestions,
  docker_formatted: validatedDockerQuestions,
  dotnet_formatted: validatedDotnetQuestions,
  html_formatted: validatedHTMLQuestions,
  java_formatted: validatedJavaQuestions,
  javascript_formatted: validatedJavascriptQuestions,
  machine_learning_formatted: validatedMachineLearningQuestions,
  nodejs_formatted: validatedNodejsQuestions,
  nosql_formatted: validatedNosqlQuestions,
  postgresql_formatted: validatedPostgresqlQuestions,
  python_formatted: validatedPythonQuestions,
  react_formatted: validatedReactQuestions,
  rest_formatted: validatedRestQuestions,
  rust_formatted: validatedRustQuestions,
  security_formatted: validatedSecurityQuestions,
  shell_formatted: validatedShellQuestions,
  soap_formatted: validatedSoapQuestions,
  sql_formatted: validatedSQLQuestions,
  systems_design_formatted: validatedSystemsDesignQuestions,
  tech_stacks_and_tools_formatted: validatedTechStacksAndToolsQuestions,
  typescript_formatted: validatedTypeScriptQuestions,
};
