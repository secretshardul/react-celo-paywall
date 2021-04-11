import React from 'react'
import Navbar from 'react-bootstrap/esm/Navbar'
import Container from 'react-bootstrap/esm/Container'
import Image from 'react-bootstrap/esm/Image'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'

function Article() {
    return (
        <>
            <Container fluid="sm">
                <Row className="justify-content-md-center mt-1 mb-3">
                    <Col md="auto"><Image src="https://www.businessinsider.in/photo/81140066/Master.jpg" fluid style={{ maxHeight: '500px' }} /></Col>
                </Row>
                <h2>NASA receives first weather reports from Perseverance rover on Mars at Jezero Crater</h2>

                <p>
                    Earlier this week, the NASA Perseverance rover reported on the weather from Mars’s Jezero
                    Crater for the first time,
                    providing an invaluable data set that will augment scientific understanding of the Martian
                    atmosphere and inform future
                    decisions about the rover’s mission.
                </p>
                <p>
                    The weather data will also help mission scientists decide when to launch Ingenuity, a
                    drone-like helicopter, that’s set
                    to take flight as early as Sunday.

                    NASA’s Perseverance rover may unlock mysteries behind weather on Mars
                    Perseverance, which was launched from Earth on July 30, arrived on the Red Planet in
                    mid-February and has been exploring
                    the Martian surface and collecting various types of data.
                </p>
                <p>
                    Among them is weather data, which scientists say will better shape what we know about
                    radiative processes and the cycle
                    of water in Mars’s atmosphere. There isn’t much of it, but water trapped beneath solid
                    carbon-dioxide ice caps at the
                    poles can be vaporized during the summertime and enter the atmosphere. Part of the plan with
                    Perseverance is to unlock
                    clues about what happens after.

                    Perseverance is in Mars’s Jezero Crater, a site NASA chose for the rover’s landing thanks to
                    its wide expanses, free of
                    obstacles, and the presence of a dried-up river delta from 3.5 billion years ago.
                </p>
                <p>
                    On Saturday and Sunday, the rover’s Mars Environmental Dynamics Analyzer, or MEDA, reported
                    a high temperature of
                    minus-7.6 degrees, and a low of minus-117.4 degrees. That rivals the coldest temperature
                    measured on Earth — minus-128.6
                    degrees observed at the Vostok weather station in Antarctica on July 21, 1983.

                    At least the winds on Mars were comparatively tepid, gusting to only 22 mph. But imagine
                    that wind chill …

                    The MEDA probes for temperature at four different levels — the surface, 2.76 feet, 4.76 feet
                    and 98.43 feet. While
                    barely touching the surface of the lower atmosphere, the MEDA is expected to help offer
                    insight into Mars’s radiation
                    budget. In other words, scientists will learn how sunlight striking the surface is
                    transformed into heat that enters and
                    cycles through the atmosphere.
                </p>
            </Container>
        </>
    )
}

export default Article
