import React, { Component } from 'react';

export default class Todo extends Component {
    constructor() {
        super();
        this.state = {
            tasks: [{task:'solve leetcode questions', id:1}, {task:'revise dsa',id:2}],
            currTasks: ''
        }
    }
    handleChange = (e)=>{
        // console.log(e.target.value)
        this.setState({
            currTasks:e.target.value
        })
    }
    handleSubmit = ()=>{
        this.setState({
            tasks:[...this.state.tasks,{task:this.state.currTasks},{id:this.state.id}],
            currTasks:''
        })
    }
    deleteHandle = (id) =>{
        let narr = this.state.tasks.filter((taskObj)=>{
            return taskObj.id!=id;
        })
        this.setState({
            tasks:[...narr]
        })
    }
  render() {
    return <div>
        <input type='text' value={this.state.currTasks} onChange={this.handleChange}/>
        <button onClick={this.handleSubmit}>submit</button>
        <ul>
        {
            this.state.tasks.map((taskObj)=>(
                <li key={taskObj.id}>
                        <p>{taskObj.task}</p>
                        <button onClick={()=>this.deleteHandle(taskObj.id)}>delete</button>
                </li>
            ))
    
        }
        </ul>
    </div>
  }
}

