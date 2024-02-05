import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props: any) => (
  <ContentLoader 
    speed={2}
    width={800}
    height={320}
    viewBox="0 0 400 160"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    className="px-3 w-full"
    {...props}
  >
    {/* <rect x="48" y="8" rx="3" ry="3" width="88" height="6" />  */}
    {/* <rect x="48" y="26" rx="3" ry="3" width="52" height="6" />  */}
    <rect x="0" y="8" rx="3" ry="3" width="820" height="12" /> 
    <rect x="0" y="24" rx="3" ry="3" width="760" height="12" /> 
    <rect x="0" y="40" rx="3" ry="3" width="356" height="12" /> 
    <rect x="0" y="56" rx="3" ry="3" width="820" height="12" /> 
    <rect x="0" y="72" rx="3" ry="3" width="760" height="12" /> 
    <rect x="0" y="88" rx="3" ry="3" width="356" height="12" /> 
    {/* <circle cx="20" cy="20" r="20" /> */}
  </ContentLoader>
)

export default MyLoader