import React, {useState} from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isValidValue, setIsValidValue] = useState(true);

    const goalInputChangeHandler = event => {
        if (event.target.value.trim().length > 0) {
            setIsValidValue(true)
        }
        setEnteredValue(event.target.value);
    };

    const formSubmitHandler = event => {
        event.preventDefault();
        if (enteredValue.trim().length === 0) {
            setIsValidValue(false);
            return;
        }
        setIsValidValue(true);
        props.onAddGoal(enteredValue);
    };

    return (
        <form onSubmit={formSubmitHandler}>
            <div className={`form-control ${!isValidValue ? 'invalid' : ''}`}>
                <label>Course Goal</label>
                <input type="text" onChange={goalInputChangeHandler}/>
            </div>
            <Button type="submit">Add Goal</Button>
        </form>
    );
};

export default CourseInput;
