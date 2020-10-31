
import React , {useEffect} from 'react'
import {connect} from "react-redux"
 import { getPosts,deletePostAdmin } from "../actions/post";
//  import { setAlert} from "../../actions/alert";
 import {Container, Row,Col, Table,Button, ListGroup, ListGroupItem} from "react-bootstrap"
 import Loader from "./Loader"


const AdminPosts = ({getPosts, deletePostAdmin,auth, post:{post, posts,loading,error}}) => {

    const {isAuthenticated, user} = auth
   

    useEffect(()=>{
        getPosts()
    },[getPosts])


    const deleteHandler = (id) => {
        if (window.confirm('Are you sure')) {
          deletePostAdmin(id)
        }
      }

    return (
        <Container style={{marginTop:"150px"}}>
        <Row className='align-items-center'>
          <Col>
            <h1>Posts</h1>
          </Col>
        </Row>
    
        {loading ? (
          <Loader />
        ) : 
         (
          <>
           
            <Row>
                {posts.map(post=>(
                    <>
                     <Col md={4} key={post._id}>
                         <div className="mb-2">
                             <strong><p>{post.name}</p></strong>
                             <img src={post.avatar} alt="" />
                             
                         </div>
                     </Col>
                     <Col  md={4}>
                     <strong><p>{post._id}</p></strong>
                     <p>{post.text}</p>
                     
                     </Col>
                     <Col md={4}>
                     { isAuthenticated && user.isAdmin &&
                    <Button
                    variant='danger'
                    className='btn-sm'
                    
                    onClick={() => deleteHandler(post._id)}
                  >
                    <i className='fa fa-trash'></i>
                  </Button>}
        
                     </Col>
                     </>

                ))}
                 
            </Row>
          </>
            )}
            </Container>
    )
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  post:state.post
});


export default connect(mapStateToProps, {getPosts,deletePostAdmin}) (AdminPosts)


