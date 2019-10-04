/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function CarouselMaker() {
    //**************** CAROUSEL
    const carousel = document.createElement("div");
    carousel.classList.add("carousel");

    //**************** LEFT BUTTON
    const leftbtn = document.createElement("div");
    leftbtn.classList.add("left-button");
    leftbtn.textContent = "<";
    carousel.appendChild(leftbtn);

    leftbtn.addEventListener("click", e => {
        index = 0;
        for (let i = 0; i < images.length; i++) {
            //find image that isn't hidden
            if (!images[i].classList.contains("imghide")) {
                //toggle that visible image to hidden
                images[i].classList.toggle("imghide");
                index = i;
            }
        }

        //use stored index to determine where the previously visible picture was
        //if first item in array, go to end of array
        if (index === 0) {
            images[images.length - 1].classList.toggle("imghide");
        }
        //otherwise go down 1 from index
        else {
            images[index - 1].classList.toggle("imghide");
        }
    });

    //**************** RIGHT BUTTON
    const rightbtn = document.createElement("div");
    rightbtn.classList.add("right-button");
    rightbtn.textContent = ">";
    carousel.appendChild(rightbtn);

    rightbtn.addEventListener("click", e => {
        index = 0;
        for (let i = 0; i < images.length; i++) {
            //find image that isn't hidden
            if (!images[i].classList.contains("imghide")) {
                //toggle that visible image to hidden
                images[i].classList.toggle("imghide");
                index = i;
            }
        }
        console.log(index);
        //use stored index to determine where the previously visible picture was
        //if last item in array, go to beginning of array
        if (index === images.length - 1) {
            images[0].classList.toggle("imghide");
        }
        //otherwise go up 1 from index
        else {
            images[index + 1].classList.toggle("imghide");
        }
    });

    //**************** IMAGES
    const imagesSrcs = [
        "./assets/carousel/mountains.jpeg",
        "./assets/carousel/computer.jpeg",
        "./assets/carousel/trees.jpeg",
        "./assets/carousel/turntable.jpeg"
    ];
    images = [];

    for (let i = 0; i < imagesSrcs.length; i++) {
        images.push(document.createElement("img"));
        images[i].src = imagesSrcs[i];
        images[i].classList.add("imghide");
        carousel.appendChild(images[i]);
    }
    images[0].classList.toggle("imghide");

    return carousel;
}

const carouselContainer = document.querySelector(".carousel-container");
carouselContainer.appendChild(CarouselMaker());
