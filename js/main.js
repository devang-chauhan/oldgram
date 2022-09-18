import posts from './data.js';

const userPicElArr = Array.from(document.getElementsByClassName("profile-pic"));
const nameElArr = Array.from(document.getElementsByClassName("name"));
const locationEl = document.getElementById("location");
const postEl = document.getElementById("post");
const likesEl = document.getElementById("likes");
let count = 0;
const user = posts[count];


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


function handleTouch(start,end, left, right){
  const xDist = end - start;
  console.log(`Horizontal distance is ${xDist}`);
   if(xDist > 100){
      right();
    }else if(xDist<(100*-1)){
      left();
    }
}


var left = () => {
    count++;
    if (count > posts.length - 1) {
        count = 2;
    }
    const user = posts[count];
    update(user);
    
};
var right = () => {
    count--;
    if (count < 0) {
        count = 0;
    }
    const user = posts[count];
    update(user);
};


window.onload = function () {
    let startX = 0;
    let endX = 0;
    window.addEventListener('touchstart', function (event) {
        startX = event.touches[0].clientX;
    });
  
    window.addEventListener('touchend', function (event) {
        endX = event.changedTouches[0].clientX;
        handleTouch(startX, endX, left, right);
   
    });
};