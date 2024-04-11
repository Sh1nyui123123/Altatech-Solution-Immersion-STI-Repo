
function validateForm(){
    var title = document.getElementById("title").value;
    var text = document.getElementById("text").value;

    if(title == "") {
        alert("Title is Required");
        return false;
    }

    if(text =="") {
        alert("Text is required");
        return false;
    }

    return true;
}



function showData() {
    var peopleList;
    if(localStorage.getItem("peopleList") == null){
        peopleList =[];
    }
    else {
        peopleList = JSON.parse(localStorage.getItem("peopleList"));
    }

    var html ="";

    peopleList.forEach(function (element, index) {
        html += "<tr>";
        html += "<td>" + element.title + "</td>";
        html += "<td>" + element.text + "</td>";
        html += '<td><button onclick="deleteData('+ 
        index +
        ')" class="btn btn-danger">Delete</button><button onclick="updateData(' +
        index + 
        ')" class="btn btn-warning m-2">Edit</button></td>';
        html += '<td><img src="' + element.image + '" width="100"></td>';
        html += "</tr>";
    });

    document.querySelector("#postTable tbody").innerHTML = html;
}


document.onload = showData();


function addData() {
    
    if(validateForm() == true) {
        var title = document.getElementById("title").value;
        var text = document.getElementById("text").value;
        var image = document.getElementById("image").value;

        var peopleList;
        if(localStorage.getItem("peopleList") == null){
            peopleList =[];
        }
        else {
            peopleList = JSON.parse(localStorage.getItem("peopleList"));
        }

        peopleList.push({
            title : title,
            text: text,
            image: image,
        });

        localStorage.setItem("peopleList", JSON.stringify(peopleList));
        showData();
        document.getElementById("title").value = ""; 
        document.getElementById("text").value = "";
        document.getElementById("image").value = "";
    }
}


function deleteData(index) {
    var peopleList;
    if(localStorage.getItem("peopleList") == null){
        peopleList =[];
    }
    else {
        peopleList = JSON.parse(localStorage.getItem("peopleList"));
    }

    peopleList.splice(index,1);
    localStorage.setItem("peopleList", JSON.stringify (peopleList));
    showData();
}

function updateData(index){
    
    document.getElementById("Submit").style.display ="none";
    document.getElementById("Update").style.display ="block";

    var peopleList;
    if(localStorage.getItem("peopleList") == null) {
        peopleList = [];
    } else {
        peopleList = JSON.parse(localStorage.getItem ("peopleList"));
    }

    document.getElementById("title").value = peopleList[index].title;
    document.getElementById("text").value = peopleList[index].text;
    document.getElementById("image").value = peopleList[index].image;

    document.querySelector("#Update").onclick = function() {
        if(validateForm() == true){
            peopleList[index].title = document.getElementById("title").value;
            peopleList[index].text = document.getElementById("text").value;
            peopleList[index].image = document.getElementById("image").value;
            localStorage.setItem("peopleList", JSON.stringify(peopleList));

            showData();

            document.getElementById("title").value = "";
            document.getElementById("text").value = "";
            document.getElementById("image").value = "";

             
    document.getElementById("Submit").style.display ="block";
    document.getElementById("Update").style.display ="none";
        }
    }
}
