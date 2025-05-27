import TaskCard from "./TaskCard"

function TaskTracker() {

    const alltasks = [
        {id: 1 , title: "First Task", completed: true},
        {id: 2 , title: "Second Task", completed: false},
        {id: 3 , title: "Third Task", completed: true},
        {id: 4 , title: "Third Task", completed: true}
    ];

    const tasks = alltasks.map(task =>
        <TaskCard task={task}/>
    )

    return (
        <div>
            <h1>Interactive Task Manager</h1>
            <button>Add Random Task</button>
            <button>Clear Completed (Available)</button>
            {tasks}
        </div>
    )
}

export default TaskTracker
