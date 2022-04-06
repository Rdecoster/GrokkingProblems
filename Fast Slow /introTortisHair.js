class Node {
    constructor(value, next = null) {
      this.value = value;
      this.next = next;
    }
  }
  
  function has_cycle(head) {
    let slow = head,
      fast = head;
    while (fast !== null && fast.next !== null) {
      fast = fast.next.next;
   
      slow = slow.next;
    
      if (slow === fast) {
        return true; // found the cycle
      }
    }
    return false;
  }
  
  
  var head = new Node(1);
  head.next = new Node(2);
  head.next.next = new Node(3);
  head.next.next.next = new Node(4);
  head.next.next.next.next = new Node(5);
  head.next.next.next.next.next = new Node(6);
  console.log(`LinkedList has cycle: ${has_cycle(head)}`);
  
  head.next.next.next.next.next.next = head.next.next;
  console.log(`LinkedList has cycle: ${has_cycle(head)}`);
  
  head.next.next.next.next.next.next = head.next.next.next;
  console.log(`LinkedList has cycle: ${has_cycle(head)}`);


  function find_cycle_length(head) {
    let slow = head,
      fast = head;
  
    while (fast !== null && fast.next !== null) {
      fast = fast.next.next;
      slow = slow.next;
      if (slow === fast) { // found the cycle
        return calculate_cycle_length(slow);
      }
    }
    return 0;
  }
  
  
  function calculate_cycle_length(slow) {
    let current = slow,
      cycle_length = 0;
    while (true) {
        console.log(current,"my current position?")
      current = current.next;
      cycle_length += 1;
      if (current === slow) {
        break;
      }
    }
    return cycle_length;
  }
  
  
  var head = new Node(1);
  head.next = new Node(2);
  head.next.next = new Node(3);
  head.next.next.next = new Node(4);
  head.next.next.next.next = new Node(5);
  head.next.next.next.next.next = new Node(6);
  head.next.next.next.next.next.next = head.next.next;
  console.log(`LinkedList cycle length: ${find_cycle_length(head)}`);
  
  head.next.next.next.next.next.next = head.next.next.next;
  console.log(`LinkedList cycle length: ${find_cycle_length(head)}`); 



  var maxArea = function(height) {
    // use a sliding window pattern/Shrinking window.
  let largestArea = 0; 
  let windowStart = 0 
  let windowEnd = height.length-1 
  
  // calculate the window while shrinking the window. 
  while ( windowStart < windowEnd) {
    //calculate width of cup
    let width = windowEnd - windowStart
    // calculate current area H * W can only fill cup of water to the lowest height of side
    largestArea = Math.max(largestArea, Math.min(height[windowStart],height[windowEnd])* width)
    // rules to close the window. 
    if (height[windowStart]<height[windowEnd] ) {
      windowStart ++
    } else {
      windowEnd --
    }
  }
  return largestArea
};