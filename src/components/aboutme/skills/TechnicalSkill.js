import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Tada from "react-reveal/Tada";

export default function TechnicalSkill() {
  return (
    <div>
      <div className="mt-5 d-flex flex-row justify-content-center">
        <Link className="btn btn-primary me-3" to="/technicalSkill">
          TECHNICAL SKILL
        </Link>
        <Link className="btn btn-primary me-3" to="/personalskill">
          FUNCTIONAL SKILL
        </Link>
        {/* <Link className="btn btn-primary " to="/toolkit">
          Toolkit
        </Link> */}
      </div>
      <Tada>
        <h1 className="mt-4">Technical Skills</h1>
      </Tada>
      <div className="mt-5">
        <Container>
          <Row className="g-5">
            <Col md={4}>
              <h1
                style={{ fontSize: "25px", color: "#fe3e57", fontWeight: 700 }}
              >
                Operating System
              </h1>
              <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                <div class="progress">
                  <div
                    role={"progressbar"}
                    id={"com"}
                    aria-valuenow={"100"}
                    aria-valuemin={"0"}
                    aria-valuemax={"100"}
                    style={{ width: "100%" }}
                  ></div>
                </div>
                <h2
                  style={{
                    color: "#fe3e57",
                    fontSize: "25px",
                    marginTop: "13px",
                    fontWeight: 700,
                  }}
                >
                  Windows, Linux
                </h2>
              </div>
            </Col>
            <Col md={4}>
              <h1
                style={{ fontSize: "25px", color: "#54faae", fontWeight: 700 }}
              >
                SCM
              </h1>
              <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                <div class="progress">
                  <div
                    role={"progressbar"}
                    id={"pm"}
                    aria-valuenow={"100"}
                    aria-valuemin={"0"}
                    aria-valuemax={"100"}
                    style={{ width: "100%" }}
                  ></div>
                </div>
                <h2
                  style={{
                    color: "#54faae",
                    fontSize: "25px",
                    marginTop: "13px",
                    fontWeight: 700,
                  }}
                >
                  GitLab, Bitbucket
                </h2>
              </div>
            </Col>
            <Col md={4}>
              <h1
                style={{ fontSize: "25px", color: "#39c4ff", fontWeight: 700 }}
              >
                Containerization
              </h1>
              <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                <div class="progress">
                  <div
                    role={"progressbar"}
                    id={"cr"}
                    aria-valuenow={"100"}
                    aria-valuemin={"0"}
                    aria-valuemax={"100"}
                    style={{ width: "100%" }}
                  ></div>
                </div>
                <h2
                  style={{
                    color: "#39c4ff",
                    fontSize: "25px",
                    marginTop: "13px",
                    fontWeight: 700,
                  }}
                >
                  Docker
                </h2>
              </div>
            </Col>
            <Col md={4}>
              <h1
                style={{ fontSize: "25px", color: "#f1f965", fontWeight: 700 }}
              >
                Orchestration
              </h1>
              <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                <div class="progress">
                  <div
                    role={"progressbar"}
                    id={"aa"}
                    aria-valuenow={"100"}
                    aria-valuemin={"0"}
                    aria-valuemax={"100"}
                    style={{ width: "100%" }}
                  ></div>
                </div>
                <h2
                  style={{
                    color: "#f1f965",
                    fontSize: "25px",
                    marginTop: "13px",
                    fontWeight: 700,
                  }}
                >
                  Kubernetes
                </h2>
              </div>
            </Col>
            <Col md={4}>
              <h1
                style={{ fontSize: "25px", color: "#ff0173", fontWeight: 700 }}
              >
                CI/CD
              </h1>
              <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                <div class="progress">
                  <div
                    role={"progressbar"}
                    id={"org"}
                    aria-valuenow={"100"}
                    aria-valuemin={"0"}
                    aria-valuemax={"100"}
                    style={{ width: "100%" }}
                  ></div>
                </div>
                <h2
                  style={{
                    color: "#ff0173",
                    fontSize: "25px",
                    marginTop: "13px",
                    fontWeight: 700,
                  }}
                >
                  Jenkins, ArgoCD
                </h2>
              </div>
            </Col>
            <Col md={4}>
              <h1
                style={{ fontSize: "25px", color: "#ff8c2f", fontWeight: 700 }}
              >
                Code Quality
              </h1>
              <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                <div class="progress">
                  <div
                    role={"progressbar"}
                    id={"ps"}
                    aria-valuenow={"100"}
                    aria-valuemin={"0"}
                    aria-valuemax={"100"}
                    style={{ width: "100%" }}
                  ></div>
                </div>
                <h2
                  style={{
                    color: "#ff8c2f",
                    fontSize: "25px",
                    marginTop: "13px",
                    fontWeight: 700,
                  }}
                >
                  SonarQube
                </h2>
              </div>
            </Col>
            <Col md={4}>
              <h1
                style={{ fontSize: "25px", color: "#fe3e57", fontWeight: 700 }}
              >
                Artifactory
              </h1>
              <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                <div class="progress">
                  <div
                    role={"progressbar"}
                    id={"com"}
                    aria-valuenow={"100"}
                    aria-valuemin={"0"}
                    aria-valuemax={"100"}
                    style={{ width: "100%" }}
                  ></div>
                </div>
                <h2
                  style={{
                    color: "#fe3e57",
                    fontSize: "25px",
                    marginTop: "13px",
                    fontWeight: 700,
                  }}
                >
                  Nexus
                </h2>
              </div>
            </Col>
            <Col md={4}>
              <h1
                style={{ fontSize: "25px", color: "#54faae", fontWeight: 700 }}
              >
                IaC
              </h1>
              <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                <div class="progress">
                  <div
                    role={"progressbar"}
                    id={"pm"}
                    aria-valuenow={"100"}
                    aria-valuemin={"0"}
                    aria-valuemax={"100"}
                    style={{ width: "100%" }}
                  ></div>
                </div>
                <h2
                  style={{
                    color: "#54faae",
                    fontSize: "25px",
                    marginTop: "13px",
                    fontWeight: 700,
                  }}
                >
                  Terraform and Ansible
                </h2>
              </div>
            </Col>
            <Col md={4}>
              <h1
                style={{ fontSize: "25px", color: "#41f2ff", fontWeight: 700 }}
              >
                Cloud Platform
              </h1>
              <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                <div class="progress">
                  <div
                    role={"progressbar"}
                    id={"cr"}
                    aria-valuenow={"100"}
                    aria-valuemin={"0"}
                    aria-valuemax={"100"}
                    style={{ width: "100%" }}
                  ></div>
                </div>
                <h2
                  style={{
                    color: "#41f2ff",
                    fontSize: "25px",
                    marginTop: "13px",
                    fontWeight: 700,
                  }}
                >
                  AWS
                </h2>
              </div>
            </Col>
            <Col md={4}>
              <h1
                style={{ fontSize: "25px", color: "#f1f965", fontWeight: 700 }}
              >
                Monitoring
              </h1>
              <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                <div class="progress">
                  <div
                    role={"progressbar"}
                    id={"aa"}
                    aria-valuenow={"100"}
                    aria-valuemin={"0"}
                    aria-valuemax={"100"}
                    style={{ width: "100%" }}
                  ></div>
                </div>
                <h2
                  style={{
                    color: "#f1f965",
                    fontSize: "25px",
                    marginTop: "13px",
                    fontWeight: 700,
                  }}
                >
                  Prometheus, Grafana
                </h2>
              </div>
            </Col>
            <Col md={4}>
              <h1
                style={{ fontSize: "25px", color: "#ff0173", fontWeight: 700 }}
              >
                Programming Languages
              </h1>
              <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                <div class="progress">
                  <div
                    role={"progressbar"}
                    id={"org"}
                    aria-valuenow={"100"}
                    aria-valuemin={"0"}
                    aria-valuemax={"100"}
                    style={{ width: "100%" }}
                  ></div>
                </div>
                <h2
                  style={{
                    color: "#ff0173",
                    fontSize: "25px",
                    marginTop: "13px",
                    fontWeight: 700,
                  }}
                >
                  Python, Golang
                </h2>
              </div>
            </Col>
            <Col md={4}>
              <h1
                style={{ fontSize: "25px", color: "#ff8c2f", fontWeight: 700 }}
              >
                Database
              </h1>
              <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                <div class="progress">
                  <div
                    role={"progressbar"}
                    id={"ps"}
                    aria-valuenow={"100"}
                    aria-valuemin={"0"}
                    aria-valuemax={"100"}
                    style={{ width: "100%" }}
                  ></div>
                </div>
                <h2
                  style={{
                    color: "#ff8c2f",
                    fontSize: "25px",
                    marginTop: "13px",
                    fontWeight: 700,
                  }}
                >
                  PostgreSQL
                </h2>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
