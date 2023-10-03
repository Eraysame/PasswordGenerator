        let password = document.querySelector ('#Password');


        function genPassword() {
            let chars = '0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            let passwordLength = 12;
            let Password = "";
        }

        for (let i = 0; i <= passwordLength; i++) {
            let randomNumber = Math.floor(Math.random() * chars.length);
            password += chars.substring(randomNumber, randomNumber +1);
        }

        document.querySelector ('#Password').value = password;

            function copyPassword() {
        let  copyText = document.querySelector ('#Password');
        copyText.select();
        copyText.setSelectionRange(0, 999);
        document.execCommand('copy');
        }

        let  password1 =document.querySelector('#Password');
        function genPassword() {
        let  chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
       let  passwordLength = 12;
        let  password = "";
        for (let i = 0; i <= passwordLength; i++) {
            let randomNumber = Math.floor(Math.random() * chars.length);
            password += chars.substring(randomNumber, randomNumber +1);
        }
            document.querySelector ('#Password').value = password;
        }
        function copyPassword() {
        let copyText = document.querySelector ('#Password');
        copyText.select();
        copyText.setSelectionRange(0, 999);
        document.execCommand("copy");
        }