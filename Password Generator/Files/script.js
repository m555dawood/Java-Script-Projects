document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('password');
    const generateBtn = document.getElementById('generateBtn');

    generateBtn.addEventListener('click', () => {
        passwordInput.value = generatePassword();
    });

    function generatePassword() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        let password = '';
        const passwordLength = 8;

        for (let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            password += characters.charAt(randomIndex);
        }

        return password;
    }
});