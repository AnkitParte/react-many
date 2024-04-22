import React, { useState } from "react"
import "./styles.css"

function Folder({ handleInsertNode, explorer }) {
  // console.log("explorer->", explorer)
  const [expand, setExpand] = useState(false)
  const [newFileOrFold, setNewFileOrFold] = useState({
    isFolder: false,
    visible: false
  })

  const handleNewF = (e, val) => {
    e.stopPropagation()
    setNewFileOrFold({
      visible: true,
      isFolder: val
    })
    setExpand(true)
  }

  const onAddNew = (e) => {
    if (e.keyCode == 13 && e.target.value) {
      handleInsertNode(explorer.id, e.target.value, newFileOrFold?.isFolder)
      setNewFileOrFold({
        ...newFileOrFold,
        visible: false
      })
    }
  }
  if (explorer?.isFolder) {
    return (
      <div>
        <div
          className="folder"
          onClick={() => {
            setExpand(!expand)
          }}
        >
          <span>📁 {explorer?.name}</span>
          <div className="btnDiv">
            <button onClick={(e) => handleNewF(e, true)}>Folder +</button>
            <button onClick={(e) => handleNewF(e, false)}>File +</button>
          </div>
        </div>
        <div style={{ display: expand ? "block" : "none", paddingLeft: 10, cursor: "pointer" }}>
          {newFileOrFold?.visible ? (
            <div className="inputContainer">
              <span>{newFileOrFold?.isFolder ? "📁 " : "📄 "}</span>
              <input
                type="text"
                className="inputContainer__input"
                onBlur={() => setNewFileOrFold({ ...newFileOrFold, visible: false })}
                autoFocus
                onKeyDown={onAddNew}
              />
            </div>
          ) : null}
          {explorer?.items?.map((exp) => {
            return <Folder handleInsertNode={handleInsertNode} explorer={exp} />
          })}
        </div>
      </div>
    )
  } else {
    return (
      <div>
        📄 <span>{explorer?.name}</span>
      </div>
    )
  }
}

export default Folder
