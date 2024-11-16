// Select the photo-wall element to append images to it.
const photoWall = document.querySelector('.photo-wall');

// Loop to add images dynamically based on predefined number and names
for (let i = 1; i <= 10; i++) {
    let photoItem = `
        <div class="photo-wrapper">
            <img src="./Images/photo/${i}.png" alt="Photo ${i}">
        </div>
    `;
    photoWall.innerHTML += photoItem;
}

// Select all photo-wrapper elements for interaction
const photoWrappers = document.querySelectorAll('.photo-wrapper');
const detailPhoto = document.querySelector('.detail-photo');
const close = document.querySelector('.close');
const modal = document.querySelector('.modal');
let nextPage;
let showPhotoIndex;
let timer = null;

// Function to handle photo click event
function photoWrapperFun(element, index) {
    showPhotoIndex = index;
    nextPage = index + 1;

    // Fade other photos
    for (let i = 0; i < photoWrappers.length; i++) {
        if (i != index) {
            photoWrappers[i].style.transitionDelay = '.' + Math.floor(Math.random() * 5) + 1 + 's';
            photoWrappers[i].style.opacity = 0;
        }
    }
    element.style.transitionDelay = 1.5+"s";
    element.style.opacity = 0;

    // Hide the photo wall after transition
    photoWall.style.transitionDelay = 2+"s";
    photoWall.style.zIndex = -1;
    document.body.style.overflow = 'hidden';

    // Show modal after the transition
    setTimeout(() => {
        modal.style.zIndex = 5;
        close.style.display = 'block';
        detailPhoto.appendChild(element.children[0].cloneNode(true));
        detailPhoto.style.opacity = 1;
    }, 2500);

    
}

// Function to handle close action
function closeFun() {
    detailPhoto.style.transitionDelay = '';
    detailPhoto.style.opacity = 0;

    // Reset photo wall and hide modal
    setTimeout(() => {
        modal.style.zIndex = -10;
        close.style.display = 'none';
        detailPhoto.innerHTML = '';
        photoWrappers[showPhotoIndex].style.transitionDelay = '';
        photoWrappers[showPhotoIndex].style.opacity = 1;
        document.body.style.overflow = '';

        // Restore other photos' visibility
        for (let i = 0; i < photoWrappers.length; i++) {
            if (i != showPhotoIndex) {
                photoWrappers[i].style.transitionDelay = Math.random() + 1 + 's';
                photoWrappers[i].style.opacity = 1;
            }
        }
    }, 600);
    
}

// Function to change photo in detail view
function detailPhotoFun() {
    const detailShowPhoto = document.querySelector('.modal .detail-photo img');
    nextPage++;
    if (nextPage > 10) {
        nextPage = 1;
    }
    detailShowPhoto.src = `./Images/photo/${nextPage}.png`;
}

// Throttle function to prevent rapid firing of click events
function throttle(fn, delay) {
    return function () {
        if (timer) {
            return;
        }
        fn.apply(this, arguments);
        timer = setTimeout(() => {
            timer = null;
        }, delay);
    };
}

// Add click events with throttle to each photo wrapper
photoWrappers.forEach((element, index) => {
    element.onclick = throttle(() => photoWrapperFun(element, index), 2000);
});
close.onclick = throttle(() => closeFun(), 2000);
detailPhoto.onclick = detailPhotoFun;
