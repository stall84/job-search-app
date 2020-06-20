import React, { Component } from 'react';
import './jobs.css';
import JobsListItem from './JobsListItem';
import Job from './Job';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';

class Jobs extends Component {
    constructor(props) {
        super(props)

        this.state = {
            jobs: []
        }
    }

    componentDidMount() {
        axios.get('/api/jobs')
            .then((response) => {
                this.setState({
                    jobs: response.data
                })
            })
    }

    render() {
        const jobsJSX = this.state.jobs.map((job, index) => {
            // Because the axios call's payload is a JSON formatted object, we can just simply
            // spread in each job iteration element, and it will know to assign the key/value's for each
            // You also have to assign a key prop set to the index of the array being iterated over
            // Pass this down in props to the JobsListItem component
            return <JobsListItem key={index} {...job} />
        })
        return (
            <div>
                <div className="App">
                    <header className="App-header">
                        <h1 className="App-title">Jobs in Atlanta</h1>
                        <p className="App-subtitle">Click to explore jobs</p>
                    </header>
                </div>
                <div className="Jobs">
                  <Switch>
                      <Route 
                        exact 
                        path="/jobs" 
                        render={ () => jobsJSX } 
                        />
                        <Route 
                         path="/jobs/:id"
                         component={Job} 
                         />
                  </Switch>
                </div>
            </div>
        );
    }

}


export default Jobs;