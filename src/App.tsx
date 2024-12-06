import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import styles from './App.module.css';
import TaskForm from './components/Taskform';
import Tasklist from './components/Tasklist';



function App() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <div>
          <h2>O que você vai fazer hoje?</h2>
          <TaskForm btnText='Criar tarefa'/>
        </div>
        <div>
          <h2>Suas tarefas:</h2>
          <Tasklist />
          
        </div>        
      </main>
      <Footer /> 
    </div>
  );
}

export default App;
