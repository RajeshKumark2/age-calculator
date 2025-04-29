document.addEventListener('DOMContentLoaded', function() {
    const calculateBtn = document.getElementById('calculate-btn');
    const birthdayInput = document.getElementById('birthday');
    const resultDiv = document.getElementById('result');

    calculateBtn.addEventListener('click', function() {
        const birthdayValue = birthdayInput.value;
        
        if (!birthdayValue) {
            alert('Please enter your date of birth');
            return;
        }

        const age = calculateAge(new Date(birthdayValue));
        displayResult(age);
    });

    function calculateAge(birthDate) {
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        
        return age;
    }

    function displayResult(age) {
        resultDiv.style.display = 'block';
        resultDiv.innerHTML = `
            <p>Your age is <strong>${age}</strong> years old</p>
            <p>That's about ${age * 12} months or ${Math.floor(age * 365.25)} days!</p>
        `;
    }
});