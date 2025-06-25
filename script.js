document.getElementById("bookingForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const source = document.getElementById("source").value;
  const destination = document.getElementById("destination").value;
  const date = document.getElementById("date").value;
  const seats = parseInt(document.getElementById("seats").value);

  const costPerSeat = 500; // Example price
  const totalCost = seats * costPerSeat;

  const summary = `
    Name: ${name}<br>
    Email: ${email}<br>
    From: ${source} to ${destination}<br>
    Travel Date: ${date}<br>
    Seats Booked: ${seats}<br>
    Total Cost: ₹${totalCost}
  `;

  document.getElementById("summaryDetails").innerHTML = summary;
  document.getElementById("ticketSummary").classList.remove("hidden");

  // Optional: Reset the form
  // document.getElementById("bookingForm").reset();
});
