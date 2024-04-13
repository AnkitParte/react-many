import React, { useState } from 'react'

function Folder({ explorer }) {
  console.log('explorer->', explorer)
  const [expand, setExpand] = useState(false)

  if (explorer?.isFolder) {
    return (<div>
      <div>
        <span 
        onClick={() => {
          setExpand(!expand)
        }}
        >📁 {explorer?.name} {expand ? '' : '>'}</span> 
      </div>
      <div style={{display: expand ? 'block' : 'none', paddingLeft: 10}}>
        {explorer?.items?.map((exp) => {
          return <Folder explorer={exp}/>
        })}
      </div>
    </div>)
  } else {
    return <div>📄 <span>{explorer?.name}</span></div>
  }
}

export default Folder