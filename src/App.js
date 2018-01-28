import React, { Component } from 'react';
import './App.css';
import {Navbar} from 'react-bootstrap'
import RepoList from './components/RepoList';
import * as GithubApi from './services/GithubApi';
import RepoSortBy from './components/RepoSortyBy';
import {Route} from 'react-router-dom';
import RepoSearch from './components/RepoSearch';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      allRepoList: [],
      orgName: "netflix"
    }
    this.handleSortClick = this.handleSortClick.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
   this.fetchData();
  }

  fetchData() {
     GithubApi.getAll(this.state.orgName).then((data)=>{
        if(data !== undefined) {
        if(data.length > 0) {
            this.setState({
              allRepoList: data
            });
        } else {
           this.setState({
              allRepoList: []
            });
        }
      }
    });
  }

  handleSortClick = (sortBy) => {
    console.log(sortBy);
    let sortedRepoList = [];
    if(sortBy === "name") {
      sortedRepoList = this.state.allRepoList.sort((a,b)=>a.name.localeCompare(b.name));
     }
     else {
       sortedRepoList = this.state.allRepoList.sort((a,b)=>b[sortBy]-a[sortBy]);
     }
     this.setState({allRepoList: sortedRepoList})
  }

  handleDetails = (id) => {
    this.setState({
        selectedRepo:id
      });
  }

   handleSearch(query) {
     this.setState ({
       orgName: query
     });
     this.fetchData();
  }

  render() {
    const Main  = (props) => {
        return (
           <div>
              <RepoSortBy count={this.state.allRepoList.length} org={this.state.orgName} sortClick={this.handleSortClick}/>
              <br/>
              <RepoList repos={this.state.allRepoList} orgName={this.state.orgName} handleDetails={this.handleDetails}/>
           </div>
        )
    }
    return (
      <div className="App">
        <header className="App-header">
           <Navbar>
              <Navbar.Header>
              <Navbar.Brand>
                Github Repo Browser
              </Navbar.Brand>
              </Navbar.Header>
            </Navbar>
        </header>
        <div className="container">
         <div className="row">
            <div className="col-sm-12">
              <RepoSearch onSearch={this.handleSearch} />
            </div>
          </div>
          <Route exact path="/" component={Main}/>
        </div>
      </div>
    );
  }
}

export default App;
