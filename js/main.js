import posts from './data.js';

const userPicElArr = Array.from(document.getElementsByClassName("profile-pic"));
const nameElArr = Array.from(document.getElementsByClassName("name"));
const locationEl = document.getElementById("location");
const postEl = document.getElementById("post");
const likesEl = document.getElementById("likes");
let count = 0;
const user = posts[count];


function update(user) {
    userPicElArr.forEach(obj => { obj.src = user.avatar; });
    nameElArr.forEach(obj => { obj.textContent = user.name; });
    locationEl.innerHTML = user.location;
    postEl.src = user.post;
    likesEl.textContent = `${user.likes} likes`;
}




function handleTouch(start,end){
  const xDist = end - start;
   if(xDist > 100){
      rightSwipe();
    }else if(xDist<(100*-1)){
      leftSwipe();
    }
}


var leftSwipe = () => {
    count++;
    if (count > posts.length - 1) {
        count = 2;
    }
    const user = posts[count];
    update(user);
    
};
var rightSwipe = () => {
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
        handleTouch(startX, endX);
   
    });
};

update(user);