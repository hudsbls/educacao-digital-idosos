/**
 * Verificação de contraste das cores do portal (WCAG 2.x).
 *
 * Roda com: npm run contraste
 *
 * O projeto adota um piso acima do mínimo legal:
 *   - texto normal: 7:1  (a WCAG 2.2 AA exige 4,5:1)
 *   - componentes e bordas: 3:1
 *
 * Se algum par falhar, o script termina com erro (código 1), o que permite
 * usar esta checagem em integração contínua antes de publicar.
 */

const CORES = {
  // Paleta "violeta vivo"
  tinta: '#1b1233',
  tintaSuave: '#4f4666',
  papel: '#ffffff',
  fundo: '#f5f3ff',
  cinza: '#f1eefb',
  primaria: '#5b21b6',
  primariaTexto: '#ffffff',
  acento: '#8a3e00',
  alertaFundo: '#fff6e5',
  borda: '#7c6ba8',
  rodape: '#2e1065',
  rodapeTexto: '#ffffff',
  foco: '#5b21b6',
  focoClaro: '#ffd400',
  // Neutros usados no modo de alto contraste
  preto: '#000000',
  branco: '#ffffff',
};

const PARES = [
  // Modo normal
  { nome: 'Texto principal sobre branco', frente: 'tinta', fundo: 'papel', minimo: 7 },
  { nome: 'Texto secundário sobre branco', frente: 'tintaSuave', fundo: 'papel', minimo: 7 },
  { nome: 'Texto secundário sobre cinza', frente: 'tintaSuave', fundo: 'cinza', minimo: 7 },
  { nome: 'Títulos sobre branco', frente: 'primaria', fundo: 'papel', minimo: 7 },
  { nome: 'Texto do botão sobre a cor principal', frente: 'primariaTexto', fundo: 'primaria', minimo: 7 },
  { nome: 'Cor principal sobre branco (bordas)', frente: 'primaria', fundo: 'papel', minimo: 3 },
  { nome: 'Texto do aviso sobre o fundo do aviso', frente: 'tinta', fundo: 'alertaFundo', minimo: 7 },
  { nome: 'Rótulo de aviso sobre o fundo do aviso', frente: 'acento', fundo: 'alertaFundo', minimo: 7 },
  { nome: 'Borda estrutural sobre branco', frente: 'borda', fundo: 'papel', minimo: 3 },
  { nome: 'Borda estrutural sobre cinza', frente: 'borda', fundo: 'cinza', minimo: 3 },
  { nome: 'Texto do rodapé sobre o rodapé', frente: 'rodapeTexto', fundo: 'rodape', minimo: 7 },
  { nome: 'Anel de foco sobre branco', frente: 'foco', fundo: 'papel', minimo: 3 },
  { nome: 'Anel de foco sobre o cabeçalho colorido', frente: 'primariaTexto', fundo: 'primaria', minimo: 3 },
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
