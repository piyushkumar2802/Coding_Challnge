import React, { Component } from 'react';

class Thanku extends Component {
    render() {
        return (
            <div>
        <section style={{margin:"9% 0"}}>
          <div className="container" data-aos="fade-up">
            <div className="row" style={{
                marginTop:"5%"
            }}>
              <div className="col-lg-12" style={{
                  marginBottom: "5%",
                  background: "#ccc"
              }}>
                <h2 style={{
                    fontSize:"20px",
                    margin:"2%"
                }}>Checkout</h2>
                <p style={{
                    textAlign: "initial",
                    fontSize:"16px",
                    marginLeft:"5%"
                }}>Thank you for Your order.</p>
              </div>

            </div>
          </div>
        </section>
      </div>
        );
    }
}

export default Thanku;