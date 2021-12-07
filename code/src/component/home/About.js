import React, { Component } from "react";
import { Image, Button } from "react-bootstrap";
import axios from "axios";

class About extends Component {
  constructor() {
    super();
    this.state = {
      list: null,
      name: null,
      image: null,
      price: null,
    };
  }
  componentDidMount() {
    axios.get("http://localhost:3000/restaurant").then((Res) => {
      this.setState({ list: Res.data });
    });
  }

  render() {
    return (
      <div>
        <section id="values" className="values">
          <div className="container" data-aos="fade-up">
            {this.state.list ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                {this.state.list.map((item, i) => (
                  <div
                    className="row"
                    style={{
                      margin: "2%",
                      padding: "5% 5%",
                      background: " beige",
                    }}
                  >
                    {Array.from({ length: 1 }).map((_, index) => (
                      <div className="col-lg-3">
                        <div
                          className="box"
                          data-aos="fade-up"
                          data-aos-delay="200"
                          style={{
                            display: "inline-block",
                          }}
                        >
                          <Image src={item.image} rounded style={Imagesty} />
                          <h2>{item.name}</h2>
                          <p>Price {item.price}</p>
                          <Button
                            variant="primary"
                            onclick={() => {
                              this.setState({
                                price: item.price.value + item.price.value,
                              });
                            }}
                          >
                            +
                          </Button>{" "}
                          <Button variant="secondary">-</Button>{" "}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ) : (
              <p>please wait....</p>
            )}
          </div>
        </section>
      </div>
    );
  }
}
const Imagesty = {
  width: "100%",
};

export default About;
