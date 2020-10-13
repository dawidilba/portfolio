import React from 'react';

export default function IconsFont(props) {
    if(props.project === "1"){
        return (
            <>
                <i className="icons fab fa-html5" />
                <i className="icons fab fa-sass" />
                <i className="icons fab fa-bootstrap" />
                <i className="icons fab fa-node" />
                <i className="icons fab fa-js" />
                <i className="icons fab fa-react" />
            </>
        )}
    else if(props.project === "2"){
        return (
            <>
                <i className="icons fab fa-html5" />
                <i className="icons fab fa-css3-alt" />
                <i className="icons fab fa-node" />
                <i className="icons fab fa-js" />
                <i className="icons fab fa-react" />
            </>
        )}
    else if(props.project === "3"){
            return <i className="icons fab fa-python"></i>
    }
}
