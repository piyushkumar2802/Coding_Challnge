import React, { Component } from "react";
import { Image, Button } from "react-bootstrap";
import axios from "axios";
import Image1 from "../../assets/burger.jpeg";
import Image2 from "../../assets/coke.jpeg";
import Image3 from "../../assets/fries.jpeg";
import Image4 from "../../assets/pepsi.jpeg";

class About extends Component {
  constructor() {
    super();
    this.state = {
      list: null,
      name: null,
      image: null,
      price: null,
      images: {
        Fries: Image3,
        Hamburger: Image1,
        Coke: Image2,
        Pepsi: Image4,
      },
    };
  }
  componentDidMount() {
    axios.get("http://localhost:3000/restaurant").then((Res) => {
      Res.data.map((item, index) => {
        item.qty = 1;
        return item;
      });
      this.setState({ list: Res.data });
    });
  }

  AddPrice(index, price) {
    console.log(index);
    const { list } = this.state;
    const newprice = Number(list[index].qty) + 1;
    list[index].qty = newprice;
    this.setState({
      ...this.state,
      list: list,
    });
  }

  RemovePrice(index, price) {
    console.log(index);
    const { list } = this.state;
    const newprice = Number(list[index].qty) - 1;
    list[index].qty = newprice;
    this.setState({
      ...this.state,
      list: list,
    });
  }

  render() {
    return (
      <div>
        <section id="values" className="values">
          <div data-aos="fade-up col-md-12">
            {this.state.list ? (
              <div
                style={{
                  // display: "flex",
                  justifyContent: "space-between",
                }}
              >
                {this.state.list.map((item, i) => (
                  <div
                    className="row"
                    style={{
                      margin: "2% 0",
                    }}
                  >
                    {Array.from({ length: 1 }).map((_, index) => (
                      <div key={index}>
                        <div className="col-md-4"
                          style={{
                            display: "inline-block",
                            background: " beige",
                            paddingBottom: "30px",
                          }}
                        >
                          <Image src={this.state.images[item.name]} rounded  style={Imagesty} />
                          <h2>{item.name}</h2>
                          <p>Price {item.price * item.qty}</p>
                          <Button
                            variant="primary"
                            onClick={() => {
                              this.AddPrice(i, item.price);
                            }}
                            style={inbtn}
                          >
                            +
                          </Button>{" "}
                          <Button
                            variant="secondary"
                            onClick={() => {
                              this.RemovePrice(i, item.price);
                            }}
                            style={inbtn}
                          >
                            -
                          </Button>{" "}
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
  height:250
};

const inbtn = {
  padding:"5px 30px",
}

export default About;
