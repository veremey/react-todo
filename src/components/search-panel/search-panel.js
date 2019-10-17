import React, {Component} from "react";
import './search-panel.css';

class SearchPanel extends Component {
    state = {
        term: ''
    };

    onSearchChange = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onSearchChange(term);
    };

    render() {
        return (
            <input type="text"
                className="form-control search-input"
                placeholder="Type here to Search"
                value={this.state.term}
                onChange={this.onSearchChange}
            />
        );
    };
};

export default SearchPanel;