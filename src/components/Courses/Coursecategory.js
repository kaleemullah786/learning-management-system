import React from 'react'
import { useEffect, useState } from "react";

const Coursecategory = () => {

    const [courses, setCourses] = useState();
    useEffect(() => {
        fetch(" http://localhost:3000/courses")
        .then((res) => res.json())
        .then(setCourses);
    }, []);
    console.log(courses)
    
    return (
      <div>
        <h1>Kimeumana</h1>
        <div>
          {courses &&
            courses.map((course) => (
              <div>
                <h2>{course.name}</h2>
              </div>
            ))}
        </div>
      </div>
    );
};

export default Coursecategory;