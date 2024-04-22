export default function useTraverseTree() {
  function insertNode(tree, folderId, item, isFolder) {
    if (tree.id === folderId && tree?.isFolder) {
      tree.items.unshift({
        id: new Date().getTime(),
        name: item,
        isFolder,
        items: []
      })
    }

    let latestNode = tree?.items?.map((obj) => {
      return insertNode(obj, folderId, item, isFolder)
    })

    //delete logic

    //edit file or folder name logic

    return { ...tree, items: latestNode }
  }
  return { insertNode }
}
