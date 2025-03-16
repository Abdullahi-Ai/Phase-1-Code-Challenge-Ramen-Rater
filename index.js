document.addEventListener("DOMContentLoaded", () => {
    main();
});

let ramenData = {
    "gyukotsu.jpg": { name: "Gyukotsu Ramen", restaurant: "Ramen House", rating: "9/10", comment: "Rich broth Amazing beef." },
    "kojiro.jpg": { name: "Kojiro Ramen", restaurant: "Tokyo Noodles", rating: "8.5/10", comment: "Soft meat and fry." },
    "naruto.jpg": { name: "Naruto Ramen", restaurant: "Ichiraku Ramen", rating: "10/10", comment: "Best Naruto-style ramen!" },
    "nirvana.jpg": { name: "Nirvana Ramen", restaurant: "Zen Noodles", rating: "9.5/10", comment: "Perfect balance of diet and flavors." },
    "shoyu.jpg": { name: "Shoyu Ramen", restaurant: "Shoyu King", rating: "8/10", comment: "Best and flavorful." }
};

function main() {
    displayRamens();
    addSubmitListener();
}

function displayRamens() {
    const ramenMenu = document.getElementById("ramen-menu");
    const ramenImages = ramenMenu.getElementsByTagName("img");

    // Attach click listener to existing ramen images
    Array.from(ramenImages).forEach(img => {
        img.addEventListener("click", handleClick);
    });
}

function handleClick(event) {
    const ramenDetail = document.getElementById("ramen-details");
    const ramenName = ramenDetail.querySelector(".name");
    const ramenRestaurant = ramenDetail.querySelector(".restaurant");
    const commentDisplay = document.getElementById("comment-display");

    const clickedImageSrc = event.target.getAttribute("src");
    const ramenInfo = ramenData[clickedImageSrc];

    if (ramenInfo) {
        ramenName.textContent = ramenInfo.name;
        ramenRestaurant.textContent = ramenInfo.restaurant;
        commentDisplay.textContent = `Rating: ${ramenInfo.rating} - ${ramenInfo.comment}`;

        // Display ramen details image
        let ramenImage = document.getElementById("ramen-detail-image");
        if (!ramenImage) {
            ramenImage = document.createElement("img");
            ramenImage.id = "ramen-detail-image";
            ramenDetail.appendChild(ramenImage);
        }
        ramenImage.src = clickedImageSrc;
        ramenImage.alt = ramenInfo.name;
        ramenImage.style.width = "200px"; 
        ramenImage.style.display = "block";
    }
}

function addSubmitListener() {
    const form = document.getElementById("new-Ramen");
    const createButton = document.getElementById("create-ramen");

    // Attach click event for the "Create" button
    createButton.addEventListener("click", function () {
        const newName = document.getElementById("new-name").value;
        const newRestaurant = document.getElementById("new-restaurant").value;
        const newImage = document.getElementById("new-image").value;
        const newRating = document.getElementById("new-rating").value;
        const newComment = document.getElementById("new-comment").value;

        if (!newName || !newRestaurant || !newImage || !newRating || !newComment) {
            alert("Please fill in all the fields.");
            return;
        }

        
        ramenData[newImage] = {
            name: newName,
            restaurant: newRestaurant,
            rating: newRating,
            comment: newComment
        };

        
        const ramenMenu = document.getElementById("ramen-menu");
        const newImg = document.createElement("img");
        newImg.src = newImage;
        newImg.alt = newName;
        ramenMenu.appendChild(newImg);

        newImg.addEventListener("click", handleClick);

    
        form.reset();
    });
}
