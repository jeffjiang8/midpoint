function midpoint(list) {
    let slow = list.getFirst() // or list.head
    let fast = list.getFirst()

    while(fast.next && fast.next.next){
        slow = slow.next
        fast = fast.next.next
    }

    return slow // when fast.next.next = null, the function
                // will exit the while loop; because fast is
                // moving twice as fast as slow, the node that
                // slow is pointing at has to be the midpoint
}