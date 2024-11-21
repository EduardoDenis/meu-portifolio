const form = document.querySelector("#formulario");
    const nameInput = document.querySelector("#name");
    const emailInput = document.querySelector("#email");
    const assunto = document.querySelector("#assunto");
    const telefone = document.querySelector("#telefone")
    const mensagem = document.querySelector("#mensagem");

    console.log(form, nameInput, emailInput);

    // funcao criada para validar as informacoes inseridas
    form.addEventListener("submit", (event) => {
        event.preventDefault

        if (nameInput.value === "") {
            alert("Preencha o seu nome");
            return;
        }

        if (emailInput.value === "" || !isEmailValid(emailInput.value)) {
            alert("Preencha o seu email");
            return;
        }

        if (assunto.value === "") {
            alert("Preencha o assunto");
            return;
        }

        if (telefone.value === "") {
            alert("Preencha o seu telefone");
            return;
        }

        if (mensagem.value === "") {
            alert("Digite a mensagem");
            return;
        }

        // se o resultado for verdadeiro o formulário será enviado
        form.submit();

    })

    // funcao que valida email
    function isEmailValid(email) {

        // validacao atraves dos caracteres inseridos no imput, utilizando o regex
        const emailRegex = new RegExp(
            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
        );

        if (emailRegex.test(email)) {
            return true
        }
        return false

    }
