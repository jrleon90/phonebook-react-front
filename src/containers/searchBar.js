import React, { Component } from 'react';

class SearchBar extends Component{
    constructor(props){
        super(props);

        this.state = {
            term:''
        }
    }

    onInputChange(term){
        this.setState({term});
        this.props.updateSearch(term);
    }
    render(){
        return (
            <div className="input-group mb-3">
            <div className="input-group-append">
                <span className="input-group-text" id="basic-addon1">Search for a name</span>
            </div>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search for a name" 
                    aria-label="Search" 
                    aria-describedby="basic-addon1"
                    value={this.state.term}
                    onChange={event=>this.onInputChange(event.target.value)}
                />
            </div>
        )
    }
}

export default SearchBar;