 // Function to open the modal
 function openModal() {
    document.getElementById('addSkillModal').style.display = 'flex';
  }

  // Function to close the modal
  function closeModal() {
    document.getElementById('addSkillModal').style.display = 'none';
  }

  // Function to add a new skill input row
  function addSkillRow() {
    const skillsContainer = document.getElementById('skillsContainer');
    const skillRow = document.createElement('div');
    skillRow.className = 'skill-row';

    // Create skill name input
    const skillInput = document.createElement('input');
    skillInput.type = 'text';
    skillInput.name = 'skillName[]';
    skillInput.placeholder = 'Skill';
    skillInput.required = true;

    // Create proficiency input
    const proficiencyInput = document.createElement('input');
    proficiencyInput.type = 'number';
    proficiencyInput.name = 'proficiency[]';
    proficiencyInput.placeholder = 'Proficiency (%)';
    proficiencyInput.min = '0';
    proficiencyInput.max = '100';
    proficiencyInput.required = true;

    // Append inputs to the row
    skillRow.appendChild(skillInput);
    skillRow.appendChild(proficiencyInput);

    // Append the row to the container
    skillsContainer.appendChild(skillRow);
  }

  // Add event listener for form submission
  document.getElementById('addSkillForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Implement form submission logic
    alert('Skill added successfully!');
    closeModal();
  });

/* Skill Handler Function*/
function addSkill() {
    const domain = document.getElementById("domain").value;
    const new_card = document.createElement("div");
    new_card.className = "skill-card";
    const skills_container = document.getElementById("skills-container");

    // const skills = document.getElementsByClassName("skill-row");
    // for (let i = 0 ; i < skills.length ; i++)
    //     console.log(skills[i]., " ", skills[i].lastChild)
}