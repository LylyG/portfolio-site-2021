import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';

const Projects = () => {
  const { projects } = useContext(PortfolioContext);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Projects" />
          {projects.map((project) => {
            const { title, info, info2, info3, blurb, blurb2, blurb3, url, repo, img, id } = project;

            return (
              <Row key={id}>
                <Col lg={4} sm={12}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <div className="project-wrapper__text">
                      <h3 className="project-wrapper__text-title">{title || 'Context'}</h3>
                      <div>
                        <p><b>Audience</b><br></br>
                            My main "clients" are the students, faculty, and staff of the College of Engineering. I typically work on a lot of administrative
                            interfaces for bespoke SPAs. 
                        </p>
                        <p>
                          <b>Design + Philosophy</b><br></br>
                           When I first started at NC State University, my team had a number of old web applications that needed updating.
                           We needed something to apply systematically as we tackled one by one. The university had been a "Google campus"
                           for a few years, so we looked into <a href="https://material.io/design" target="_blank">Material Design.</a>
                           Everyone on campus was used to using Google apps, so we decided to apply those design principles moving forward
                           for ease of use. <br></br>
                           Since we were also interested in using Vue, we were lucky to find the <a href="https://vuetifyjs.com/en/" 
                           target="_blank">Vuetify UI library.</a> I create a PR with a layout using Vuetify components and work with the
                           back-end developers to add more complex functionality.<br></br>
                           The team I work on generally follows Agile principles, specifically Scrum. We work in iterative sprints, roughly 
                           two weeks long. Projects are tracked using a Github kanban board. Pull requests are scoped to a manageable chunk 
                           of work, with the goal of deploying it at the end of the sprint. Our group is small, so cross-functional roles 
                           can get messy.
                        </p>
                        <p>
                          <b>Web Stack</b><br></br>
                          Vue | PHP | Laravel <br></br>
                          The project code lives in the university's private Github enterprise account.  
                        </p>
                      </div>
                    </div>

                    <div className="project-wrapper__text">
                      <h3 className="project-wrapper__text-title">{title || 'Project Title'}</h3>
                      <div>
                        <p>
                          <b>{info}</b><br></br>
                          {blurb}
                        </p>
                        <p>
                          <b>{info2}</b><br></br>
                          {blurb2}
                        </p><p>
                          <b>{info3}</b><br></br>
                          {blurb3}
                        </p>
                      </div>

                      {repo && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn text-color-main"
                          href={repo}
                        >
                          Source Code
                        </a>
                      )}
                      </div>
                  </Fade>
                </Col>
              </Row>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
