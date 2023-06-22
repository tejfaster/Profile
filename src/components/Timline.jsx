import React from 'react'

const TimelineItem = (props) => {
    return (
        <div className={`timelineItem ${props.index%2 === 0 ? "leftTimeline":"rightTimeline"}`}>

        </div>
    )
}

const Timline = () => {
    return (
        <div di="timeline">
            <div className='timelneBox'>

            </div>
        </div>
    )
}

export default Timline