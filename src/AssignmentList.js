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
    newList.map(id => {
        return <Assignment key={id} id={id} onChange={onChange}/>
    })
  )
}
