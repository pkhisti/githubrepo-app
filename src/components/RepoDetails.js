import React from 'react';
import * as GithubApi from '../services/GithubApi';

class RepoDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
           commits: []
       }
    }

    componentDidMount() {
    this.fetchData();
    }

    fetchData() {
     GithubApi.getSingle(this.props.repoName,this.props.orgName).then((data)=>{
         console.log(data);
      this.setState({
        commits: data
      });
    });
    }

    render() {
     const commitList = this.state.commits.map((commit)=>{
           let commitDate = new Date(commit.commit.author.date);
            return (
              <li className="list-group-item" key={commit.sha}>
                <h4>{commitDate.toLocaleDateString('en-US')} : {commit.commit.author.name}</h4>
                {commit.commit.message}
              </li>
            )
        })
        return(
            <div>
             <ul className="list-group">
                   {commitList}
             </ul>
            </div>
        )
    }
}

export default RepoDetails;


