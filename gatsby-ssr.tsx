import React from "react"

const fonts = [
  // "/fonts/Kanit/Kanit-Regular.ttf",
  // "/fonts/Kanit/Kanit-Black.ttf",
  // "/fonts/Kanit/Kanit-BlackItalic.ttf",
  // "/fonts/Kanit/Kanit-Bold.ttf",
  // "/fonts/Kanit/Kanit-BoldItalic.ttf",
  // "/fonts/Kanit/Kanit-ExtraBold.ttf",
  // "/fonts/Kanit/Kanit-ExtraBoldItalic.ttf",
  // "/fonts/Kanit/Kanit-ExtraLight.ttf",
  // "/fonts/Kanit/Kanit-ExtraLightItalic.ttf",
  // "/fonts/Kanit/Kanit-Italic.ttf",
  // "/fonts/Kanit/Kanit-Light.ttf",
  // "/fonts/Kanit/Kanit-LightItalic.ttf",
  "/fonts/Kanit/Kanit-Medium.ttf",
  // "/fonts/Kanit/Kanit-MediumItalic.ttf",
  "/fonts/Kanit/Kanit-SemiBold.ttf",
  // "/fonts/Kanit/Kanit-SemiBoldItalic.ttf",
  // "/fonts/Kanit/Kanit-Thin.ttf",
  // "/fonts/Kanit/Kanit-ThinItalic.ttf",
  "/fonts/Inter/Inter-SemiBold.ttf",
  // "/fonts/Inter/Inter-Black.ttf",
  // "/fonts/Inter/Inter-Bold.ttf",
  // "/fonts/Inter/Inter-ExtraBold.ttf",
  // "/fonts/Inter/Inter-ExtraLight.ttf",
  // "/fonts/Inter/Inter-Light.ttf",
  // "/fonts/Inter/Inter-Medium.ttf",
  "/fonts/Inter/Inter-Regular.ttf",
  // "/fonts/Inter/Inter-Thin.ttf",
]
export const onRenderBody = ({ setHeadComponents }) => {
  const links = fonts.map((font) => {
    return <link
      rel="preload"
      href={font}
      as="font"
      crossOrigin="anonymous"
      key={font}
    />
  })
  setHeadComponents(links)
}
