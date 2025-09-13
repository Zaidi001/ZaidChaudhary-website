import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const spotlightProjects = {
      "ChatGPT Deep Research Clone with Streamlit": {
        title: "ChatGPT Deep Research Clone with Streamlit",
        desc:

          "This Streamlit application transforms raw research topics into structured, actionable insights through an interactive, AI-driven deep research process..",
        techStack: "Python, OpenAI,Steamlit",
        link: "https://github.com/Zaidi001/Streamlit-Deep-Research-App",
        open: "https://zaid-deep-research-app.streamlit.app/",
        image: "/assets/nomansland.png"
      },
    };
    const projects = {
      "Azure ETL & Analytics Pipeline for OTT Platforms": {
        desc:
          "Designed and deployed a scalable ETL pipeline to ingest, transform, and analyze OTT data from Netflix, Disney+, and Prime with automated reporting.",
        techStack: "Azure Data Factory, Data Lake Gen2, Synapse Analytics, Power BI",
        link: "https://github.com/Zaidi001/OTT--ETL-Project",
        open: "https://drive.google.com/file/d/1NFWDjI0exh0iBmAMzKyKfTHgNXScyPjF/view"
      },
      "Adam A.I.": {
        desc:
          "A self-learning A.I. that learns to traverse through a complex maze using the genetic algorithm.",
        techStack: "Javascript, HTML / CSS",
        link: "https://github.com/Zaidi001/AdamAI-game",
        open: "https://zaidi001.github.io/AdamAI-game/"
      },
      "Reddit Data Engineering Pipeline": {
        desc:
          "Built an end-to-end ETL pipeline to extract Reddit data, transform with AWS Glue/Athena, and load into Redshift for analytics.",
        techStack: "Apache Airflow, AWS Glue, Amazon Athena, Redshift",
        link:
          "https://github.com/Zaidi001/Reddit-DE-Project-Zaid"
      },
      "Odin Bot": {
        desc:
          "A Telegram bot that helps you excel on your daily tasks through Node NLP.",
        techStack: "Javascript, Node.js, Natural NLP, Telegram API",
        link: "https://github.com/Zaidi001/Odin-Bot",
        open: ""
      },
      "Astro AI Sales Forecasting MLOps Platform": {
        desc:
          "An AI-powered MLOps platform for sales forecasting with automated ML pipelines, ensemble AI models, and real-time AI predictions via Streamlit.",
        techStack: "Apache Airflow (Astronomer), MLflow, XGBoost/LightGBM, Streamlit",
        link: "https://github.com/Zaidi001/Astro-AI",
        open: ""
      },
      "Realtime Yelp Data Streaming AI Pipeline": {
        desc:
          "Built an end-to-end real-time data engineering pipeline to stream Yelp reviews using TCP/IP Sockets, process them with Apache Spark, apply AI-driven sentiment analysis via OpenAI LLM, and stream enriched data into Kafka and Elasticsearch for querying and visualization.",
        techStack: "Apache Spark, Kafka, Elasticsearch, OpenAI LLM",
        link: "https://github.com/Zaidi001/Realtime-Data-Streaming",
        open: ""
      }
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ Professional Projects</span>
        </div>
        <Carousel>
          {Object.keys(spotlightProjects).map((key, i) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={spotlightProjects[key]["image"]}
                alt={key}
              />
              <div className="caption-bg">
                <Carousel.Caption>
                  <h3>{spotlightProjects[key]["title"]}</h3>
                  <p>
                    {spotlightProjects[key]["desc"]}
                    <p className="techStack">
                      {spotlightProjects[key]["techStack"]}
                    </p>
                  </p>
                  <ExternalLinks
                    githubLink={spotlightProjects[key]["link"]}
                    openLink={spotlightProjects[key]["open"]}
                  ></ExternalLinks>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <ExternalLinks
                      githubLink={projects[key]["link"]}
                      openLink={projects[key]["open"]}
                    ></ExternalLinks>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;
