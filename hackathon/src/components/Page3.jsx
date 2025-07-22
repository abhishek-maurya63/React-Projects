import "../scss/Page 3/Page3.scss";
import can from "../assets/can.webp";
import forward from "../assets/forward-arrow.svg";
import backward from "../assets/backward-arrow.svg";
const Page3 = () => {
  return (
    <section className="section-3">
      <div className="text">
        <h1>our products</h1>
      </div>
      <div className="product">
        <div className="prod prod-1">
          <img src={can} alt="" />
        </div>
        <div className="prod prod-2">
          <div className="prodDescription prodDescription-1">
            <h1>Serving </h1>
            <p>25mg CBD</p>
            <p>12FL OZ (355ml) </p>
          </div>
          <img src={can} alt="" />
          <div className="prodDescription prodDescription-2">
            <h1>description </h1>
            <p>
              {" "}
              CBD Lemonade is just what you'd expect from a classic summertime
              lemonade but with our one-of-a sparkling twist.{" "}
            </p>
          </div>
        </div>
        <div className="prod prod-3">
          <img src={can} alt="" />
        </div>
      </div>
      <div className="cta">
        <div className="nav-arrows forward">
          <img src={backward} alt="" />
        </div>

        <button className="buy">details</button>

        <div className="nav-arrows backward">
          <img src={forward} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Page3;
