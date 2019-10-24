function ListInterface () {
    this.push = function () {};
    this.pop = function () {};
    this.unshift = function() {};
    this.shift = function() {};
    this.sort = function () {};
    this.size = function () {};
    this.toString = function () {};

}

function AList() {
    ListInterface.call(this);
    this.toLinkedList = function () {} ;
    this.arr = [];
    this.length = 0;
}

function LList() {
    this.Node = {
        head : null,
        tail : null,
        length : 0,
    };
    this.createNewNode = function() {};
    ListInterface.call(this);
    this.toArray = function () {} ;
}

const LinkedList = new LList();

LinkedList.createNewNode =  function(value) {
    return {
        value: value ? value : null,
        next: null,
        previous: null,
    }
};

LinkedList.clear = function()
{
    this.head = null;
    this.tail = null;
    this.length = 0;
}
    LinkedList.size = function () {
        return this.length;
    }

    LinkedList.unshift = function (value) {

        const newNode = LinkedList.createNewNode(value);

        if (this.head)
            this.head.previous = newNode;
        else
            this.tail = newNode;

        this.head = newNode;
        this.length++;
    }

    LinkedList.push = function(value) {

        const newNode = LinkedList.createNewNode(value);
        newNode.previous = this.tail;
        if (this.tail)
            this.tail.next = newNode;
        else
            this.head = newNode;
        this.tail = newNode;
        this.length++;
    }

    LinkedList.shift = function() {
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
    }

    LinkedList.pop = function()  {
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
    }

    LinkedList.size2 = function() {
        let i = 0;
        let node = this.head;
        while (node != null) {
            i++;
            node = node.next;
        }
        return i;
    }

    LinkedList.toString = function ()
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
    }

    LinkedList.toArray = function () {

        arrayList.clear();
        let node = this.head;
        while (node) {
            arrayList.push(node.value);
            node = node.next;
        }

        return arrayList;
    }

    LinkedList.sort = function () {

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
    }
