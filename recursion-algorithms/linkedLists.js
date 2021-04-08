function indexAt(head, index) {
    let node = head
    for (let i=0; i < index; i++) {
        node = next(node)
    }
    return node
}

function next(node) {
    let nextAddress = node[1]
    return collection[nextAddress]
}