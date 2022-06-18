// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});


///this is my work below
//example that works
describe("foo", function(){
    it("should return true if foo() === 2", function() {
    let expectedResult = 2; //if calling foo returns 2
    let actualResult = foo();
            expect(actualResult).toBe(expectedResult);
    });
});



//sayHello problems

describe("sayHello", function(){
    it("should be a defined function", function() {
        expect(typeof sayHello).toBe("function");
    });
    it("should return a string when called", function() {
        expect(typeof sayHello()).toBe("string");
    });
    it('sayHello("Jane") should return "Hello, Jane!" ', function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('sayHello("Alex") should return "Hello, Alex!" ', function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('sayHello("Pat") should return "Hello, Pat!" ', function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('sayHello() should return "Hello, World!" ', function() {
        expect(sayHello()).toBe("Hello, World!");
    });
    it('sayHello(true) should return "Hello, World!" ', function() {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('sayHello(false) should return "Hello, World!" ', function() {
        expect(sayHello(false)).toBe("Hello, World!");
    });

})

describe("isFive", function(){
    it("should be a defined function", function() {
        expect(typeof isFive).toBe("function");
    });
    it("should always return a boolean", function() {
        expect(typeof isFive()).toBe("boolean");
    });
})

describe("isEven", function() {
    it("should be a defined function", function() {
        expect(typeof isEven).toBe("function");
    });
    it("should always return a boolean", function() {
        expect(typeof isEven()).toBe("boolean");
    });
})

describe("isVowel", function() {
    it("should be a defined function", function () {
        expect(typeof isVowel).toBe("function");
    });
    it("should always return a boolean", function() {
        expect(typeof isVowel()).toBe("boolean");
    });

})







