import "./LastFooter.css";
import $ from "jquery";

const LastFooter = () => {
  $("#toTop").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 100);
  });
  return (
    <>
      <div className="write__footer">
        <div className="container2 ">
            <h6 href="w" className="scroll-to-top">
            <span id="toTop">UP&#8593;</span>
            <span className=""></span>
          </h6>
        </div>
      </div>
    </>
  );
};

export default LastFooter;
