import React from "react";

const PricingCard = () => {
  return (
    <>
      <div className="container-fluid page-header">
        <div className="container">
          <div
            className="d-flex flex-column justify-content-center"
            style={{ minHeight: "300px" }}
          >
            <h3 className="display-4 text-white text-uppercase">
              Fee Structure
            </h3>
            <div className="d-inline-flex text-white">
              <p className="m-0 text-uppercase">
                <a className="text-white" href="/">
                  Home
                </a>
              </p>
              <i className="fa fa-angle-double-right pt-1 px-3"></i>
              <p className="m-0 text-uppercase">Fee Structure</p>
            </div>
          </div>
        </div>
      </div>

      <div class="container pt-5 pb-3">
        <div class="text-center mb-5">
          <h1>
            Monthly Fee Packages of{" "}
            <span style={{ color: "#006DAF" }}>Online Quran Classes</span>{" "}
          </h1>
        </div>
      </div>

      <div className="pricingCards">
        <div className="card">
          <h1>4 classNamees/Month</h1>
          <h2>60 minutes className</h2>
          <p>One to One className</p>
          <ul>
            <li>USD $30.00 only/month</li>
            <li>CAD $30.00 only/month</li>
            <li>UK £20.00 only/month</li>
            <li>AUD $30.00 only/month</li>
            <li>EURO €20.00 only/month</li>
          </ul>
          <button>Get Admission Now</button>
        </div>
        <div className="card">
          <h1>8 classNamees/Month</h1>
          <h2>60 minutes className</h2>
          <p>One to One className</p>
          <ul>
            <li>USD $35.00 only/month</li>
            <li>CAD $35.00 only/month</li>
            <li>UK £22.00 only/month</li>
            <li>AUD $35.00 only/month</li>
            <li>EURO €22.00 only/month</li>
          </ul>
          <button>Get Admission Now</button>
        </div>
        <div className="card">
          <h1>12 classNamees/Month</h1>
          <h2>60 minutes className</h2>
          <p>One to One className</p>
          <ul>
            <li>USD $40.00 only/month</li>
            <li>CAD $40.00 only/month</li>
            <li>UK £25.00 only/month</li>
            <li>AUD $40.00 only/month</li>
            <li>EURO €25.00 only/month</li>
          </ul>
          <button>Get Admission Now</button>
        </div>
        <div className="card">
          <h1>20 classNamees/Month</h1>
          <h2>60 minutes className</h2>
          <p>One to One className</p>
          <ul>
            <li>USD $100.00 only/month</li>
            <li>CAD $100.00 only/month</li>
            <li>UK £60.00 only/month</li>
            <li>AUD $100.00 only/month</li>
            <li>EURO €60.00 only/month</li>
          </ul>
          <button>Get Admission Now</button>
        </div>
      </div>

      <div class="container pt-5 pb-3">
        <div class="text-center mb-5">
          <h1>
            Monthly Family Package{" "}
            <span style={{ color: "#006DAF" }}>(Special Offer)</span>{" "}
          </h1>
        </div>
      </div>

      <div className="pricingCards">
        <div className="card">
          <h1>4 classNamees/Month</h1>
          <h2>60 minutes className</h2>
          <p>One to One className</p>
          <ul>
            <li>USD $50.00 only/month</li>
            <li>CAD $50.00 only/month</li>
            <li>UK £35.00 only/month</li>
            <li>AUD $50.00 only/month</li>
            <li>EURO €35.00 only/month</li>
          </ul>
          <button>Get Admission Now</button>
        </div>
        <div className="card">
          <h1>8 classNamees/Month</h1>
          <h2>60 minutes className</h2>
          <p>One to One className</p>
          <ul>
            <li>USD $60.00 only/month</li>
            <li>CAD $60.00 only/month</li>
            <li>UK £40.00 only/month</li>
            <li>AUD $60.00 only/month</li>
            <li>EURO €40.00 only/month</li>
          </ul>
          <button>Get Admission Now</button>
        </div>
        <div className="card">
          <h1>12 classNamees/Month</h1>
          <h2>60 minutes className</h2>
          <p>One to One className</p>
          <ul>
            <li>USD $70.00 only/month</li>
            <li>CAD $70.00 only/month</li>
            <li>UK £50.00 only/month</li>
            <li>AUD $70.00 only/month</li>
            <li>EURO €50.00 only/month</li>
          </ul>
          <button>Get Admission Now</button>
        </div>
        <div className="card">
          <h1>20 classNamees/Month</h1>
          <h2>60 minutes className</h2>
          <p>One to One className</p>
          <ul>
            <li>USD $100.00 only/month</li>
            <li>CAD $100.00 only/month</li>
            <li>UK £60.00 only/month</li>
            <li>AUD $100.00 only/month</li>
            <li>EURO €60.00 only/month</li>
          </ul>
          <button>Get Admission Now</button>
        </div>
      </div>
    </>
  );
};

export default PricingCard;
