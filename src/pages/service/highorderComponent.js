import React from 'react'
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

export default (Comp) => {
    return class extends React.Component {
        render(){
            
            return (
                <ReactCSSTransitionGroup
                    transitionEnter={true}
                    transitionLeave={true}
                    transitionEnterTimeout={2500}
                    transitionLeaveTimeout={1500}
                    transitionName="animated"
                >
                    <Comp key='amache' className="animated bounceInUp"></Comp>
                </ReactCSSTransitionGroup>
            )
        }
    }
}
