const Header = (props) => {
    return (
        <h1>{props.course}</h1>
    );
}

const Part = (props) => {
    return (
        <p>
            {props.name} {props.exercises}
        </p>
    );
}

const Content = (props) => {
    return (
        <div>
            <Part name={props.parts[0]} exercises={props.exercises[0]} />
            <Part name={props.parts[1]} exercises={props.exercises[1]} />
            <Part name={props.parts[2]} exercises={props.exercises[2]} />
        </div>
    );
}

const Total = (props) => {
    return (
        <p>
            Number of exercises {props.exercises}
        </p>        
    );
}

const App = () => {
    const course = 'Half Stack application development';
    const part1 = 'Fundamentals of React';
    const exercises1 = 10;
    const part2 = 'Using props to pass data';
    const exercises2 = 7;
    const part3 = 'State of a component';
    const exercises3 = 14;
    console.log('oi')
    return (
        <div>
            <Header course={course} />
            <Content parts={[part1, part2, part3]} exercises={[exercises1, exercises2, exercises3]} />
            {/* <Content part={part1} exercises={exercises1} />
            <Content part={part2} exercises={exercises2} />
            <Content part={part3} exercises={exercises3} /> */}
            <Total exercises={exercises1 + exercises2 + exercises3} />
        </div>
    );
}

export default App;