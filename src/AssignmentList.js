import React from 'react'
import Assignment from "./Assignment"

export default function AssignmentList(props) {
    const {
        assignments,
        onChange
    } = props;

    const newList = [...assignments];
    newList.reverse();
  return (
    newList.map(assignment => {
        return <Assignment key={assignment.id} id={assignment.id} onChange={onChange}/>
    })
  )
}
