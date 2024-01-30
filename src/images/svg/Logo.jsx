import * as React from "react"
import { Image } from "react-native"
import Svg, { Path, Defs, Pattern, Use,  } from "react-native-svg"
const logoIcon = require('./logoIcon.png')
function Logo(props) {
  return (
      /*<Svg
        width={79}
        height={70}
        viewBox="0 0 79 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        {...props}
      >
        <Path fill="url(#pattern0)" d="M0 27.5H79V69.5H0z" />
        <Path
          transform="rotate(90 58.5 0)"
          fill="url(#pattern1)"
          d="M58.5 0H98.5V37H58.5z"
        />
        <Defs>
          <Pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width={1}
            height={1}
          >
            <Use
              xlinkHref="#image0_30_529"
              transform="matrix(.00492 0 0 .0092 -.575 0)"
            />
          </Pattern>
          <Pattern
            id="pattern1"
            patternContentUnits="objectBoundingBox"
            width={1}
            height={1}
          >
            <Use
              xlinkHref="#image0_30_529"
              transform="matrix(.00856 0 0 .0092 0 0)"
            />
          </Pattern>
          <Image
            id="image0_30_529"
            width={320}
            height={109}
            xlinkHref="data:image/png;base64,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"
          />
        </Defs>
      </Svg>*/

    <Image source={logoIcon}/>
      )
}

export default Logo
