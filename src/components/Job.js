import React, { Component } from 'react'
import axios from 'axios'

export class Job extends Component {
    constructor(props) {
        super(props)

        this.state = {
            jobs: []
        }
    }

    componentDidMount() {
        const jobID = this.props.match.params.id

        axios.get(`/api/jobs/${jobID}`)
            .then((response) => {
                this.setState(response.data);
            })
    }

    render() {
        return (
            <div className="Job">
                <h1>{this.state.title}</h1>
                    <a><img src={this.state.company_logo} width="100" alt="img" /></a>
                    <div>{this.state.url}</div>
                    <span>{this.state.description}</span>
            </div>
        )
    }
}

export default Job
