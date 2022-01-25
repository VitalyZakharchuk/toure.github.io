import React from "react";
import Tour from "./Tour";
import { connect } from "react-redux";
import withTouresService from "../../hoc/with-toures-service";
import { touresLoaded } from "../../action";
import { setBus, setToures } from "../../reducers";

class Toures extends React.Component {
    
    componentDidMount(){
        
        const {touresService} = this.props
        const data = touresService.getToures();
        console.log(data)
        this.props.setToures(data)
    }
    render(){
        return <Tour {...this.props} toures={this.props.toures}/>
    }

}
const mapStateToProps = (state) =>{
    return {
        toures:state.toures
    } 
}


export default withTouresService()(connect(mapStateToProps,{setToures})(Toures))