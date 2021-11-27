function getGender() {
    if (document.getElementById("female").checked){
        return "Female";
    }
    else if (document.getElementById("male").checked){
        return "Male";
    }
    else{
        return "Unknown";
    }
}

function getFood() {
    let op = "";
    let data = document.getElementsByName("food");

    for (let i = 0; i<5; i++){
        if (data[i].checked){
            op = op + data[i].value + ", ";
        }
    }

    return op.substring(0, op.length - 2);
}

function submitData() {
    let name = document.getElementById("first-name").value + " " + document.getElementById("last-name").value;
    let address = document.getElementById("address").value;
    let pincode = document.getElementById("pincode").value;
    let gender = getGender();
    let food = getFood();
    let state = document.getElementById("state").value;
    let country = document.getElementById("country").value;

    let tableRows = document.getElementById("tableData");
    tableRows.innerHTML = tableRows.innerHTML + `
        <tr>
            <td>${name}</td>
            <td>${address}</td>
            <td>${pincode}</td>
            <td>${gender}</td>
            <td>${food}</td>
            <td>${state}</td>
            <td>${country}</td>
        </tr>
    `
}