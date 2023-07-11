import "../styles/Home.css";
import "../styles/Const.css";


import img from "../assets/0.jpg";
import { Link } from "react-router-dom";
export function Home() {

  function boxes() {
    return (

      <div className="who d-flex wrap">
        <div className="img-cont flex-wrap">
          <img src={img} alt="" className="fill" />
          <h5 className="text-center">By WestDynamics</h5>
        </div>
        <div className="body flex-col h-100">
          <h2 className="header">Header</h2>
          <div className="content">
            This is the Content
            This is the Content
            This is the Content
            This is the Content
            This is the Content
          </div>
          <div className="footer d-flex  ">
            <Link to="/app/about" className='d-flex   link'>
              <i class="bi bi-arrow-down-right-circle text-info" style={{ fontSize: 40 }}>
              </i>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // return arr

  return (
    <div className="home-cont d-flex wrap">
      {introCards()}
      {/* {boxes()}
      {boxes()}
      {boxes()}
      {boxes()}*/}
      {boxes()}
    </div>
  );



  function introCards() {
    return (
      <div className="intro-cont d-flex wrap j-sa w-100">
        <div className="left-card d-flexd-flex wrap">
          <h2>This is The design Header</h2>
          <p>This is the lispum text theat
            this ti sjbo mnboi djwqu wq
            this ti sjbo mnboi djwqu wq
            this ti sjbo mnboi djwqu wq
          </p>
          <Link to="/app/about" className='d-flex center-content'>
            <p className="m-auto-vert">Find Out More</p>
            <i class="bi bi-arrow-down-right-circle text-info">
            </i>
          </Link>

        </div>
        <div className="right-card d-flex wrap center-content">
          <h2>This is The design Header</h2>
          <p>This is the lispum text theat
            this ti sjbo mnboi djwqu wq
            this ti sjbo mnboi djwqu wq
            this ti sjbo mnboi djwqu wq
          </p>
          <Link to="/app/about" className='d-flex center-content'>
            <p className="m-auto-vert">See More</p>  <i class="bi bi-arrow-down-right-circle text-info">
            </i>
          </Link>
        </div>
      </div>
    );
  }
}

