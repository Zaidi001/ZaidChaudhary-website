import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
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
    const one = (
      <p>
        I am currently a <b>Data & Automation Engineer</b> at 
<a href="https://www.cushmanwakefield.com/"> Cushman & Wakefield</a> for 
<a href="https://www.aboutamazon.com/"> Amazon</a>, working on large-scale automation and predictive systems. 
Previously, I worked as a <b>Data Engineer</b> at 
<a href="https://jerseystem.org/"> Jersey Stem</a>, and I have also delivered AI-driven projects as a 
<b>Freelance Data Analyst</b> on <a href="https://www.fiverr.com/"> Fiverr</a>.
      </p>
    );
    const two = (
      <p>
        Outside of work, I'm interested in following the developments of
        science. I also play a lot of video games.
      </p>
    );

    const tech_stack = [
      "Python",
      "SQL",
      "AWS",
      "Java",
      "Databricks",
      "Snowflake"
    ];

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ About Me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Here are some technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[two]}
            </div>
            <div className="about-image">
              <img alt="Gazi Jarin" src={"/assets/zaid.jpeg"} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
