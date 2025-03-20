import { useEffect } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

function MainPage() {
    useEffect(() => {
        const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
        let konamiCodePosition = 0;

        function handleKeyDown(event: { keyCode: number; }) {
            if (event.keyCode === konamiCode[konamiCodePosition]) {
                konamiCodePosition++;
                if (konamiCodePosition === konamiCode.length) {
                    executeKonamiCode();
                    konamiCodePosition = 0;
                }
            } else {
                konamiCodePosition = 0;
            }
        }

        function executeKonamiCode() {
            alert('Konami Code Activated!');
        }

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <Container>
            <Row className="my-5">
                <Col>
                    <h1>Welcome to My Portfolio!</h1>
                </Col>
            </Row>
            <Row className="align-items-center">
                <Col md={3}>
                    <Image src="src/assets/selfie.jpg" roundedCircle fluid />
                </Col>
                <Col md={9}>
                    <h2>About Me</h2>
                    <p style={{textAlign: "left"}}>
                        Hello! I am Alice Ferreira, a passionate developer with experience in Back-End with Python and Django Framework.
                        I am also currently working with Front-End technologies like ReactJS. <br/>
                        I have previously worked in projects involving game development for educational and health purposes, as well as web systems
                        for managing data and information on public workers' documents and scanned legal case files. <br/>
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
                            <li>Intergration and communication with Unreal Engine 4</li>
                            <li>Experience with PANDAS, Matplotlib, and Beautiful Soup</li>
                        </ul>
                        <li>JavaScript/TypeScript</li>
                        <ul>
                            <li>Currently Learning</li>
                            <li>Intermediate experience in scripting and syntax</li>
                        </ul>
                        <li>ReactJS</li>
                        <ul>
                            <li>Currently Learning</li>
                            <li>Learned on a online course (UDemy)</li>
                            <li>Project setup with Vite</li>
                            <li>Usage of main Hooks</li>
                            <li>Connection and data consuming with APIs</li>
                            <li>Experience with React Router</li>
                            <li>Experience with React Bootstrap</li>
                        </ul>
                        <li>HTML/CSS</li>
                        <ul>
                            <li>Intermediate experience with usage and scripting</li>
                            <li>Experience with Bootstrap</li>
                        </ul>
                        <li>SQL</li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}

export default MainPage;