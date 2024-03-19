import {StyleSheet} from 'react-native';

export const sharedStyles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  button: {
    margin: 10,
    padding: 15,
    marginVertical: 8,
    backgroundColor: '#007bff',
    color: '#fff',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#00796B',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  questionListingItem: {
    padding: 15,
    marginVertical: 8,
    color: '#000000',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#00796B',
    alignItems: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 16,
  },
  header: {
    fontSize: 20,
    margin: 10,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subheader: {
    fontSize: 16,
    marginTop: 10,
    color: '#000',
    fontWeight: 'bold',
  },
  answerText: {
    fontSize: 20,
    color: '#000',
  },
  answerFeedback: {
    marginTop: 20,
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
  bullet: {marginBottom: 5, color: '#000000', fontSize: 16},
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
  image: {width: '100%', height: 200},
  quizQuestionContainer: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  feedbackTextCorrect: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color: 'green',
  },
  feedbackTextIncorrect: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color: 'red',
  },
});
