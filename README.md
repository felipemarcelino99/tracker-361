# Projeto Tracker

Este projeto é uma aplicação web para gerenciamento de veículos, com foco na visualização e filtragem de dados sobre a frota. A aplicação é construída com **React** e utiliza **React Query** para gerenciamento de dados e **Zod** para validação de formulários.

## Funcionalidades

- Visualização de veículos na plataforma de mapas.
- Filtros para pesquisa de veículos por placa ou frota.
- Seleção de tipos de veículos (Rastreadores ou Outros).
- Armazenamento e atualização de filtros e dados no contexto de veículos.

## Tecnologias Utilizadas

- **Frontend**:
  - React 18
  - Next.js
  - Tailwind CSS
  - React Query
  - React Hook Form
  - Zod
- **Mapas**:
  - Google Maps API (via @vis.gl/react-google-maps)

## Como Rodar o Projeto Localmente

### Pré-requisitos

- **Node.js** (versão 16 ou superior)
- **npm** ou **yarn**
- **Google Maps API Key** (necessária para o uso da funcionalidade de mapas)

### Passos

1. Clone este repositório:

   ```bash
   git clone https://github.com/SEU_USUARIO/projeto-tracker.git
   cd projeto-tracker
   ```

2. Instale as dependências:

   Se você usa **npm**:

   ```bash
   npm install
   ```

   Se você usa **yarn**:

   ```bash
   yarn install
   ```

3. Crie um arquivo `.env` na raiz do projeto e adicione sua chave da API do Google Maps:

   ```bash
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=Sua_Chave_API
   ```

4. Rode a aplicação localmente:

   Se você usa **npm**:

   ```bash
   npm run dev
   ```

   Se você usa **yarn**:

   ```bash
   yarn dev
   ```

   A aplicação estará disponível em [http://localhost:3000](http://localhost:3000).

## Testes

A aplicação utiliza **React Testing Library** e **Vitest** para realizar os testes de componentes e garantir a qualidade do código.

### Rodando os Testes

Para rodar os testes localmente, execute:

Se você usa **npm**:

```bash
npm run test
```

Se você usa **yarn**:

```bash
yarn test
```

### Estrutura dos Testes

- **Componentes**: Testes para garantir que todos os componentes renderizam corretamente.
- **Funcionalidades**: Testes para validar a funcionalidade de formulários, filtros e integração com o contexto.
- **Testes de Interface**: Validação de interação com o usuário, como a seleção de filtros e preenchimento de formulários.

## CI/CD

Este projeto está integrado com um pipeline de CI/CD para garantir que o código seja validado automaticamente durante o processo de desenvolvimento.

### Fluxo de CI/CD

- **GitHub Actions**: Utilizamos o GitHub Actions para automação.
- **Testes automatizados**: Os testes são executados automaticamente em cada push ou pull request.
- **Deploy automático**: A aplicação é automaticamente enviada para o ambiente de produção após a aprovação dos testes.

## Contribuição

Se você deseja contribuir com este projeto, siga as etapas abaixo:

1. Faça um **fork** do repositório.
2. Crie uma **branch** para a sua feature: `git checkout -b minha-nova-feature`.
3. Faça as modificações necessárias e adicione testes, se aplicável.
4. Comite suas alterações: `git commit -am 'Adiciona nova feature'`.
5. Envie para o repositório: `git push origin minha-nova-feature`.
6. Abra um **pull request**.

## Licença

Este projeto está licenciado sob a MIT License - consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

## Contato

Se você tiver dúvidas ou quiser colaborar, entre em contato comigo através de **SEU_EMAIL@dominio.com** ou abra uma issue no repositório.
