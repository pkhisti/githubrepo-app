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
             <div className="row">
                   <div className="col-sm-6 ">
                       <h3 className="pull-left">{this.props.org} repositories: {this.props.count}</h3>
                      </div>
                      <div className="col-sm-6 sortby-padding">
                      <br/>
                      <div className="pull-right ">
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

                </div>
        )
    }
}

export default RepoSortBy;