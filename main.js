const fs = require("fs");
const readline = require("readline");
const path = require("path");

if (process.argv.length === 2) {
  console.error("Expected at least one argument!");
  process.exit(1);
}

if (process.argv[2]) {
  if (fs.existsSync(`${__dirname}/${process.argv[2]}`)) {
    console.log("File is present.");

    // Nome do arquivo grande que você deseja dividir
    const nameBigFile = process.argv[2];
    const linePerFile = 1024;
    let currentLine = 0;
    let currentFile = 1;
    let outputWriteStream;

    const reader = readline.createInterface({
      input: fs.createReadStream(nameBigFile),
      output: process.stdout,
      terminal: false,
    });

    let codeIdentifier;

    // Lê a primeira linha do arquivo para obter o código identificador
    reader.once("line", (line) => {
      codeIdentifier = line.trim(); // Remove espaços em branco do início e do fim
    });

    reader.on("line", (line) => {
      if (currentLine % linePerFile === 0) {
        if (outputWriteStream) {
          outputWriteStream.end();
        }
        const nameFolder = `${codeIdentifier}_partes`;
        const pathFolder = path.join(__dirname, nameFolder);
        if (!fs.existsSync(pathFolder)) {
          fs.mkdirSync(pathFolder);
        }
        const nomeNewFile = `slice_${currentFile}_${nameBigFile}`;
        const pathNewFile = path.join(pathFolder, nomeNewFile);
        outputWriteStream = fs.createWriteStream(pathNewFile);
        currentFile++;
      }
      outputWriteStream.write(`${line}\n`);
      currentLine++;
    });

    reader.on("close", () => {
      if (outputWriteStream) {
        outputWriteStream.end();
      }
      console.log("Divisão do arquivo concluída.");
    });
  }
} else {
  console.log("File name is not present.");
  process.exit(1);
}
