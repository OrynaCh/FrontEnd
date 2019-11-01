describe('Fibonacci', function () {

    it('Check Fibonacci with n = 10', function () {

        const exp = 55;

        const act = fib(10);

        assert.equal(exp, act);
    });

    it('Check Fibonacci with n = 0', function () {

        const exp = 0;

        const act = fib(0);

        assert.equal(exp, act);
    });

    it('Check Fibonacci with n = 1', function () {

        const exp = 1;

        const act = fib(1);

        assert.equal(exp, act);
    });

    it('Check Fibonacci with n = 2', function () {

        const exp = 1;

        const act = fib(2);

        assert.equal(exp, act);
    });

    it('Check Fibonacci with n = -2', function () {

        const exp = -1;

        const act = fib(-2);

        assert.equal(exp, act);
    });
});

describe('Binary Search', function () {

    it('Find index of 1', function () {
        let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 44, 55];
        const exp = 0;
        const act = binarySearch(1,arr);

        assert.equal(exp, act);
    });
    it('Find index of the last element', function () {
        let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 44, 55];
       const exp = 16;
       const act = binarySearch(55,arr);

        assert.equal(exp, act);
    });

    it('Check Factorial with n = -1', function () {

        const exp = -1;

        const act = factorial(-1);

        assert.equal(exp, act);
    });
});

describe('Factorial', function () {

    it('Check Fibonacciooooo with n = 10', function () {

        const exp = 3628800;

        const act = factorial(10);

        assert.equal(exp, act);
    });

    it('Check Fibonacciooooo with n = -1', function () {

        const exp = -1;

        const act = factorial(-1);

        assert.equal(exp, act);
    });

    it('Check Fibonacciooooo with n = 0', function () {

        const exp = 1;

        const act = factorial(0);

        assert.equal(exp, act);
    });

});

function arrayToBinaryTree () {
    let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 44, 55, 100, 14, 0];
    const bTree = new binaryTree();
    for (i = 0; i < array1.length; i++)
    {
        bTree.insert (array1[i]);
    }
    return bTree;
}

    describe('Binary Search Tree Collection', function () {

        it('Check Fibonacciooooo with n = 0', function () {

            const bTree = arrayToBinaryTree ();
            const exp = true;
            const act = bTree.search(5);

            assert.equal(exp, act);
        });

        it('Check Fibonacciooooo with n = 0', function () {

            const bTree = arrayToBinaryTree ();
            const exp = true;
            const act = bTree.search(55);

            assert.equal(exp, act);
        });

        it('Check Fibonacciooooo with n = 0', function () {

            const bTree = arrayToBinaryTree ();
            const exp = false;
            const act = bTree.search(220);

            assert.equal(exp, act);
        });


        it('Check Fibonacciooooo with n = 0', function () {

            const bTree = arrayToBinaryTree ();
            const exp = false;
            const act = bTree.search(-220);

            assert.equal(exp, act);
        });


});

