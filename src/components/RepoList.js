import React from 'react';
import {Modal, Button} from 'react-bootstrap';
import RepoDetails from '../components/RepoDetails';

class RepoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedRepo: "",
            show: false
        }
        this.handleDetails = this.handleDetails.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
    }

    handleDetails = (e, id) =>{
        e.preventDefault();
        this.props.handleDetails(id);
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow(e, repoName) {
        this.setState(
            {
                selectedRepo: repoName ,
                show: true
            });
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
                        <div className="header-min-height"><h3>{repo.name}</h3></div>
                        <div className="title-subheader">Description: {repo.description}</div>
                        <div className="title-subheader">Forks: {repo.forks}</div>
                        <div className="title-subheader">Open Issues: {repo.open_issues}</div>
                      </div>
                     <div className="col-sm-2">
                        <Button bsStyle="link" className="btn btn-xs"  onClick={e => this.handleShow(e, repo.name)}>
                          <span className="glyphicon glyphicon-th-list"></span>&nbsp;Recent Commits
                        </Button>
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
                   <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Recent Commits</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <RepoDetails orgName={this.props.orgName}  repoName={this.state.selectedRepo}></RepoDetails>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.handleClose}>Close</Button>
                        </Modal.Footer>
                </Modal>
            </div>

        )
    }
}

export default RepoList;