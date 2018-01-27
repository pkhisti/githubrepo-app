import React, { Component } from 'react';
import './App.css';
import {Navbar} from 'react-bootstrap'
import RepoList from './components/RepoList';
import * as GithubApi from './services/GithubApi';
import RepoSortBy from './components/RepoSortyBy';
import {Link, Route} from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      allRepoList: []
    }
   this.handleSortClick = this.handleSortClick.bind(this);
  }

  componentDidMount() {
   this.fetchData();
  }

  fetchData() {
     GithubApi.getAll('intuit').then((data)=>{
      this.setState({
        allRepoList: data
      });
    });
  }

  handleSortClick = (sortBy) => {
    console.log(sortBy);
    let sortedRepoList = [];
    if(sortBy === "name")
     {
      sortedRepoList = this.state.allRepoList.sort((a,b)=>a.name.localeCompare(b.name));
     }
     else {
       sortedRepoList = this.state.allRepoList.sort((a,b)=>b[sortBy]-a[sortBy]);
     }
    this.setState({allRepoList: sortedRepoList})
  }
  render() {
    const Main  = (props) => {
        return (
           <div>
              <RepoSortBy count={this.state.allRepoList.length} org="Intuit" sortClick={this.handleSortClick}/>
              <RepoList repos={this.state.allRepoList}/>
           </div>
        )
    }
    const Details  = (props) => {
        return (
           <div>
              Search Commits
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
          <Route exact path="/" component={Main}/>
          <Route exact path="/details" component={Details}/>
        </div>
      </div>
    );
  }
}

export default App;
