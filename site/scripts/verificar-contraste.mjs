/**
 * Verificação de contraste das cores do portal (WCAG 2.x).
 *
 * Roda com: npm run contraste
 *
 * O projeto adota um piso acima do mínimo legal:
 *   - texto normal: 7:1  (a WCAG 2.2 AA exige 4,5:1)
 *   - componentes, ícones e bordas: 3:1
 *
 * Se algum par falhar, o script termina com erro (código 1), o que permite
 * usar esta checagem em integração contínua antes de publicar.
 */

const CORES = {
  // Estética "acolhedora e colorida"
  tinta: '#14213d',
  tintaSuave: '#3a4a63',
  papel: '#ffffff',
  fundo: '#f7f9fc',
  cinza: '#eef3fa',
  primaria: '#1b3a6b',
  primariaTexto: '#ffffff',
  dourado: '#ffc93c',
  douradoTexto: '#1b3a6b',
  azul: '#1b5fbf',
  azulClaro: '#e7f0fc',
  verde: '#1f7a44',
  verdeClaro: '#e4f5e9',
  ambar: '#6e4100',
  ambarClaro: '#fdf1d6',
  roxo: '#6b3fa0',
  roxoClaro: '#efe8fb',
  teal: '#0b5257',
  tealClaro: '#e0f2f3',
  alerta: '#991b1b',
  alertaTexto: '#ffffff',
  rodape: '#12294d',
  rodapeTexto: '#ffffff',
  foco: '#1b3a6b',
  focoClaro: '#ffd400',
  // Neutros usados no modo de alto contraste
  preto: '#000000',
  branco: '#ffffff',
};

const PARES = [
  // Base
  { nome: 'Texto principal sobre branco', frente: 'tinta', fundo: 'papel', minimo: 7 },
  { nome: 'Texto principal sobre cinza', frente: 'tinta', fundo: 'cinza', minimo: 7 },
  { nome: 'Texto secundário sobre branco', frente: 'tintaSuave', fundo: 'papel', minimo: 7 },
  { nome: 'Texto secundário sobre cinza', frente: 'tintaSuave', fundo: 'cinza', minimo: 7 },
  { nome: 'Títulos sobre branco', frente: 'primaria', fundo: 'papel', minimo: 7 },
  { nome: 'Texto do botão sobre azul-marinho', frente: 'primariaTexto', fundo: 'primaria', minimo: 7 },
  { nome: 'Azul-marinho sobre branco (bordas)', frente: 'primaria', fundo: 'papel', minimo: 3 },

  // Texto sobre os cartões pastel (o ponto crítico da referência visual)
  { nome: 'Texto principal sobre cartão azul', frente: 'tinta', fundo: 'azulClaro', minimo: 7 },
  { nome: 'Texto principal sobre cartão verde', frente: 'tinta', fundo: 'verdeClaro', minimo: 7 },
  { nome: 'Texto principal sobre cartão âmbar', frente: 'tinta', fundo: 'ambarClaro', minimo: 7 },
  { nome: 'Texto principal sobre cartão roxo', frente: 'tinta', fundo: 'roxoClaro', minimo: 7 },
  { nome: 'Texto principal sobre cartão teal', frente: 'tinta', fundo: 'tealClaro', minimo: 7 },
  { nome: 'Texto secundário sobre cartão azul', frente: 'tintaSuave', fundo: 'azulClaro', minimo: 7 },
  { nome: 'Texto secundário sobre cartão verde', frente: 'tintaSuave', fundo: 'verdeClaro', minimo: 7 },
  { nome: 'Texto secundário sobre cartão âmbar', frente: 'tintaSuave', fundo: 'ambarClaro', minimo: 7 },
  { nome: 'Texto secundário sobre cartão roxo', frente: 'tintaSuave', fundo: 'roxoClaro', minimo: 7 },
  { nome: 'Texto secundário sobre cartão teal', frente: 'tintaSuave', fundo: 'tealClaro', minimo: 7 },

  // Ícones coloridos sobre o próprio pastel (3:1 basta: são decorativos)
  { nome: 'Ícone azul sobre cartão azul', frente: 'azul', fundo: 'azulClaro', minimo: 3 },
  { nome: 'Ícone verde sobre cartão verde', frente: 'verde', fundo: 'verdeClaro', minimo: 3 },
  { nome: 'Ícone âmbar sobre cartão âmbar', frente: 'ambar', fundo: 'ambarClaro', minimo: 3 },
  { nome: 'Ícone roxo sobre cartão roxo', frente: 'roxo', fundo: 'roxoClaro', minimo: 3 },
  { nome: 'Ícone teal sobre cartão teal', frente: 'teal', fundo: 'tealClaro', minimo: 3 },

  // Dourado (destaque)
  { nome: 'Texto sobre dourado', frente: 'douradoTexto', fundo: 'dourado', minimo: 7 },
  { nome: 'Dourado sobre azul-marinho (realce)', frente: 'dourado', fundo: 'primaria', minimo: 3 },

  // Aviso de segurança
  { nome: 'Texto do aviso sobre o aviso', frente: 'alertaTexto', fundo: 'alerta', minimo: 7 },
  { nome: 'Selo do aviso (texto sobre o selo)', frente: 'alerta', fundo: 'alertaTexto', minimo: 7 },

  // Rodapé e foco
  { nome: 'Texto do rodapé sobre o rodapé', frente: 'rodapeTexto', fundo: 'rodape', minimo: 7 },
  { nome: 'Anel de foco sobre branco', frente: 'foco', fundo: 'papel', minimo: 3 },
  { nome: 'Anel de foco sobre o cabeçalho', frente: 'primariaTexto', fundo: 'primaria', minimo: 3 },
  { nome: 'Anel de foco sobre a faixa de aviso', frente: 'alertaTexto', fundo: 'alerta', minimo: 3 },
  { nome: 'Anel de foco sobre o rodapé escuro', frente: 'focoClaro', fundo: 'rodape', minimo: 3 },

  // Modo "Mais contraste" (preto, branco e amarelo)
  { nome: '[alto contraste] Texto sobre preto', frente: 'branco', fundo: 'preto', minimo: 7 },
  { nome: '[alto contraste] Texto de botão sobre branco', frente: 'preto', fundo: 'branco', minimo: 7 },
  { nome: '[alto contraste] Anel de foco sobre preto', frente: 'focoClaro', fundo: 'preto', minimo: 3 },
];

function luminancia(hex) {
  const c = hex.replace('#', '');
  const canais = [0, 2, 4].map((i) => parseInt(c.slice(i, i + 2), 16) / 255);
  const linear = canais.map((v) =>
    v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)
  );
  return 0.2126 * linear[0] + 0.7152 * linear[1] + 0.0722 * linear[2];
}

function contraste(hexA, hexB) {
  const a = luminancia(hexA);
  const b = luminancia(hexB);
  const claro = Math.max(a, b);
  const escuro = Math.min(a, b);
  return (claro + 0.05) / (escuro + 0.05);
}

let falhas = 0;
console.log('\nContraste das cores do portal\n');

for (const par of PARES) {
  const corFrente = CORES[par.frente];
  const corFundo = CORES[par.fundo];

  if (!corFrente || !corFundo) {
    console.log(`  ERRO  ${par.nome} — cor não encontrada no mapa CORES`);
    falhas += 1;
    continue;
  }

  const razao = contraste(corFrente, corFundo);
  const ok = razao >= par.minimo;
  if (!ok) falhas += 1;

  const marca = ok ? 'ok  ' : 'FALHA';
  const valor = razao.toFixed(2).replace('.', ',') + ':1';
  console.log(
    `  ${marca}  ${valor.padStart(8)}  (mínimo ${String(par.minimo).replace('.', ',')}:1)  ${par.nome}`
  );
}

console.log('');
if (falhas > 0) {
  console.error(`${falhas} par(es) de cor reprovado(s). Ajuste a paleta antes de publicar.\n`);
  process.exit(1);
}
console.log(`Todos os ${PARES.length} pares aprovados.\n`);
