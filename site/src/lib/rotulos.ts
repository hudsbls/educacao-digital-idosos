/**
 * Rótulos legíveis para os valores técnicos do conteúdo.
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

export const rotuloCanal = (canal: string): string => CANAIS[canal] ?? canal;

export const rotulosCanais = (canais: string[]): string =>
  canais.map(rotuloCanal).join(', ');
