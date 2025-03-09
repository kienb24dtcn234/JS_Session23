let n = Number(prompt("Mời nhập số lượng phần tử của mảng:"));  

if (n <= 0) {  
    if (n === 0) {  
        alert("Mảng không có phần tử");  
    } else {  
        alert("Số lượng phần tử không được âm");  
    }  
} else {  
    let array = prompt("Mời nhập các phần tử của mảng, cách nhau bởi dấu phẩy:").split(",");  
    let sum = 0;  
    let hasNumber = false; 

    if (array.length === n) {  
        for (let i = 0; i < array.length; i++) {  
            if (!isNaN(array[i]) && array[i].trim() !== "") {  
                sum += Number(array[i]);  
                hasNumber = true;  
            }  
        }  

        if (hasNumber) {  
            alert(sum);  
        } else {  
            alert("Không có phần tử nào là số");  
        }  
    } else {  
        alert("Số lượng phần tử nhập vào không khớp với số lượng đã khai báo.");  
    }  
}  