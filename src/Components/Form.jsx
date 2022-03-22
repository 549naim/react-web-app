import React from 'react'
import {useContext} from "react"
import {AllContexts} from '../contexts/StudentsConntext'

const Form= ()=> {
// usingStateobject value from context
const allStatevalue = useContext(AllContexts);


    // add student button function
    const addStudent = (event, name) => {
        event.preventDefault();
        if (name) {
            const newStudent = {
                id: Date.now(),
                name,
            }
            allStatevalue.setStudents([newStudent, ...allStatevalue.students]);
            allStatevalue.setStudentsName("")

        }
        else {
            alert("Please Enter a valid student name")
        }
    }

    // update the eiditable name with update handler

    const updateHandler=(event,name) => {
        event.preventDefault();
        if(!name){
           alert('Please enter a valid name')
        }
        else{
            allStatevalue.editableName.name = name || allStatevalue.editableName.name;
            allStatevalue.setStudentsName("");
            allStatevalue.setEditable(false);
            allStatevalue.setEditableName(null);
        }
    }
  return (
    <div>
        <form action="text-form">
                <input value={allStatevalue.studentsName} onChange={(e) => allStatevalue.setStudentsName(e.target.value)} type="text" name="student-name" placeholder="Enter Students Name"/>
                {/* <button onClick={(e) => addStudent(e, studentsName)}>Add Student</button> */}
                <button onClick={(e) => allStatevalue.editAble ? updateHandler(e, allStatevalue.studentsName) :addStudent(e, allStatevalue.studentsName)}>{allStatevalue.editAble? "Update":"Add Student"}</button>
            </form>
    </div>
  )
}

export default Form