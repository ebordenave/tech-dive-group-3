import React from 'react'

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        // Prevent the browser from reloading the page
        e.preventDefault();

        // Read the form data
        const form = e.target;
        const formData = new FormData(form);

        // You can pass formData as a fetch body directly:
        // fetch('/some-api', { method: form.method, body: formData });

        // Or you can work with it as a plain object:
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);
    }

    render() {
        return [
            <form id="createForm" method="POST" onSubmit={this.handleSubmit}>
                <label>
                    Full Name: <input name="name" />
                </label>
                <br />
                <label>
                    Age: <input name="age" />
                </label>
                <br />
                <label>
                    Sex: <input name="sex" />
                </label>
                <br />
                <label>
                    Zip Code: <input name="zipCode" />
                </label>
                <br />
                <label>
                    BMI: <input name="bmi" />
                </label>
                <br />
                <label>
                    __V: <input name="__V" />
                </label>
                <br />
                <label>
                    Exam Id: <input name="ExamId" />
                </label>
                <br />
                <label>
                    Brixia Scores: <input name="brixiaScores" />
                </label>
                <br />
                <label>
                    Image: <input type="file" />
                </label>
                <br />
                <label>
                    Key Findings: <textarea name="keyFindings" />
                </label>
                <br />
                <button type="submit">Submit form</button>
            </form>
        ];
    }
}