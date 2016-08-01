import React from 'react';
import {connect} from 'react-redux';
//import 'antd/style/index.less';
class Loading extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
    }
    render() {
        return (
            <div>
                <div>3232</div>
                loading1231
            </div>
        )
    }
}
//style={{animation:'loadIn 3s'}}
function select(state) {
    return {
        config: state.config
    }
}
export default connect(select)(Loading);