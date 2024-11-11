function calculateImpact() {
    const furnitureType = document.getElementById("furnitureType").value;
    const quantity = parseInt(document.getElementById("quantity").value);

    // Emisní hodnoty v kg CO₂ na kus
    const emissions = {
        table: 50,  // Stůl: 50 kg CO₂
        chair: 15,  // Židle: 15 kg CO₂
        wardrobe: 100 // Skříň: 100 kg CO₂
    };

    const savedCO2 = emissions[furnitureType] * quantity;

    // Výsledek
    document.getElementById("result").innerText = 
        `Upcyklací ${quantity} kusu/kusů typu '${furnitureType}' jste ušetřili přibližně ${savedCO2} kg CO₂!`;
}