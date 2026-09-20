# Sem Golpe — portal de educação digital contra golpes online

Site acessível do projeto **Promover a Educação Digital de Idosos contra Golpes Online**
(Timóteo/MG). Faz parte do Trabalho Final de extensão.

- Arquitetura e decisões: [`../docs/ARQUITETURA.md`](../docs/ARQUITETURA.md)
- Padrões de acessibilidade: [`../docs/ACESSIBILIDADE.md`](../docs/ACESSIBILIDADE.md)
- Gestão, requisitos e evidências: [`../docs/GESTAO-E-REQUISITOS.md`](../docs/GESTAO-E-REQUISITOS.md)
- Wireframes e teste com o público: [`../prototipos/`](../prototipos/)

---

## Estado atual — incremento I0 (esqueleto ambulante)

**Pronto:**
- Layout acessível: link "pular para o conteúdo", foco visível, alvos de toque ≥ 44px
- Controles de acessibilidade: **Letra maior**, **Letra menor**, **Mais contraste** — a preferência é lembrada entre as páginas
- Coleção de conteúdo `golpes` com **validação por schema** (o build falha se um arquivo estiver incompleto)
- 2 golpes publicados (conteúdo provisório)
- Página de ajuda com canais oficiais e a diferença entre 190 e 197
- Build estático validado: 5 páginas

**Pendente:**
- Vídeos — o componente já está pronto; falta o ID do YouTube (Fase F4)
- Busca e filtros (I1)
- CMS para edição por quem não programa (I2)
- Glossário, oficinas e página "Sobre"

---

## Comandos

O Node.js está instalado em `C:\Program Files\nodejs`. Se o terminal não reconhecer
`node`/`npm`, reinicie o aplicativo ou use o caminho completo.

| Comando | O que faz |
|---|---|
| `npm run dev` | Servidor de desenvolvimento em http://localhost:4321 |
| `npm run build` | Gera o site estático em `dist/` |
| `npm run preview` | Serve o site já construído |
| `npm run contraste` | Confere os 34 pares de cor da paleta (falha se algum reprovar) |

---

## Estrutura

```
src/
├── content.config.ts          # schema da coleção "golpes" (contrato de conteúdo)
├── content/golpes/*.md        # um arquivo por golpe (corpo = texto do vídeo)
├── layouts/Base.astro         # cabeçalho, menu, rodapé e controles de acessibilidade
├── lib/rotulos.ts             # rótulos legíveis para valores técnicos
├── pages/
│   ├── index.astro            # início
│   ├── ajuda.astro            # o que fazer depois de um golpe
│   └── golpes/
│       ├── index.astro        # lista de golpes
│       └── [...id].astro      # página de cada golpe (rota dinâmica)
└── styles/global.css          # tokens de acessibilidade e estilos
```

### Como adicionar um golpe

1. Crie um arquivo `.md` em `src/content/golpes/` (o nome do arquivo vira a URL).
2. Preencha o cabeçalho seguindo `src/content.config.ts`.
3. O corpo do arquivo é o **texto do vídeo** (transcrição).
4. Rode `npm run build`. Se faltar algum campo, o build avisa.

---

## Avisos importantes

### Conteúdo provisório
Os textos são **provisórios**, baseados em golpes publicamente documentados. Serão substituídos
pelo resultado da pesquisa (Camada C1). **Os números dos canais de ajuda precisam ser conferidos**
antes de qualquer publicação.

### node_modules e OneDrive
O projeto fica dentro do OneDrive (decisão registrada), então o `node_modules`
(≈ 124 MB e cerca de 9 mil arquivos) também é sincronizado — isso pode deixar a sincronização
lenta. Se causar problema, mova a pasta `node_modules` para fora do OneDrive, ou mova o projeto
inteiro para uma pasta não sincronizada.

### Acessibilidade
Toda alteração deve passar pelo checklist de [`../docs/ACESSIBILIDADE.md`](../docs/ACESSIBILIDADE.md).
Nenhuma página é publicada sem: contraste adequado, operação por teclado, foco visível,
texto alternativo e transcrição dos vídeos.
