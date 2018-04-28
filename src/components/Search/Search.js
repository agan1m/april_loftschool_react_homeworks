import React, { Component } from 'react';
import {searchRequest} from '../../actions/search'
import {connect} from "react-redux";
import ShowPreview from "../ShowPreview";

class Search extends Component {
    state = {
        search: '',
        serials: []
    }
    handleChange = (e) => {
        this.setState({search: e.target.value})
    }
    handleClick = () => {
        const { serials } = this.props
        const { searchRequest } = this.props
        searchRequest(this.state.search)
    }

   

    render() {
        const { serials } = this.props
        console.log(serials)
        return (
            <div>
                <input  onChange={this.handleChange}/>
                <button onClick={this.handleClick}>Найти</button>
                <div>
                    {serials.map(ep => {
                        return <ShowPreview
                            key={ep.id}
                            id={ep.id}
                            name={ep.name}
                            img={ep.image}
                            summary={ep.summary} />
                    })}
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    isLoading: state.search.isLoading,
    error: state.search.error,
    serials: state.search.serials
});
const mapDispatchToProps = { searchRequest };
export default connect(mapStateToProps, mapDispatchToProps)(Search);

/* export default Search; */