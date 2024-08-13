document.addEventListener('DOMContentLoaded', () => {
    const naiButton = document.getElementById('naiButton');
    const oxiButton = document.getElementById('oxiButton');
    const imageContainer = document.getElementById('imageContainer');

    const random = () => Math.random();

    const moveButtonRandomly = (button) => {
        const parentWidth = 300; // Assuming the width of the parent
        const parentHeight = 200; // Assuming the height of the parent
        const x = random() * (parentWidth - 100); // Assuming button width is 100
        const y = random() * (parentHeight - 50); // Assuming button height is 50

        button.style.left = `${x}px`;
        button.style.top = `${y}px`;
    };

    naiButton.addEventListener('click', () => {
        imageContainer.style.display = 'block';
    });

    oxiButton.addEventListener('mouseover', () => {
        moveButtonRandomly(oxiButton);
    });
});