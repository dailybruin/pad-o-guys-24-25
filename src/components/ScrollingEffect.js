import React, { useRef } from "react";
import "../App.css";

function ScrollingEffect({ slides }) {
  const papersRef = useRef([]); // for each slide / paper

  // for sidebar navigation
  const handleScroll = (index) => {
    if (papersRef.current[index]) {
      papersRef.current[index].scrollIntoView({ behavior: "smooth" });
      // counting the index of the paper to navigate
    }
  };

  return (
    <div className="scroll-container">
      <div className="sidebar">
        {slides.map((_, index) => (
          <div key={index} className="sidebar-circle"onClick={() => handleScroll(index)}>
             {/* svg from the Figma */}
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="6" stroke="white" stroke-opacity="0.7" stroke-width="4"/>
             </svg>
          </div>
        ))}
      </div>

      {/* Paper aka slide being generated */}
      {slides.map((slide, index) => (
        <div key={index} className="paper" ref={(el) => (papersRef.current[index] = el)}>
          <div className="folder-background">
            {/* Embedded SVG for background */}
            <svg width="1304" height="915" viewBox="0 0 1304 915" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                fillRule="evenodd" 
                clipRule="evenodd" 
                d="M4.19098 163.742C2.3882 147.272 14.2785 132.459 30.7487 130.656L1147.2 8.45289C1163.67 6.65012 1178.48 18.5404 1180.28 35.0106L1206.46 274.141C1207.69 285.363 1217.78 293.465 1229 292.237C1240.22 291.008 1250.32 299.11 1251.55 310.333L1269.3 472.481C1270.52 483.704 1262.42 493.797 1251.2 495.026C1239.98 496.254 1231.87 506.347 1233.1 517.57L1259.17 755.706C1260.97 772.176 1249.08 786.989 1232.61 788.792L116.162 910.996C99.6922 912.798 84.879 900.908 83.0762 884.438L57.0169 646.36C55.785 635.105 63.91 624.983 75.1646 623.751C86.4193 622.519 94.5443 612.397 93.3124 601.142L75.5768 439.11C74.3449 427.855 64.2226 419.73 52.968 420.962C41.7133 422.194 31.591 414.069 30.3591 402.814L4.19098 163.742Z" 
                fill="#FFE6A7"
              />
              <rect 
                x="578.477" 
                y="70.7034" 
                width="10" 
                height="785" 
                transform="rotate(-6.24656 578.477 70.7034)" 
                fill="#FFDC85"
              />
              <rect 
                x="558.596" 
                y="72.8795" 
                width="10" 
                height="785" 
                transform="rotate(-6.24656 558.596 72.8795)" 
                fill="#FFDC85"
              />
              <rect 
                x="538.715" 
                y="75.0557" 
                width="10" 
                height="785" 
                transform="rotate(-6.24656 538.715 75.0557)" 
                fill="#FFDC85"
              />
            </svg>
          </div>
          {index === 0 && (
          <div className="coffee-background">
            <svg width="663" height="615" viewBox="0 0 663 615" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M428.26 149.95L555.952 100.314C578.704 95.0467 599.361 141.194 576.242 152.509L448.55 202.145L428.26 149.95Z" fill="#FFF3D6"/>
            <path d="M452.091 139.642L406.526 157.314L425.845 209.9L451.347 200.212C451.347 200.212 457.606 197.746 477.025 190.056C496.445 182.366 482.509 129.656 452.091 139.642Z" fill="#FFE299"/>
            <g filter="url(#filter0_d_1739_1360)">
            <circle cx="278.53" cy="248.905" r="180.5" transform="rotate(65.4721 278.53 248.905)" fill="#FFF3D6"/>
            </g>
            <circle cx="279.192" cy="249.153" r="158" transform="rotate(65.4721 279.192 249.153)" fill="#99582A"/>
            <g filter="url(#filter1_f_1739_1360)">
            <path d="M296.028 267.518C321.419 75.8793 166.902 60.4262 128.182 56.7888C18.3478 46.471 -58.1086 -7.99625 -56.8199 -65.9582C-55.7889 -112.328 -98.5228 -176.778 -146.826 -201.236C-201.883 -215.2 -168.737 -283.652 -153.373 -344.234" stroke="#E9D1C3" stroke-opacity="0.5" stroke-width="40" stroke-linecap="round"/>
            </g>
            <g filter="url(#filter2_f_1739_1360)">
            <path d="M245.346 309.421C216.803 253.048 168.99 130.141 96.8828 188.927C62.6216 216.858 -23.1851 270.621 -62.3746 177.008" stroke="#E9D1C3" stroke-opacity="0.5" stroke-width="20" stroke-linecap="round"/>
            </g>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M413.028 216.471C410.834 226.513 407.709 236.5 403.607 246.322C366.894 334.234 265.866 375.738 177.955 339.025C173.297 337.08 168.77 334.954 164.377 332.66C178.821 351.543 198.258 367.01 221.77 376.829C293.373 406.732 375.66 372.927 405.562 301.324C417.216 273.418 419.194 243.889 413.028 216.471Z" fill="#70411F" fill-opacity="0.8"/>
            <defs>
            <filter id="filter0_d_1739_1360" x="93.9858" y="68.3613" width="369.088" height="369.088" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1739_1360"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1739_1360" result="shape"/>
            </filter>
            <filter id="filter1_f_1739_1360" x="-267.376" y="-434.239" width="656.205" height="791.76" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="35" result="effect1_foregroundBlur_1739_1360"/>
            </filter>
            <filter id="filter2_f_1739_1360" x="-132.377" y="103.38" width="447.725" height="276.043" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="30" result="effect1_foregroundBlur_1739_1360"/>
            </filter>
            </defs>
            </svg>
          </div>)}

          <div className="text-content">
            <p>{slide}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ScrollingEffect;
