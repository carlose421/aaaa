const arquivoMarkdown = 'exemplo.md';

   fs.readFile(arquivoMarkdown, 'utf-8', (erro, conteudo) => {
       if (erro) {
           console.error(chalk.red('Erro ao ler o arquivo:'), erro);
           return;
       }

       console.log(chalk.green('Conteúdo do arquivo lido com sucesso!'));
       processarConteudo(conteudo);
   });
   