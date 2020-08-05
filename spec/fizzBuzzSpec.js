describe('fizzBuzz', function(){
    var fizzbuzz;

    beforeEach(function() {
        fizzbuzz = new Fizzbuzz();
    })

    describe('know when number is', function() {
        it('divisible by 3', function(){
            expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
        });
    });

    describe('know when number is NOT', function() {
        it('divisible by 3', function(){
            expect(fizzbuzz.isDivisibleByThree(1)).toBe(false)
        });
    });

    describe('know when number is', function(){
        it('divisible by 5', function(){
            fizzbuzz = new Fizzbuzz();
            expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);
        });
    })

    describe('know when number is NOT ', function(){
        it('divisible by 5', function(){
            expect(fizzbuzz.isDivisibleByFive(4)).toBe(false)
        });
    })

    xdescribe('know when the number is', function(){
        it('divisible by 3 and 5', function(){
            expect(fizzbuzz.isDivisibleByThreeAndFive(15)).toBe(true)
        })
    });

    xdescribe('know when the number is NOT', function(){
        it('divisible by 3 and 5', function(){
            expect(fizzbuzz.isDivisibleByThreeAndFive(16)).toBe(false)
        });
    });

    describe('know when the number is', function(){
        it('divisible by 15', function(){
            expect(fizzbuzz._isDivisibleByFifteen(30)).toBe(true)
        });
    });

    describe('know when the number is NOT', function(){
        it('divisible by 15', function(){
            expect(fizzbuzz._isDivisibleByFifteen(31)).toBe(false)
        });
    });
});

describe('player', function(){

    beforeEach(function(){
        fizzbuzz = new Fizzbuzz();
    })

    describe('when playing, say', function() {
        it('"FizzBuzz" when a number is divisible by 15', function(){
            expect(fizzbuzz.say(15)).toEqual("FizzBuzz")
        });
    });

    describe('when playing, say', function() {
        it('"Fizz" when a number is divisible by 3', function(){
            expect(fizzbuzz.say(3)).toEqual("Fizz");
        });
    });

    describe('when playing, say', function() {
        it('"Buzz" when a number is divisible by 5', function(){
            expect(fizzbuzz.say(5)).toEqual("Buzz");
        });
    });

    describe('when playing, say', function(){
        it('"just the number" when a number is not divisible by 15, by 5 or by 3', function(){
            expect(fizzbuzz.say(1)).toEqual(1)
        });
    })
});