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

---

## Versão 3 — para trabalhar o aspecto visual

### Resumo do app (um parágrafo)

O **Sem Golpe** é um portal educativo e acessível, acompanhado de oficinas presenciais, criado para
ensinar pessoas idosas de Timóteo/MG a reconhecer, evitar e reagir a golpes digitais. Reúne vídeos
curtos e legendados, explicações em linguagem simples e um passo a passo do que fazer depois de um
golpe, além dos canais oficiais de ajuda. É o produto do projeto de extensão *Promover a Educação
Digital de Idosos contra Golpes Online*, alinhado aos ODS 3 (saúde e bem-estar), 4 (educação de
qualidade) e 10 (redução das desigualdades). Diferencia-se por ser feito para quem tem pouca
familiaridade digital e baixa visão: usa fonte desenhada para leitura com baixa visão, contraste
alto, navegação simples, nenhuma coleta de dados pessoais e exemplos da realidade local — e nunca
pede senha, dinheiro ou instalação de aplicativos.

### Direção visual

**Acolhedora, colorida e simples.** A linguagem vem dos aplicativos móveis: azul-marinho como cor
de confiança, dourado para destaque, cartões em tons pastel com ícone em evidência, passos
numerados coloridos e caixa de acolhimento.

**Mobile first.** O desenho parte do celular e só depois cresce para telas maiores. A navegação
principal fica **fixa embaixo**, no alcance do polegar (**Início · Golpes · Ajuda**); a partir de
640px ela volta para o topo. Botões ocupam a largura, alvos de 48px, nada depende de hover.

O critério de sucesso não é "bonito": é **reduzir a vergonha de quem caiu em golpe** e permitir que
alguém com baixa visão encontre ajuda sozinho. Um visual de "sistema oficial" intimida justamente
quem mais precisa de ajuda.

### Paleta

| Token | Cor | Uso |
|---|---|---|
| `--primaria` | `#1B3A6B` | Cabeçalho, títulos, botões — azul-marinho |
| `--dourado` | `#FFC93C` | Destaque, realce da marca, primeiro passo |
| `--tinta` | `#14213D` | Texto principal |
| `--tinta-suave` | `#3A4A63` | Texto secundário |
| `--papel` | `#FFFFFF` | Superfície dos cartões de texto |
| `--fundo` | `#F7F9FC` | Fundo da página |
| `--alerta` | `#991B1B` | **Exclusivo** da faixa de aviso de segurança |
| Cores de apoio | azul `#1B5FBF`, verde `#1F7A44`, âmbar `#6E4100`, roxo `#6B3FA0`, teal `#0B5257` | Ícone do cartão, conforme o canal do golpe |
| Fundos pastel | `#E7F0FC`, `#E4F5E9`, `#FDF1D6`, `#EFE8FB`, `#E0F2F3` | Fundo do cartão, na mesma ordem acima |

### Tipografia

**Atkinson Hyperlegible** (Braille Institute), criada para leitores com baixa visão — diferencia
caracteres que costumam se confundir (`I`, `l`, `1`, `O`, `0`). Pesos 400 e 700. Base de **20px**,
altura de linha **1,65**. Fallback para as fontes do sistema.

### Formas e espaçamento

Cantos arredondados de **16px**; botões e etiquetas em formato pílula; cartões de conteúdo com
ícone de 52px em selo branco e seta à direita; **alvos de toque de 48px**; bastante espaço em branco;
sem sombras duras nem gradientes.

### Componentes já definidos

1. **Cabeçalho** azul-marinho: escudo dourado, marca "**Sem** dourado + Golpe branco", subtítulo, e
   o grupo **"Acessibilidade:"** com "Letra menor", "Letra maior" e "Mais contraste".
2. **Faixa de aviso** vermelha com **selo textual** ("Atenção" / "Urgente") — o selo é que carrega o
   significado.
3. **Cartão de saudação** azul-marinho com "Olá! Aqui você aprende a se proteger."
4. **Cartão de conteúdo** pastel por canal (telefone, WhatsApp, SMS, e-mail, internet).
5. **Passos numerados** com 4 cores em ciclo — o **número** é a informação, a cor só ajuda a
   localizar onde se parou.
6. **Etiquetas** de duração, legenda e texto do vídeo.
7. **Caixa de acolhimento** azul-clara: "Você não está sozinho(a)."
8. **Rodapé** azul profundo com filete dourado.
9. **Navegação inferior** fixa no celular (Início · Golpes · Ajuda), com ícone e rótulo.

### Restrições que não se negociam

- Contraste de texto **≥ 7:1**; componentes, ícones e bordas **≥ 3:1**. Validação por
  `npm run contraste` (34 pares).
- **Nenhuma informação só por cor** — sempre há texto ou rótulo.
- Fonte base 20px, escalável; alvos de 48px; foco visível em qualquer fundo.
- **Vermelho é exclusivo do aviso de segurança**, nunca cor de marca.
- Modo "Mais contraste" (preto, branco e amarelo) precisa continuar funcionando.

### Armadilhas já descobertas — não repetir

| Armadilha | Por quê |
|---|---|
| Texto colorido sobre fundo pastel | Reprova: dá ~4:1. A cor vai no **ícone**, o texto fica escuro |
| Terracota como cor de marca | Colide com o vermelho do alerta (mesma luminosidade e matiz) |
| Rótulos `A+` / `A−` / "Contraste" | Testado com o público: a maioria não entendeu |
| Faixa escura sólida sem selo | Foi lida como botão clicável |
| "Compartilhar" e "transcrição" | Jargão: o público diz "mandar" e "texto do vídeo" |
| Fonte pequena ou cinza-claro | Baixa visão é a regra, não a exceção |

### O que ainda falta no visual

1. **Ilustrações** de pessoas idosas (o elemento mais marcante da referência e o único ainda ausente).
2. **Desenho da marca** — hoje é texto; pode virar um símbolo gráfico próprio.
