import React, { Component } from 'react';
import Task from './Task.js';
import ReactDOM from 'react-dom';
import { withTracker } from 'meteor/react-meteor-data';	// this is to use data persistency
import { Tasks } from '../api/tasks.js';				// this is to use data persistency
import AccountsUIWrapper from './AccountsUIWrapper.js';	// accounts
import { Meteor } from 'meteor/meteor';
 
// App component - represents the whole app
class App extends Component {
	
	// constructor to initiate stuff
    constructor(props) {
      super(props);
      this.state = {
        hideCompleted: false,
      };
    }
	
	handleSubmit(event) {
      event.preventDefault();

      // Find the text field via the React ref
      const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

	  Meteor.call('tasks.insert', text);

      // Clear form
      ReactDOM.findDOMNode(this.refs.textInput).value = '';
    }
	
    toggleHideCompleted() {
      this.setState({
        hideCompleted: !this.state.hideCompleted,
      });
    }


  renderTasks() {
      let filteredTasks = this.props.tasks;
	  
	  // filters out completed tasks
      if (this.state.hideCompleted) {
        filteredTasks = filteredTasks.filter(task => !task.checked);
      }
	  
      return filteredTasks.map((task) => {
        const currentUserId = this.props.currentUser && this.props.currentUser._id;
        const showPrivateButton = task.owner === currentUserId;

        return (
          <Task
            key={task._id}
            task={task}
            showPrivateButton={showPrivateButton}
          />
        );
      });
	 
  }

  render() {
    return (
      <div className="container">
        <header>
          <h1>Todo List ({this.props.incompleteCount})</h1>
		
    <label className="hide-completed">
      <input
        type="checkbox"
        readOnly
        checked={this.state.hideCompleted}
        onClick={this.toggleHideCompleted.bind(this)}
      />
      
	  Hide Completed Tasks
    	
	</label>
		
		
		<AccountsUIWrapper />
		
        { this.props.currentUser ?
          <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
            <input
              type="text"
              ref="textInput"
              placeholder="Type to add new tasks, and then press enter to add..."
            />
          </form> : ''
        }
		
        </header>

        <ul>
          {this.renderTasks()}
        </ul>
      </div>
    );
  }
}

export default withTracker(() => {
	Meteor.subscribe('tasks');
	
  return {
	tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch(),
	incompleteCount: Tasks.find({ checked: { $ne: true } }).count(),
	currentUser: Meteor.user(),	// get information about the currently logged in user
    //tasks: Tasks.find({}).fetch(),
  };
})(App);
