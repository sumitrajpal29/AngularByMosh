export class CoursesService {
    private courses = ["B.Tech", "M.Tech", "Phd"];

    getCourses() {
        return this.courses;
    }
}