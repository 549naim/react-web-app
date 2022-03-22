import React from 'react'
import {useContext} from 'react'
import {AllContexts} from '../contexts/StudentsConntext'

function PresentHandler(props) {
  const allStatevalue=useContext(AllContexts)
  
  return (
    <div>
        <h3>Present</h3>
                    <div>
                        {allStatevalue.students.filter(item => item.isPresent===true).map((student)=>(
                            <div className="finalshow">
                                <span>{student.name}</span><br/>
                                <button className="togglebtn1" onClick={()=>props.toggleHandler(student.id)}>Absent</button>
                            </div>
                        ))}
                    </div>
    </div>
  )
}

export default PresentHandler