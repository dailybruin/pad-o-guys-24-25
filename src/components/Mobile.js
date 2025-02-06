export default function Mobile() {
  return (
    <svg
      width="354"
      height="13049"
      viewBox="0 0 354 13049"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_d_1739_2466)">
        <rect x="35" y="5" width="284" height="12979" fill="#FFF9EB" />
      </g>
      <defs>
        <filter
          id="filter0_d_1739_2466"
          x="0"
          y="0"
          width="354"
          height="13049"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="5"
            operator="dilate"
            in="SourceAlpha"
            result="effect1_dropShadow_1739_2466"
          />
          <feOffset dy="30" />
          <feGaussianBlur stdDeviation="15" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.176471 0 0 0 0 0.105882 0 0 0 0 0.0627451 0 0 0 0.2 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1739_2466"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1739_2466"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
