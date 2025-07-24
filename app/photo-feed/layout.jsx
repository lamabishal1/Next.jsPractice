import React from 'react'
import "./styles.css"

export const metadata = {
  title: {
    default: 'Photo Feed',
    template: '%s | Photo Feed',
    absolute: 'Welcome to the Photo Feed!',
  },
  description: 'A collection of beautiful photos',
}
const PhotofeedLayout = ({ children, modal }) => {
  return (
    <>
    {modal}
    {children}
        
    </>
  )
}
export default PhotofeedLayout;