let form = document.getElementById("form");
let title = document.getElementById("title");
let desc = document.getElementById("desc");
let image = document.getElementById("image");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Button Clicked")

    formValidation();
})

let formValidation = () => {
    if (title.value === "") {
        msg.innerHTML = "Please enter title";
        console.log("fail")
    } else if (desc.value === "") {
        msg.innerHTML = "Please enter description";
        console.log("fail")
    }else {
        msg.innerHTML = "";
        console.log("success")

        acceptData();
    }
};

let data = {};

let acceptData = () => {
    if (image.value === "") {
        data["title"] = title.value;
        data["desc"] = desc.value;
        createPost();
    } else {
        data["title"] = title.value;
        data["desc"] = desc.value;
        data["img"] = image.value;
        createPost();
    }


};

let createPost = () => {
    posts.innerHTML += `
    <div>
        <p class="title">${data.title}</p>
        <p class="description">${data.desc}</p>
        <img class="image" src="${data.img}">
        <span class="options">
            <i onClick="editPost(this)" class="fa-solid fa-pen-to-square"></i>   
            <i onClick="deletePost(this)" class="fa-solid fa-trash-can"></i>
        </span>
    </div>
    `;
    title.value = "";
    desc.value = "";
    image.value = "";
};

let deletePost = (e) => {
    e.parentElement.parentElement.remove();
};

let editPost = (e) => {
    title.value = e.parentElement.previousElementSibling.previousElementSibling.innerHTML;
    desc.value = e.parentElement.previousElementSibling.previousElementSibling.innerHTML;
    image.value = e.parentElement.previousElementSibling.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
};