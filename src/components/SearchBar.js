import React from 'react';

class SearchBar extends React.Component{
    state = { term: ''}
    
    onInputChange = (event) => {
        this.setState({term: event.target.value})    
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        //TODO: make sure we call callback from parent
        this.props.onFormSubmit(this.state.term);
    }

    render(){
        return(
            <div className="search-bar ui inverted segment">
                <form
                    className="ui inverted form"
                    onSubmit={this.onFormSubmit}    
                >
                    <div className="field">
                        <label>Video Search <i class="play icon"></i></label>
                        <input
                            className="ui black"
                            type="text"
                            value= {this.state.term}
                            onChange={this.onInputChange}
                            />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;