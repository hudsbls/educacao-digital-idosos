# Guia de Acessibilidade — Portal de Educação Digital de Idosos

> Documento de **definição** (planejamento). Complementa [`ARQUITETURA.md`](ARQUITETURA.md), Seção 11.6.
> Define o padrão mínimo, os critérios, o protocolo de testes e a governança de acessibilidade.
>
> - Versão: 0.1 · Data: 2026-09-20
> - Público-alvo do portal: pessoas idosas (60+), muitos com baixa visão, pouca familiaridade digital
>   e possível declínio cognitivo leve.

---

## 1. Por que acessibilidade é a decisão arquitetural central

Para este público, acessibilidade **não é conformidade: é a funcionalidade principal**. Uma pessoa
idosa que não consegue ler, tocar no botão certo ou entender a frase simplesmente não usa o portal —
e o projeto falha, mesmo que o código esteja "correto". Por isso o padrão adotado é um **piso**, e
não um teto:

> **Padrão mínimo: WCAG 2.2 nível AA.**
> **Meta interna (onde aplicável): AAA em contraste (7:1), redimensionamento de texto e compreensão.**

Além das diretrizes formais, adotamos recomendações específicas para pessoas idosas e para pessoas
com deficiências cognitivas (W3C WAI *Older Users* e *COGA — Making Content Usable*).

---

## 2. Referências normativas e legais

| Referência | Uso no projeto |
|---|---|
| **WCAG 2.2 (W3C)** — níveis A, AA, AAA | Padrão técnico principal |
| **LBI — Lei nº 13.146/2015 (art. 63)** | Obrigatoriedade de acessibilidade em sites (governo e empresas) |
| **Decreto nº 5.296/2004** | Regulamentação de promoção da acessibilidade |
| **eMAG — Modelo de Acessibilidade em Governo Eletrônico** | Referência prática e checklist em português |
| **ABNT NBR 17225** (acessibilidade em conteúdo e aplicações digitais) | Consultar a edição vigente antes da publicação |
| **W3C WAI — "Older Users and Web Accessibility"** | Diretrizes específicas para idosos |
| **W3C COGA — "Making Content Usable"** | Diretrizes para deficiência cognitiva e de aprendizagem |

> As referências legais e a norma ABNT devem ter a vigência confirmada no início da Fase F3.

---

## 3. Princípios POUR aplicados ao projeto

| Princípio | Como se traduz no portal |
|---|---|
| **Perceptível** | Alto contraste, fonte grande e ajustável, texto alternativo, legendas e transcrições |
| **Operável** | Navegação por teclado, alvos de toque grandes, sem tempo limite, sem gestos complexos |
| **Compreensível** | Linguagem simples, navegação e ajuda consistentes em todas as páginas, sem jargão |
| **Robusto** | HTML semântico, testado em leitores de tela e em navegadores/celulares usados pelo público |

---

## 4. Requisitos específicos para o público idoso (além do AA)

Estes itens **não são exigidos pela WCAG**, mas são obrigatórios neste projeto por decisão de arquitetura.

### 4.1 Visão
- Fonte base **20px** (não 16px); o conteúdo escala sem quebrar até **200%**.
- Contraste de texto **≥ 7:1** sempre que possível; nunca abaixo de 4.5:1 (AA).
- Contraste de ícones, bordas e controles **≥ 3:1**.
- Não usar texto em imagem; não usar cinza-claro para informações importantes.
- Botão de **"aumentar/diminuir letra"** visível no cabeçalho, com estado salvo no navegador.

### 4.2 Motor e toque
- Alvos de toque **≥ 44 × 44 px** com espaçamento ≥ 8px (a WCAG 2.2 exige 24px; nós exigimos mais).
- Evitar rolagem horizontal e gestos de arrastar como única forma de interação.
- Nada de menus que dependem de *hover* (passar o mouse): tudo acessível por toque e teclado.
- Botões com **rótulo em texto**, não apenas ícone (ex.: "Ouvir" e não só um alto-falante).

### 4.3 Compreensão e memória
- Uma ação principal por tela; nunca duas dúvidas ao mesmo tempo.
- Passos numerados e curtos; instruções repetidas no final da página.
- Sem *carrossel* automático, sem conteúdo que muda sozinho, sem *pop-up*.
- **Sem tempo limite** em nenhuma interação (WCAG 2.2.1).
- Navegação e posição da ajuda **idênticas em todas as páginas** (WCAG 3.2.6 *Consistent Help*).
- Prevenir erros: como não há formulários, elimina-se a maior fonte de erro.

### 4.4 Tecnologia e rede
- Funcionar em **celulares simples** e internet lenta: páginas leves, imagens otimizadas.
- Não exigir aplicativo, cadastro, login ou instalação.
- Funcionar nos navegadores realmente usados pelo público (verificar na pesquisa — Camada C1).

---

## 5. Checklist por página e componente

### 5.1 Global (presente em todas as páginas)
- [ ] `<html lang="pt-BR">` definido.
- [ ] Título de página único e descritivo (WCAG 2.4.2).
- [ ] Link "Pular para o conteúdo" como primeiro elemento focável (2.4.1).
- [ ] Estrutura de títulos hierárquica (`h1` único, sem pular níveis).
- [ ] Foco visível e não obscurecido em todo elemento interativo (2.4.7 e 2.4.11).
- [ ] Navegação e rodapé consistentes; ordem de foco lógica.
- [ ] Controle de acessibilidade (fonte, contraste) no cabeçalho.
- [ ] Rodapé com canal de ajuda e forma de relatar barreira de acessibilidade.
- [ ] Links com texto descritivo — **proibido "clique aqui"** (2.4.4).
- [ ] Sem conteúdo piscante (2.3.1) e sem movimento automático (2.2.2).

### 5.2 Home
- [ ] Objetivo do portal compreensível nos primeiros segundos.
- [ ] Botão destacado **"Preciso de ajuda agora"** (leva a `/ajuda/`).
- [ ] Acesso ao catálogo de golpes com no máximo 1 toque.
- [ ] Sem carrossel; usar lista simples de golpes em destaque.

### 5.3 Página de um golpe (`/golpes/<slug>/`)
- [ ] Título em linguagem simples (nome do golpe como as pessoas o chamam).
- [ ] Vídeo com legenda e **transcrição completa em HTML** logo abaixo.
- [ ] Blocos fixos: **O que é · Como reconhecer · O que fazer agora**.
- [ ] Alerta de segurança visível ("Nunca informe senha ou código por telefone").
- [ ] Data "Atualizado em" visível.
- [ ] Botão para **ouvir o texto** (leitura em voz alta) quando viável.
- [ ] Botão "copiar link" / "compartilhar no WhatsApp" com rótulo em texto.

### 5.4 Player de vídeo (incorporação do YouTube — decisão D3)
- [ ] Incorporar via `youtube-nocookie.com`, **sem autoplay**.
- [ ] Parâmetros: `cc_load_policy=1`, `cc_lang_pref=pt`, `hl=pt-BR`, `rel=0`, `playsinline=1`.
- [ ] Legenda VTT enviada como faixa no YouTube **e** transcrição publicada na página.
- [ ] Título do vídeo e identificação do conteúdo acessíveis (iframe com `title` descritivo).
- [ ] Nunca depender do vídeo sozinho: todo o conteúdo essencial também em texto.
- [ ] Evitar áudio de fundo que competa com a narração.
- [ ] Audiodescrição quando houver informação apenas visual (ex.: "veja a tela do celular…").

### 5.5 Página `/ajuda/`
- [ ] Passo a passo numerado do que fazer depois de um golpe.
- [ ] Canais oficiais com nome, o que fazem e quando usar (190, 197, Disque 100, Procon, banco, Delegacia Virtual).
- [ ] Aviso de que os canais devem ser conferidos periodicamente.
- [ ] Nenhum dado pessoal solicitado ao usuário.

### 5.6 Materiais para download (cartilhas/PDF)
- [ ] PDF **acessível** (texto selecionável, títulos marcados, ordem de leitura, idioma).
- [ ] Alternativa em HTML sempre que possível — PDF é o último recurso.
- [ ] Fonte grande, alto contraste e margens amplas na versão impressa.

---

## 6. Especificação de mídia acessível

| Mídia | Requisitos obrigatórios |
|---|---|
| **Vídeo** | Legenda sincronizada (VTT) + transcrição em HTML; sem autoplay; audiodescrição quando necessário |
| **Legenda** | Precisão ≥ 99%; identificar falantes; sons relevantes entre colchetes, ex.: `[telefone tocando]` |
| **Transcrição** | Texto completo, formatado, com títulos e parágrafos curtos; indexável e pesquisável |
| **Áudio** | Alternativa em texto; sem ruído de fundo; fala pausada |
| **Imagem** | `alt` descritivo; se decorativa, `alt=""`; nunca carregar informação só na imagem |
| **Ícone** | Sempre acompanhado de rótulo textual |
| **Libras** | Avaliar janela de intérprete nos vídeos principais (decisão a tomar na Fase F4) |

---

## 7. Guia de linguagem simples (redação)

### 7.1 Regras
- Frases de até **15–20 palavras**; uma ideia por frase e por parágrafo.
- Voz ativa e 2ª pessoa: "O golpista liga para você" (não "Ocorre uma ligação…").
- Evitar siglas, estrangeirismos e jargão; se inevitável, explicar na primeira vez e no glossário.
- Evitar ironia, metáfora e humor ambíguo.
- Preferir termos do cotidiano: **"toque"** em vez de "clique", **"senha"** em vez de "credencial".
- Números, datas e valores por extenso quando ajudarem a leitura.
- Usar listas e passos numerados em vez de blocos densos.
- Repetir a informação importante em vez de confiar que a pessoa lembra.

### 7.2 Estrutura obrigatória de conteúdo
Toda página de golpe e tutorial responde, nesta ordem:

1. **O que é?** (1–2 frases)
2. **Como reconhecer?** (lista de sinais)
3. **O que fazer agora?** (passos numerados)
4. **Transcrição / detalhamento** (aprofundamento)

### 7.3 Teste de linguagem (simples e obrigatório)
- Ler o texto **em voz alta**; se cansar ou tropeçar, reescrever.
- Pedir para uma pessoa idosa **recontar** o que entendeu; se não conseguir, o texto está complexo.
- Evitar parágrafos com mais de 3 linhas.

---

## 8. Design visual acessível (valores de referência)

| Item | Valor de referência |
|---|---|
| Fonte base | 20px (mínimo), escala fluida |
| Altura de linha | 1.6 |
| Comprimento de linha | 60–70 caracteres |
| Contraste de texto | meta 7:1; mínimo 4.5:1 |
| Contraste de componentes | mínimo 3:1 |
| Alvo de toque | 44 × 44 px, espaçamento ≥ 8px |
| Indicador de foco | contorno de 3px, alto contraste, sempre visível |
| Espaçamento de texto | suportar ajuste sem perda de conteúdo (WCAG 1.4.12) |
| Animação | mínima, sem essencialidade e respeitando `prefers-reduced-motion` |

### 8.1 Paleta adotada (resolve a decisão D8)

Paleta **violeta vivo**, escolhida por ser vibrante e distintiva sem imitar a identidade de bancos
ou de governo. O **vermelho é reservado exclusivamente para a faixa de aviso de segurança** —
nunca como cor principal — porque já significa "perigo" e prejudica quem tem daltonismo.

O impacto visual vem do uso da cor em **blocos grandes** (cabeçalho colorido, títulos coloridos,
botões cheios), e não de detalhes — porque manter 7:1 com texto branco exige cores escuras.

| Token | Cor | Uso | Contraste verificado |
|---|---|---|---|
| `--tinta` | `#1B1233` | Texto principal | **17,8:1** sobre branco |
| `--tinta-suave` | `#4F4666` | Texto secundário | **8,8:1** sobre branco |
| `--primaria` | `#5B21B6` | Cabeçalho, títulos, botões, bordas | **9,0:1** sobre branco |
| `--primaria-texto` | `#FFFFFF` | Texto sobre a cor principal | **9,0:1** |
| `--alerta` | `#991B1B` | Fundo da faixa de aviso de segurança | **8,3:1** com texto branco |
| `--alerta-texto` | `#FFFFFF` | Texto e selo da faixa de aviso | **8,3:1** |
| `--borda` | `#7C6BA8` | Separadores estruturais | **4,6:1** sobre branco |
| `--rodape` | `#2E1065` | Fundo do rodapé | **15,2:1** com texto branco |
| `--foco` | `#5B21B6` | Anel de foco em fundo claro | **9,0:1** sobre branco |
| `--foco-claro` | `#FFD400` | Anel de foco sobre o rodapé | **10,7:1** sobre o rodapé |

**Faixa de aviso — o elemento de maior alerta da página.** O significado é carregado pelo
**selo textual** ("Atenção" na página inicial, "Urgente" na página de ajuda); a cor apenas
reforça. Isso resolve dois problemas de uma vez: quem não distingue cores continua entendendo,
e a faixa deixa de parecer um botão (problema encontrado no teste de wireframes).

> **Regra prática:** para "chamar atenção" com cor, aumente a **área colorida** (blocos, faixas,
> botões cheios), não a **claridade** da cor. Cores claras derrubam o contraste e excluem quem
> enxerga pouco.

**Verificação automatizada:** o comando `npm run contraste` (dentro de `site/`) checa
**17 pares de cor** e falha se algum ficar abaixo do piso do projeto. Deve ser executado antes
de qualquer publicação.

**Regra de ouro da cor:** nenhuma informação é transmitida **só por cor**. Todo estado, alerta ou
erro tem também texto ou rótulo.

---

## 9. Protocolo de testes

### 9.1 Automatizados (rápidos, insuficientes)
- **axe DevTools** / **Lighthouse** em todas as páginas → zero erros críticos.
- `npm run contraste` (em `site/`) → confere os 17 pares de cor da paleta.
- Validador de HTML.
- **Atenção:** ferramentas automáticas detectam ~30–40% dos problemas. Nunca aprovar só com elas.

### 9.2 Manuais (obrigatórios)
- **Teclado:** percorrer todo o site apenas com Tab/Shift+Tab/Enter; nenhuma armadilha de foco.
- **Zoom:** testar em 200% e em 400% (reflow) sem perda de conteúdo.
- **Leitor de tela:** NVDA (desktop) e TalkBack (Android) / VoiceOver (iOS) nos fluxos principais.
- **Contraste real:** medir com ferramenta, não "a olho".
- **Celular comum** com internet lenta (teste de desempenho realista).

### 9.3 Com usuários (o teste decisivo)
- Sessões de **teste de usabilidade com pessoas idosas** (mínimo 5 participantes, recrutados nas oficinas).
- Método: **pensar em voz alta**, tarefas reais ("descubra o que fazer se alguém pedir seu código por telefone").
- Registrar: onde travou, o que não entendeu, onde clicou errado.
- Instrumento de acessibilidade percebida: **escala SUS** (System Usability Scale) adaptada.
- Todo teste com seres humanos exige TCLE e alinhamento com o Comitê de Ética (ver `ARQUITETURA.md`, 8.3).

### 9.4 Critério de aprovação para publicar
Uma página só é publicada se: **zero erros automáticos críticos** + **aprovada nos testes manuais** +
**linguagem revisada** + **transcrição presente**. Ver Seção 11.

---

## 10. Governança de acessibilidade

| Mecanismo | Definição |
|---|---|
| **Guardiã(o) da acessibilidade** | Pessoa responsável por revisar e aprovar antes de publicar (papel definido em `ARQUITETURA.md`, 8.1) |
| **Portão de publicação** | Nenhum conteúdo vai ao ar sem passar pelo checklist da Seção 11 |
| **Registro de barreiras** | Canal visível no rodapé para qualquer pessoa relatar dificuldade de acesso |
| **Declaração de Acessibilidade** | Página informando o padrão adotado, o que foi testado e como relatar problemas |
| **Revisão periódica** | Revalidar acessibilidade a cada revisão trimestral de conteúdo |
| **Capacitação** | Treinar toda a equipe (não só tecnologia) em linguagem simples e acessibilidade |

---

## 11. Definition of Done de acessibilidade (resumo para uso diário)

Um conteúdo/página está **pronto** quando:

- [ ] Estrutura semântica e títulos em ordem.
- [ ] Contraste ≥ 4.5:1 (meta 7:1) e fonte base ≥ 20px.
- [ ] 100% operável por teclado, com foco visível.
- [ ] Alvos de toque ≥ 44px e rótulos em texto.
- [ ] Vídeo com legenda + transcrição em HTML.
- [ ] Imagens com texto alternativo.
- [ ] Linguagem simples, revisada em voz alta.
- [ ] Testado com leitor de tela e em celular real.
- [ ] Data de atualização visível.

---

## 12. Erros comuns a evitar (específicos deste público)

| Armadilha | Por que é grave aqui |
|---|---|
| Menu "hambúrguer" só com ícone | Muitos não reconhecem o símbolo |
| Carrossel automático | Conteúdo muda antes de ser lido |
| Fonte pequena / cinza claro | Baixa visão é comum |
| Link "clique aqui" | Não diz para onde vai; confunde |
| Formulário longo ou CAPTCHA | Abandono e erro |
| Vídeo sem legenda/transcrição | Exclui quem não ouve bem ou assiste sem som |
| Termos técnicos ("phishing", "token") | Não compreendidos |
| PDF escaneado sem texto | Não lido por leitor de tela |
| Sessão que expira | Interrompe quem digita devagar |
| Excesso de opções na tela | Sobrecarga cognitiva |

---

## 13. Ferramentas de apoio

| Etapa | Ferramenta sugerida |
|---|---|
| Contraste | WebAIM Contrast Checker, Colour Contrast Analyser |
| Auditoria | axe DevTools, Lighthouse, WAVE |
| Leitor de tela | NVDA (Windows), TalkBack (Android), VoiceOver (iOS) |
| Teste de teclado | Navegação manual com Tab |
| Desempenho | Lighthouse / PageSpeed Insights em rede simulada |
| Linguagem | Leitura em voz alta + revisão por pares + teste com usuário |
| Checklist | eMAG + checklist deste documento |

---

## 14. Pendências e decisões abertas

| ID | Pendência | Quando resolver |
|---|---|---|
| A1 | Incluir janela de Libras nos vídeos principais? | Fase F4 (produção de vídeos) |
| A2 | Confirmar edição vigente da ABNT NBR 17225 | Início da Fase F3 |
| ~~A3~~ | ~~Definir paleta com contraste validado~~ | **Resolvida** — ver Seção 8.1 |
| A4 | Definir se haverá recurso de leitura em voz alta nativa do site | Fase F3 |
| A5 | Definir navegadores/dispositivos reais do público | Camada C1 (pesquisa) |

---

### Histórico de revisões

| Versão | Data | Alteração |
|---|---|---|
| 0.1 | 2026-09-20 | Versão inicial do guia de acessibilidade |
