import React from 'react';
import {DropdownButton, MenuItem} from 'react-bootstrap';

class RepoSortBy extends React.Component {
    constructor(props) {
        super(props);
        this.handleSortClick = this.handleSortClick.bind(this);
    }

    handleSortClick = (e) =>{
        this.props.sortClick(e);
    }
    render() {
        return(
             <div className="row sortby-row">
                   <div className="col-sm-4 sort-header">
                       <h2>{this.props.org} Repositories: <span className="badge">{this.props.count}</span></h2>
                      </div>
                      <div className="col-sm-8 sort-box">
                       <DropdownButton
                            bsStyle="default"
                            title="Sort By....."
                            id="drpSortBy">
                            <MenuItem onSelect={e => this.handleSortClick(e)} eventKey="name">Name</MenuItem>
                            <MenuItem onSelect={e => this.handleSortClick(e)} eventKey="forks">Popularity</MenuItem>
                            <MenuItem onSelect={e => this.handleSortClick(e)} eventKey="open_issues">Open Issues</MenuItem>
                        </DropdownButton>
                      </div>
                </div>
        )
    }
}

export default RepoSortBy;