function enviarFormulario() {
    /*Enviar com post*/
    const form = document.getElementById("formCadastro")

    const buildData = (form) => [{
        "responsavel": form.responsavel.value,
        "cnpj": form.cnpj.value,
        "telefone": form.telefone.value,
        "categoria": form.categoria.value
    }]

    console.log(buildData(form)[0])

    //window.location.replace("/login");
}