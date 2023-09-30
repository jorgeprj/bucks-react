# Bucks - ReactTS Financial Management

![Bucks](/public/screenshot.png)

Welcome to the **Bucks** repository, a ReactTS application designed to help users manage their finances effectively. Bucks provides a range of features including transaction management, automatic balance calculation, and customizable transaction categories.

## Key Features

Bucks leverages various React and TypeScript concepts to deliver a seamless financial management experience:

- Connecting to an **API** that simulates a database.
- Effective use of **React Hooks** for state management.
- Responsive and visually appealing design using **CSS**.
- User-friendly event handling with **onClick** and **onChange**.
- Efficient data flow through component properties (**props**).
- Smooth navigation facilitated by **React Router**.
- Intuitive icons for transaction categories from the **React Icons** library.

## Additional Features

In addition to the core functionalities, Bucks offers advanced capabilities:

- **Transaction Management** - Add and remove transactions, keeping the balance up to date.
- **MyAccount Page** - Set the initial account name and balance for personalized tracking.
- **Categorized Transactions** - Assign different icons to each transaction category for easy identification.

## Prerequisites

To run Bucks on your local machine, ensure you have the following installed:

- [Node.js](https://nodejs.org/) - Version 14 or higher.
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) for package management.

## Installation

1. Clone this repository to your machine:

   ```bash
   git clone https://github.com/jorgeprj/taskee-react.git
   ```

2. Navigate to the project directory:

   ```bash
   cd taskee
   ```

3. Install project dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

## How to Use

To simulate the JSON Server and run the project, follow these steps:

1. Start the JSON Server to simulate the API:

   ```bash
   npm run backend
   # or
   yarn backend
   ```

   The server will be available at `http://localhost:5000`.

2. Start the React application:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

The application will be available at `http://localhost:5173` by default.

## Contribution

If you'd like to contribute to the Bucks project, follow these steps:

1. Fork the repository.
2. Create your own development branch: `git checkout -b feature/feature-name`.
3. Make your changes and commit them: `git commit -m 'Add a new feature'`.
4. Push your branch: `git push origin feature/feature-name`.
5. Submit a Pull Request with your changes.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use and modify it as needed.

## Contact

For questions or suggestions, please contact [@jorgeprj](https://github.com/jorgeprj).