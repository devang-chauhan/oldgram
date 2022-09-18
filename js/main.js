import posts from './data.js';

const userPicElArr = Array.from(document.getElementsByClassName("profile-pic"));
const nameElArr = Array.from(document.getElementsByClassName("name"));
const locationEl = document.getElementById("location");
const postEl = document.getElementById("post");
const likesEl = document.getElementById("likes");
const user = posts[0];


function update(user) {
    // update profile pics
    userPicElArr.forEach(obj => { obj.src = user.avatar; });

    // update name
    nameElArr.forEach(obj => { obj.textContent = user.name; });

    // update location
    locationEl.innerHTML = user.location;

    // update post image
    postEl.src = user.post;

    // number of likes
    likesEl.textContent = `${user.likes} likes`;
}

update(user);