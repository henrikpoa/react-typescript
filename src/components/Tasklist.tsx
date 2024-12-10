import React from 'react'
import { ITask } from '../interfaces/Task'
import styles from './Tasklist.module.css'
import { notEqual } from 'assert'

type Props = {
    taskList: ITask[]
}

const Tasklist = ({taskList}: Props) => {
  return (
    <>
        {taskList.length>0 ? 
            taskList.map((task) =>
            <div key={task.id} className={styles.task}>
                <h4>{task.title}</h4>
                <p>Dificuldade: {task.difficulty}</p>
                <div>
                    <i className='bi bi-pencil'></i>
                    <i className='bi bi-trash'></i>
                </div>
            </div>
        ) : <p>Não há tarefas cadastradas</p> }
    </>
  )
}

export default Tasklist