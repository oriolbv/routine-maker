import React from 'react'
import PropTypes from 'prop-types'
import Routine from './Routine'

export default function RoutinesList (props) {
    return (
      <div style={{marginTop: '24px'}}>
        {props.routines.map((item, i) => {
            return <Routine routine={item} key={i}/>
          })
        }
      </div>
    )
}
RoutinesList.propTypes = {
  routines: PropTypes.array.isRequired
}
