import Header from './Header';
import Content from './Content';

const Course = ({ course }) => {
  return (
    <>
      <Header text={course.name} size={2} />
      <Content parts={course.parts} />
    </>
  );
};

export default Course;