import React from 'react'
import {useState,createContext} from 'react'

//  storing all the thinks of createContext
 export const AllContexts = createContext();


const StudentsConntext =(props)=> {
    // call all the states from here
    const [studentsName, setStudentsName] = useState("");
    const [students, setStudents] = useState([]);
    const [editAble,setEditable]=useState(false);
    const [editableName,setEditableName]=useState(null);
    // passing all the state and its value as a objet
    const allStatevalue={
        students,
        studentsName,
        setStudents,
        setStudentsName,
        editAble,
        setEditable,
        editableName,
        setEditableName
    }

  return (
    <div>
       <AllContexts.Provider value={allStatevalue}>
           {props.children}
       </AllContexts.Provider>
    </div>
  )
}

export default StudentsConntext