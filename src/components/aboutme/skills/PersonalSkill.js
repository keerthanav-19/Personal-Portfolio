import React from 'react'
import { Link } from 'react-router-dom';
import { Container,Row,Col } from 'react-bootstrap';
import LightSpeed from 'react-reveal/LightSpeed';

export default function PersonalSkill() {
  return (
    <div>
        <div className="mt-5 d-flex flex-row justify-content-center">
            <Link className="btn btn-primary me-3" to="/technicalSkill">TECHNICAL SKILL</Link>
            <Link className="btn btn-primary me-3" to="/personalskill">FUNCTIONAL SKILL</Link>
            {/* <Link className="btn btn-primary " to="/toolkit">Toolkit</Link> */}
        </div>
        <LightSpeed left cascade>
            <h1 className="mt-4">Functional Skills</h1>
        </LightSpeed>
        <div className="mt-4">
            <Container>
            <Row className='g-5'>
                <div style={{ paddingLeft: '50px',paddingRight:'50px'}}>
                    <h2 style={{color:'#fe3e57',fontSize:'25px',marginTop:'13px',fontWeight:700 }} className="mt-4">• Quick and Continuous learner with positive attitude</h2> 
                </div>
                <div style={{ paddingLeft: '50px',paddingRight:'50px'}}>
                    <h2 style={{color:'#54faae',fontSize:'25px',marginTop:'13px',fontWeight:700 }} className="mt-4">• Analytical capability to solve the problems and provide feasible solutions</h2> 
                </div>
                <div style={{ paddingLeft: '50px',paddingRight:'50px'}}>
                    <h2 style={{color:'#39c4ff',fontSize:'25px',marginTop:'13px',fontWeight:700 }} className="mt-4">• Strong mentoring skills to guide and support team members in their professional development</h2> 
                </div>
                <div style={{ paddingLeft: '50px',paddingRight:'50px'}}>
                    <h2 style={{color:'#f1f965',fontSize:'25px',marginTop:'13px',fontWeight:700 }} className="mt-4">• Effective time management abilities to prioritize tasks and meet project deadlines</h2> 
                </div>
                <div style={{ paddingLeft: '50px',paddingRight:'50px'}}>
                    <h2 style={{color:'#ff0173',fontSize:'25px',marginTop:'13px',fontWeight:700 }} className="mt-4">• Team player with active participation in project activities, ensuring smooth project delivery</h2> 
                </div>
            </Row>
            </Container>
                
        </div>
        
    </div>
  )
}
