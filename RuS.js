document.addEventListener('DOMContentLoaded', () => {
    const naiButton = document.getElementById('naiButton');
    const oxiButton = document.getElementById('oxiButton');
    const imageContainer = document.getElementById('imageContainer');
    const bgMusic = document.getElementById('bgMusic');

    const random = () => Math.random();

    const moveButtonRandomly = (button) => {
        const parentWidth = 400; // Adjust to your container's actual size if needed
        const parentHeight = 300;
        const x = random() * (parentWidth - 100); // button width approx
        const y = random() * (parentHeight - 50);  // button height approx

        button.style.left = `${x}px`;
        button.style.top = `${y}px`;
    };

    naiButton.addEventListener('click', () => {
        imageContainer.style.display = 'block';
        bgMusic.play(); // <--- Trigger audio here
    });

    oxiButton.addEventListener('mouseover', () => {
        moveButtonRandomly(oxiButton);
    });
});
