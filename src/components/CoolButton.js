import 'bulma/css/bulma.css';
import React from "react";

class CoolButton extends React.Component {
    render () {
        let classes = "button"
        if(this.props.isDanger) {
            classes += ' is-danger is-rounded'
        } else if(this.props.isSuccess){
            classes += ' is-success is-rounded'
        }
        return (
            <div>
            <button className={classes}>{this.props.children}</button>

            </div>


        )
    }
};

        
 


export default CoolButton;
