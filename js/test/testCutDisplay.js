describe("function summ", function() {

    it("call function cutDisplay with args a = 1123123213221 and return 112312321 symbols", function () {
        const a   = '1123123213221';
        const exp = 112312321;
        const act = cutDisplay(a);

        assert.equal(act, exp);
    });

    it("call function cutDisplay with args a = -1.123123213221 and return -1.123123 symbols", function () {
        const a   = '-1.123123213221';
        const exp = -1.123123;
        const act = cutDisplay(a);

        assert.equal(act, exp);
    });

    it("call function cutDisplay with args a = 123 and return 123 symbols", function () {
        const a   = '123';
        const exp = 123;
        const act = cutDisplay(a);

        assert.equal(act, exp);
    });

    it("call function cutDisplay with args a = -456 and return -456 symbols", function () {
        const a   = '-456';
        const exp = -456;
        const act = cutDisplay(a);

        assert.equal(act, exp);
    });

    it("call function cutDisplay with args a = 0 and return 0 symbols", function () {
        const a   = '0';
        const exp = 0;
        const act = cutDisplay(a);

        assert.equal(act, exp);
    });

    it("call function cutDisplay with args a = 1234567891 and return 123456789 symbols", function () {
        const a   = '1234567891';
        const exp = 123456789;
        const act = cutDisplay(a);

        assert.equal(act, exp);
    });

    it("call function cutDisplay with args a = -123456789 and return -12345678 symbols", function () {
        const a   = '-123456789';
        const exp = -12345678;
        const act = cutDisplay(a);

        assert.equal(act, exp);
    });

    it("call function cutDisplay with args a = -1.2345678 and return -1.234567 symbols", function () {
        const a   = '-1.2345678';
        const exp = -1.234567;
        const act = cutDisplay(a);

        assert.equal(act, exp);
    });

    it("call function cutDisplay with args a = 1.23456789 and return 1.2345678 symbols", function () {
        const a   = '1.23456789';
        const exp = 1.2345678;
        const act = cutDisplay(a);

        assert.equal(act, exp);
    });

    it("call function cutDisplay with args a = 1.23456789 and return 1.2345678 symbols", function () {
        const a   = '1.23456789';
        const exp = 1.2345678;
        const act = cutDisplay(a);

        assert.equal(act, exp);
    });

    it("call function cutDisplay with args a = 33.56789987 and return 33.567899 symbols", function () {
        const a   = '33.56789987';
        const exp = 33.567899;
        const act = cutDisplay(a);

        assert.equal(act, exp);
    });

    it("call function cutDisplay with args a = -33.56789987 and return -33.56789 symbols", function () {
        const a   = '-33.56789987';
        const exp = -33.56789;
        const act = cutDisplay(a);

        assert.equal(act, exp);
    });

    it("call function cutDisplay with args a = 99999.98765 and return 99999.987 symbols", function () {
        const a   = '99999.98765';
        const exp = 99999.987;
        const act = cutDisplay(a);

        assert.equal(act, exp);
    });

    it("call function cutDisplay with args a = -99999.98765 and return -99999.98 symbols", function () {
        const a   = '-99999.98765';
        const exp = -99999.98;
        const act = cutDisplay(a);

        assert.equal(act, exp);
    });

    it("call function cutDisplay with args a = 33.56789987 and return 33.567899 symbols", function () {
        const a   = '33.56789987';
        const exp = 33.567899;
        const act = cutDisplay(a);

        assert.equal(act, exp);
    });

    it("call function cutDisplay with args a = 44444444.44444 and return 44444444 symbols", function () {
        const a   = '44444444.44444';
        const exp = 44444444;
        const act = cutDisplay(a);

        assert.equal(act, exp);
    });

    it("call function cutDisplay with args a = -44444444.44444 and return -44444444 symbols", function () {
        const a   = '-44444444.44444';
        const exp = -44444444;
        const act = cutDisplay(a);

        assert.equal(act, exp);
    });

    it("call function cutDisplay with args a = string and return true symbols", function () {
        const a   = String;
        const exp = true;
        const act = cutDisplay(a);

        assert.equal(act, exp);
    });

    it("call function cutDisplay with args a = !string and return true symbols", function () {
        const a   = !String;
        const exp = true;
        const act = cutDisplay(a);

        assert.equal(act, exp);
    });

    it("call function cutDisplay with args a = -0.143456789 and return -0.143456 symbols", function () {
        const a   = '-0.143456789';
        const exp = -0.143456;
        const act = cutDisplay(a);

        assert.equal(act, exp);
    });

    it("call function cutDisplay with args a = -0.143456789 and return -0.143456 symbols", function () {
        const a   = '-0.143456789';
        const exp = -0.143456;
        const act = cutDisplay(a);

        assert.equal(act, exp);
    });
};