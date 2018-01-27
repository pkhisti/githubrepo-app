import React from 'react';
import {DebounceInput} from 'react-debounce-input';

class RepoSearch extends React.Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onSearch(e.target.value);
	}

    render() {
        return (
            <div >
            <DebounceInput
                className="form-control"
                minLength={3}
                debounceTimeout={700}
                onChange={event => this.handleChange(event)}
                placeholder="Search github repositories"
                onFocus={this.props.toggleSearch} />
            </div>
        )
    }
}

export default RepoSearch;