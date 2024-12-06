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
        {taskList.length>0 ? <p>Tem tarefas cadastradas</p> : <p>Não há tarefas cadastradas</p> }
    </>
  )
}

export default Tasklist