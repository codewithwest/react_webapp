import "../../styles/About.css";
import "../../styles/Const.css";

import { Link } from "react-router-dom";
import { main_logo } from "../../functions/imageProvider";
export default function Home() {

  return (
    <div className="home-cont d-flex wrap">

      {/* {vkTrainerAnimation()} */}
      {/* {introCards()} */}
      <div className="company-desc w-100 d-flex wrap">
      
      { divOne()}
        {divTwo()}
        {arrowPictures()}
        </div>
      {/* {floatingBtns()} */}

      <h2 className="m-auto our-partners-header">Our Partners</h2>
      <div className="our-partners d-flex wrap w-100">
        {ourPartners('name', main_logo)}
        {ourPartners('name', main_logo)}
        {ourPartners('name', main_logo)}
        {ourPartners('name', main_logo)}
      </div>
    </div>
  );



  function divOne() {
    return (
        <div className="div-one flex-col w-100">
          <h4 className="text-center w-100">West Dynamics</h4>
          <div className=" cards d-flex wrap">
            <div className="">
              <img src={main_logo} alt="" className="w-100" />
              <h5 className="text-center">This is Header</h5>
              <p>
                This is it mate
                This is it mate
                 
                This is it mate
                This is it mate
                This is it mate
                This is it mate
                This is it mate
                This is it mate
              </p>
              <div className="d-flex center-content">
                Crazy Sent
              </div>
            </div>
            <div className="">
              <img src={main_logo} alt="" className="w-100" />
            </div>
          </div>
        </div>
    );
  }
    function divTwo() {
    return (
      <div className="div-two d-flex wrap w-100">
        <p>
          <span>Mission</span>

          This is the first paragrains
          This is the first paragrains
          This is the first paragrains
          This is the first paragrains
          This is the first paragrains
          This is the first paragrains

        </p>
        <p>
          <span>Mission</span>
          This is the first paragrains
          This is the first paragrains
          This is the first paragrains
          This is the first paragrains
          This is the first paragrains
          This is the first paragrains
        </p>
        <p>
          <span>Mission</span>

          This is the first paragrain
          This is the first paragrain
          This is the first paragrain
          This is the first paragrain
          This is the first paragrain
          </p>
        <p>
          <span>Mission</span>
          This is the first paragrains
          This is the first paragrains
          This is the first paragrains
          This is the first paragrains
          This is the first paragrains
          This is the first paragrains
          This is the first paragr
        </p>
         </div>
    );
  }
  function arrowPictures(params) {
    return (
      <div className="arrow-cont d-flex">
        <div className="arrow-right">
        </div>
        <div className="arrow-down"></div>
        <div className="arrow-left"></div>
        <div className="arrow-up"></div>

      </div>
    );
  }
  function ourPartners(name, image) {
    return (

      <div className="partner-cont flex-col">
        <img src={image} alt="" className="m-auto" />
        <h4 className="m-auto">{name}</h4>
      </div>
    );
  }

}
