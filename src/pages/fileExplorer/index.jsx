import React, { useState } from "react"
import Folder from "./component/Folder"
import { explorer } from "./data/folderData"
import useTraverseTree from "./hooks/useTraverseTree"

const FileExplorer = () => {
  const [explorerData, setExplorerData] = useState(explorer)
  const { insertNode } = useTraverseTree()

  const handleInsertNode = (folderId, item, isFolder) => {
    let newTree = insertNode(explorerData, folderId, item, isFolder)
    console.log("newTree->", folderId, item, isFolder)
    setExplorerData(newTree)
  }
  return (
    <>
      <div style={{ width: "300px" }}>
        <Folder handleInsertNode={handleInsertNode} explorer={explorerData} />
      </div>
    </>
  )
}

export default FileExplorer
