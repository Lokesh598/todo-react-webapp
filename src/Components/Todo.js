import React, { Component } from 'react';

export default class Todo extends Component {
    constructor() {
        super();
        this.state = {
            tasks: [{task:'solve leetcode questions', id:1}, {task:'revise dsa',id:2}],
            currTasks: ''
        }
    }
  render() {
    return <div>
        <ul>
        <input type='text'/>
        <button>submit</button>
        {
            this.state.tasks.map((taskObj)=>(
                <div key={taskObj.id}>
                    <li>
                        <p>{taskObj.task}</p>
                        <button>delete</button>
                    </li>
                </div>
            ))
    
        }
        </ul>
    </div>
  }
}

