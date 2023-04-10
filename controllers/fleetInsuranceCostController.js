/*
* This controller manages the calculation, first, of the individual cost per vehicle which is then added to
* an array. The array is then used to calculate the cost of the entire fleet from the individual vehicles'
* insurance cost
*/

/* Declaration and initialisation of the array to store the individual vehicle costs in */
const individualCostArray = [];

/* The function that calculates the individual insurance cost of the vehicles based on the kilometers
* that is submitted from the index.pug view  */
const addCostToArray = (req, res, next) => {

    /* Declaration and initialisation of the variables used in the function */
    let individualCost = 0;
    const kilometersDriven = Number(req.body.kilometers);

    /* The if-else block does the actual calculation based on the kilometers that was submitted. */
    if (kilometersDriven >= 101) {
        individualCost = 260 + ((kilometersDriven - 100) * 0.50);
    } else if (kilometersDriven >= 51) {
        individualCost = 220 + ((kilometersDriven - 50) * 0.80);
    } else if (kilometersDriven >= 21) {
        individualCost = 200 + ((kilometersDriven - 20))
    } else {
        individualCost = 200;
    }

    /* Finally the individual insurance cost is pushed to the array that was created for this purpose */
    individualCostArray.push(individualCost);

    /* A return value to enable testing */
    return individualCost;

}

/* The function that calculates the total cost of the fleet based on the array of individual cost
* above. It then renders the result back to the index.pug view */
const calculateTotalCost = (req, res, next) => {

    /* Declaration and initialisation of the variable needed in this function */
    let totalFleetCost = 0;

    /* The for loop is used to add all the individual values in the array from above together
    * to get the total cost for the fleet. */
    for (const individualCost of individualCostArray) {
        totalFleetCost += individualCost;
    }

    /* Transforming the result from the calculation into a two decimal figure */
    totalFleetCost = totalFleetCost.toFixed(2);

    /* Finally rendering the result to the index.pug view */
    res.render('index', {
        title: 'Fleet Insurance Cost Calculator',
        result: totalFleetCost
    })

}

/* Delete the contents of the individualCostArray to reset the page. It send back a value of
* 0.00 to render to the results section of the page */
const clearCostArray = (req, res, next) => {

    /* The for loop to delete the entries of the array */
    for (let i = 0; i < individualCostArray.length; i++) {
        individualCostArray.splice(i, 1)
    }

    res.render('index', {
        title: 'Fleet Insurance Cost Calculator',
        result: ''
    })

}

/* Exporting both functions for use in the routes that were set up for collecting the individual kilometers
* and also for displaying the result of the total fleet cost */
module.exports.addCostToArray = addCostToArray;
module.exports.calculateTotalCost = calculateTotalCost;
module.exports.clearCostArray = clearCostArray;
