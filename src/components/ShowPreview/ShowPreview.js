import React, { Component } from 'react';
import { Link } from "react-router-dom";

class ShowPreview extends Component {
    
    render() {

        const {id,name, img, summary} = this.props

        return (
                <div>
                <Link to={`/show/${id}`}>
                    <h2>{name}</h2>
                </Link>
                {img == null ? null : <img src={img.medium} alt={name} />}
                    <div dangerouslySetInnerHTML={{__html: summary}} />
                </div>
        );
    }
}

export default ShowPreview;

