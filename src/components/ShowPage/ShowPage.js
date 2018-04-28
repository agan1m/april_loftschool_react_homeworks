import React, { Component } from 'react';
import { showRequest } from '../../actions/show'
import { connect } from "react-redux";

class ShowPage extends Component {
    
    componentWillMount = () => {
        const { showRequest } = this.props
        const { id } = this.props.match.params;

        showRequest(id)
    }

    render() {
        
        const {serials } = this.props
        const actiors = this.props.serials._embedded
        console.log(actiors)
        return (
            <div>
                <h2>{serials.name}</h2>
                <img src={serials.image} alt={serials.name}/>
                <div dangerouslySetInnerHTML={{ __html: serials.summary }}/>
                <div>
                    {actiors.cast.map(person => {
                        return (
                            <div>
                                <p>{person.person.name}</p>
                                <img src={person.person.image.medium} alt={person.person.name} />>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isLoading: state.shows.isLoading,
    error: state.shows.error,
    serials: state.shows.serials
});
const mapDispatchToProps = { showRequest };
export default connect(mapStateToProps, mapDispatchToProps)(ShowPage);

