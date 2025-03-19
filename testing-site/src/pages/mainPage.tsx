import { Container, Row, Col, Image } from 'react-bootstrap';

function MainPage() {
    return (
        <Container>
            <Row className="my-5">
                <Col>
                    <h1>Welcome to My Portfolio!</h1>
                </Col>
            </Row>
            <Row>
                <Col md={3}>
                    <Image src="src/assets/selfie.jpg" roundedCircle fluid />
                </Col>
                <Col md={9}>
                    <h2>About Me</h2>
                    <p>
                        Hello! I am Alice Ferreira, a passionate developer with experience in Back-End with Python and Django Framework.
                        I am also currently working with Front-End technologies like ReactJS. <br/>
                        I enjoy creating innovative solutions and working on exciting projects. I take pride being a part of a team and contributing to the success of a project.
                        In my free time, I love to reasearch for world curiosites and general oddities. I also enjoy playing video games and watching movies.
                    </p>
                </Col>
            </Row>
            <Row className="my-5">
                <Col style={{textAlign: "left"}}>
                    <h2>Skills</h2>
                    <ul>
                        <li>Python</li>
                        <ul>
                            <li>Django Framework</li>
                            <li>Experience with REST APIs</li>
                            <li>Undergratuate Thesis was developed on Django</li>
                        </ul>
                        <li>ReactJS</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>SQL</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}

export default MainPage;