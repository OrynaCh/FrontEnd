describe("function summ", function() {

    it("call function divide with args memoryNumber = 10, countNumber = 23 and return 0.4347826", function () {
        const a = 10;
        const b = 23;
        const exp = 0.4347826;
        const act = divide(a, b);

        assert.equal(act, exp);
    });

    it("call function divide with args memoryNumber = 0, countNumber = 45 and return 0", function () {
        const a = 0;
        const b = 45;
        const exp = 0;
        const act = divide(a, b);

        assert.equal(act, exp);
    });

    it("call function divide with args memoryNumber = 67, countNumber = 0 and return 0", function () {
        const a = 67;
        const b = 0;
        const exp = 0;
        const act = divide(a, b);

        assert.equal(act, exp);
    });

    it("call function divide with args memoryNumber = 10, countNumber = 10 and return 1", function () {
        const a = 10;
        const b = 10;
        const exp = 1;
        const act = divide(a, b);

        assert.equal(act, exp);
    });

    it("call function divide with args memoryNumber = 333, countNumber = 44 and return 7.5681818", function () {
        const a = 333;
        const b = 44;
        const exp = 7.5681818;
        const act = divide(a, b);

        assert.equal(act, exp);
    });

    it("call function divide with args memoryNumber = 0, countNumber = 0 and return 0", function () {
        const a = 0;
        const b = 0;
        const exp = 0;
        const act = divide(a, b);

        assert.equal(act, exp);
    });

    it("call function divide with args memoryNumber = 45.6, countNumber = 12.3 and return 3.7073170", function () {
        const a = 45.6;
        const b = 12.3;
        const exp = 3.7073170;
        const act = divide(a, b);

        assert.equal(act, exp);
    });

    it("call function divide with args memoryNumber = -8.9, countNumber = 2 and return -4.45", function () {
        const a = -8.9;
        const b = 2;
        const exp = -4.45;
        const act = divide(a, b);

        assert.equal(act, exp);
    });