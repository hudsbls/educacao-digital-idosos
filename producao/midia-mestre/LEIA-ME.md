# Mídia mestra — ARMAZENAMENTO EXTERNO

> **Esta pasta é ignorada pelo Git.** Vídeos mestres não entram no repositório.

## Por quê

Arquivos de vídeo são pesados e tornariam o repositório lento. Além disso, o YouTube é **vitrine,
não arquivo** (ver [`../../docs/ARQUITETURA.md`](../../docs/ARQUITETURA.md), Seção 11.5).

## O que deve ser guardado aqui (ou em armazenamento institucional)

- Vídeos mestres exportados em MP4 (H.264/AAC).
- Projeto de edição.
- Roteiro final.
- Arquivo de legenda `.vtt` **fonte da verdade**.

## Importante

- Os arquivos `.vtt` também devem ter uma **cópia versionada** no repositório, dentro de
  `site/public/videos/legendas/`, porque são texto e são a fonte oficial da legenda.
- Faça **backup** desta pasta em armazenamento institucional (nuvem da instituição ou HD externo).
- Mantenha também uma cópia no computador de pelo menos duas pessoas da equipe.
