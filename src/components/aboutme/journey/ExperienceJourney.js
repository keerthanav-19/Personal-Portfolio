import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import Flip from "react-reveal/Flip";

function ExperienceJourney() {
  return (
    <div className="mt-5">
      <div>
      <Link className="btn btn-primary m-2" to="/educationjourney">
          EDUCATION
        </Link>
        <Link className="btn btn-primary m-2" to="/experiencejourney">
          EXPERIENCE
        </Link>
        {/* <Link className="btn btn-primary m-1" to="/technicaljourney">
          Technical Journey
        </Link> */}
        <Link className="btn btn-primary m-2" to="/projectjourney">
          PROJECTS
        </Link>
      </div>
      <div className="mt-5">
        <Flip top cascade>
          <h1>Professional Experience</h1>
        </Flip>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderLeft: "7px solid  rgb(78 22 112)" }}
          date=" 2020 - Current"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
            Accenture Solutions Pvt Ltd.
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
            Custom Software Engineering Analyst - DevOps
          </h6>
          <p>• Streamlined Deployments: Implemented GitOps-based CI/CD pipelines using Jenkins and ArgoCD, achieving a 30% reduction in deployment times. This resulted in faster software delivery and improved team velocity.</p>
          <p>• Scalable Infrastructure: Automated infrastructure provisioning with Terraform and Ansible scripts, leading to a 25% reduction in manual configuration tasks. This enabled faster infrastructure setup and minimized human error.</p>
          <p>• Optimized Cloud Environment: Managed AWS environments including IAM administration, EC2 instances, and security groups. Developed Python scripts using AWS Lambda (boto3) for automated service management and security monitoring. Additionally, performed regular cloud cost analysis and implemented resource tagging to optimize resource utilization.</p>
          <p>• Enhanced Monitoring & Observability: Streamlined monitoring and logging by integrating Prometheus, Grafana, and CloudWatch. This provided real-time insights into system health and facilitated proactive troubleshooting.</p>
          <p>• Secure & Maintainable Applications: Managed source code with Git for version control and traceability. Automated compliance checks within CI/CD pipelines and utilized Nexus artifactory for secure report storage. Developed performant, concurrent, and scalable GraphQL APIs in Golang, ensuring application security and maintainability.</p>
          <p>• Containerization Expertise: Designed Dockerfiles for backend applications to optimize image size and improve deployment efficiency. Managed Helm charts for efficient deployments and streamlined container orchestration with Kubernetes.</p>
          <p>• Problem-Solving & Collaboration: Effectively monitored and troubleshooted issues related to CI/CD pipelines, platform stability, and application downtime. Possess strong collaboration skills and actively participate in project activities to ensure smooth delivery.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "#fbd9ad", color: "rgb(78 22 112)" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default ExperienceJourney;
