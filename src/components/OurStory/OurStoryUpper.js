import React from "react";

function OurStoryUpper(props) {
  return (
    <div className="upper">
      <div className="imgWrap border" style={{ overflow: "hidden" }}>
        <img
          src="https://bloximages.chicago2.vip.townnews.com/tdn.com/content/tncms/assets/v3/editorial/e/99/e99e2fda-0f64-11e4-aa88-001a4bcf887a/53caa239f13a0.preview-699.jpg?crop=679%2C509%2C10%2C0&resize=1200%2C900&order=crop%2Cresize"
          alt="lady holding soap"
          style={{ height: "100%", transform: "translateX(-140px)" }}
        />
      </div>
      <div className="textWrap">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin aliquam
          felis ligula, quis vehicula est sodales id. Integer sit amet massa sit
          amet risus vulputate maximus. Donec congue leo fringilla ornare
          venenatis. Donec ut urna a neque dapibus malesuada vel in lectus.
          Integer lacinia augue sit amet eros pretium sodales. ex.
        </p>
        <p>
          Phasellus non est nulla. Nunc egestas libero at diam aliquet pharetra.
          Morbi tempor enim id lacus dapibus auctor. Nulla tristique lacus et
          aliquet condimentum. Proin dignissim vitae massa fermentum eleifend.
          Proin condimentum urna non eros cursus fermentum. Morbi sagittis lacus
          dapibus, pharetra libero vel, dictum sem. Sed et dui euismod, egestas
          est quis, interdum
        </p>
      </div>
    </div>
  );
}

export default OurStoryUpper;
