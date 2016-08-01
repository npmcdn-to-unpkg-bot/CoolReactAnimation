import React from 'react';
import {connect} from 'react-redux';
class MainShell extends React.Component {
    constructor(props){
        super(props)
    }
    render(){

          /*return(
              <div>
                  <div>3123123123</div>
                  <Alerts/>
              </div>
          )*/
        return(
            <div>
                MainShell
            </div>
        )
    }
}
function select(state) {
    return{
        config:state.config
    }
}
export default connect(select)(MainShell);
