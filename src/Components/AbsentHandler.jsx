import React from 'react'
import {useContext} from 'react'
import {AllContexts} from '../contexts/StudentsConntext'

function AbsentHandler(props) {
  const allStatevalue= useContext(AllContexts)
    
  return (
    <div>
        <h3>Absent</h3>
                    <div >
                        {allStatevalue.students.filter(item => item.isPresent===false).map((student)=>(
                            <div className="finalshow">
                                <span>{student.name}</span><br/>
                                <button className="togglebtn" onClick={()=>props.toggleHandler(student.id)}>Present</button>
                            </div>
                        ))}
                    </div>
    </div>
  )
}

export default AbsentHandler