const clientImages = [
    "client1.jpg",
    "client1.jpg",
    "client1.jpg",
    "client1.jpg",
    "client1.jpg",
    "client1.jpg"
];

document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.client-img img');
    
    images.forEach((img, index) => {
        if (clientImages[index]) {
            img.src = clientImages[index];
            img.onload = () => { img.alt = "Partner Avatar"; }; 
        }
    });
});