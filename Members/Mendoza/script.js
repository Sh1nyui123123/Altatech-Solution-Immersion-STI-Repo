//Validate form inputs before submitting data
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


//function to show data
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
        html += 
        '<td><button onclick="deleteData('+ 
        index +
        ')" class="btn btn-danger">Delete</button><button onclick="updateData(' +
        index + 
        ')" class="btn btn-warning m-2">Edit</button></td>';
        html += "</tr>";
    });

    document.querySelector("#postTable tbody").innerHTML = html;
}

//Loads All data from local storage when document or page loaded
document.onload = showData();

//function to add data to local storage
function addData() {
    //form is validated
    if(validateForm() == true) {
        var title = document.getElementById("title").value;
        var text = document.getElementById("text").value;

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
        });

        localStorage.setItem("peopleList", JSON.stringify(peopleList));
        showData();
        document.getElementById("title").value = ""; 
        document.getElementById("text").value = "";
    }
}

//function to delete data from local storage
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
//function to update/edit data from local storage
function updateData(index){
    //Submit button willl hide and update button will show for updating of Data in local storage
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

    document.querySelector("#Update").onclick = function() {
        if(validateForm() == true){
            peopleList[index].title = document.getElementById("title").value;
            peopleList[index].text = document.getElementById("text").value;

            localStorage.setItem("peopleList", JSON.stringify(peopleList));

            showData();

            document.getElementById("title").value = "";
            document.getElementById("text").value = "";

             //Update button willl hide and submit button will show 
    document.getElementById("Submit").style.display ="block";
    document.getElementById("Update").style.display ="none";
        }
    }
}
