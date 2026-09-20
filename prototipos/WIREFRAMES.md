# Wireframes — Protótipo Navegável

> Artefato de **validação** (Seção 5.3 do roteiro do Trabalho Final). São **protótipos
> descartáveis**: servem para testar estrutura, navegação e legibilidade com o público antes
> de implementar o portal. Não são o produto final e serão substituídos no incremento I0.
>
> - Versão: 0.1 · Data: 2026-09-20
> - Formato: HTML/CSS/JS simples, **sem build e sem instalação** — abre direto no navegador.

---

## 1. Por que wireframes em HTML e não em imagem

Fizemos wireframes **clicáveis** em vez de imagens estáticas por três razões práticas:

1. **Teste real com idosos.** Uma imagem não permite testar toque, rolagem, teclado e leitura
   em voz alta. O HTML permite.
2. **A própria acessibilidade é validada cedo.** Fonte base de 20px, alvos de 44px e contraste
   alto já estão embutidos — se a estrutura não funcionar para o público, descobrimos agora.
3. **Vira especificação para o I0.** As telas aprovadas guiam a implementação em Astro, evitando
   retrabalho.

**Ressalva importante:** a identidade visual (cores, tipografia, marca) está **pendente (decisão D8)**.
O protótipo é intencionalmente **em tons de cinza** para que as pessoas comentem a **estrutura**, e
não a estética.

---

## 2. Telas incluídas

| Arquivo | Tela | O que valida |
|---|---|---|
| `wireframe/index.html` | **Início** | Prioridade da informação, botão "Preciso de ajuda agora", lista de golpes |
| `wireframe/catalogo.html` | **Catálogo de golpes** | Busca simples e filtros compreensíveis |
| `wireframe/golpe.html` | **Página de golpe** | Estrutura fixa: o que é / como reconhecer / o que fazer + vídeo e transcrição |
| `wireframe/ajuda.html` | **Ajuda** | Passos numerados e canais oficiais |

### Conteúdo provisório
Os golpes e os textos são **exemplos plausíveis**, baseados em golpes amplamente documentados.
**Não** são resultado da pesquisa (Camada C1) e estão marcados como conteúdo provisório. Isso
permite validar a estrutura antes de a pesquisa terminar — decisão de método registrada em
[`../docs/GESTAO-E-REQUISITOS.md`](../docs/GESTAO-E-REQUISITOS.md), Seção 1.

### Elementos ainda fictícios
- Nome do projeto ("Educação Digital") e e-mail de contato — **placeholders**.
- Menu `Oficinas` e `Sobre` e a área "Aprenda o básico" — ainda não desenhados.
- Números oficiais de ajuda (190, 197, 151, Disque 100) — **devem ser conferidos** antes de publicar.

---

## 3. Como abrir

**Opção mais simples:** abra a pasta e dê **duplo clique** em `index.html`.
```
prototipos\wireframe\index.html
```

Todos os links de navegação funcionam entre as quatro telas.

**Para testar como o público veria (recomendado):**
no navegador, pressione `F12` → ícone de celular (`Ctrl + Shift + M`) e escolha uma tela pequena.

**Controles de acessibilidade já funcionam:** os botões `A−`, `A+` e `Contraste` no cabeçalho
funcionam e **lembram a preferência** entre as páginas — isso valida o requisito RF-03 / US-03.

---

## 4. Roteiro de teste com o público (aplicar nas oficinas)

Teste de usabilidade com **5 a 8 pessoas idosas**, método "pensar em voz alta". Não explique a tela;
peça que a pessoa realize a tarefa e observe.

| # | Tarefa | O que estamos testando | Sinal de sucesso |
|---|---|---|---|
| T1 | "Você recebeu uma ligação estranha do banco. Onde você procuraria ajuda aqui?" | Se "Preciso de ajuda agora" é encontrado naturalmente | Encontra o botão sem ajuda |
| T2 | "Encontre informações sobre o golpe do falso parente." | Se a lista de golpes é compreensível | Chega à página do golpe em até 2 toques |
| T3 | "A letra está pequena para você. O que faria?" | Se o controle `A+` é reconhecido | Usa o `A+` sozinho |
| T4 | "Agora descubra o que fazer depois de cair num golpe." | Se os passos numerados são seguidos | Cita corretamente os primeiros passos |
| T5 | "Você quer mostrar isso para sua filha. Como faria?" | Se "Compartilhar" é encontrado | Encontra a ação de compartilhar |

### O que registrar
- Onde a pessoa **travou** ou hesitou.
- Palavras que ela **não entendeu** (essencial para o guia de linguagem simples).
- Erros de toque (alvos pequenos, elementos próximos demais).
- Frases que ela **recontou com outras palavras** — matéria-prima para reescrever.

> **Ética:** o teste com pessoas exige TCLE e autorização de uso de imagem. Ver
> [`../docs/GESTAO-E-REQUISITOS.md`](../docs/GESTAO-E-REQUISITOS.md), Seção 5.3.

---

## 5. Decisões de projeto já embutidas no wireframe

| Decisão | Onde aparece |
|---|---|
| Aviso de segurança permanente ("nunca pedimos senha") | Faixa fixa na Início e na Ajuda |
| Ajuda como ação primária, não escondida em menu | Botão grande na Início e item fixo no menu |
| Vídeo **nunca** é a única via de informação | Botão "Ir direto para o texto" antes do vídeo |
| Estrutura de conteúdo idêntica em todo golpe | Blocos "O que é / Como reconhecer / O que fazer agora" |
| Sem carrossel, sem pop-up, sem tempo limite | Todas as telas |
| Fonte e contraste ajustáveis e lembrados | Cabeçalho de todas as telas |
| Data de atualização visível | Rodapé e página de golpe |

---

## 6. O que será decidido com o resultado dos testes

| ID | Pergunta a responder | Impacto |
|---|---|---|
| W1 | O botão "Preciso de ajuda agora" é claro ou assusta? | Texto e posição do botão |
| W2 | Os nomes dos golpes usam as palavras do público? | Taxonomia e títulos |
| W3 | O card (canal + título + resumo) é suficiente para escolher? | Estrutura da lista |
| W4 | Os blocos numerados são compreensíveis? | Formatação dos passos |
| W5 | O menu com 5 itens é demais? | Navegação principal |
| W6 | A transcrição precisa vir antes do vídeo? | Ordem do conteúdo |
| W7 | A linguagem está simples o bastante? | Revisão de texto geral |
| W8 | Os controles de acessibilidade (`A−`/`A+`/Contraste) são compreensíveis? | Rótulos e formato do controle |

> **Antes do teste real:** existe uma [simulação com 8 personas](SIMULACAO-TESTE.md) que antecipa
> hipóteses e problemas. Ela serve para **treinar os facilitadores** e **não substitui** o teste
> com pessoas reais — ver o aviso no próprio documento.

---

## 7. Próximo passo

Após aplicar o roteiro da Seção 4:
1. Consolidar os achados e ajustar os wireframes.
2. Só então iniciar o **incremento I0** (portal em Astro) usando as telas aprovadas como especificação.

---

## 8. Correções aplicadas após a simulação (v0.2)

Aplicadas as correções de **prioridade alta** apontadas em [`SIMULACAO-TESTE.md`](SIMULACAO-TESTE.md),
Seção 7. **Ainda sem validação com pessoas reais** — são hipóteses a confirmar no teste.

| Correção | Antes | Depois |
|---|---|---|
| Controles de acessibilidade | `A−` / `A+` / `Contraste` | **Letra menor** / **Letra maior** / **Mais contraste** |
| Ação de envio | "Compartilhar no WhatsApp" | **"Enviar para alguém"** |
| Copiar link | Botão no nível principal | Movido para **"Mais opções"** (bloco recolhível) |
| Faixa de aviso | Bloco preto (parecia botão) | Faixa com bordas e o rótulo **"Atenção:"** |
| Jargões | "transcrição", "contestar a operação", "violação de direitos" | "texto do vídeo", "diga que você não fez aquela compra", "desrespeito aos direitos" |
| Rodapé | "Acessibilidade" / "Glossário" | "Como usar este site" / "Palavras explicadas" |
| 190 × 197 | Ambos apresentados como "polícia" | **190** = emergência agora · **197** = denúncia depois, com calma |
| Rótulo de canal | Chip arredondado (parecia aba/filtro) | Texto simples com prefixo **"Canal: Telefone"** |
| Espaçamentos | Cartões e botões muito próximos | Margens entre cartões e espaçamento entre botões ampliados |
| Botão de ajuda | "Preciso de ajuda **agora**" (parecia só emergência) | **"Preciso de ajuda"** + subtítulo explicativo |

### Pendências restantes (prioridade baixa)

| # | Pendência | Prioridade |
|---|---|---|
| 11 | Alternativa sem WhatsApp (endereço do site + QR code impresso) | Baixa |
| 12 | Reavaliar "Oficinas" e "Sobre" no menu | Baixa |

> **Importante:** estas mudanças são hipóteses. O teste real pode confirmar ou derrubar cada uma.
> Registrar a diferença entre a simulação e o teste real é o achado mais valioso para o relatório.

---

### Histórico de revisões

| Versão | Data | Alteração |
|---|---|---|
| 0.1 | 2026-09-20 | Versão inicial: 4 telas, roteiro de teste e decisões embutidas |
| 0.2 | 2026-09-20 | Correções de prioridade alta aplicadas após a simulação (rótulos de acessibilidade, jargões, faixa de aviso, ação de envio) |
| 0.3 | 2026-09-20 | Correções de prioridade média aplicadas (190 × 197, rótulo de canal, espaçamentos, subtítulo do botão de ajuda) |
