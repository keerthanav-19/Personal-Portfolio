import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import SchoolIcon from "@mui/icons-material/School";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import Flip from "react-reveal/Flip";

function EducationJourney() {
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
          <h1>Educational Qualification</h1>
        </Flip>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="2004 - 2014"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<SchoolIcon />}
        >
          <h4 className="vertical-timeline-element-title">
            CES ENGLISH HIGH SCHOOL,
          </h4>
          <h4 className="vertical-timeline-element-subtitle mt-2">
            BANGALORE
          </h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="2014 - 2016"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<SchoolIcon />}
        >
          <h4 className="vertical-timeline-element-title">
            NMKRV PU COLLEGE,
          </h4>
          <h4 className="vertical-timeline-element-subtitle mt-2">
            BANGALORE
          </h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="2016 - 2020"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<SchoolIcon />}
        >
          <h4 className="vertical-timeline-element-title">
            JSS ACADEMY OF TECHNICAL EDUCATION,
          </h4>
          <h4 className="vertical-timeline-element-subtitle mt-2">
            BANGALORE
          </h4>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "#fbd9ad", color: "rgb(78 22 112)" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default EducationJourney;
