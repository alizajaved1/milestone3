// script.ts

// Function to handle form submission and generate resume
function handleFormSubmit(event: Event): void {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get form values
  const form = document.getElementById('resumeForm') as HTMLFormElement;
  const formData = new FormData(form);

  const resumeData = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      education: formData.get('education') as string,
      experience: formData.get('experience') as string,
      skills: formData.get('skills') as string,
      description: formData.get('description') as string
  };

  // Generate resume output
  const resumeOutput = document.getElementById('resumeOutput') as HTMLDivElement;
  resumeOutput.innerHTML = `
      <h2>Resume</h2>
      <p><strong>Name:</strong> ${resumeData.name}</p>
      <p><strong>Email:</strong> ${resumeData.email}</p>
      <p><strong>Phone:</strong> ${resumeData.phone}</p>
      <p><strong>Education:</strong> ${resumeData.education}</p>
      <p><strong>Experience:</strong> ${resumeData.experience}</p>
      <p><strong>Skills:</strong> ${resumeData.skills}</p>
      <p><strong>Description:</strong> ${resumeData.description}</p>
  `;
}

// Add event listener to form
document.getElementById('resumeForm')?.addEventListener('submit', handleFormSubmit);
