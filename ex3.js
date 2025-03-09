let number = Number(prompt("Mời nhập vào số lượng phần tử"));  
let am = 0;  

if (Number.isInteger(number) && number > 0) {  
    let number1 = prompt("Mời nhập các phần tử của mảng, cách nhau bởi dấu phẩy").split(",").map(Number);  

    if (number1.length === 0) {  
        alert("Mảng không có phần tử");  
    } else {  
        for (let i = 0; i < number1.length; i++) {  
            if (number1[i] < 0) {  
                am++;  
            }  
        }  
        alert(am);  
    }  
} else {  
    alert("Lỗi dữ liệu");  
}  