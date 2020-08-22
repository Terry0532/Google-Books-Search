import React from "react";
import API from "../utils/API";
import { Table, Container, Row, Col, ToggleButtonGroup, ToggleButton } from "react-bootstrap";
import Message from "../components/Message";
import { Bar } from 'react-chartjs-2';

class TopSaved extends React.Component {
    state = {
        topSavedList: [],
        toggle: "Chart",
        chartData: {}
    }

    componentDidMount() {
        API
            .topSaved()
            .then(data => {
                this.setState({ topSavedList: data.data });
                const chartData = {
                    labels: [],
                    datasets: [
                        {
                            label: "times saved",
                            backgroundColor: "rgba(75,192,192,1)",
                            borderColor: "rgba(0,0,0,1)",
                            borderWidth: 2,
                            data: []
                        }
                    ]
                }
                for (let index = 0; index < data.data.length; index++) {
                    chartData.labels.push(data.data[index].title);
                    chartData.datasets[0].data.push(data.data[index].times);
                }
                this.setState({ chartData: chartData });
            })
            .catch(err => {
                const info = [err.message, "danger", "animate__shakeX", "animate__fadeOut"]
                Message(info);
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
                            }
                        }}
                    />
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
                                                                : <img src={book.thumbnail} alt={book.title} />
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