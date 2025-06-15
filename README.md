# CV-Application

A basic CV (Curriculum Vitae) application built with React and Vite.

## Overview

This project is a simple web-based CV builder that allows users to input their personal details, contact information, work experience, and education. The application then displays the CV information in a read-only format for easy review or copying.

## Features

- React-based SPA (Single Page Application)
- User-friendly form for entering CV details:
  - Name
  - Surname
  - Email
  - Phone number
  - Address
  - Work experience
  - Education
- Displays the entered information in a formatted, read-only preview
- Uses React hooks (`useState`) for form state management
- Responsive styling with custom CSS

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or newer recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Atmoloid/CV-Application.git
   cd CV-Application/CV-Application
   ```

2. Install dependencies:
   ```sh
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```sh
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and go to `http://localhost:5173` (or the URL printed in your terminal).

## Project Structure

```
CV-Application/
├── public/            # Static assets (not shown, typical Vite structure)
├── src/
│   ├── App.jsx        # Main React component, form logic and rendering
│   ├── App.css        # Component-specific styles
│   ├── index.css      # Global styles
│   └── main.jsx       # App entry point, ReactDOM rendering
├── index.html         # HTML entry point for Vite
├── vite.config.js     # Vite configuration
└── eslint.config.js   # ESLint configuration
```

## Code Breakdown

### Main Components

#### 1. `src/App.jsx`

- Imports React's `useState` for state management.
- Initializes form state with fields: `name`, `surname`, `email`, `phone`, `address`, `workExperience`, and `education`.
- `handleChange`: Updates the form state as the user types.
- `handleSubmit`: Marks the form as "submitted", causing the app to render the read-only preview.
- Renders two forms side by side:
  - **Editable form:** For user input
  - **Read-only preview:** Shows the submitted data in a CV-like format

#### 2. `src/main.jsx`

- Entry point for the React application.
- Renders the `<App />` component inside the root DOM node.

#### 3. `src/index.css` and `src/App.css`

- Provides global and component-specific styles.
- Uses flexbox to display the forms side by side.
- Styles the form, inputs, and button for usability and visual appeal.

#### 4. `index.html`

- Standard HTML file for Vite projects.
- Mounts the React app to the `#root` div.

#### 5. `vite.config.js`

- Vite configuration, enables React fast refresh and optimized builds.

#### 6. `eslint.config.js`

- ESLint configuration for JavaScript and React code quality.

## How It Works

1. The user enters their information into the left-side form.
2. On clicking "Submit", the information is displayed in read-only fields on the right.
3. The preview can be easily copied or used as a template for CV creation.

## License

This project is for educational/demonstration purposes. License to be added as needed.

---

*Made with React and Vite by [Atmoloid](https://github.com/Atmoloid).*
