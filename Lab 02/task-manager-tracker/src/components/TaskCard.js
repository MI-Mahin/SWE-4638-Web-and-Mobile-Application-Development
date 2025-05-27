function TaskCard({task}){
    return (
        <div>
            Title: {task.title}
            <p>{task.completed ? "Done" : "Pending"}</p>
            <button>Remove</button>
        </div>
    )
}

export default TaskCard