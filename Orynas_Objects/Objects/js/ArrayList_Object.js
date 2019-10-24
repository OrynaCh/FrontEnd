const arrayList = {
    size: function () {

        return this.length;
    },

    clear: function() {

        this.arr = [];
        this.length = 0;

    },

    sort: function () {
        for (let i = 0; i < this.length; i++) {
            let minIndex = i;
            for (let j = i + 1; j < this.length; j++) {
                if (this.arr[j] < this.arr[minIndex]) {
                    minIndex = j;
                }
            }
            let temp = this.arr[minIndex];
            this.arr[minIndex] = this.arr[i];
            this.arr[i] = temp;
        }
        return this;
    },

    push: function (value) {
        this.arr[this.length] = value;
        this.length++;
        return this.length;
    },

    unshift: function (value) {
        for (let i = this.length - 1; i >= 0; i--) {
            this.arr[i + 1] = this.arr[i];
        }
        this.arr[0] = value;
        this.length++;
        return this.length;
    },

    pop: function () {
        if (this.length > 0) {
            let value = this.arr[this.length - 1];
            delete(this.arr[this.length - 1]);
            this.length--;
            return value;
        } else
            return undefined;
    },

    shift: function () {
        if (this.length > 0) {
            let value = this.arr [0];
            for (let i = 0; i < this.length - 1; i++)
                this.arr[i] = this.arr[i + 1];
            this.pop();
            return value;
        }
    },

    toString: function () {
        let string = '';

        for (let i = 0; i < this.length - 1; i++) {
            string += this.arr[i] + ',';
        }

        if (this.length > 0) {
            string += this.arr[this.length - 1];
        }

        return string;
    },

    toLinkedList: function () {

        linkedList.clear();

        for (let i = 0; i < this.length; i++) {
            linkedList.push(this.arr[i]);
        }
        return linkedList;
    },
}

// arrayList.push(3);
// arrayList.push(4);
// arrayList.push(5);
// arrayList.push(6);
// arrayList.push(7);
// console.log(arrayList.arr);
// arrayList.shift();
// console.log(arrayList.arr);
// arrayList.unshift(67);
// console.log(arrayList.arr);
// arrayList.size();
// console.log(arrayList);
// arrayList.toString();
// console.log(arrayList.arr);
// console.log (arrayList.toString());

