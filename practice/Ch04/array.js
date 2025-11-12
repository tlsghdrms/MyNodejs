const arr = [10, 20, 30, 40, 50];

function printArray(arr) {
    let index = 0;
    function printElement() {    
        if (index < arr.length) {
            console.log(arr[index++]);
            setTimeout(printElement, 1000);
        }
    }
    printElement();
};

printArray(arr);