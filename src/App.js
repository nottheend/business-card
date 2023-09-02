import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import { Navbar, Nav, Container } from 'react-bootstrap';


export default function ProfileStatistics() {
  // LinkedIn profile URL
  const linkedInProfileUrl = 'https://www.linkedin.com/in/johannes-meng-it-security';

  return (
    <div className="vh-100" style={{ backgroundColor: '#eee' }}>
      <header>
      </header>
      <MDBContainer className="container py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol md="12" xl="4">
            <MDBCard style={{ borderRadius: '15px' }}>
              <MDBCardBody className="text-center">
                <div className="mt-3 mb-4">
                  <MDBTypography tag="h4" style={{ fontSize: '48px', marginBottom: '1rem' }}>
                    &#x1F6E1;
                  </MDBTypography>
                </div>
                <MDBTypography tag="h4">Johannes Meng</MDBTypography>
                <MDBCardText className="text-muted mb-4">
                </MDBCardText>
                <MDBCardText className="text-muted mb-4">
                  Master of Science <span className="mx-2">|</span> <a href="https://www.internet-sicherheit.de/" target="_blank">Internet-Security</a>
                </MDBCardText>
                <MDBCardText className="text-muted mb-4">
                  Work Experience <span className="mx-2">|</span> <a href={linkedInProfileUrl} target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
                </MDBCardText>
                <MDBCardText className="text-muted mb-4">
                </MDBCardText>
                {/*
                <div className="mb-4 pb-2">
                  <MDBBtn outline floating>
                    <MDBIcon fab icon="facebook" size="lg" />
                  </MDBBtn>
                  <MDBBtn outline floating className="mx-1">
                    <MDBIcon fab icon="twitter" size="lg" />
                  </MDBBtn>
                  <MDBBtn outline floating>
                    <MDBIcon fab icon="skype" size="lg" />
                  </MDBBtn>
                </div>
                */}
                <MDBBtn rounded size="lg" onClick={() => { window.location.href = 'mailto:' + 'johannes' + '@' + 'meng.nrw'; }}>
                  Message now &nbsp; ✉️
                </MDBBtn>
                {/* 
                <div className="d-flex justify-content-between text-center mt-5 mb-2">
                  <div>
                    <MDBCardText className="mb-1 h5">8471</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Wallets Balance</MDBCardText>
                  </div>
                  <div className="px-3">
                    <MDBCardText className="mb-1 h5">8512</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Followers</MDBCardText>
                  </div>
                  <div>
                    <MDBCardText className="mb-1 h5">4751</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Total Transactions</MDBCardText>
                  </div>
                </div>
                 */}
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}