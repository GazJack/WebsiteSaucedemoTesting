# 🚀 WebsiteSaucedemoTesting 🧪

This project is designed for automated testing of the [Sauce Demo](https://www.saucedemo.com/) website using the [Cypress](https://www.cypress.io/) testing framework.

## 📁 Project Structure

- 📂 `.github/workflows/`: Contains GitHub Actions configuration files for CI/CD processes.
- 📂 `cypress/`: The main directory where all Cypress tests and related files are stored.
- 📜 `.gitignore`: Specifies files and directories that should be ignored by Git.
- 🐞 `bugs.txt`: A text file where detected software bugs are recorded.
- ⚙️ `cypress.config.js`: Cypress configuration file.
- 📦 `package-lock.json` & `package.json`: Files for managing NPM dependencies.
- ✅ `testCases.txt`: A file describing the test cases.
- 🔍 `websiteFunctions.txt`: A file documenting the main website functionalities.

## 📌 Requirements

- 🖥️ [Node.js](https://nodejs.org/) (recommended: latest LTS version)
- 📦 [npm](https://www.npmjs.com/) (included with Node.js)
- 🧪 [Cypress](https://www.cypress.io/) (installed via `npm`)

## 📥 Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/GazJack/WebsiteSaucedemoTesting.git
   ```

2. Navigate to the project directory:

   ```bash
   cd WebsiteSaucedemoTesting
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## ▶️ Running Tests

To run the tests, use the following command:

```bash
npx cypress open
```

This will launch the Cypress interface, where you can select and execute test cases.

## 📑 Test Cases

The test cases are described in the `testCases.txt` file. This file contains information about the functionalities being tested and the expected results.

## 🌐 Website Functions

The `websiteFunctions.txt` file documents the key functionalities of the Sauce Demo website that are tested in this project.

## 🐛 Bugs

All identified bugs and defects are recorded in the `bugs.txt` file. If you discover new bugs, please add them to this file with detailed descriptions.

## 🤝 Contribution

If you wish to contribute to this project, please:

1. 🔄 Fork the repository.
2. 🌱 Create a new branch (`git checkout -b feature/AmazingFeature`).
3. ✍️ Make changes and commit them (`git commit -m 'Add some AmazingFeature'`).
4. 📤 Push to the branch (`git push origin feature/AmazingFeature`).
5. 🔀 Open a Pull Request.

## 📜 License

This project does not specify a license. If you plan to use this code, please contact the project owner for permission.
