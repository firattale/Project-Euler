// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
    let slowNode = list.head;
    let fastNode = list.head;
    for (let index = 0; index < n; index++) {
        fastNode = fastNode.next;
    }
    while (fastNode.next) {
        slowNode = slowNode.next;
        fastNode = fastNode.next;
    }
    return slowNode;
}

module.exports = fromLast;
