import { Select } from "antd";
import { courses } from "../Courses/ListCourse/listCourses";

function ListLessons() {
         
    return(
        <div>
            
                {courses.map(course => <Select.Option key={course.id} value={course.nameCourse}>{course.nameCourse}</Select.Option>)}
            
            {<Table columns={columns} dataSource={data} onChange={onChange} />}
        </div>
        
    )
}