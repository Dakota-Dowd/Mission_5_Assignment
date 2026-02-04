$(document).ready(function () {
    $("#calculateButton").click(function () {
        // Get the values from the inputs
        var hours = $("#hours").val();
        var rate = $("#rate").val();

        // Validate the inputs
        if (hours <= 0 || isNaN(hours) || hours === "") {
            alert("Please enter a valid positive number for hours");
            retun;
        }

        // Calculate total
        var total = hours * rate;

        $("#totalOutput").val("$" + total.toFixed(2));
    })
})