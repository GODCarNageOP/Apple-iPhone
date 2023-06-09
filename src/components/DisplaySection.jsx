import React from 'react'

const DisplaySection = () => {

const handleScrollToTop = () => {
    window.scrollTo({top: 0, left:0, behavior: "smooth"})
}

  return (
    <div className="display-section wrapper">
        <h2 className="title">New</h2>
        <p className="text">Brilliant.</p>
        <span className="description">From $41.62/mo. for 24 mo. 0r $999 before trade-in</span>
        <button className='button'>Try me</button>
        <button className='back-button' onClick={handleScrollToTop}>TOP</button>
    </div>
  )
}

export default DisplaySection