import React from 'react'
import { Alert, Panel } from 'react-bootstrap'

export default (props) => {
  debugger;
  return (
    <div>
      <Panel bsStyle="info" header={props.user}>
        {props.message} 
      </Panel>
    </div>
  )
}