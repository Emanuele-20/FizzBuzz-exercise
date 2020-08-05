class Fizzbuzz{

    _isDivisibleBy(number, divisior){  //private method
        return (number % divisior === 0)
    }

    isDivisibleByThree(number){
        // return (number % 3 === 0);
        return this._isDivisibleBy(number, 3);
    }; 

    isDivisibleByFive(number){
        // return (number % 5 === 0);
        return this._isDivisibleBy(number, 5)
    };

    // isDivisibleByThreeAndFive(number){
    //     // return (number % 3 === 0) && (number % 5 === 0);
    //     return this._isDivisibleBy(number, 3) && this._isDivisibleBy(number, 5)
    // };

    _isDivisibleByFifteen(number){
        return this._isDivisibleBy(number, 15)  // this for specify that the next function belongs to FizzBuzz class
    };

    say(number){
        if (this._isDivisibleByFifteen(number)){
            return "FizzBuzz"
        };
        if (this.isDivisibleByThree(number)) {
            return "Fizz"
        };
        if (this.isDivisibleByFive(number)){
            return "Buzz"
        };
        return number;
    };

};
