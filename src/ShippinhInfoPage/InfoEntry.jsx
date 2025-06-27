import React from 'react'

const InfoEntry = ({infoType,infoValue}) => {
  return (
    <div >
              <span>{infoType}</span><span> {infoValue}</span>
                
    </div>
  )
}

export default InfoEntry