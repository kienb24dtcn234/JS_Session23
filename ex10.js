let arr = [];  
let choice;  

do {  
    console.log("================== MENU =================== \n");  
    console.log("1. Nhập số phần tử cần nhập và giá trị các phần tử \n");  
    console.log("2. In ra giá trị các phần tử đang quản lý \n");  
    console.log("3. In ra các phần tử chẵn, tính tổng và sắp xếp giảm dần \n");  
    console.log("4. In ra giá trị lớn nhất, nhỏ nhất và vị trí của chúng \n");  
    console.log("5. In ra các số nguyên tố trong mảng và tính tổng \n");  
    console.log("6. Nhập một số và đếm số lần xuất hiện trong mảng \n");  
    console.log("7. Thêm một phần tử vào vị trí chỉ định \n");  
    console.log("8. Xóa một phần tử theo giá trị \n");  
    console.log("9. Sắp xếp mảng theo thứ tự tăng dần hoặc giảm dần \n");  
    console.log("0. Thoát \n");  
    console.log("=========================================== \n");  

    choice = +prompt("Lựa chọn của bạn: ");  

    switch (choice) {  
        case 1:  
            let n = parseInt(prompt("Nhập số phần tử: "));  
            arr = [];  
            for (let i = 0; i < n; i++) {  
                let value = parseInt(prompt(`Nhập giá trị phần tử thứ ${i + 1}: `));  
                arr.push(value);  
            }  
            console.log("Mảng đã được nhập.");  
            break;  
        case 2:  
            if (arr.length > 0) {  
                console.log("Mảng hiện tại:", arr);  
            } else {  
                console.log("Mảng đang trống.");  
            }  
            break;  
        case 3:  
            let evenNumbers = arr.filter(num => num % 2 === 0);  
            if (evenNumbers.length > 0) {  
                let sum = evenNumbers.reduce((a, b) => a + b, 0);  
                evenNumbers.sort((a, b) => b - a);  
                console.log("Các phần tử chẵn:", evenNumbers);  
                console.log("Tổng các phần tử chẵn:", sum);  
            } else {  
                console.log("Không có phần tử chẵn trong mảng.");  
            }  
            break;  
        case 4:  
            if (arr.length > 0) {  
                let max = arr[0];  
                let min = arr[0];  
                let maxIndex = 0;  
                let minIndex = 0;  

                for (let i = 1; i < arr.length; i++) {  
                    if (arr[i] > max) {  
                        max = arr[i];  
                        maxIndex = i;  
                    }  
                    if (arr[i] < min) {  
                        min = arr[i];  
                        minIndex = i;  
                    }  
                }  

                console.log("Giá trị lớn nhất:", max, "ở vị trí:", maxIndex);  
                console.log("Giá trị nhỏ nhất:", min, "ở vị trí:", minIndex);  
            } else {  
                console.log("Mảng đang trống.");  
            }  
            break;  
        case 5:  
            let primeNumbers = arr.filter(num => {  
                if (num <= 1) return false;  
                for (let i = 2; i <= Math.sqrt(num); i++) {  
                    if (num % i === 0) return false;  
                }  
                return true;  
            });  
            if (primeNumbers.length > 0) {  
                let sum = primeNumbers.reduce((a, b) => a + b, 0);  
                console.log("Các số nguyên tố trong mảng:", primeNumbers);  
                console.log("Tổng các số nguyên tố:", sum);  
            } else {  
                console.log("Không có số nguyên tố trong mảng.");  
            }  
            break;  
        case 6:  
            let numberToCount = parseInt(prompt("Nhập số cần đếm: "));  
            let count = arr.filter(num => num === numberToCount).length;  
            console.log(`Số ${numberToCount} xuất hiện ${count} lần trong mảng.`);  
            break;  
        case 7:  
            let valueToAdd = parseInt(prompt("Nhập giá trị cần thêm: "));  
            let positionToAdd = parseInt(prompt("Nhập vị trí cần thêm (từ 0): "));  
            if (positionToAdd >= 0 && positionToAdd <= arr.length) {  
                arr.splice(positionToAdd, 0, valueToAdd);  
                console.log("Mảng sau khi thêm:", arr);  
            } else {  
                console.log("Vị trí không hợp lệ.");  
            }  
            break;  
        case 8:  
            let valueToRemove = parseInt(prompt("Nhập giá trị cần xóa: "));  
            let indexToRemove = arr.indexOf(valueToRemove);  
            if (indexToRemove !== -1) {  
                arr.splice(indexToRemove, 1);  
                console.log("Mảng sau khi xóa:", arr);  
            } else {  
                console.log("Không tìm thấy giá trị cần xóa trong mảng.");  
            }  
            break;  
        case 9:  
            let sortOrder = prompt("Chọn thứ tự sắp xếp (tăng/giảm): ");  
            if (sortOrder === "tăng") {  
                arr.sort((a, b) => a - b);  
                console.log("Mảng sau khi sắp xếp tăng dần:", arr);  
            } else if (sortOrder === "giảm") {  
                arr.sort((a, b) => b - a);  
                console.log("Mảng sau khi sắp xếp giảm dần:", arr);  
            } else {  
                console.log("Lựa chọn không hợp lệ. Vui lòng chọn 'tăng' hoặc 'giảm'.");  
            }  
            break;  
        case 0:  
            console.log("Thoát chương trình.");  
            break;  
        default:  
            console.log("Lựa chọn không hợp lệ. Vui lòng chọn lại.");  
    }  
} while (choice !== 0);  