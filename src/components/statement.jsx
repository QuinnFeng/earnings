import "./statement.css";
import image from "../assets/Roadtex_Logo_RGB.svg";

function Statement() {
  const payStartDate = "11/03/2024";
  const payEndDate = "11/09/2024";
  const payDate = "11/22/2024";
  const voucherNo = 81796;
  const hours = 80;
  const amount = hours * 21;

  return (
    <>
      <section className="header">
        <div className="company">
          <div className="comp">
            <h3>New Jersey Roadtex Transportation</h3>
            <p>New Jersey Roadtex Transportation</p>
            <p>13 Jensen Dr</p>
            <p>Somerset, NJ 08873</p>
            <p>(908) 686-8200</p>
          </div>
          <div className="empl">
            <div className="logo">
              <p>Personal Earning Statement</p>
              <img src={image} alt="logo" className="logo-img" />
            </div>
            <div className="empl-info">
              <div className="title">
                <span style={{ marginRight: "5.5rem" }}>Empl#</span>
                <span style={{ marginRight: "2.5rem" }}>SS#</span>
                <span style={{ marginRight: "1.25rem" }}>Department</span>
                <span>Clock No.</span>
              </div>
              <div className="info">
                <span style={{ marginRight: "4.5rem" }}>103516</span>
                <span style={{ marginRight: "0.5rem" }}>XXX-XX-5201</span>
                <span>000054</span>
              </div>
            </div>
          </div>
        </div>
        <div className="pay-address">
          <div className="pay-period">
            <p>
              Pay Period: From: {payStartDate} To: {payEndDate}
            </p>
            <span style={{ marginRight: "2.5rem" }}>Pay Date: {payDate}</span>
            <span>Voucher No. {voucherNo}</span>
          </div>
          <div className="empl-address">
            <h3>Beihong Feng</h3>
            <p>21 Lake Ave. Apt 3B</p>
            <p>East Brunswick, NJ 08816</p>
          </div>
        </div>
      </section>
      <section className="earning">
        <hr />
        <div className="summary">
          <div className="title">
            <span style={{ marginRight: "3rem" }}>Earnings</span>
            <span style={{ marginRight: "9rem" }}>Memo</span>
            <span style={{ marginRight: "1.75rem" }}>Date</span>
            <span style={{ marginRight: "1.75rem" }}>Time In</span>
            <span style={{ marginRight: "1.75rem" }}>Time Out</span>
            <span style={{ marginRight: "1.75rem" }}>Rate</span>
            <span style={{ marginRight: "1.75rem" }}>Hours</span>
            <span>Amount</span>
          </div>
          <hr />
          <div className="earning-info">
            <span style={{ marginRight: "28.5rem" }}>Regular</span>
            <span style={{ marginRight: "2.25rem" }}>21.00</span>
            <span style={{ marginRight: "3rem" }}>{hours}</span>
            <span>{amount}</span>
          </div>
        </div>
        <div className="earning-summary">
          <div className="cell"></div>
          <div className="cell">
            <span className="left">Span 1</span>
            <span className="right">Span 2</span>
          </div>
          <div className="cell">Row 1, Col 3</div>
          <div className="cell"></div>
          <div className="cell">Row 2, Col 2</div>
          <div className="cell">Row 2, Col 3</div>
        </div>

        <div className="taxes">
          <div className="row header">
            <div className="cell">Taxes</div>
            <div className="cell">Exemptions</div>
            <div className="cell">Additional</div>
            <div className="cell">Amount</div>
            <div className="cell">YTD</div>
          </div>
          <div class="horizontal-line"></div>
          <div className="row">
            <div className="cell">Social Sec.</div>
            <div className="cell"></div>
            <div className="cell"></div>
            <div className="cell"></div>
            <div className="cell"></div>
          </div>

          <div className="row">
            <div className="cell">Bonus</div>
            <div className="cell">Year-End</div>
            <div className="cell">12/31/2024</div>
            <div className="cell">08:00 AM</div>
            <div className="cell">04:00 PM</div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Statement;
