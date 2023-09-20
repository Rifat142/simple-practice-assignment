
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useState } from 'react';
import Course from './course/course';

const Courses = () => {
    const [courses , setCourses ] = useState([]);
    // console.log(courses);
    

    useEffect(()=>{
        fetch('info.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    }  ,[]);

    return (
        <div>
            <br />
            

            <div className=' container grid  grid-cols-3 w-2/3 h-1/4 gap-4 '>
            {
                    courses.map((course ,Idx) =><Course key={Idx} course= {course}> </Course> )

                }


            </div>
             
                    {/* w-2/3 h-1/4 gap-4  */}
            
        </div>

        
    );
};

Courses.propTypes = {
    courses:PropTypes.array 
};

export default Courses;