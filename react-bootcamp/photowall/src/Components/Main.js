import React, {Component} from 'react'
import Title from './Title'
import Photowall from './PhotoWall'
import AddPhoto from './AddPhoto'
import {Route, Router} from 'react-router-dom'
import {removePost} from '../redux/actions'
import {Link} from 'react-router-dom'
import Single from './Single'

   


class Main extends Component{
    constructor(){
        super()
        
        console.log('constructor')
    }

//    componentDidMount(){
//        this.props.removePost(1)
//    }
    render(){
        console.log("fhidushf")
        console.log(this.props)
        return ( 
            <div>
                <h1>
                    <Link to="/"> PhotoWall </Link>
                </h1>
                <Route exact path = "/" render = {()=> (
                    <div>
                    <Photowall {...this.props}/>
                    </div>
                )}/>
                        
                <Route path = "/AddPhoto" render = {({history})=>(
                    <AddPhoto {...this.props} onHistory = {history}/>
                )}/> 

                <Route path = "/single/:id" render = {(params)=>( 
                    <Single {...this.props} {...params}/>
                )}/>            
            </div>
        )
    }


    
}

// function SimulateFetchFromDatabase(){
//     return []
// }

export default Main