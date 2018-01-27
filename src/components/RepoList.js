import React from 'react';
import {DropdownButton, MenuItem} from 'react-bootstrap';

class RepoList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const repoList = this.props.repos.map((repo)=>{
            const src = repo.owner.avatar_url ? repo.owner.avatar_url :"http://via.placeholder.com/128x193?text=No%20Cover";
            return (
                <div className="col-sm-12 div-min-height list-group-item" key={repo.id}>
                    <div className="row">
                      <div className="col-sm-2">
                        <img src={src} alt={repo.name} className="img-thumbnail image-min-height"/>
                      </div>
                      <div className="col-sm-8">
                        <div className="header-min-height"><h3>{repo.name}</h3>
                        <div className="title-subheader">Description: {repo.description}</div>
                        <div className="title-subheader">Forks: {repo.forks}</div>
                        <div className="title-subheader">Open Issues: {repo.open_issues}</div>
                      </div>
                    </div>
                    </div>
                </div>
            )
        })
        return(
             <div>
                  <div className="row list-group">
                    {repoList}
                 </div>
            </div>
        )
    }
}

export default RepoList;