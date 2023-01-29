"use client"
import React from 'react' 
import Content from '../components/Main/Content/Content'
import ContentHeader from '../components/Main/ContentHeader/ContentHeader'
import BoardData from '../components/Layout/Data/BoardData'
import Style from './workflow.module.css'

const WorkFlow =()=> {
  const positionRef = React.useRef(0);
  const handleScroll = (e) => {
      const x = e.currentTarget.scrollLeft;
      if (x !== positionRef.current) {
          positionRef.current = x;
          console.log('Horizontal scroll event occurred ...');
      }
  };
  return (
    
    <div>
      <ContentHeader title="Workflow"/>
      <div className={`${Style.workFlow} workFlow custom-scroll flex gap-1`} onScroll={handleScroll}>
        {BoardData.map((val) => {
            return(
              <Content 
                key={val.id}
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
