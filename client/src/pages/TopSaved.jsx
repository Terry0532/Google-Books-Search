import React from "react";
import API from "../utils/API";
import { Table, Container, Row, Col, ToggleButtonGroup, ToggleButton, Spinner } from "react-bootstrap";
import Message from "../components/Message";
// import { Bar } from 'react-chartjs-2';
import Lazyload from "react-lazyload";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

class TopSaved extends React.Component {
    state = {
        topSavedList: [],
        toggle: "Chart",
        chartData: {},
        height: 0,
        width: 0,
        chart: []
    }

    componentDidMount() {
        API
            .topSaved()
            .then(data => {
                this.setState({ topSavedList: data.data });

                // const chartData = {
                //     labels: [],
                //     datasets: [
                //         {
                //             label: "times saved",
                //             backgroundColor: "rgba(75,192,192,1)",
                //             borderColor: "rgba(0,0,0,1)",
                //             borderWidth: 2,
                //             data: []
                //         }
                //     ]
                // }
                // for (let index = 0; index < data.data.length; index++) {
                //     chartData.labels.push(data.data[index].title);
                //     chartData.datasets[0].data.push(data.data[index].times);
                // }
                // this.setState({ chartData: chartData });

                const chart = [];
                for (let index = 0; index < data.data.length; index++) {
                    const obj = {
                        title: "",
                        TimesSaved: 0
                    }
                    obj.title = data.data[index].title;
                    obj.TimesSaved = data.data[index].times;
                    chart.push(obj);
                }
                this.setState({ chart: chart });

            })
            .catch(err => {
                const info = [err.message, "danger", "animate__shakeX", "animate__fadeOut"]
                Message(info);
            });
        this.setState({ height: window.screen.height - 130, width: window.screen.width });
        window.addEventListener("resize", () => {
            this.setState({ height: window.screen.height - 130, width: window.screen.width });
        });
    }

    render() {
        if (this.state.toggle === "Chart") {
            return (
                <div>

                    <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                        <ToggleButton value={1}>Chart</ToggleButton>
                        <ToggleButton value={2} onClick={() => this.setState({ toggle: "Details" })}>Details</ToggleButton>
                    </ToggleButtonGroup>

                    <BarChart width={this.state.width} height={this.state.height} data={this.state.chart}
                        margin={{ top: 15, right: 30, left: 10, bottom: 0 }}>
                        <XAxis dataKey="title" tick={<></>} />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="TimesSaved" fill="#82ca9d" />
                    </BarChart>

                    {/* <div className="canvas-container" style={{ position: "relative", height: this.state.height, width: this.state.width }}>
                        <Bar
                            data={this.state.chartData}
                            options={{
                                title: {
                                    display: true,
                                    text: 'Ranking'
                                },
                                tooltips: {
                                    mode: 'index',
                                    intersect: false
                                },
                                responsive: true,
                                layout: {
                                    padding: {
                                        left: 50,
                                        right: 50,
                                        top: 0,
                                        bottom: 50
                                    }
                                },
                                scales: {
                                    yAxes: [{
                                        ticks: {
                                            beginAtZero: true
                                        }
                                    }]
                                },
                                maintainAspectRatio: false
                            }}
                        />
                    </div> */}

                </div>
            );
        } else {
            return (
                <div>
                    <ToggleButtonGroup type="radio" name="options" defaultValue={2}>
                        <ToggleButton value={1} onClick={() => this.setState({ toggle: "Chart" })}>Chart</ToggleButton>
                        <ToggleButton value={2}>Details</ToggleButton>
                    </ToggleButtonGroup>
                    <Container fluid>
                        <Row>
                            <Col></Col>
                            <Col md="8">
                                <Table striped bordered hover responsive>
                                    <tbody>
                                        {this.state.topSavedList.map(book => (
                                            <React.Fragment key={book.title}>
                                                <tr>
                                                    <th>{book.publishedDate}</th>
                                                    <th>{book.title}</th>
                                                    <th>{book.times} Times Saved</th>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        {
                                                            book.thumbnail === null
                                                                ? <p>No image</p>
                                                                : <Lazyload throttle={400} placeholder={<div style={{ paddingLeft: "45px" }}><Spinner variant="primary" animation="border" size="lg" /></div>} once={true}><img src={book.thumbnail} alt={book.title} /></Lazyload>
                                                        }
                                                    </td>
                                                    <td>
                                                        {
                                                            book.description === null
                                                                ? <p>No description</p>
                                                                : <p>{book.description}</p>
                                                        }
                                                    </td>
                                                    <td>
                                                        <a href={book.infoLink} target="_blank" rel="noopener noreferrer">Link</a>
                                                    </td>
                                                </tr>
                                            </React.Fragment>
                                        ))}
                                    </tbody>
                                </Table>
                            </Col>
                            <Col></Col>
                        </Row>
                    </Container>
                </div>
            );
        }
    }
}

export default TopSaved;