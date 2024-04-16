import React, { useState } from "react"
import Folder from "./component/Folder"
import { explorer } from "./data/folderData"

const FileExplorer = () => {
  const [explorerData, setExplorerData] = useState(explorer)
  return (
    <>
      <div style={{ width: "300px" }}>
        <Folder explorer={explorerData} />
      </div>
    </>
  )
}

export default FileExplorer
