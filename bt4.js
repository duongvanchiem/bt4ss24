let n = +prompt();
let array = [];
let choice =0;
do{
    choice=+prompt("nhập lựa chọn");
    choice = +prompt(
        `
        1.Nhập mảng 2 chiều
        2.Hiển thị mảng 2 chiều
        3.Tính tổng các phần tử trong mảng
        4.Tìm phần tử lớn nhất trong mảng và chỉ số của nó
        5.Tính trung bình cộng các phần tử trong một hàng cụ thể
        6.Đảo ngược các hàng trong mảng
        7.Thoát chương trình
        `
    );
    switch (choice) {
        case 1:
            let rows = +prompt("Nhập số lượng hàng:");
            let cols = +prompt("Nhập số lượng cột:");
            for (let i = 0; i < rows; i++) {
                let row = [];
                for (let j = 0; j < cols; j++) {
                    let value = +prompt(`Nhập giá trị cho phần tử tại hàng ${i + 1}, cột ${j + 1}:`);
                    row.push(value);
                }
                arr.push(row);
            }
            break;
        case 2:
            let result = "";
            for (let i = 0; i < arr.length; i++) {
                result += arr[i].join(" ") + "\n";
            }
            console.log("Mảng 2 chiều:\n" + result);
            break;
        case 3:
            let sum = 0;
            for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < arr[i].length; j++) {
                    sum += arr[i][j];
                }
            }
            console.log("Tổng các phần tử trong mảng là: " + sum);
            break;
        case 4:
            let max = arr[0][0];
            let row = 0;
            let col = 0;
            for (let i = 0; i < arr.length; i++) {
                for (let j = 0; j < arr[i].length; j++) {
                    if (arr[i][j] > max) {
                        max = arr[i][j];
                        row = i;
                        col = j;
                    }
                }
            }
            console.log(`Phần tử lớn nhất ${max} tại vị trí (${row + 1}, ${col + 1})`);
            break;
        case 5:
            let rowIndex = +prompt("Nhập chỉ số hàng cần tính trung bình cộng:");
            if (rowIndex < 0 || rowIndex >= arr.length) {
                console.log("Hàng không hợp lệ!");
            } else {
                let sum = 0;
                for (let j = 0; j < arr[rowIndex].length; j++) {
                    sum += arr[rowIndex][j];
                }
                let average = sum / arr[rowIndex].length;
                console.log("Trung bình cộng của hàng " + (rowIndex + 1) + " là: " + average);
            }
            break;
        case 6:
            let rever = [];
            for (let i = arr.length - 1; i >= 0; i--) {
                rever.push(arr[i]);
            }
            arr = rever;
            console.log("Mảng đã được đảo ngược các hàng.");
        default:
            break;
    }
} while (choice !== 7);