import axios from 'axios'
const INSTRUCTOR = 'svcs'
const COURSE_API_URL = 'http://localhost:8090'
const INSTRUCTOR_API_URL = `${COURSE_API_URL}/instructors/${INSTRUCTOR}`
class CourseDataService {
    retrieveAllCourses(name) {
        console.log("Inside retrieve all courses");
        return axios.get(`${INSTRUCTOR_API_URL}/courses`);
    }
}
export default new CourseDataService()