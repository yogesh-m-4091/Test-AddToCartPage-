   // Function to update selection and heights
   const updateSelectionAndHeight = (selectedId, price) => {
    const allSelections = document.querySelectorAll('.selection');
    const allContainers = document.querySelectorAll('.container3');

    allSelections.forEach((selection, index) => {
        if (index === selectedId) {
            selection.style.display = 'block';
        } else {
            selection.style.display = 'none';
        }
    });

    allContainers.forEach((container, index) => {
        if (index === selectedId) {
            container.style.height = '30%';
        } else {
            container.style.height = '15%'; 
        }
    });

    // Update the total value based on the selected price
    document.getElementById('totalValue').textContent = `${price.toFixed(2)} USD`;
}

// Pair functions
const pair1 = () => {
    updateSelectionAndHeight(0, 10.00);
}

const pair2 = () => {
    updateSelectionAndHeight(1, 18.00);
}

const pair3 = () => {
    updateSelectionAndHeight(2, 24.00);
}

// Function to handle "Add to Cart" button click
const addToCart = () => {

    const totalValue = document.getElementById('totalValue').textContent;

    // Show alert with items added and total price
    alert(`Items added to cart!\nTotal Price: ${totalValue}`);
}