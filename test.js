"use strict";

describe("sum", function () {
    it("Adds items in array", function () {
        expect(sum([2,3,5])).to.eql(10);
    });
});

describe("multiply", function () {
    it("Multiply items in array", function () {
        expect(multiply([3,3,5])).to.eql(45);
    });
});

describe("reverse", function () {
    it("Reverse a given string", function () {
        expect(reverse('Javascript')).to.eql('tpircsavaJ');
    });
});

describe("filterLongWords", function () {
    it("Filters given array to get items with more than specific length", function () {
        expect(filterLongWords(['Good', 'Java', 'Javascript'], 4)).to.eql(['Javascript']);
    });
});
