# Simulação do Teste de Usabilidade — Wireframes

> ⚠️ **ATENÇÃO — ESTE DOCUMENTO NÃO É EVIDÊNCIA.**
>
> Esta é uma **simulação** conduzida por IA, com personas fictícias. Ela **reflete hipóteses
> plausíveis sobre o público**, não o comportamento de pessoas reais de Timóteo/MG.
>
> O roteiro do Trabalho Final exige **evidências reais** (Seção 5.5). Esta simulação **não pode**
> ser apresentada como teste de usabilidade nem como resultado do projeto.
>
> **Para que ela serve, então?**
> 1. **Treinar os facilitadores** que vão aplicar o teste real (já saber o que observar).
> 2. **Antecipar problemas** para o teste real ser mais produtivo.
> 3. **Gerar hipóteses** — cada achado aqui é uma pergunta a confirmar ou derrubar com pessoas reais.
>
> O teste real continua pendente e é insubstituível. Ver roteiro em
> [`WIREFRAMES.md`](WIREFRAMES.md), Seção 4.

---

## 1. Método da simulação

- **O que foi feito:** cada persona fictícia percorreu as 5 tarefas do roteiro
  (T1–T5 de [`WIREFRAMES.md`](WIREFRAMES.md), Seção 4) sobre as 4 telas do wireframe.
- **Regra de realismo:** a simulação **não** foi conduzida para confirmar as telas. As personas
  falham onde o wireframe tem problemas reais de linguagem, tamanho e rótulo.
- **Limite de leitura:** nenhuma persona "leu tudo". Idosos escaneiam a tela, não leem.
- **Resultados:** `Concluiu` · `Com dificuldade` · `Não concluiu`.

---

## 2. Participantes simulados (8 perfis)

| # | Participante | Idade | Perfil e relevância para o teste |
|---|---|---|---|
| P1 | **Maria Aparecida** | 67 | Aposentada, ensino fundamental incompleto. Usa WhatsApp e Facebook no Android do filho. Óculos para perto. **Perfil mais comum.** |
| P2 | **Sebastião** | 76 | Aposentado, **catarata avançada**. Usa o zoom do sistema e fonte grande. Testa contraste e legibilidade. |
| P3 | **Terezinha** | 81 | Viúva, mora sozinha. **Lê devagar e com dificuldade.** Aprendeu a usar o celular recentemente, na igreja. |
| P4 | **José Antônio** | 74 | Aposentado, **impaciente**, digita com um dedo e erra. Prefere ligar a mexer no celular. |
| P5 | **Antônio Carlos** | 62 | Ainda trabalha, usa redes sociais. **Excesso de confiança:** "eu não caio nesses golpes". Perfil de risco subestimado. |
| P6 | **Rosa** | 70 | Líder do grupo de convivência. Alfabetizada, **compartilha tudo** no Facebook e WhatsApp. |
| P7 | **Geralda** | 72 | **Tremor leve nas mãos.** Dificuldade de toque preciso. Testa tamanho e espaçamento dos alvos. |
| P8 | **Cláudia** | 44 | Filha cuidadora, mora em outra cidade. Público secundário: usa o conteúdo **para ensinar a mãe à distância**. |

---

## 3. Resultados por tarefa

### T1 — "Você recebeu uma ligação estranha do banco. Onde procuraria ajuda aqui?"

| Participante | Resultado | Observação |
|---|---|---|
| P1 Maria | Concluiu | Achou o botão grande, mas hesitou: *"ajuda agora... é pra ligar pra alguém?"* |
| P2 Sebastião | Concluiu | Não olhou o botão primeiro; foi direto ao menu "Ajuda" no topo. |
| P3 Terezinha | Com dificuldade | Levou tempo. Ficou em dúvida se o botão era só para emergência. |
| P4 José Antônio | Concluiu | *"E se eu só quiser saber se é golpe? Isso aí é pra quem já caiu?"* |
| P5 Antônio Carlos | Concluiu | *"Eu já sei disso."* Não explorou o conteúdo. |
| P6 Rosa | Concluiu | Achou e quis compartilhar imediatamente. |
| P7 Geralda | Com dificuldade | **Tocou no banner preto achando que era botão.** Depois acertou. |
| P8 Cláudia | Concluiu | Foi direto ao menu "Ajuda". |

**Achados:**
- O botão **é encontrado** — a hierarquia visual funciona.
- A palavra **"agora"** cria ambiguidade: parece exclusivo para emergência, o que afasta quem
  está apenas em dúvida. Metade hesitou por isso.
- O **banner preto foi confundido com botão** (P7 e P4). Um bloco escuro e largo parece clicável.

---

### T2 — "Encontre informações sobre o golpe do falso parente."

| Participante | Resultado | Observação |
|---|---|---|
| P1 Maria | Concluiu | Reconheceu o título em 1 toque: *"esse eu já recebi".* |
| P2 Sebastião | Concluiu | Usou o zoom do sistema antes de procurar. |
| P3 Terezinha | Com dificuldade | Não entendeu o rótulo "WhatsApp" no cartão; achou pelo título. |
| P4 José Antônio | Com dificuldade | Tentou digitar na **busca**, errou letras, desistiu e usou a lista. |
| P5 Antônio Carlos | Concluiu | Rápido. |
| P6 Rosa | Concluiu | Rápido. |
| P7 Geralda | Com dificuldade | Tocou no cartão de baixo primeiro (alvos próximos). |
| P8 Cláudia | Concluiu | Rápido. |

**Achados:**
- **Os títulos dos golpes estão certos.** A linguagem comum ("falso parente pedindo dinheiro")
  foi reconhecida por 8 de 8. Isso valida a taxonomia em linguagem simples.
- O **chip de canal** (Telefone / WhatsApp / SMS) é lido como **aba ou filtro**, não como
  informação do cartão.
- **Cartões muito próximos** causam toque errado (P7).
- Só P4 usou a **busca** — e com dificuldade de digitação. A busca é secundária, não principal.

---

### T3 — "A letra está pequena para você. O que faria?"

| Participante | Resultado | Observação |
|---|---|---|
| P1 Maria | Não concluiu | Não associou "A+" a aumentar letra. Tentou "dar zoom com dois dedos". |
| P2 Sebastião | Concluiu | Já conhece o zoom do sistema; reconheceu "A+". |
| P3 Terezinha | Não concluiu | *"O que é esse A mais e A menos?"* Pediu ajuda. |
| P4 José Antônio | Não concluiu | Achou que **"Contraste" era o brilho** da tela. |
| P5 Antônio Carlos | Concluiu | Entendeu "A+". |
| P6 Rosa | Concluiu | Entendeu. |
| P7 Geralda | Não concluiu | Tocou em "Contraste" achando que aumentava a letra; **não percebeu mudança**. |
| P8 Cláudia | Concluiu | Entendeu de imediato. |

**Achados — o problema mais grave do wireframe:**
- **"A− / A+" é jargão de designer.** Cinco dos oito participantes não associaram ao tamanho da letra.
- **"Contraste" é incompreensível** para quem não é da área. P4 confundiu com brilho; P7 não
  percebeu que algo mudou.
- Quem mais precisa do recurso (P1, P3, P7) foi exatamente quem **não conseguiu usar**.
  Esse é o pior tipo de falha de acessibilidade: o recurso existe, mas é inalcançável.

---

### T4 — "Agora descubra o que fazer depois de cair num golpe."

| Participante | Resultado | Observação |
|---|---|---|
| P1 Maria | Concluiu | Não entendeu **"contestar a operação"**. |
| P2 Sebastião | Com dificuldade | A lista de canais ficou longa demais para ler; usou zoom. |
| P3 Terezinha | Com dificuldade | Travou em **"registre um boletim de ocorrência"** — não sabia o que era. |
| P4 José Antônio | Concluiu | *"Qual a diferença entre 190 e 197?"* — não estava claro. |
| P5 Antônio Carlos | Concluiu | Rápido. |
| P6 Rosa | Concluiu | Gostou dos passos numerados. |
| P7 Geralda | Concluiu | — |
| P8 Cláudia | Concluiu | *"Isso eu mando pra minha mãe."* |

**Achados:**
- **Os passos numerados funcionam muito bem.** Nenhum participante se perdeu na sequência.
- **Jargões a trocar:** "contestar a operação", "boletim de ocorrência", "violação de direitos".
- **190 × 197 não está claro.** As personas não sabem quando usar cada um.
- A lista de canais é **longa em texto corrido** — P2 se perdeu. Precisa de mais quebra visual.

---

### T5 — "Você quer mostrar isso para sua filha. Como faria?"

| Participante | Resultado | Observação |
|---|---|---|
| P1 Maria | Concluiu | Entendeu "Compartilhar no WhatsApp". **Ignorou "Copiar link".** |
| P2 Sebastião | Não concluiu | Não usa WhatsApp. **"Copiar link" não fez sentido nenhum.** |
| P3 Terezinha | Não concluiu | *"Compartilhar é o quê? É mandar?"* |
| P4 José Antônio | Com dificuldade | Achou que "compartilhar" era **salvar**. |
| P5 Antônio Carlos | Concluiu | Rápido. |
| P6 Rosa | Concluiu | *"Ah, isso eu sei fazer!"* — compartilharia tudo. |
| P7 Geralda | Com dificuldade | Errou o toque no botão ao lado. |
| P8 Cláudia | Concluiu | Usaria para mandar para a mãe. |

**Achados:**
- **"Compartilhar" é jargão** para boa parte do público. Terezinha traduziu espontaneamente para
  **"mandar"** — é essa a palavra que ela usa.
- **"Copiar link" é inútil para leigos** — 8 de 8 ignoraram ou não entenderam.
- **Quem não usa WhatsApp fica sem saída** (P2). Precisa de alternativa: mostrar o endereço do site
  e um **QR code impresso** na cartilha.
- P7 errou o toque: os dois botões de ação estão **próximos demais**.

---

## 4. Observações gerais (fora das tarefas)

| Observação | Quem demonstrou |
|---|---|
| A **data de atualização** passa despercebida. Quando apontada, foi considerada boa ("mostra que é sério"). | P2, P6, P8 |
| As palavras **"Glossário"** e **"Acessibilidade"** no rodapé não foram compreendidas. | P1, P3, P4 |
| O menu com 5 itens não incomodou **ninguém** — mas "Oficinas" e "Sobre" quase não foram tocados. | todos |
| O banner preto de aviso foi lido e aprovado ("isso é importante"), mas 2 tentaram clicar nele. | P1, P7 |
| Ninguém reclamou da ausência de imagens ou cores. | todos |

---

## 5. Respostas às perguntas de decisão (W1–W8)

| ID | Pergunta | Resposta da simulação |
|---|---|---|
| **W1** | Botão "Preciso de ajuda agora" é claro ou assusta? | **Encontrado, mas ambíguo.** "Agora" sugere emergência e afasta quem está só em dúvida. Adicionar subtítulo explicando. |
| **W2** | Os nomes dos golpes usam as palavras do público? | **Sim — acertamos.** 8 de 8 reconheceram os títulos. Manter a linguagem comum. |
| **W3** | O card é suficiente para escolher? | **Sim**, mas o chip de canal confunde (parece aba) e os cartões estão próximos demais. |
| **W4** | Os blocos numerados são compreensíveis? | **Sim, muito bons.** O problema não é o formato, são os jargões dentro deles. |
| **W5** | O menu com 5 itens é demais? | **Não é problema.** "Oficinas" e "Sobre" são pouco usados, mas não atrapalham. |
| **W6** | A transcrição precisa vir antes do vídeo? | **Não.** O botão "ir direto para o texto" foi bem recebido. Manter a ordem atual. |
| **W7** | A linguagem está simples o bastante? | **Não.** Lista de jargões identificada (Seção 6). |
| **W8** | *(nova)* Os controles de acessibilidade são compreensíveis? | **Não.** É a falha mais grave encontrada. |

---

## 6. Jargões identificados (correções de linguagem)

| Onde | Texto atual | Problema | Substituir por |
|---|---|---|---|
| Cabeçalho | `A−` / `A+` | Jargão de designer; 5 de 8 não entenderam | `Letra menor` / `Letra maior` (com ícone) |
| Cabeçalho | `Contraste` | Incompreensível; confundido com brilho | `Mais contraste` ou sair do nível principal |
| Página de golpe | `transcrição` | Palavra difícil | `texto do vídeo` |
| Página de golpe | `Compartilhar no WhatsApp` | Jargão para parte do público | `Enviar para alguém` |
| Página de golpe | `Copiar link` | Inútil para leigos | Remover ou esconder em "mais opções" |
| Ajuda | `contestar a operação` | Jargão bancário | `dizer ao banco que você não fez aquela compra` |
| Ajuda | `registre um boletim de ocorrência` | Não compreendido | `registre a denúncia na polícia (nós explicamos como)` |
| Ajuda | `violação de direitos` | Abstrato | `desrespeito aos direitos da pessoa idosa` |
| Rodapé | `Glossário` | Não compreendido | `Palavras explicadas` |
| Rodapé | `Acessibilidade` | Não compreendido | `Como usar este site` |

---

## 7. Mudanças recomendadas no wireframe (priorizadas)

### Prioridade alta — bloqueiam o uso
1. **Renomear os controles de acessibilidade.** `A+` → **"Letra maior"**, `A−` → **"Letra menor"**,
   `Contraste` → **"Mais contraste"**. Cada um com ícone e texto visível.
2. **"Compartilhar" → "Enviar para alguém".** É a palavra que o público usa.
3. **Remover "Copiar link"** do nível principal.
4. **Trocar todos os jargões** da Seção 6.
5. **Fazer o banner preto não parecer botão** — ou transformá-lo em botão de verdade.

### Prioridade média — causam erro
6. **Explicar 190 × 197** na página de Ajuda ("ligue 190 se houver risco agora").
7. **Melhorar o chip de canal:** não pode parecer aba. Sugestão: `Canal: Telefone`.
8. **Aumentar o espaçamento** entre cartões e entre botões (toque impreciso).
9. **Subtítulo no botão de ajuda:** "Entenda o que fazer se você caiu num golpe ou está em dúvida".

### Prioridade baixa — melhorias
10. Renomear itens do rodapé (`Glossário` → `Palavras explicadas`).
11. Adicionar **alternativa sem WhatsApp**: endereço do site + QR code para impressão.
12. Reavaliar se "Oficinas" e "Sobre" merecem lugar no menu principal.

---

## 8. Limitações desta simulação (leia antes de citar)

1. **Não são pessoas reais.** Os comportamentos refletem hipóteses plausíveis, escritas por uma IA,
   sobre idosos brasileiros. Não há dados de Timóteo/MG.
2. **Não houve observação real** de tempo, hesitação, expressão facial ou frustração.
3. **Risco de falso consenso:** a simulação pode produzir achados "razoáveis demais" e deixar passar
   problemas que só aparecem na prática.
4. **O idioma e a cultura locais** não foram capturados — gírias e formas de dizer de Timóteo/MG
   podem mudar conclusões.
5. **Nenhum resultado aqui pode ser usado como evidência** no relatório do Trabalho Final.

---

## 9. Como transformar isto em evidência real

Próximos passos para o teste verdadeiro (roteiro completo em [`WIREFRAMES.md`](WIREFRAMES.md), Seção 4):

1. Recrutar **5 a 8 pessoas idosas reais** em Timóteo/MG (via CRAS, centro de convivência ou igreja).
2. Colher **TCLE** e **autorização de uso de imagem** antes de começar.
3. Aplicar as 5 tarefas, com **duas pessoas na sala**: uma conduz e uma registra (sem ajudar).
4. Registrar: onde travou, palavras que não entendeu, toques errados, frases recontadas.
5. Comparar com esta simulação: **o que se confirmou e o que foi diferente** — a diferença é o
   achado mais valioso para o relatório.
6. Guardar tudo em `evidencias/oficinas/` (pasta restrita, ver `LEIA-ME.md` da pasta).
7. Levar as fotos e resultados **anonimizados** para o relatório como evidência de impacto.

---

### Histórico de revisões

| Versão | Data | Alteração |
|---|---|---|
| 0.1 | 2026-09-20 | Simulação inicial com 8 personas sobre as 5 tarefas do roteiro |
