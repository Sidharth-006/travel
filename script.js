let totalPrice = 0;

function calculatePrice() {

    let destination = document.getElementById("destination").value;
    let travelers = document.getElementById("travelers").value;
    let days = document.getElementById("days").value;
    let extras = document.getElementById("extras").value;

    if(destination === "" || travelers === "" || days === "") {
        alert("Please fill required fields");
        return;
    }

    totalPrice = (destination * travelers * days) + parseInt(extras);

    document.getElementById("summary").innerHTML =
        "<h3>Booking Summary</h3>" +
        "<p>Total Price: <strong>$" + totalPrice + "</strong></p>";
}

function confirmBooking() {

    let name = document.getElementById("fullName").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    if(name === "" || email === "" || phone === "") {
        alert("Please enter your personal details");
        return;
    }

    document.getElementById("summary").innerHTML =
        "<h3>🎉 Booking Confirmed!</h3>" +
        "<p>Name: " + name + "</p>" +
        "<p>Total Paid: <strong>$" + totalPrice + "</strong></p>";
}