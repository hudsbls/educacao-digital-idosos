# Prompt de contexto — Sem Golpe

> Arquivo para colar em ferramentas de IA (assistentes, geradores de código, designers).
> Contém a versão curta (só o resumo) e a versão completa (resumo + restrições do projeto).

---

## Versão 1 — só o resumo (um parágrafo)

O **Sem Golpe** é um portal educativo e acessível, acompanhado de oficinas presenciais, criado para
ensinar pessoas idosas de Timóteo/MG a reconhecer, evitar e reagir a golpes digitais. Reúne vídeos
curtos e legendados, explicações em linguagem simples e um passo a passo do que fazer depois de um
golpe, além dos canais oficiais de ajuda. É o produto do projeto de extensão *Promover a Educação
Digital de Idosos contra Golpes Online*, alinhado aos ODS 3 (saúde e bem-estar), 4 (educação de
qualidade) e 10 (redução das desigualdades). Diferencia-se por ser feito para quem tem pouca
familiaridade digital e baixa visão: usa fonte desenhada para leitura com baixa visão, contraste
alto, navegação simples, nenhuma coleta de dados pessoais e exemplos da realidade local — e nunca
pede senha, dinheiro ou instalação de aplicativos.

---

## Versão 2 — prompt completo (para desenvolvimento ou design)

**Contexto.** Você vai trabalhar no **Sem Golpe**, o portal educativo e acessível do projeto de
extensão *Promover a Educação Digital de Idosos contra Golpes Online*. É um site, acompanhado de
oficinas presenciais, criado para ensinar pessoas idosas de Timóteo/MG a reconhecer, evitar e
reagir a golpes digitais. Ele reúne vídeos curtos e legendados, explicações em linguagem simples e
um passo a passo do que fazer depois de um golpe, além dos canais oficiais de ajuda. Está alinhado
aos ODS 3 (saúde e bem-estar), 4 (educação de qualidade) e 10 (redução das desigualdades), e se
diferencia por ser feito para quem tem pouca familiaridade digital e baixa visão: usa fonte
desenhada para leitura com baixa visão, contraste alto, navegação simples, nenhuma coleta de dados
pessoais e exemplos da realidade local — e nunca pede senha, dinheiro ou instalação de aplicativos.

**Público.** Pessoas idosas (60+), muitas com baixa visão, pouca familiaridade com tecnologia e
possível declínio cognitivo leve. Público secundário: filhos e cuidadores que ensinam à distância.
Quem cai em golpe costuma sentir vergonha — o visual precisa acolher, não intimidar.

**Restrições invioláveis (não negociáveis):**

1. Contraste de texto **mínimo 7:1** (a WCAG 2.2 AA exige 4,5:1). Componentes e bordas: 3:1.
   Validar com `npm run contraste` — 20 pares verificados.
2. **Fonte base de 20px**, escalável até 200% sem quebrar o layout.
3. **Alvos de toque de 48px**, com rótulos em palavras (nunca só ícone).
4. **Nenhuma informação transmitida só por cor** — todo alerta ou estado tem texto junto.
5. **Navegação 100% por teclado**, com foco visível em qualquer fundo.
6. **Zero coleta de dados pessoais**: sem login, sem formulários com dados, sem rastreadores.
7. **Nenhum vídeo é a única via de informação** — sempre há transcrição em texto.
8. **O vermelho é reservado exclusivamente ao aviso de segurança**, sempre com selo textual
   ("Atenção" / "Urgente"). Nunca como cor principal.
9. Todo texto passa pelo guia de **linguagem simples** (frases de até 20 palavras, voz ativa).

**Identidade visual.** Estética quente e acolhedor: ocre (`#7C4A03`), creme (`#FBF3E7`) e
verde-oliva (`#44521F`), cantos arredondados de 16px, bastante espaço em branco. Tipografia
**Atkinson Hyperlegible**, auto-hospedada. Ícones SVG decorativos, sempre acompanhados de texto.

**Estrutura de cada página de golpe:** vídeo curto (60–90s) → transcrição em texto →
**O que é** → **Como reconhecer** → **O que fazer agora** → canais de ajuda.

**Tom de voz.** Direto, acolhedor e sem culpa. Frases curtas, 2ª pessoa ("Você"), zero jargão
técnico. Nunca tratar a vítima como ingênua. Palavras do público: "mandar" em vez de "compartilhar",
"texto do vídeo" em vez de "transcrição".

**Stack.** Astro (estático), conteúdo em Markdown validado por schema Zod, sem banco de dados.
Vídeos no YouTube via `youtube-nocookie`, sem autoplay, com legenda e transcrição na página.

**Nunca:** usar vermelho como cor de marca; esconder informação essencial atrás de cor, ícone,
hover ou animação; criar carrossel automático, pop-up ou contagem regressiva; pedir qualquer dado
pessoal; usar linguagem que responsabilize a vítima.
