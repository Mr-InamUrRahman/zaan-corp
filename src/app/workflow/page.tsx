"use client"
import Content from "../components/Main/Content/Content";
import ContentHeader from "../components/Main/ContentHeader/ContentHeader";
import BoardData from '../components/Layout/Data/BoardData'
import Style from './workflow.module.css'
import React from "react";

const WorkFlow =()=> {
  const positionRef = React.useRef(0);
  const handleScroll = (e:any) => {
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
        {BoardData.map((val, I) => {
            return(
              <Content 
                key={I}
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
