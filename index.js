let Lichs = JSON.parse(localStorage.getItem('Lichs')) || [];

function TongTien(loai) {
    switch (loai) {
        case "1":
            return 60000;
        case "2":
            return 90000;
        case "3":
            return 90000;
        case "4":
            return 120000;
        default:
            return 0;
    }
}
function loaiDV(loai) {
    switch (loai) {
        case "0":
            return "Hớt Tóc";
        case "1":
            return "Hớt Tóc + Cạo Mặt";
        case "2":
            return "Hớt Tóc + Rấy tai";
        case "3":
            return "Hớt Tóc + Cạo Mặt +Rái tai";
        default:
            return 0;
    }
}

function renderLich() {
    let ulLich = document.getElementById("tableDanhSach");
    let content = '';
    for (let i = 0; i < Lichs.length; i++) {
        content += `
        <tr>
            <td>${Lichs[i].id}</td>
            <td>${Lichs[i].name}</td>
            <td>${Lichs[i].email}</td>
            <td>${Lichs[i].ngaydat}</td>
            <td>${Lichs[i].loai}</td>
            <td>${Lichs[i].tongtien}</td>
            <td>
                <button class="btn btn-danger" onclick="xoaLich(${i})">Xoá</button>
                <button class="btn btn-warning">Sửa</button>
            </td>
        </tr>
        `;
    }
    ulLich.innerHTML = content;
}

function xacNhanLich() {
    let id = document.getElementById("tknv");
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let ngaydat = document.getElementById("datepicker");
    let loai = document.getElementById("loai");

    let idValue = id.value;
    let nameValue = name.value;
    let emailValue = email.value;
    let ngaydatValue = ngaydat.value;
    let loaiValue = loai.value;
    // let loaiDV =loaiDV(loaiValue);
    let tongtien = TongTien(loaiValue).toLocaleString();

    let lich = {
        id: idValue,
        name: nameValue,
        email: emailValue,
        ngaydat: ngaydatValue,
        loai: loaiValue,
        tongtien: tongtien,
    };
     const isconfirm = confirm("Bạn Chắc Chắn Muốn Thêm không");
     if(!isconfirm) return ;

     Toastify({
        text: "Bạn Đã Đăng Kí Thành Công",
        duration: 3000,
        close: true,
        position: "center",
        style: {
            background: "green",
            color: "white"
        }
    }).showToast();
     HandleReset();

    Lichs.push(lich);
    localStorage.setItem('Lichs', JSON.stringify(Lichs)); // Lưu vào Local Storage
    renderLich();
    window.location.href = './lichhen.html'; // Chuyển hướng đến trang lichhen.html
}

function xoaLich(index) {
    const isconfirm = confirm("Bạn có chắc muốn xóa không");
    if(!isconfirm) return ;

    Lichs.splice(index, 1); // Xóa phần tử tại vị trí index
    localStorage.setItem('Lichs', JSON.stringify(Lichs)); // Cập nhật Local Storage
    renderLich(); // Cập nhật lại danh sách hiển thị
}

renderLich();

function HandleReset(){
    document.querySelector(".form-reset").reset();
}