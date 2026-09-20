import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Coleção "golpes".
 *
 * Este schema é o CONTRATO DE CONTEÚDO do portal: desacopla o conteúdo da
 * tecnologia, permite trocar a ferramenta no futuro sem reescrever os textos
 * e valida cada arquivo no build. Ver docs/ARQUITETURA.md, Seção 10.5.
 *
 * O corpo do arquivo Markdown é a TRANSCRIÇÃO do vídeo ("texto do vídeo").
 */
const golpes = defineCollection({
  loader: glob({ base: './src/content/golpes', pattern: '**/*.md' }),
  schema: z.object({
    titulo: z.string(),
    resumoCurto: z.string().max(160),
    canal: z
      .array(z.enum(['telefone', 'whatsapp', 'sms', 'email', 'internet', 'presencial']))
      .min(1),
    nivelRisco: z.enum(['alto', 'medio', 'baixo']),
    video: z
      .object({
        youtubeId: z.string().nullable().default(null),
        duracaoSegundos: z.number().int().positive(),
      })
      .optional(),
    comoReconhecer: z.array(z.string()).min(1),
    oQueFazerAgora: z.array(z.string()).min(1),
    atualizadoEm: z.coerce.date(),
    revisadoPor: z.string(),
    fontes: z.array(z.string()).default([]),
    /** Rascunhos ficam fora do build de produção. */
    rascunho: z.boolean().default(false),
  }),
});

export const collections = { golpes };
