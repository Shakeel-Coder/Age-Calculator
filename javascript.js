document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("myform");
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Get input values
        const day = parseInt(document.getElementById("day").value);
        const month = parseInt(document.getElementById("month").value);
        const year = parseInt(document.getElementById("year").value);

        // Validate input
        if (isNaN(day) || isNaN(month) || isNaN(year) || day < 1 || month < 1 || month > 12) {

        
            alert("Must be a valid date.");
            return;
        }

    

        // Get current date
        const currentDate = new Date();

        // Create birthdate object
        const birthdate = new Date(year, month - 1, day);

        if (birthdate > currentDate) {
            alert("The date of birth cannot be in the future.");
            return;
        }

        // Calculate age
        const ageInMilliseconds = currentDate - birthdate;
        const ageInSeconds = ageInMilliseconds / 1000;
        const ageInMinutes = ageInSeconds / 60;
        const ageInHours = ageInMinutes / 60;
        const ageInDays = ageInHours / 24;
        const ageInMonths = (currentDate.getFullYear() - birthdate.getFullYear()) * 12 + currentDate.getMonth() - birthdate.getMonth();
        const ageInYears = currentDate.getFullYear() - birthdate.getFullYear();

        // Display the results
        document.querySelector(".result.days").textContent = Math.floor(ageInDays);
        document.querySelector(".result.months").textContent = ageInMonths;
        document.querySelector(".result.years").textContent = ageInYears;
    });
});
