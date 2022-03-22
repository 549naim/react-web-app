import React from 'react';

import  Form from './Form'
import Studentportal from './Studentportal'

function Mainpage() {
    //  all useState
   
    
    return (
        <div className="mainpage">
            <div>
                <Form
                // studentsName={studentsName}
                // setStudentsName={setStudentsName}
                // editAble={editAble}
                // setEditable={setEditable}
                // students={students}
                // setStudents={setStudents}
                // editableName={editableName}
                // setEditableName={setEditableName}


                />
            </div>
            <div >
            <Studentportal
            //  students={students}
            //  setStudents={setStudents}
            //  setEditable={setEditable}
            //  setEditableName={setEditableName}

            />
                
            </div>
           


        </div>
    )



}

export default Mainpage;
