let posts = [];
/* reference 
https://stackoverflow.com/questions/45521466/i-cant-seem-to-get-my-code-to-work

https://teamtreehouse.com/community/how-to-trim-a-users-input

https://www.shecodes.io/athena/164401-what-is-the-trim-function-used-for-in-javascript

https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript

https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript/14276615

https://www.programiz.com/javascript/examples/generate-random-strings


https://stackoverflow.com/questions/62055245/how-to-add-content-inside-array-using-foreach-to-innerhtml


https://stackoverflow.com/questions/55439799/post-id-route-showing-up-in-other-components

https://laracasts.com/discuss/channels/laravel/crud-edit-post-problem

*/

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
