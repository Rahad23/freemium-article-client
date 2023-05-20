import React from "react";

const UpvoteDownvote = () => {
  return (
    <div className="inline-flex mr-tiny">
      <div
        className="inline-flex border-radius-pill align-center"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
      >
        <div className="box" tabIndex="0">
          <div className="relative">
            <button
              className="click-wrapper border-top-left-radius-pill border-bottom-left-radius-pill align-center justify-content-center whitespace-nowrap user-select-none display-inline-flex tap-highlight-white text-align-center cursor-pointer hover:bg-darken"
              aria-label="6 upvotes"
              aria-disabled="false"
              tabIndex="0"
            >
              <div className="relative display-inline-flex">
                <div className="box">
                  <span className="inline-block w-20 h-20">
                    <span className="icon">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 4 3 15h6v5h6v-5h6z"
                          className="icon_svg-stroke icon_svg-fill"
                          strokeWidth="1.5"
                          stroke="#666"
                          fill="none"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </span>
                </div>
              </div>
              <div className="text overflow-hidden display-inline-flex ml-tiny min-h-20 color-gray min-w-20">
                <span
                  className="text visibility-hidden display-inline-flex"
                  style={{ fontSize: "13px", opacity: 0 }}
                >
                  9
                </span>
                <span
                  className="text whitespace-nowrap display-inline-flex align-center justify-content-center"
                  style={{
                    fontSize: "13px",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "100%",
                  }}
                >
                  6
                </span>
              </div>
            </button>
          </div>
        </div>
        <div className="box border-right border-width-regular h-20">
          <div className="box" tabIndex="0">
            <div className="relative">
              <button
                className="click-wrapper border-top-right-radius-pill border-bottom-right-radius-pill align-center justify-content-center whitespace-nowrap user-select-none display-inline-flex tap-highlight-white text-align-center cursor-pointer hover:bg-darken"
                aria-label="Downvote"
                aria-disabled="false"
                tabIndex="0"
              >
                <span className="inline-block w-20 h-20">
                  <span className="icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 15V3l-2.12 2.12 5.25 5.25a1 1 0 0 1-1.41 1.41L10.12 12H20a1 1 0 0 1 0 2h-8.88l2.87 2.87a1 1 0 0 1-1.41 1.41L12 15z"
                        fillRule="evenodd"
                      />
                    </svg>
                  </span>
                </span>
              </button>
              <button
                className="click-wrapper border-top-left-radius-pill border-bottom-left-radius-pill align-center justify-content-center whitespace-nowrap user-select-none display-inline-flex tap-highlight-white text-align-center cursor-pointer hover:bg-darken"
                aria-label="Upvote"
                aria-disabled="false"
                tabIndex="0"
              >
                <span className="inline-block w-20 h-20">
                  <span className="icon">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 15V3l2.12 2.12 5.25 5.25a1 1 0 0 0 1.41-1.41L17.88 12H8a1 1 0 0 0 0 2h8.88l-2.87 2.87a1 1 0 0 0 1.41 1.41L16 15z"
                        fillRule="evenodd"
                      />
                    </svg>
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpvoteDownvote;
