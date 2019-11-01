const {performance} = require('perf_hooks');

function fib (n) {
    if (n<0) return -1;
    if (n==0) return 0;
    if (n > 0 && n <=2) return 1;
    else return fib(n-1)+fib(n-2);
}

function factorial(n){
    if (n<0) return -1;
    if (n==1 || n ==0) return 1;
    return n*factorial(n-1);
}

function binarySearch (x, arr) {
    function binarySearchHelp(low,high) {
        if (low > high || (low==high && arr[low] !=x))
            return -1;
        let mid = Math.floor((low + high) / 2);

        if (x == arr[mid])
            return mid;
        else if (x < arr[mid])
            return binarySearchHelp(low,mid-1);
        else
            return binarySearchHelp(mid+1, high);
        }

        return binarySearchHelp(0,  arr.length-1);
    }

function binaryTree() {
    this.root = null;

    this.createNewNode = function (value) {
        return {
            value: value ? value : null,
            right: null,
            left: null,
        }
    }
    this.insert = function (value) {
        let newNode = this.createNewNode(value);

        if (!this.root) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }
    this.insertNode = function (root, newNode) {
        if (newNode.value < root.value) {
            if (!root.left) {
                root.left = newNode;
            } else {
                this.insertNode(root.left, newNode);
            }
        } else {

            if (!root.right) {
                root.right = newNode;
            } else {
                this.insertNode(root.right, newNode);
            }
        }
    }
    this.search = function(value) {

        if (!this.root)
            return 'Tree is empty';
        else
            return Boolean(this.searchNode(this.root, value))
    }

    this.searchNode = function (root, value) {
        if (!root) {
            return null;
        }

        if (value < root.value) {
            return this.searchNode(root.left, value)
        } else if (value > root.value) {
            return this.searchNode(root.right, value)
        }

        return root;
    }
}
const bTree = new binaryTree();

let array = new Array(20);

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

testArray = function pushtoArray () {

    for (i = 0; i < array.length; i++)
        array [i] = (getRandomInt(0, 1000));
    return array;
}
testArray();

function arrayToBinaryTree () {
    let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 44, 55, 100, 14, 0];
    const bTree = new binaryTree();
    for (let i = 0; i < array1.length; i++)
    {
        bTree.insert (array1[i]);
    }
    return bTree;
}

function checkTime1() {
    const bTree = arrayToBinaryTree();

    const t0 = performance.now();

    bTree.search (22);

    const t1 = performance.now();


    console.log("Call to getRandom took " + (t1 - t0) + " milliseconds.");

    return t1-t0;
}

function checkTime2() {
    const t0 = performance.now();

    bTree.search (220);

    const t1 = performance.now();

    console.log("Call to search took " + (t1 - t0) + " milliseconds.");

    return t1-t0;


}

function checkTime3() {
    const t0 = performance.now();

    bTree.search (22);

    const t1 = performance.now();

    console.log("Call to search took " + (t1 - t0) + " milliseconds.");

    return t1-t0;


}
arrayToBinaryTree();
checkTime1();
checkTime2();
checkTime3();
