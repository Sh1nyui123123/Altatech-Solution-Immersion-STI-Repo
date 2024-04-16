let posts = [];

function createPost(){
  const postInput = document.getElementById('postInput');
  const postText = postInput.value.trim();
    if(postText !== ''){
     const post = {
       id: generateId(),
       text: postText
          };
             posts.push(post);
             postInput.value = '';
             displayPosts();
          }
        }

     function generateId(){
       return '_' + Math.random().toString(36).substr(2, 9);
      }

      function displayPosts(){
      const postList = document.getElementById('postList');
        postList.innerHTML = '';
        posts.forEach(post => {const li = document.createElement('li');
         li.innerHTML = `
        <span>${post.text}</span>
        <button onclick="editPost('${post.id}')">Edit</button>
        <button onclick="deletePost('${post.id}')">Delete</button>`;
         postList.appendChild(li);
              });
                 }

      function editPost(id){
      const post = posts.find(post => post.id === id);
      const newText = prompt('Edit your post:', post.text);
         if (newText !== null) {
           post.text = newText.trim();
           displayPosts();
               }
                 }

         function deletePost(id){
           posts = posts.filter(post => post.id !== id);
           displayPosts();
                 }


displayPosts();
