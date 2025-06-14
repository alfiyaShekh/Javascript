// destructuring of objects 
const course={
    courseName:"js",
    price:0,
    course_teacher:"hitesh sir"
}

const {price}=course 
console.log(price); // course.price can be avoided and directly we can use price key

const {course_teacher:teacher}=course  // we can provide another name to key as well
console.log(teacher);


// https://api.github.com/users/hiteshchaudhary