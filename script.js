// script.ts
var _a;
// Function to handle form submission and generate resume
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    // Get form values
    var form = document.getElementById('resumeForm');
    var formData = new FormData(form);
    var resumeData = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        education: formData.get('education'),
        experience: formData.get('experience'),
        skills: formData.get('skills'),
        description: formData.get('description')
    };
    // Generate resume output
    var resumeOutput = document.getElementById('resumeOutput');
    resumeOutput.innerHTML = "\n      <h2>Resume</h2>\n      <p><strong>Name:</strong> ".concat(resumeData.name, "</p>\n      <p><strong>Email:</strong> ").concat(resumeData.email, "</p>\n      <p><strong>Phone:</strong> ").concat(resumeData.phone, "</p>\n      <p><strong>Education:</strong> ").concat(resumeData.education, "</p>\n      <p><strong>Experience:</strong> ").concat(resumeData.experience, "</p>\n      <p><strong>Skills:</strong> ").concat(resumeData.skills, "</p>\n      <p><strong>Description:</strong> ").concat(resumeData.description, "</p>\n  ");
}
// Add event listener to form
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', handleFormSubmit);
