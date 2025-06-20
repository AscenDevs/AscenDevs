var modo;

if (document.getElementById("bd").classList.contains("bdEsc")) { // Checa o class do body para definir o modo ao carregar a página
    modo = "Escuro";
}
else {
    modo = "Claro";
}

let ids = ["btnC", "bd", "hdr", "imgL", "secD", "secD2", "inpN", "inpE", "inpP", "inpA", "locM", "dProd", "secSis", "dSisH", "dSisA", "ftr"]; // Lista de ids usados

function trocarCor() { // Troca de modo claro e escuro
    if (modo == "Escuro") {
        ids.forEach(id => { // Para (tentar) carregar todo id usado nos site
            const idAtual = document.getElementById(id); // Para facilitar a compreensão do switch case a seguir
            try { // try catch para não causar erro caso algum id não esteja sendo usado na página 
                switch (id) {
                    case "btnC":
                        idAtual.classList.replace("dEsc", "dClr"); // Botão de trocar cor
                        // Serve para puxar o arquivo, independentemente do caminho do html
                        idAtual.src = "./src/img/modoClrIco.png"; // Imagem do botão
                        idAtual.onerror = () => {
                            idAtual.src = "../img/modoClrIco.png";
                        }
                        break;
                    case "bd":
                        idAtual.classList.replace("bdEsc", "bdClr"); // body
                        break;
                    case "hdr":
                        idAtual.classList.replace("hdrEsc", "hdrClr"); // header
                        break;
                    case "imgL":
                        idAtual.classList.replace("imgEsc", "imgClr"); // Logo da empresa
                        break;
                    case "secD":
                        idAtual.classList.replace("secDEsc", "secDClr"); // Seção div
                        break;
                    case "secD2":
                        idAtual.classList.replace("secDEsc", "secDClr"); // Seção div - 2
                        break;
                    case "inpN":
                        idAtual.classList.replace("inpEsc", "inpClr"); // Input Nome
                        break;
                    case "inpE":
                        idAtual.classList.replace("inpEsc", "inpClr"); // Input Email
                        break;
                    case "inpP":
                        idAtual.classList.replace("inpEsc", "inpClr"); // Input Propósito
                        break;
                    case "inpA":
                        idAtual.classList.replace("inpAEsc", "inpAClr"); // Input Assunto
                        break;
                    case "locM":
                        idAtual.classList.replace("locMEsc", "locMClr"); // Mapa da localização
                        break;
                    case "dProd":
                        idAtual.classList.replace("dProdEsc", "dProdClr"); // div Produções
                        break;
                    case "secSis":
                        idAtual.classList.replace("secSisEsc", "secSisClr"); // section Sistemas
                        break;
                    case "dSisH":
                        idAtual.classList.replace("dSisEsc", "dSisClr"); // div Sistema Html
                        break;
                    case "dSisA":
                        idAtual.classList.replace("dSisEsc", "dSisClr"); // div Sistema ASP.NET
                        break;
                    case "ftr":
                        idAtual.classList.replace("ftrEsc", "ftrClr"); // footer
                        break;
                }
            }
            catch {
                console.log(id, "não existe."); // Caso algum id não exista, o site simplesmente enviará uma mensagem no console.
            }
        });
        modo = "Claro"; // Define o novo modo.
    }
    else { // A estrutura acima se repete neste else
        ids.forEach(id => {
            const idAtual = document.getElementById(id);
            try {
                switch (id) {
                    case "btnC":
                        idAtual.classList.replace("dClr", "dEsc");
                        idAtual.src = "./src/img/modoEscIco.png";
                        idAtual.onerror = () => {
                            idAtual.src = "../img/modoEscIco.png";
                        }
                        break;
                    case "bd":
                        idAtual.classList.replace("bdClr", "bdEsc");
                        break;
                    case "hdr":
                        idAtual.classList.replace("hdrClr", "hdrEsc");
                        break;
                    case "imgL":
                        idAtual.classList.replace("imgClr", "imgEsc");
                        break;
                    case "secD":
                        idAtual.classList.replace("secDClr", "secDEsc");
                        break;
                    case "secD2":
                        idAtual.classList.replace("secDClr", "secDEsc");
                        break;
                    case "inpN":
                        idAtual.classList.replace("inpClr", "inpEsc");
                        break;
                    case "inpE":
                        idAtual.classList.replace("inpClr", "inpEsc");
                        break;
                    case "inpP":
                        idAtual.classList.replace("inpClr", "inpEsc");
                        break;
                    case "inpA":
                        idAtual.classList.replace("inpAClr", "inpAEsc");
                        break;
                    case "locM":
                        idAtual.classList.replace("locMClr", "locMEsc");
                        break;
                    case "dProd":
                        idAtual.classList.replace("dProdClr", "dProdEsc");
                        break;
                    case "secSis":
                        idAtual.classList.replace("secSisClr", "secSisEsc");
                        break;
                    case "dSisH":
                        idAtual.classList.replace("dSisClr", "dSisEsc");
                        break;
                    case "dSisA":
                        idAtual.classList.replace("dSisClr", "dSisEsc");
                        break;
                    default:
                        idAtual.classList.replace("ftrClr", "ftrEsc");
                        break;
                }
            }
            catch {
                console.log(id, "não existe.");
            }
        });
        modo = "Escuro";
    }
}

function trocarPag(event) { // Para que o modo permaneça mesmo após a troca de página 
    event.preventDefault(); // Impede que a página carregue como normalmente acontece com a tag "<a>"
    let link = event.target.href; // link pega o link do <a> clicado
    let larg = link.length; // largura do link
    let novoLink; // link para o qual o usuário será redirecionado ao clicar

    if (modo === "Escuro") {  // Páginas com modo escuro como padrão terminarão com ".html"
        if (link.endsWith("C.html")) {
            novoLink = link.slice(0, larg - 6) + ".html"; // Troca C.html por .html
        }
        else {
            novoLink = link; // mantém o link caso não haja mudanças
        }
    }
    else { // Páginas com modo claro como padrão terminarão com "C.html"
        if (!link.endsWith("C.html") && link.endsWith(".html")) {
            novoLink = link.slice(0, larg - 5) + "C.html"; // Troca .html por C.html
        }
        else {
            novoLink = link;
        }
    }
    window.location.href = novoLink; // Redireciona o usuário, trocando de página
}