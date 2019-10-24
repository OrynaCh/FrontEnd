describe('Array list', function () {
    beforeEach(function () {
        arrayList.clear();
    });

    it('Check push method', function () {

        const exp = 1;
        arrayList.push(exp);
        const act = arrayList.arr[0];

        assert.equal(exp, act);
    });
    it('Check push and pop method', function () {

        const exp = 4;
        arrayList.push(exp);
        const act = arrayList.pop();
        assert.equal(exp, act);
    });

    it('Check shift method', function () {

        arrayList.push(1);
        arrayList.push(2);
        const act = arrayList.shift();
        let exp = 1;

        assert.equal(exp, act);
    });

    it('Check unshift method', function () {

        arrayList.push(1);
        arrayList.push(2);
        arrayList.unshift(3);
        const act = arrayList.shift();
        let exp = 3;

        assert.equal(exp, act);
    });

    it('Check size method', function () {

        arrayList.push(1);
        arrayList.push(2);
        let act = arrayList.size();
        let exp = 2;

        assert.equal(exp, act);
    });

    it('Check toString method', function () {

        arrayList.push(1);
        arrayList.push(2);
        const act = arrayList.toString();
        let exp = "1,2";

        assert.equal(exp, act);
    });

    it('Check sort method', function () {

        arrayList.push(1);
        arrayList.push(12);
        arrayList.push(2);

        arrayList.sort();
        const act = arrayList.toString();
        let exp = "1,2,12";

        assert.equal(exp, act);
    });

    it('Check TolinkedList method', function () {
        // ??????
        LinkedList.clear();
        arrayList.push(1);
        arrayList.push(2);
        const act = arrayList.tolinkedList().toString();
        let exp = "1,2";

        assert.equal(exp, act);
    });


});

describe('LinkedList', function () {

    beforeEach(function () {
        LinkedList.clear();
    });

    it('Check push method', function () {

        const exp = 1;

        LinkedList.push(exp);
        const act = LinkedList.head.value;

        assert.equal(exp, act);
    });

    it('Check push and pop method', function () {
        const exp = 4;

        LinkedList.push(exp);
        const act = LinkedList.pop();
        assert.equal(exp, act);
    });

    it('Check shift method', function () {

        LinkedList.push(1);
        LinkedList.push(2);
        const act = LinkedList.shift();
        let exp = 1;

        assert.equal(exp, act);
    });

    it('Check unshift method', function () {

        LinkedList.push(1);
        LinkedList.push(2);
        LinkedList.unshift(3);
        const act = LinkedList.shift();

        let exp = 3;

        assert.equal(exp, act);
    });

    it('Check size method', function () {

        LinkedList.push(1);
        LinkedList.push(2);
        const act = LinkedList.size();
        let exp = 2;

        assert.equal(exp, act);
    });

    it('Check toString method', function () {

        LinkedList.push(1);
        LinkedList.push(2);
        const act = LinkedList.toString();
        let exp = "1,2";

        assert.equal(exp, act);
    });

    it('Check sort method', function () {


        LinkedList.push(1);
        LinkedList.push(12);
        LinkedList.push(2);

        LinkedList.sort();
        const act = LinkedList.toString();
        let exp = "1,2,12";

        assert.equal(exp, act);
    });

    it('Check ToArrayList method', function () {

        // ??????
        LinkedList.push(1);
        LinkedList.push(2);
        const act = LinkedList.toArray().toString();
        let exp = "1,2";

        assert.equal(exp, act);
    });


});