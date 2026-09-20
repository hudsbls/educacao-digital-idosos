/**
 * Rótulos, ícones e cores para os valores técnicos do conteúdo.
 * O público não deve ver "whatsapp" minúsculo nem "medio" sem acento.
 */

const CANAIS: Record<string, string> = {
  telefone: 'Telefone',
  whatsapp: 'WhatsApp',
  sms: 'SMS',
  email: 'E-mail',
  internet: 'Internet',
  presencial: 'Pessoalmente',
};

const ICONES: Record<string, string> = {
  telefone: 'telefone',
  whatsapp: 'conversa',
  sms: 'mensagem',
  email: 'email',
  internet: 'internet',
  presencial: 'pessoas',
};

/**
 * Classe de cor do canal. A cor é um apoio visual — o texto ao lado é que
 * informa. Cada classe define `--cor-icone` e `--cor-fundo` no CSS.
 */
const CLASSES: Record<string, string> = {
  telefone: 'canal-azul',
  whatsapp: 'canal-verde',
  sms: 'canal-ambar',
  email: 'canal-roxo',
  internet: 'canal-teal',
  presencial: 'canal-teal',
};

export const rotuloCanal = (canal: string): string => CANAIS[canal] ?? canal;

export const rotulosCanais = (canais: string[]): string =>
  canais.map(rotuloCanal).join(', ');

/** Ícone do canal principal — sempre decorativo, ao lado do texto. */
export const iconeCanal = (canais: string[]): string =>
  ICONES[canais[0] ?? ''] ?? 'alerta';

/** Classe de cor do canal principal. */
export const classeCanal = (canais: string[]): string =>
  CLASSES[canais[0] ?? ''] ?? 'canal-azul';
