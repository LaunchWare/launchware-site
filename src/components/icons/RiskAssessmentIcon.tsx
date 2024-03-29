import React from "react";

export const RiskAssessmentIcon = ({
  className = "",
  width = "",
}: {
  className?: string;
  width?: string;
}) => {
  return (
    <svg
      id="risk-assessment-icon"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      viewBox="0 0 104 104"
    >
      <defs>
        <style>
          {`
            .risk-assessment-1 {
              fill: #fff;
            }
            .risk-assessment-2, .risk-assessment-3 {
              fill:none;
            }
            .risk-assessment-2, .risk-assessment-3, .risk-assessment-4 {
              strokeLinecap: round;
              strokeLinejoin: round;
              strokeWidth: 2px;
            }
            .risk-assessment-2, .risk-assessment-4 {
              stroke:#000;
            }
            .risk-assessment-3 {
              stroke:#fff;
            }
          `}
        </style>
      </defs>
      <g>
        <g>
          <rect
            className="risk-assessment-2"
            x="17.621"
            y="25.135"
            width="54.286"
            height="56.689"
            rx="6.215"
            ry="6.215"
          />
          <path
            className="risk-assessment-4"
            d="m50.564,21.277c0-3.203-2.6-5.796-5.802-5.796s-5.802,2.594-5.802,5.796h-6.52v7.869h24.651v-7.869h-6.526Z"
          />
        </g>
        <polyline className="risk-assessment-2" points="26.945 42.638 29.348 45.041 35.049 39.34" />
        <line className="risk-assessment-2" x1="40.871" y1="42.459" x2="61.288" y2="42.459" />
        <polyline className="risk-assessment-2" points="26.945 53.829 29.348 56.232 35.049 50.531" />
        <line className="risk-assessment-2" x1="40.871" y1="54.704" x2="61.288" y2="54.704" />
        <line className="risk-assessment-2" x1="40.871" y1="66.95" x2="55.888" y2="66.95" />
        <g>
          <line className="risk-assessment-2" x1="27.971" y1="63.924" x2="34.023" y2="69.976" />
          <line className="risk-assessment-2" x1="34.023" y1="63.924" x2="27.971" y2="69.976" />
        </g>
      </g>
      <g>
        <path
          className="risk-assessment-4"
          d="m67.737,64.584l-9.65,16.714c-1.853,3.21.463,7.222,4.17,7.222h19.299c3.706,0,6.023-4.012,4.17-7.222l-9.65-16.714c-1.853-3.21-6.486-3.21-8.339,0Z"
        />
        <g>
          <line className="risk-assessment-3" x1="71.907" y1="70.809" x2="71.907" y2="76.687" />
          <circle className="risk-assessment-1" cx="71.907" cy="81.171" r="1.921" />
        </g>
      </g>
    </svg>
  );
};
