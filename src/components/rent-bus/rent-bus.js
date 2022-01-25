import React from "react";
import './rent-bus.css';
import { Button } from 'react-bootstrap';
import { setBus } from "../../reducers";
import withTouresService from "../../hoc/with-toures-service";
import { connect } from "react-redux";

class RentBus extends React.Component{
    componentDidMount() {
        
        const {touresService} = this.props
        const data = touresService.getBus();
        console.log(data)
        this.props.setBus(data)
        
    }
    render(){
        let busItem = this.props.bus.map((b) =>{
            return(
                <div className="busItem" key={b.id}>
                    <div>
                    <img src={b.img}/>
                    <h1>{b.mark}</h1>
                    <h2>{b.pass} місць</h2>
                    <Button variant="primary">Замовити автобус</Button>
                    <Button variant="success">Ціна</Button>
                    </div>
                    
                </div>
            )
        })
        return(
            <div className="rentbus">
                {busItem}
            </div>
        )
        
    }
    
}
const mapStateToProps = (state) =>{
    return {
        bus:state.bus
    } 
}


export default withTouresService()(connect(mapStateToProps,{setBus})(RentBus))
