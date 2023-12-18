import React from 'react'

export default function Task({ title, description, deleteTask, index }) {
    return (
        <div className='task'>
            <div>
                <p>{title}</p>
                <span>{description}</span>
            </div>
            <button onClick={() => deleteTask(index)}>-</button>
        </div>
    )
}
