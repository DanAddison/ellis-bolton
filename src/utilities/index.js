/* 
  This index file allows for easier, more concise imports into components
  We can now import any number of files from this parent utilities folder in one statement eg.
  import { breakpoints, fonts } from "../utilities"
  Then in that component, use a variable like this ${fonts.body_font} or ${colors.primary}
*/
export { default as breakpoints } from "./breakpoints"
export { default as colors } from "./colors"
export { default as fonts } from "./fonts"
