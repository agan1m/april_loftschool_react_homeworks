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
        const { searchRequest } = this.props
        if(this.state.search) {
            return (searchRequest(this.state.search),
            this.setState({ search: '' }))
        }
        
    }

   

    render() {
        const { serials } = this.props
        
        return (
            <div>
                <input value={this.state.search} onChange={this.handleChange}/>
                <button onClick={this.handleClick}>Найти</button>
                <div>
                    {serials.map(item => {
                        return <ShowPreview
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            img={item.image}
                            summary={item.summary} />
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