// ==========================================
// PART 1: FUNCTIONS AND PARAMETERS
// ==========================================

// Q1. Welcome Function

function q1() {
    function welcome() {
        console.log("Welcome to JavaScript");
    }

    welcome();
}


// Q2. Student Details

function q2() {
    function studentDetails(name, age, cgpa) {
        console.log("Name:", name);
        console.log("Age:", age);
        console.log("CGPA:", cgpa);
    }

    studentDetails("Priya", 22, 9.0);
    studentDetails("Rahul", 23, 8.5);
}


// Q3. Function Returning Student Fee

function q3() {
    function calculateFee(fee) {
        return fee;
    }

    let studentFee = calculateFee(200000);

    console.log("Student Fee: ₹", studentFee);
}


// Q4. Discount Calculation

function q4() {
    function discount(percent) {
        let fee = 200000;
        let discountAmount = fee * percent / 100;
        let finalFee = fee - discountAmount;

        console.log("Original Fee: ₹", fee);
        console.log("Discount:", percent + "%");
        console.log("Final Fee: ₹", finalFee);
    }

    discount(10);
}


// Q5. Default Parameters

function q5() {
    function studentForm(name, age, disability = "no") {
        console.log("Name:", name);
        console.log("Age:", age);
        console.log("Disability:", disability);
        console.log("----------------");
    }

    studentForm("Priya", 22, "yes");
    studentForm("Rahul", 23, "no");
    studentForm("Arun", 21);
}


// ==========================================
// PART 2: FUNCTION TYPES AND SCOPE
// ==========================================

// Q6. Named Function

function q6() {
    function displayMessage(message) {
        console.log(message);
    }

    displayMessage("Welcome to JavaScript Functions");
}


// Q7. Anonymous Function

function q7() {
    let displayName = function(name) {
        console.log("Student Name:", name);
    };

    displayName("Priya");
}


// Q8. Arrow Function

function q8() {
    let displayNumber = (number) => {
        console.log("Number:", number);
    };

    displayNumber(100);
}


// Q9. Scope of var, let and const

function q9() {
    if (true) {
        var a = 10;
        let b = 20;
        const c = 30;

        console.log("Inside Block - var:", a);
        console.log("Inside Block - let:", b);
        console.log("Inside Block - const:", c);
    }

    console.log("Outside Block - var:", a);

    // let and const cannot be accessed outside the block.
    // console.log(b);
    // console.log(c);
}


// Q10. Hoisting

function q10() {
    console.log(value);
    var value = 10;
}


// ==========================================
// PART 3: CALLBACK AND HIGHER-ORDER FUNCTIONS
// ==========================================

// Q11. Callback Function

function q11() {
    function first(callback) {
        console.log("First Function Executed");
        callback();
    }

    function second() {
        console.log("Second Function Executed");
    }

    first(second);
}


// Q12. Add Function with Callback

function q12() {
    function add(callback, a, b) {
        console.log("Addition:", a + b);

        callback(a, b);
    }

    function displayNumbers(num1, num2) {
        console.log("First Number:", num1);
        console.log("Second Number:", num2);
    }

    add(displayNumbers, 10, 20);
}


// Q13. Subtraction Arrow Function as Callback

function q13() {
    let sub = (num1, num2) => {
        console.log("Subtraction:", num1 - num2);
    };

    function add(callback, a, b) {
        console.log("Addition:", a + b);

        callback(a, b);
    }

    add(sub, 30, 10);
}


// Q14. Multiplication with Callback

function q14() {
    function multiply(callback, a, b) {
        console.log("Multiplication:", a * b);

        callback();
    }

    function message() {
        console.log("Multiplication Completed");
    }

    multiply(message, 5, 4);
}


// Q15. Division Function as Callback

function q15() {
    function calculate(callback, num1, num2) {
        callback(num1, num2);
    }

    function divide(num1, num2) {
        if (num2 !== 0) {
            console.log("Division:", num1 / num2);
        } else {
            console.log("Cannot divide by zero");
        }
    }

    calculate(divide, 100, 5);
}


// Q16. Higher-Order Function

function q16() {
    function student(callback) {
        let name = "Priya";

        callback(name);
    }

    function displayStudent(studentName) {
        console.log("Student Name:", studentName);
    }

    student(displayStudent);
}


// ==========================================
// PART 4: GENERATOR FUNCTIONS
// ==========================================

// Q17. Generator Function - Cashback

function q17() {
    function* cashback() {
        yield "10% cashback";
        yield "30% cashback";
        yield "Better luck next time";
    }

    let result = cashback();

    console.log(result.next().value);
    console.log(result.next().value);
    console.log(result.next().value);
}


// Q18. Generator with Three next() Calls

function q18() {
    function* cashback() {
        yield "10% cashback";
        yield "30% cashback";
        yield "Better luck next time";
    }

    let result = cashback();

    console.log(result.next());
    console.log(result.next());
    console.log(result.next());
}


// Q19. Five Discount Messages using for-of

function q19() {
    function* discounts() {
        yield "5% Discount";
        yield "10% Discount";
        yield "15% Discount";
        yield "20% Discount";
        yield "25% Discount";
    }

    for (let message of discounts()) {
        console.log(message);
    }
}


// Q20. Generator Function - Student Names

function q20() {
    function* studentNames() {
        yield "Priya";
        yield "Rahul";
        yield "Arun";
    }

    for (let name of studentNames()) {
        console.log(name);
    }
}


// Q21. Generator with Four Yield Statements

function q21() {
    function* numbers() {
        yield 10;
        yield 20;
        yield 30;
        yield 40;
    }

    let result = numbers();

    console.log(result.next());
    console.log(result.next());
    console.log(result.next());
    console.log(result.next());

    // All four yielded values are consumed.
    console.log("After completion:", result.next());
}


// ==========================================
// PART 5: CURRYING AND UNCURRYING
// ==========================================

// Q22. Normal Function - Addition

function q22() {
    function add(a, b, c) {
        console.log("Sum:", a + b + c);
    }

    add(5, 10, 15);
}


// Q23. Curried Addition Function

function q23() {
    function add(a) {
        return function(b) {
            return function(c) {
                return a + b + c;
            };
        };
    }

    console.log("Sum:", add(5)(10)(15));
}


// Q24. Calling Curried Function

function q24() {
    function calculate(a) {
        return function(b) {
            return function(c) {
                console.log("Sum:", a + b + c);
            };
        };
    }

    calculate(5)(10)(15);
}


// Q25. Curried Discount Calculator

function q25() {
    function calculatePrice(price) {
        return function(discount) {
            return function(quantity) {
                let discountedPrice =
                    price - (price * discount / 100);

                let total = discountedPrice * quantity;

                return total;
            };
        };
    }

    let totalPrice = calculatePrice(1000)(10)(3);

    console.log("Total Discounted Price: ₹", totalPrice);
}


// Q26. Normal Function and Curried Function

function q26() {

    // Normal Function
    function add(a, b, c) {
        return a + b + c;
    }

    let normalResult = add(5, 10, 15);

    // Curried Function
    function curriedAdd(a) {
        return function(b) {
            return function(c) {
                return a + b + c;
            };
        };
    }

    let curriedResult = curriedAdd(5)(10)(15);

    console.log("Normal Function Result:", normalResult);
    console.log("Curried Function Result:", curriedResult);
}


// ==========================================
// PART 6: IIFE, RETURN AND MIXED PRACTICE
// ==========================================

// Q27. IIFE - Product Sale Message

function q27() {
    (function(productName, discount) {
        console.log(
            `Special Sale! ${productName} is available at ${discount}% discount.`
        );
    })("Laptop", 20);
}


// Q28. Function Returning a Number

function q28() {
    function getNumber() {
        return 100;
    }

    let number = getNumber();

    console.log("Returned Number:", number);
}


// Q29. Function Returning Student Marks

function q29() {
    function studentMarks(marks) {
        return marks;
    }

    let result = studentMarks(85);

    console.log("Student Marks:", result);
}


// Q30. Student Fee Calculator with Callback

function q30() {

    function calculateFee(fee = 200000, callback) {

        let discountAmount = callback(fee);

        let finalFee = fee - discountAmount;

        return finalFee;
    }

    function calculateDiscount(fee) {
        let discountPercent = 10;

        let discount = fee * discountPercent / 100;

        console.log("Original Fee: ₹", fee);
        console.log("Discount Percentage:", discountPercent + "%");
        console.log("Discount Amount: ₹", discount);

        return discount;
    }

    let finalFee = calculateFee(200000, calculateDiscount);

    console.log("Final Student Fee: ₹", finalFee);
}


// ==========================================
// MAIN MENU - SELECT ANY QUESTION
// ==========================================

function runExercise() {

    let question = Number(
        prompt("Enter question number (1-30):")
    );

    switch (question) {

        case 1: q1(); break;
        case 2: q2(); break;
        case 3: q3(); break;
        case 4: q4(); break;
        case 5: q5(); break;

        case 6: q6(); break;
        case 7: q7(); break;
        case 8: q8(); break;
        case 9: q9(); break;
        case 10: q10(); break;

        case 11: q11(); break;
        case 12: q12(); break;
        case 13: q13(); break;
        case 14: q14(); break;
        case 15: q15(); break;
        case 16: q16(); break;

        case 17: q17(); break;
        case 18: q18(); break;
        case 19: q19(); break;
        case 20: q20(); break;
        case 21: q21(); break;

        case 22: q22(); break;
        case 23: q23(); break;
        case 24: q24(); break;
        case 25: q25(); break;
        case 26: q26(); break;

        case 27: q27(); break;
        case 28: q28(); break;
        case 29: q29(); break;
        case 30: q30(); break;

        default:
            alert("Please enter a valid question number (1-30).");
    }
}
