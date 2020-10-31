

import React , {useEffect} from 'react'
import {connect} from "react-redux"
 import { getPosts,deletePost } from "../actions/post";
//  import { setAlert} from "../../actions/alert";
 import {Container, Row,Col, Table,Button, ListGroup, ListGroupItem} from "react-bootstrap"
 import Loader from "./Loader"
 import AdminPosts from "./AdminPosts"


const AdminPosts2 = ({getPosts, deletePost,auth, post:{posts}}) => {

   

    return (
        <Container style={{marginTop:"150px"}}>
            {posts.map (post=>(
                <AdminPosts post={post}/>
            ))}
       
            </Container>
    )
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  post:state.post
});


export default connect(mapStateToProps, {getPosts,deletePost}) (AdminPosts2)
