// Udemy Recursion Example 

function countDown(num) {
    // 
    if (num <= 0) {
        console.log("All done!")
        // not returning anything
        return;
    }

    console.log(num);
    num--;
    countDown(num);
}

countDown(5);
