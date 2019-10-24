const linkedList = {
    Node: {
        value: null,
        next: null,
        previous: null, length: 0,
    },

    createNewNode: function(value) {
        return {
            value: value ? value : null,
            next: null,
            previous: null,
        }
    },

    clear: function() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    },

    LList: {
        head: null,
        tail: null,
        length: 0,
    },

    size: function() {
        return this.length;
    },

    unshift: function (value) {
        const newNode = this.createNewNode(value);
        newNode.next = this.head;

        if (this.head)
            this.head.previous = newNode;
        else
            this.tail = newNode;

        this.head = newNode;
        this.length++;
    },

    push: function(value) {
        const newNode = this.createNewNode(value);
        newNode.previous = this.tail;
        if (this.tail)
            this.tail.next = newNode;
        else
            this.head = newNode;
        this.tail = newNode;
        this.length++;
    },

    shift: function() {
        if (!this.head)
            return undefined;
        let value = this.head.value;
        this.head = this.head.next;
        if (this.head) {
            this.head.previous = null;
        } else {
            this.tail = null;
        }
        this.length--;
        return value;
    },

    pop: function() {
        if (!this.tail)
            return undefined;
        let value = this.tail.value;
        this.tail = this.tail.previous;
        if (this.tail) {
            this.tail.next = null;
        } else {
            this.head = null;
        }
        this.length--;
        return value;
    },

    size2: function() {
        let i = 0;
        let node = this.head;
        while (node != null) {
            i++;
            node = node.next;
        }
        return i;
    },

    toString: function()
    {
        let string = '';
        let node = this.head;
        while (node != null) {
            string += node.value;

            if (node.next != null)
                string += ',';

            node = node.next;

        }
        return string;
    },

    toArray: function() {
        arrayList.clear();
        let node = this.head;
        while (node) {
            arrayList.push(node.value);
            node = node.next;
        }

        return arrayList;

    },

    sort: function () {

        for (let node = this.head; node; node = node.next) {
            let nodeWithMinValue = node;
            for (let searchNode = node.next; searchNode; searchNode = searchNode.next)
            {
                if (searchNode.value < nodeWithMinValue.value)
                    nodeWithMinValue = searchNode;
            }
            let temp = nodeWithMinValue.value;
            nodeWithMinValue.value = node.value;
            node.value = temp;
        }
    },
}

// let llist = new LinkedList;
// llist.push(1);
// llist.push(2);
// llist.push(15);
// llist.push(26);
// llist.push(11);
// llist.push(-9);
// llist.push(1);
// llist.push(2);
// llist.sort();
// console.log (llist.toString());



// console.log(LinkedList);
// console.log(LinkedList.toString());
// console.log(LinkedList.pop());
// LinkedList.push(1);
// LinkedList.push(2);
// LinkedList.push(15);
// LinkedList.push(26);
// LinkedList.push(11);
// LinkedList.push(-9);
// LinkedList.push(1);
// LinkedList.push(2);
// LinkedList.sort();
// console.log (LinkedList.toString());
// LinkedList.push ('lalala');
// console.log (LinkedList.toString());