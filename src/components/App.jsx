import React from 'react';
import Statistics from './Statistics/statistics'
import FeedbackOptions from './FeedbackOptions/FeedbackOptions'
import Section from './Section/section'
import Notification from './Notification/notification'


export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onIncrement = (item) => {
    this.setState(prevState => {
      return {
     [item]: prevState[item] + 1 
      };
    });
  };

  // neutralIncrement = () => {
  //   this.setState(prevState => {
  //     return {
  //       neutral: prevState.neutral + 1,
  //     };
  //   });
  // };

  counterTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    return ((this.state.good * 100) / this.counterTotalFeedback()).toFixed(0);
  };
  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
  
    return (
      <>
     <Section
        title="Please leave feedback"
        children={
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onIncrement} />
          } />
        {this.counterTotalFeedback() > 0 ? (<Section
        title="Statistics"
        children={
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.counterTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()} />}
        />) : <Notification message="There is no feedback"></Notification>}
        
        </>
    );
  }
}
