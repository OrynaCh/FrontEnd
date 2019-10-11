describe("function summ", function() {

    it("call function summ with args memoryNumber = 10, countNumber = 23 and return 33", function () {
        const a = 10;
        const b = 23;
        const exp = 33;
        const act = Summ(a, b);

        assert.equal(act, exp);
    });

    it("call function summ with args memoryNumber = 0, countNumber = 45 and return 45", function () {
        const a = 0;
        const b = 45;
        const exp = 45;
        const act = Summ(a, b);

        assert.equal(act, exp);
    });

    it("call function summ with args memoryNumber = 67, countNumber = 0 and return 67", function () {
        const a = 67;
        const b = 0;
        const exp = 67;
        const act = Summ(a, b);

        assert.equal(act, exp);
    });

    it("call function summ with args memoryNumber = 1.1, countNumber = 8.9 and return 10", function () {
        const a = 1.1;
        const b = 8.9;
        const exp = 10;
        const act = Summ(a, b);

        assert.equal(act, exp);
    });

    it("call function summ with args memoryNumber = 2.3, countNumber = 4.5 and return 15", function () {
        const a = 2.3;
        const b = 4.5;
        const exp = 6.8;
        const act = Summ(a, b);

        assert.equal(act, exp);
    });

    it("call function summ with args memoryNumber = 0, countNumber = 0 and return 0", function () {
        const a = 0;
        const b = 0;
        const exp = 0;
        const act = Summ(a, b);

        assert.equal(act, exp);
    });

    it("call function summ with args memoryNumber = -32, countNumber = 45 and return 13", function () {
        const a = -32;
        const b = 45;
        const exp = 13;
        const act = Summ(a, b);

        assert.equal(act, exp);
    });

    it("call function summ with args memoryNumber = -67, countNumber = 12 and return -55", function () {
        const a = -67;
        const b = 12;
        const exp = -55;
        const act = Summ(a, b);

        assert.equal(act, exp);
    });

    it("call function summ with args memoryNumber = -1.234567, countNumber = -1 and return -2.234567", function () {
        const a = -1.234567;
        const b = -1;
        const exp = -2.234567;
        const act = Summ(a, b);

        assert.equal(act, exp);
    });

    it("call function summ with args memoryNumber = 0.0000001, countNumber = 1 and return 1.0000001", function () {
        const a = 0.0000001;
        const b = 1;
        const exp = 1.0000001;
        const act = Summ(a, b);

        assert.equal(act, exp);
    });
};