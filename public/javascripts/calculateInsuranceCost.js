const insuranceCostPerVehicleArray = []

/* Function to calculate the insurance cost of an individual vehicle based on its kilometers driven */
const calculateInsurance = (kilometersDriven) => {
    if (kilometersDriven >= 101) {
        return 260 + ((kilometersDriven - 100) * 0.5);
    } else if (kilometersDriven >= 51) {
        return 220 + ((kilometersDriven - 50) * 0.8);
    } else if (kilometersDriven >= 21) {
        return 200 + ((kilometersDriven - 20));
    } else {
        return 200
    }
}

/* Function to add all individual vehicle insurance costs to an array */
const addVehicleCostToArray = (kilometers) => {
    insuranceCostPerVehicleArray.push(calculateInsurance(kilometers))
}

const calculateFleetInsuranceCost = (listOfIndividualCostsPerVehicle) => {
    let totalFleetCost = 0;
    for (const costPerVehicle of insuranceCostPerVehicleArray) {
        totalFleetCost += costPerVehicle;
    }
    return totalFleetCost;
}

module.exports = calculateInsurance;
module.exports = addVehicleCostToArray;
module.exports = calculateFleetInsuranceCost;