import React, { useState } from 'react'
import Folder from './component/Folder'
import { explorer } from './data/folderData'

const FileExplorer = () => {
    const [explorerData, setExplorerData] = useState(explorer)
  return (
    <>
    <Folder explorer={explorerData}/>
    </>
  )
}

export default FileExplorer