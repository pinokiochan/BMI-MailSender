const express = require("express"); 
const app = express();


app.use(express.static("public"));

app.get("/", function (_, response) {
    response.sendFile(__dirname + "/public/index.html");
});



app.post("/", function (request, response) {
    const weight = parseFloat(request.query.weight);
    const height = parseFloat(request.query.height);

    if (!weight || !height || weight <= 0 || height <= 0) {
        response.status(400).json({ error: "Invalid weight or height" });
        return;
    }

    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters ** 2);

    let category = "undefined"
    if (bmi < 18.5){
        category = "Underweight"
    }else if (bmi < 25){
        category = "Normal"
    }else if (bmi < 30){
        category = "Overweight"
    }else{
        category = "Obese"
    }

    response.status(200).json({ bmi: bmi.toFixed(2), category: category });
});


app.listen(5000)
