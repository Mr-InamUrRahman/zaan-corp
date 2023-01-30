"use client"
import React from 'react' 
import Content from '../components/Main/Content/Content'
import ContentHeader from '../components/Main/ContentHeader/ContentHeader'
import BoardData from '../components/Layout/Data/BoardData'
import Style from './workflow.module.css'

const WorkFlow =()=> {
  return (
    
    <div>
      <ContentHeader title="Workflow"/>
      <div className={`${Style.workFlow} workFlow custom-scroll flex gap-1`}>
        {BoardData.map((val, i) => {
            return(
              <Content 
                key={i}
                Board={true}
                BoardTitle={val.BoardTitle} 
                TaskQTY={val.TaskQTY} 
                TaskData={val.TaskData}
              />
            )
          }
        )}
      </div>
      
    </div>
  )

}
export default WorkFlow
