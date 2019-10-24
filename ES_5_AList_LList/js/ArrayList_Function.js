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
    this.createNewNode = function(){};
    ListInterface.call(this);
    this.toArray = function () {} ;
}
const arrayList = new AList();

arrayList.clear = function () {
    this.arr = [];
    this.length = 0;
}


arrayList.size = function() {
    return this.length;
}

arrayList.sort = function()
{
    for (let i = 0; i < this.length; i++)
    {
        let minIndex = i;
        for (let j = i + 1; j < this.length; j++)
        {
            if (this.arr[j] < this.arr[minIndex])
            {
                minIndex = j;
            }
        }
        let temp = this.arr[minIndex];
        this.arr[minIndex] = this.arr[i];
        this.arr[i] = temp;
    }
    return this;
}

arrayList.push = function(value)
{
    this.arr[this.length]=value;
    ++this.length;
    return this.length;
}

arrayList.unshift = function(value) {
    for (let i = this.length - 1; i >= 0; i--) {
        this.arr[i + 1] = this.arr[i];
    }
    this.arr[0] = value;
    length++;
    return length;
}


arrayList.pop = function()
{
    if (this.length>0)
    {
        let value = this.arr[this.length-1];
        delete this.arr[this.length-1];
        this.length--;
        return value;
    }
    else
        return undefined;
}

arrayList.shift = function ()
{
    if (this.length > 0)
    {
        let value = this.arr [0];
        for (let i =0; i<this.length-1; i++)
            this.arr[i] = this.arr[i+1];
        this.pop();
        return value;
    }
    else
        return undefined;
}

arrayList.toString = function()
{
    let string = '';

    for (let i = 0; i < this.length - 1; i++)
    {
        string += this.arr[i] + ',';
    }

    if (this.length > 0)
    {
        string += this.arr[this.length - 1];
    }

    return string;
}

arrayList.tolinkedList = function ()
{
    LinkedList.clear();

    for (let i = 0; i < this.length; i++) {
        LinkedList.push(this.arr[i]);
    }
    return LinkedList;
}


//console.log (arrayList.push(1));
// console.log (arrayList.push(5));
// console.log (arrayList.push(16));
// console.log (arrayList.push(13));
// console.log (arrayList);
