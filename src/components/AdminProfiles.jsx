import React , {useEffect} from 'react'
import {connect} from "react-redux"
 import { getProfiles,deleteProfile } from "../actions/profile";
//  import { setAlert} from "../../actions/alert";
 import {Container, Row,Col, Table,Button} from "react-bootstrap"
 import Loader from "./Loader"


const AdminProfiles = ({getProfiles, deleteProfile,auth, profile:{profile, profiles,loading,error}}) => {

    const {isAuthenticated, user} = auth

    useEffect(()=>{
        getProfiles()
    },[getProfiles])


    const deleteHandler = (id) => {
        if (window.confirm('Are you sure')) {
          deleteProfile(id)
        }
      }

    return (
        <Container style={{marginTop:"150px"}}>
        <Row className='align-items-center'>
          <Col>
            <h1>Profiles</h1>
          </Col>
        </Row>
    
        {loading ? (
          <Loader />
        ) : 
         (
          <>
            <Table striped bordered hover responsive className='table-sm'>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>NAME</th>
                  <th>GENDER</th>
                  <th>NATIONALITY</th>
                  <th>DATEOFBIRTH</th>
                  <th>LOCATION</th>
                </tr>
              </thead>
              <tbody>
                {profiles.map((profile) => (
                  <tr key={profile._id}>
                    <td>{profile._id}</td>
                    <td>{profile.user && profile.user.name}</td>
                    <td>{profile.gender}</td>
                    <td>{profile.nationality}</td>
                    <td>{profile.dateOfBirth}</td>
                    <td>{profile.location}</td>
                    <td>

                    { isAuthenticated && user.isAdmin &&
                    <Button
                    variant='danger'
                    className='btn-sm'
                    
                    onClick={() => deleteHandler(profile._id)}
                  >
                    <i className='fa fa-trash'></i>
                  </Button>}
                      
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </>
            )}
            </Container>
    )
}

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth
});


export default connect(mapStateToProps, {getProfiles,deleteProfile}) (AdminProfiles)
