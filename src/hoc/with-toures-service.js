import React from "react";
import { TouresServiceConsumer} from "../toures-service-context/toures-service-context";

const withTouresService = () =>(Wrapped) =>{
    return (props) =>{
        return (
            <TouresServiceConsumer>
                    {
                        (touresService) =>{
                            return(
                                <Wrapped {...props} touresService={touresService}/>
                            )
                        }
                    }

            </TouresServiceConsumer>
        )
    }
}

export default withTouresService;