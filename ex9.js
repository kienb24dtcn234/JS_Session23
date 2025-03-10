let arr = [];  
let choice;  

do {  
    console.log("==============MENU==============\n");  
    console.log("1. Nhập số phần tử và giá trị");  
    console.log("2. In ra các phần tử");  
    console.log("3. In ra số chẵn và tổng của chúng");  
    console.log("4. Tìm số lớn nhất và nhỏ nhất");  
    console.log("5. In ra số nguyên tố và tổng của chúng");  
    console.log("6. Đếm số lần xuất hiện của một số");  
    console.log("7. Thêm một phần tử vào vị trí");  
    console.log("8. Thoát");  
    console.log("===============================\n");  

    choice = parseInt(prompt("Lựa chọn của bạn: "));  

    switch (choice) {  
        case 1:  
            let n = parseInt(prompt("Nhập số lượng phần tử: "));  
            for (let i = 0; i < n; i++) {  
                arr[i] = parseInt(prompt(`Nhập phần tử thứ ${i + 1}: `));  
            }  
            break;  
        case 2:  
            console.log("Các phần tử trong mảng:", arr.join(", "));  
            break;  
        case 3:  
            let evenNumbers = [];  
            let sumEven = 0;  
            for (let i = 0; i < arr.length; i++) {  
                if (arr[i] % 2 === 0) {  
                    evenNumbers.push(arr[i]);  
                    sumEven += arr[i];  
                }  
            }  
            console.log("Các số chẵn:", evenNumbers.join(", "));  
            console.log("Tổng các số chẵn:", sumEven);  
            break;  
        case 4:  
            if (arr.length === 0) {  
                console.log("Mảng rỗng.");  
                break;  
            }  
            let min = arr[0];  
            let max = arr[0];  
            for (let i = 1; i < arr.length; i++) {  
                if (arr[i] < min) min = arr[i];  
                if (arr[i] > max) max = arr[i];  
            }  
            console.log("Số nhỏ nhất:", min);  
            console.log("Số lớn nhất:", max);  
            break;  
        case 5:  
            function isPrime(num) {  
                if (num <= 1) return false;  
                for (let i = 2; i <= Math.sqrt(num); i++) {  
                    if (num % i === 0) return false;  
                }  
                return true;  
            }  

            let primeNumbers = [];  
            let sumPrime = 0;  
            for (let i = 0; i < arr.length; i++) {  
                if (isPrime(arr[i])) {  
                    primeNumbers.push(arr[i]);  
                    sumPrime += arr[i];  
                }  
            }  
            console.log("Các số nguyên tố:", primeNumbers.join(", "));  
            console.log("Tổng các số nguyên tố:", sumPrime);  
            break;  
        case 6:  
            let numToCount = parseInt(prompt("Nhập số cần đếm: "));  
            let count = 0;  
            for (let i = 0; i < arr.length; i++) {  
                if (arr[i] === numToCount) {  
                    count++;  
                }  
            }  
            console.log(`Số ${numToCount} xuất hiện ${count} lần.`);  
            break;  
        case 7:  
            let numToInsert = parseInt(prompt("Nhập số cần thêm: "));  
            let position = parseInt(prompt("Nhập vị trí cần thêm (bắt đầu từ 0): "));  
            if (position >= 0 && position <= arr.length) {  
                arr.splice(position, 0, numToInsert);  
                console.log(`Đã thêm ${numToInsert} vào vị trí ${position}.`);  
            } else {  
                console.log("Vị trí không hợp lệ.");  
            }  
            break;  
        case 8:  
            console.log("Thoát...");  
            break;  
        default:  
            console.log("Lựa chọn không hợp lệ. Vui lòng thử lại.");  
    }  
} while (choice !== 8);  