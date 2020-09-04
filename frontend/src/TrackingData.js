import React from 'react'

const TrackingData = (props) => {
  const { trackingData } = props
  if (!trackingData) return <span>No tracking data</span>

  return (
    <div className='tracking'>
      {trackingData.carrier && <p>Carrier: {trackingData.carrier}</p>}
      {trackingData.trackingCode && <p>Tracking Code: {trackingData.trackingCode}</p>}
      {trackingData.status && <p>Status: {trackingData.status === 'in_transit' && 'In transit 🚌'}</p>}
    </div>
  )
}

export default TrackingData


