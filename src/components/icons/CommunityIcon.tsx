import React from "react";

export const CommunityIcon = ({
  className = "",
  width = "",
}: {
  className?: string;
  width?: string;
}) => {
  return (
    <svg
      id="community-icon"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 104 104"
      width={width}
      height={width}
    >
      <defs>
        <style>{`
          .community-icon-1, .community-icon-2 {
            fill: none;
          }
          .community-icon-1, .community-icon-2, .community-icon-3 {
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-width: 2px;
          }
          .community-icon-1, .community-icon-3 {
            stroke: #000000;
          }
          .community-icon-2 {
            stroke: #FFFFFF;
          }
          .community-icon-3 {
            fill: #000000;
          }
        `}</style>
      </defs>
      <g>
        <g>
          <path d="m40.332,36.546l.678,4.36h-13.042l.678-4.36c.164-1.195,1.185-2.084,2.39-2.084h6.902c1.207,0,2.228.888,2.393,2.084Z" />
          <path d="m36.492,27.812c.651.561,1.063,1.393,1.063,2.32,0,.134-.01.268-.027.399-.194,1.504-1.481,2.667-3.039,2.667-1.694,0-3.066-1.374-3.066-3.066,0-.161.011-.318.034-.471.228-1.47,1.498-2.594,3.031-2.594.119,0,.236.008.351.019.628.073,1.198.333,1.652.726Z" />
        </g>
        <path
          className="community-icon-1"
          d="m47.995,34.389c.009-.131.009-.271.009-.402,0-7.728-6.259-13.987-13.987-13.987s-13.987,6.259-13.987,13.987,6.259,13.987,13.987,13.987"
        />
        <polyline className="community-icon-1" points="47.995 34.389 48.004 34.389 48.004 47.973 34.017 47.973" />
      </g>
      <path
        className="community-icon-3"
        d="m56.005,34.389h-.009v13.584s13.987,0,13.987,0c7.728,0,13.987-6.259,13.987-13.987s-6.259-13.987-13.987-13.987-13.987,6.259-13.987,13.987c0,.131,0,.271.009.402Z"
      />
      <g>
        <g>
          <path d="m75.353,72.573l.678,4.36h-13.042s.678-4.36.678-4.36c.164-1.195,1.185-2.084,2.39-2.084h3.452s3.45,0,3.45,0c1.207,0,2.228.888,2.393,2.084Z" />
          <path d="m71.513,63.839c.651.561,1.063,1.393,1.063,2.32,0,.134-.01.268-.027.399-.194,1.504-1.481,2.667-3.039,2.667-1.694,0-3.066-1.374-3.066-3.066,0-.161.011-.318.034-.471.228-1.47,1.498-2.594,3.031-2.594.119,0,.236.008.351.019.628.073,1.198.333,1.652.726Z" />
        </g>
        <path
          className="community-icon-1"
          d="m56.005,69.611c-.009.131-.009.271-.009.402,0,7.728,6.259,13.987,13.987,13.987s13.987-6.259,13.987-13.987-6.259-13.987-13.987-13.987"
        />
        <polyline className="community-icon-1" points="56.005 69.611 55.996 69.611 55.996 56.027 69.983 56.027" />
      </g>
      <g>
        <path d="m39.86,72.101l.678,4.36h-13.042s.678-4.36.678-4.36c.164-1.195,1.185-2.084,2.39-2.084h3.452s3.45,0,3.45,0c1.207,0,2.228.888,2.393,2.084Z" />
        <path d="m36.02,63.367c.651.561,1.063,1.393,1.063,2.32,0,.134-.01.268-.027.399-.194,1.504-1.481,2.667-3.039,2.667-1.694,0-3.066-1.374-3.066-3.066,0-.161.011-.318.034-.471.228-1.47,1.498-2.594,3.031-2.594.119,0,.236.008.351.019.628.073,1.198.333,1.652.726Z" />
      </g>
      <g>

        <path
          className="community-icon-1"
          d="m34.419,56.036c-.131-.009-.271-.009-.402-.009-7.728,0-13.987,6.259-13.987,13.987s6.259,13.987,13.987,13.987,13.987-6.259,13.987-13.987"
        />

        <polyline className="community-icon-1" points="34.419 56.036 34.419 56.027 48.004 56.027 48.004 70.013" />
      </g>
      <g>
        <line className="community-icon-2" x1="63.462" y1="31.639" x2="76.504" y2="31.639" />
        <line className="community-icon-2" x1="63.462" y1="38.29" x2="72.317" y2="38.29" />
      </g>
    </svg>
  );
};
