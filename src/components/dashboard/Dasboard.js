import React from 'react';
import ProjectLIst from '../projects/ProjectLIst';
import Notification from './Notification';

export const Dasboard = () => {
  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m6">
          <ProjectLIst />
        </div>
        <div className="col s12 m5 offset-m1">
          <Notification />
        </div>
      </div>
    </div>
  )
}
