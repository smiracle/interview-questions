import {StyleSheet} from 'react-native';

export const sharedStyles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#f0f0f0',
  },
  button: {
    padding: 15,
    marginVertical: 8,
    backgroundColor: '#009688',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#00796B',
    width: '80%',
    alignItems: 'center',
  },
  text: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  revealButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  revealButtonText: {
    color: '#ffffff',
    fontSize: 16,
  },
  questionHeader: {
    fontSize: 20,
    marginBottom: 20,
  },
  answerButton: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  answerText: {
    fontSize: 16,
  },
  answerFeedback: {
    marginTop: 20,
  },
  feedbackText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  nextButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
  nextButtonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 16,
  },
  bullet: {marginBottom: 5},
  code: {
    fontFamily: 'monospace',
    backgroundColor: '#2E2E2E',
    color: '#F8F8F8',
    padding: 5,
    borderRadius: 5,
    overflow: 'hidden',
    marginTop: 5,
    marginBottom: 5,
    fontSize: 12,
    lineHeight: 12,
  },
  image: {width: '100%', height: 200 /* Adjust as needed */},
});
