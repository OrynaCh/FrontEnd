describe("function minus", function() {

    it("call function minus with args memoryNumber = 10, countNumber = 6 and return 4", function () {
        const a = 10;
        const b = 6;
        const exp = 4;
        const act = minus(a, b);

        assert.equal(act, exp);
    });

    it("call function minus with args memoryNumber = 15, countNumber = 0 and return 15", function () {
        const a = 15;
        const b = 0;
        const exp = 15;
        const act = minus(a, b);

        assert.equal(act, exp);
    });

    it("call function minus with args memoryNumber = 0, countNumber = 8 and return -8", function () {
        const a = 0;
        const b = 8;
        const exp = -8;
        const act = minus(a, b);

        assert.equal(act, exp);
    });

    it("call function minus with args memoryNumber = 5.5, countNumber = 3 and return 2.5", function () {
        const a = 5.5;
        const b = 3;
        const exp = 2.5;
        const act = minus(a, b);

        assert.equal(act, exp);
    });

    it("call function minus with args memoryNumber = -9, countNumber = 7 and return -16", function () {
        const a = -9;
        const b = 7;
        const exp = -16;
        const act = minus(a, b);

        assert.equal(act, exp);
    });

    it("call function minus with args memoryNumber = 0, countNumber = 8 and return -8", function () {
        const a = 0;
        const b = 8;
        const exp = -8;
        const act = minus(a, b);

        assert.equal(act, exp);
    });

    it("call function minus with args memoryNumber = -8.4, countNumber = 9.3 and return -17.7", function () {
        const a = -8.4;
        const b = 9.3;
        const exp = -17.7;
        const act = minus(a, b);

        assert.equal(act, exp);
    });

    it("call function minus with args memoryNumber = -9999, countNumber = 9999 and return -19998", function () {
        const a = -9999;
        const b = 9999;
        const exp = -19998;
        const act = minus(a, b);

        assert.equal(act, exp);
    });

    it("call function minus with args memoryNumber = -8.4, countNumber = 9.3 and return -17.7", function () {
        const a = -3232;
        const b = 3234;
        const exp = -6466;
        const act = minus(a, b);

        assert.equal(act, exp);
    });

    it("call function minus with args memoryNumber = 4.9999, countNumber = 5.3434 and return -0.3435", function () {
        const a = 4.9999;
        const b = 5.3434;
        const exp = -0.3435;
        const act = minus(a, b);

        assert.equal(act, exp);
    });

    it("call function minus with args memoryNumber = 2.1234567, countNumber = 1.9876543 and return 0.1358024", function () {
        const a = 2.1234567;
        const b = 1.9876543;
        const exp = 0.1350824;
        const act = minus(a, b);

        assert.equal(act, exp);
    });

    it("call function minus with args memoryNumber = 2.1234567, countNumber = 1.9876543 and return 0.1358024", function () {
        const a = 2.1234567;
        const b = 1.9876543;
        const exp = 0.1358024;
        const act = minus(a, b);

        assert.equal(act, exp);
    });

    it("call function minus with args memoryNumber = 21321.123, countNumber = 46.876, and return 21274.247", function () {
        const a = 21321.123;
        const b = 46.876;
        const exp = 21274.247;
        const act = minus(a, b);

        assert.equal(act, exp);
    });

    it("call function minus with args memoryNumber = 7123.545, countNumber = 1.3 and return 7122.245", function () {
        const a = 7123.545;
        const b = 1.3;
        const exp = 7122.245;
        const act = minus(a, b);

        assert.equal(act, exp);
    });

    it("call function minus with args memoryNumber =  -123.4, countNumber = 234342, and return -234456.4", function () {
        const a =  -123.4;
        const b = 234342;
        const exp = -234456.4;
        const act = minus(a, b);

        assert.equal(act, exp);
    });

    it("call function minus with args memoryNumber = 234.777, countNumber = 234.777 and return 0", function () {
        const a = 234.777;
        const b = 234.777;
        const exp = 0;
        const act = minus(a, b);

        assert.equal(act, exp);
    });

    it("call function minus with args memoryNumber = -465, countNumber = -2 and return -463", function () {
        const a = -465;
        const b = -2;
        const exp = -463;
        const act = minus(a, b);

        assert.equal(act, exp);
    });
};