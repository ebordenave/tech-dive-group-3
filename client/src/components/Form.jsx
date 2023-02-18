import React, { useReducer, useState } from 'react';

const formReducer = (state, event) => {
    return {
        ...state,
        [event.name]: event.value
    }
}

export default function Form() {
    const [formData, setFormData] = useReducer(formReducer, {});
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = event => {
        /*
        fetch('/some-api', { method: form.method, body: formData });
        */
        event.preventDefault();

        alert('You have submitted the form.');
        setSubmitting(true);

        setTimeout(() => {
            setSubmitting(false);
        }, 3000)
    }

    const handleChange = event => {
        setFormData({
            name: event.target.name,
            value: event.target.value,
        });
    }
    return (
        <form method="POST" onSubmit={handleSubmit}>
            <fieldset>
                <label>
                    Full Name: <input name="name" onChange={handleChange} />
                </label>
                <br />
                <label>
                    Age: <input name="age" onChange={handleChange} />
                </label>
                <br />
                <label>
                    Sex: <input name="sex" onChange={handleChange} />
                </label>
                <br />
                <label>
                    Zip Code: <input name="zipCode" onChange={handleChange} />
                </label>
                <br />
                <label>
                    BMI: <input name="bmi" onChange={handleChange} />
                </label>
                <br />
                <label>
                    __V: <input name="__V" onChange={handleChange} />
                </label>
                <br />
                <label>
                    Exam Id: <input name="ExamId" onChange={handleChange} />
                </label>
                <br />
                <label>
                    Brixia Scores: <input name="brixiaScores" onChange={handleChange} />
                </label>
                <br />
                <label>
                    Image: <input type="file" onChange={handleChange} />
                </label>
                <br />
                <label>
                    Key Findings: <textarea name="keyFindings" onChange={setFormData} />
                </label>
                <br />
            </fieldset>
            <button type="submit">Submit</button>
        </form>
    );

}