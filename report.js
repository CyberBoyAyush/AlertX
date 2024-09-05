const form = document.getElementById('disasterForm');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload
    
    const disaster = {
        type: document.getElementById('disaster-type').value,
        location: document.getElementById('location').value,
        date: document.getElementById('date').value,
        description: document.getElementById('description').value,
        contactName: document.getElementById('contact-name').value,
        contactEmail: document.getElementById('contact-email').value
    };

    // Store disaster data in localStorage
    let disasterReports = JSON.parse(localStorage.getItem('disasterReports')) || [];
    disasterReports.push(disaster);

    if (disasterReports.length > 6) {
        disasterReports.shift(); // Keep only latest 6 reports
    }

    localStorage.setItem('disasterReports', JSON.stringify(disasterReports));

    alert('Disaster report submitted successfully!');
    form.reset(); // Reset form after submission
});
