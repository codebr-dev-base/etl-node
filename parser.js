const fs = require("fs");
const readline = require("readline");
const path = require("path");
const layoutHeader = require("./layouts/header");
const layoutCliente = require("./layouts/clientes");

// Função para determinar o layout com base no tamanho da linha
function determinarLayout(tamanhoLinha) {
  const layouts = [
    { tamanho: 27, layout: layoutHeader },
    { tamanho: 1534, layout: layoutCliente },
    // Adicione outros layouts conforme necessário
  ];

  for (const { tamanho, layout } of layouts) {
    if (tamanho === tamanhoLinha) {
      return layout;
    }
  }

  throw new Error(
    `Layout não encontrado para o tamanho da linha: ${tamanhoLinha}`
  );
}

// Função para ler um arquivo e transformar as linhas em entidades JSON
function lerArquivo(nomeArquivo) {
  return new Promise((resolve, reject) => {
    const entidades = [];

    const leitor = readline.createInterface({
      input: fs.createReadStream(nomeArquivo),
      output: process.stdout,
      terminal: false,
    });

    leitor.on("line", (linha) => {
      const tamanhoLinha = linha.length;

      try {
        const layout = determinarLayout(tamanhoLinha);
        const campos = Object.entries(layout);
        const entidade = {};
        campos.forEach(([nomeCampo, configCampo]) => {
          const { inicio, tamanho } = configCampo;
          const valor = linha
            .substring(inicio - 1, inicio - 1 + tamanho)
            .trim();
          entidade[nomeCampo] = valor;
        });
        entidades.push(entidade);
      } catch (error) {
        //console.log(linha);
        //console.log(linha.length);
      }
    });

    leitor.on("close", () => {
      resolve(entidades);
    });

    leitor.on("error", (error) => {
      reject(error);
    });
  });
}

// Função para ler todos os arquivos em uma pasta e transformar as linhas em entidades JSON
async function lerArquivosNaPasta(caminhoPasta) {
  try {
    const arquivos = await fs.promises.readdir(caminhoPasta);
    const entidadesPorArquivo = await Promise.all(
      arquivos.map(async (nomeArquivo) => {
        const caminhoArquivo = path.join(caminhoPasta, nomeArquivo);
        const entidades = await lerArquivo(caminhoArquivo);
        return { nomeArquivo, entidades };
      })
    );
    return entidadesPorArquivo;
  } catch (error) {
    throw error;
  }
}

// Verifica se o argumento foi fornecido na linha de comando
if (process.argv.length !== 3) {
  console.error("Por favor, forneça o nome da pasta como argumento.");
  process.exit(1);
}

// Obtem o nome da pasta a partir dos argumentos da linha de comando
const nomeDaPasta = process.argv[2];
const caminhoDaPasta = path.join(__dirname, nomeDaPasta);

// Lê os arquivos na pasta e processa as entidades
lerArquivosNaPasta(caminhoDaPasta)
  .then((entidadesPorArquivo) => {
    console.log("Entidades por arquivo:");
    entidadesPorArquivo.forEach(({ nomeArquivo, entidades }) => {
      if (entidades.length > 0) {
        console.log(`- Arquivo: ${nomeArquivo}`);
        console.log("  Entidades:", entidades);
      }
    });
  })
  .catch((error) => {
    console.error("Erro ao ler os arquivos:", error);
  });
