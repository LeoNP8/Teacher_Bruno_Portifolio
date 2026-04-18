# Teacher Bruno - Portfolio

Este é o repositório da Landing Page do **Teacher Bruno**, uma página focada em captação de alunos de inglês com um design vibrante, responsivo e interativo.

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído "do zero" (sem uso de frameworks pesados) e foca em uma alta performance e design imersivo. Abaixo estão detalhadas todas as tecnologias, recursos e práticas utilizadas:

### 📄 HTML5
*   **Semântica:** Uso de tags semânticas da HTML5 (`<header>`, `<footer>`, `<section>`, `<nav>`, `<details>`, `<summary>`) para melhorar a acessibilidade e o SEO (Search Engine Optimization) da página.
*   **SVGs Inline:** Utilização de SVG diretamente no HTML para detalhes gráficos robustos, como os *Shape Dividers* (curvas nas seções) e o ícone do WhatsApp, mantendo dinâmico o tempo de carregamento.

### 🎨 CSS3 (Vanilla)
*   **Variáveis Nativas (Custom Properties):** O arquivo de estilo utiliza fortemente a raiz `:root {}` para ditar as paletas de cores (`--navy-blue`, `--bright-red`, `--sunny-yellow`) e fontes do sistema, facilitando muito a manutenção futura.
*   **Flexbox e CSS Grid:** Utilizados em conjunto para criar os alinhamentos dos itens no cabeçalho (Header) e montar as grades (Grid) da seção de Metodologia e da seção de Depoimentos, permitindo que os cards se readaptem automaticamente.
*   **Animações e Efeitos (Keyframes):** Vasto uso de `@keyframes` para engajar o usuário, como por exemplo:
    *   Efeito *Breathe* (respiração 3D) na foto e avatar do professor.
    *   Efeito *Float* (flutuação) nas bandeirinhas dos idiomas.
    *   Efeito *Pulse* contínuo no ícone fixo do WhatsApp e nos *hovers*.
*   **Design Responsivo e Media Queries:** Toda a estilização foi preparada cuidadosamente com breakpoints em `@media` assegurando que a experiência em dispositivos móveis, tablets e monitores abertos seja sempre perfeita.
*   **Google Fonts:** Integração das famílias tipográficas **Fredoka** (para títulos mais "desenhados" e amigáveis) e **Nunito** (para corpos de texto precisos e legíveis).

### ⚡ JavaScript (Vanilla / ES6+)
*   **Manipulação Eficiente de DOM:** O script interage levemente com a página, sendo principal responsável pelo comportamento do Menu Hamburger retrátil (Mobile).
*   **Intersection Observer API:** Uma poderosa API nativa do navegador para detectar quando elementos chegam no campo de visão do usuário (Viewport). Graças a ela, os elementos como caixas de depoimento, títulos e cards entram na tela suavemente (`.fade-up`, `.slide-in-right`, etc.) à medida que rolamos a página (*Scroll Animations*) gastando quase nada de processamento.
*   **Parallax Effect:** Um sutil efeito extra escutando o *scroll* principal que promove um leve deslocamento no Avatar, dando a sensação de profundidade conforme a página desce no desktop.

### 🔗 Integrações & Outros
*   **WhatsApp Linking:** Parametrização dos botões (Call to Actions / CTAs) para abrir automaticamente a aplicação de mensagem instantânea pronta para prospecção de alunos.