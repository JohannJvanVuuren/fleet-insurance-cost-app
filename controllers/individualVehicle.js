const individualVehicleCostArray = [];

const calculateIndividualVehicleCost = (kilometersDriven) => {
    if (kilometersDriven >= 101) {
        return 260 + ((kilometersDriven - 100) * 0.5);
    } else if (kilometersDriven >= 51) {
        return 220 + ((kilometersDriven - 50) * 0.8);
    } else if (kilometersDriven >= 21) {
        return 200 + ((kilometersDriven - 20));
    } else {
        return 200;
    }
}

const addVehicleCostToArray = (req, res, next) => {

    individualVehicleCostArray.push(calculateIndividualVehicleCost(req.body.kilometers))
    res.json({message: individualVehicleCostArray})
}

module.exports = { addVehicleCostToArray };