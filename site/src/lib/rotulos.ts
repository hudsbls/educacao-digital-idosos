/**
 * Rótulos legíveis e ícones para os valores técnicos do conteúdo.
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

export const rotuloCanal = (canal: string): string => CANAIS[canal] ?? canal;

export const rotulosCanais = (canais: string[]): string =>
  canais.map(rotuloCanal).join(', ');

/** Ícone do canal principal — sempre decorativo, ao lado do texto. */
export const iconeCanal = (canais: string[]): string =>
  ICONES[canais[0] ?? ''] ?? 'alerta';
