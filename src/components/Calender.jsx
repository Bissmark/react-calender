import { useState } from 'react';
import './Calender.css';

const Calender = ({ days, dates }) => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedDates, setSelectedDates] = useState([]);

    const _selectButton = (category) => {
        setSelectedCategory(category);
    }

    const _selectDate = (date, event) => {
        if (selectedCategory === 'Holiday') {
            event.currentTarget.style.backgroundColor = 'yellow';
        } else if (selectedCategory === 'Work') {
            event.currentTarget.style.backgroundColor = 'blue';
        } else if (selectedCategory === 'Errands') {
            event.currentTarget.style.backgroundColor = 'green';
        } else if (selectedCategory === 'Sick') {
            event.currentTarget.style.backgroundColor = 'red';
        }

        setSelectedDates([...selectedDates, date]);
    }

    return (
        <div className='container'>
            <div className='buttons-container'>
                <button style={{ backgroundColor: 'yellow' }} className={`button ${selectedCategory === 'Holiday' ? 'selected' : ''}`} onClick={() => _selectButton('Holiday')}>Holiday</button>
                <button style={{ backgroundColor: 'blue' }} className={`button ${selectedCategory === 'Work' ? 'selected' : ''}`} onClick={() => _selectButton('Work')}>Work</button>
                <button style={{ backgroundColor: 'green' }} className={`button ${selectedCategory === 'Errands' ? 'selected' : ''}`} onClick={() => _selectButton('Errands')}>Errands</button>
                <button style={{ backgroundColor: 'red' }} className={`button ${selectedCategory === 'Sick' ? 'selected' : ''}`} onClick={() => _selectButton('Sick')}>Sick</button>
            </div>
            <div className='calender'>
                {dates.map((date, index) => (
                    <div key={index} className={`day ${selectedDates.includes(date) ? 'selected' : ''}`} onClick={(event) => _selectDate(date, event)}>
                        <span style={{ marginBottom: '10px' }}>{days[index % 7].name}</span>
                        <span>{date}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Calender;
