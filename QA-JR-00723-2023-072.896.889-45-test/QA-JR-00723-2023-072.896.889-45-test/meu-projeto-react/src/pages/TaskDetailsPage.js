import React from 'react';
import Header from '../components/Header'
import TaskDetails from '../components/TaskDetails'
import FooterLinks from '../components/Footer';

const TaskDetailsPage = () => {
  return (
    <div>
      <Header/>
      <TaskDetails/>
      <FooterLinks/>
    </div>
  );
}

export default TaskDetailsPage;
