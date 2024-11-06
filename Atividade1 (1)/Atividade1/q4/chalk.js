function processarConteudo(conteudo) {
    const regexLink = /\[(.*?)\]\((.*?)\)/g;
    const conteudoComLinksDestacados = conteudo.replace(regexLink, (match, texto, url) => {
        return chalk.blue(texto) + chalk.magenta(`(${url})`);
    });

    console.log(conteudoComLinksDestacados);
}