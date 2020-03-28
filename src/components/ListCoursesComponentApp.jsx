import React, { Component } from 'react';
import CourseDataService from '../service/CourseDataService';
class ListCoursesComponentApp extends Component {
    state = {
        courses: []
      }
    constructor(props) {
        super(props)
        this.refreshCourses = this.refreshCourses.bind(this)
    }
    componentDidMount() {
        this.refreshCourses();
    }
    refreshCourses() {
        CourseDataService.retrieveAllCourses('svcs')//HARDCODED
            .then(
                
                response => {
                    console.log(response);
                    this.state.course=response;
                }
            )
    }
    render() {
        return (
            <div className="container">
                <h3>All Courses</h3>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                                this.state.courses.map(
                                    course =>
                                        <tr key={course.id}>
                                            <td>{course.id}</td>
                                            <td>{course.description}</td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default ListCoursesComponentApp