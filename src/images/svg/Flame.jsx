import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function Flame(props) {
  return (
    <Svg
      width={15}
      height={18}
      viewBox="0 0 15 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_43_923)">
        <Path
          d="M.64 10.005L.627 4.93C.623 3.8 1.35 2.965 2.434 3.148c.214.036.565.147.75.246l1.014.543 1.95-2.459a1.726 1.726 0 012.704 0L12.914 6.6a6.5 6.5 0 011.486 4.133c0 3.687-3.094 6.667-6.9 6.667-3.806 0-6.9-2.98-6.9-6.667 0-.244.014-.487.04-.728z"
          fill="#E5E5E5"
          stroke="#fff"
          strokeWidth={2}
        />
        <Path
          d="M5.407 10.246a.276.276 0 01.034-.062l1.59-2.166a.554.554 0 01.894 0L9.44 10.08c.486.477.76 1.129.761 1.809 0 1.436-1.209 2.6-2.7 2.6s-2.7-1.164-2.7-2.6c0-.623.228-1.195.607-1.643z"
          fill="#fff"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_43_923">
          <Path fill="#fff" d="M0 0H15V18H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default Flame
