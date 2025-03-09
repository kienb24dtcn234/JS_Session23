let n = parseInt(prompt("Nhập số lượng phần tử của mảng:"));  
if (n <= 0) {  
    if (n === 0) {  
        alert("Mảng không có phần tử nào");  
    } else {  
        alert("Số lượng phần tử không được nhỏ hơn 0");  
    }  
} else {  
    let arr = prompt("Nhập vào các giá trị của mảng, cách nhau bởi dấu phẩy:").split(",").map(Number);  

    if (arr.length !== n) {  
        alert("Số lượng phần tử nhập vào không khớp với số lượng đã khai báo.");  
    } else {  
        let max1 = -Infinity;  
        let max2 = -Infinity;  
        for (let i = 0; i < arr.length; i++) {  
            if (arr[i] > max1) {  
                max2 = max1;  
                max1 = arr[i];  
            } else if (arr[i] > max2 && arr[i] !== max1) {  
                max2 = arr[i];  
            }  
        }  
        if (max2 === -Infinity) {  
            alert("Không có số lớn thứ hai trong mảng.");  
        } else {  
            alert("Số lớn thứ hai trong mảng là: " + max2);  
        }  
    }  
}  