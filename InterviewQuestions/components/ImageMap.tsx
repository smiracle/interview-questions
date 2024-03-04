type ImageMapType = {[key: string]: ReturnType<typeof require>};

export const imageMap: ImageMapType = {
  '../InterviewQuestions/images/react/state.jpg': require('../images/react/state.jpg'),
  '../InterviewQuestions/images/react/vdom1.png': require('../images/react/vdom1.png'),
  '../InterviewQuestions/images/react/vdom2.png': require('../images/react/vdom2.png'),
  '../InterviewQuestions/images/react/vdom3.png': require('../images/react/vdom3.png'),
  '../InterviewQuestions/images/systems_design/cap.png': require('../images/systems_design/cap.png'),
};