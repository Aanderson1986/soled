import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { userAuth } from '../redux/actions'

class NavAnon extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            verifyEmail: '',
            verifyPassword: '',
         }
    }
    render() { 
        return ( 
            <div></div>
         )
    }
}
 
export default NavAnon;