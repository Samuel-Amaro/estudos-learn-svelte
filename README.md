# Estudos Svelte

Estudos para aprender sobre o svelte, e seu ecossistema.

- Basic Svelte
  - [x] Introduction
  - [x] Reactivity
  - [x] Props
  - [x] Logic
  - [x] Events
  - [x] Bindings
  - [x] Lifecycle
  - [x] Stores
- Advanced Svelte
  - [x] Motion
  - [x] Transitions
  - [x] Actions
  - [x] Advanced Bindings
  - [x] Classes and Styles
  - [x] Component Composition
  - [x] Context API
  - [x] Special Elements
  - [x] Module Context

## Stack

| Tecnologia | Descrição              |
| ---------- | ---------------------- |
| Svelte     | Framework frontend     |
| TypeScript | Linguagem              |
| Vite       | Build tool             |
| Prettier   | Formatter              |
| ESLint     | Linter                 |
| NPM        | Gerenciador de pacotes |

## Requisitos

Você precisará de um terminal com node + npm instalado para compilar e construir seu aplicativo.

1. Node
2. [NPM](https://www.npmjs.com/)

## Comandos

Instalar as dependências do projeto

```bash
npm install
```

Rodar a aplicação em modo desenvolvimento (Vite)

```bash
npm run dev
```

---

Executa a verificação do Svelte

```bash
npm run check
```

---

Verifica os `.ts` arquivos, que informa ao compilador TypeScript para verificar se há erros sem gerar os `.js`  arquivos de saída

```bash
npm run check && npx tsc --noemit
```

---

Executa a verificação do Svelte no modo observação, neste caso, o script será executado sempre que você alterar algum arquivo.

```bash
npm run check -- --watch
```

---

Buildar a aplicação (Vite)

```bash
npm run build
```

---

Pré-visualizar o build (Vite)

```bash
npm run preview
```
