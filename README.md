
# Dekrison Technology - Corporate Website

This is the source code for the official website of Dekrison Technology, a Shenzhen-based company specializing in outdoor LED lighting solutions. The website is built with React, TypeScript, and Tailwind CSS, featuring a dynamic product catalog and is designed for static deployment on platforms like Zeabur.

## 🌟 Features

- **Modern Tech Stack**: React 18, TypeScript, Tailwind CSS.
- **Dynamic Product Pages**: Product data is managed centrally in a JSON file and rendered on a gallery and dynamic detail pages.
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices using a mobile-first approach.
- **Smooth Animations**: Engaging user experience with animations powered by Framer Motion.
- **SEO Optimized**: Includes essential meta tags for search engine visibility.
- **Component-Based Architecture**: Clean and maintainable code structure.
- **Static Site Ready**: Easily deployable on any static hosting provider.

##  pages

The website consists of the following pages:

- **Home**: Hero section, product category overview, and company highlights.
- **About Us**: Company history, profile, and milestones.
- **Core Values**: A dedicated page showcasing the company's guiding principles.
- **Products**: A gallery of all products from the data source.
- **Product Detail**: A dynamic route (`/product/:id`) showing detailed information for a single product.
- **Contact**: A contact form and company location details.

## 🛠️ Local Development Setup

Follow these steps to get the project running on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18.x or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd dekrison-website
    ```

2.  **Install dependencies:**
    This project uses dependencies managed via an `importmap` in `index.html` and does not require a local `npm install` to run in this environment.

### Running the Development Server

You can run this project using a simple static server. For example, using the `serve` package:
```bash
npm install -g serve
serve .
```
This will open the application in your default browser.

## 🚀 Deployment on Zeabur

This project is configured for easy deployment on static hosting platforms like Zeabur.

1.  **Push your code to a new GitHub repository.**

2.  **Sign up or log in to [Zeabur](https://zeabur.com).**

3.  **Create a new project** and connect your GitHub account.

4.  **Select the repository** for the Dekrison website.

5.  **Zeabur will automatically detect it as a static website.** It does not require a build step as it's a client-side React app.

6.  In the project settings on Zeabur, ensure the "Root Directory" is set to the base of your repository.

7.  Deploy the project. Zeabur will serve the static files, and you will be provided with a public URL for your live website.

## 📂 Project Structure

```
.
├── src/
│   ├── assets/
│   │   └── images/      # Image assets (placeholders)
│   ├── components/      # Reusable UI components
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── data/            # JSON data files
│   │   └── products.json
│   ├── pages/           # Page components
│   │   ├── HomePage.tsx
│   │   ├── ProductDetailPage.tsx
│   │   └── ...
│   ├── App.tsx          # Main application component with routing
│   └── index.tsx        # Application entry point
├── index.html           # Main HTML file, entry point
└── README.md
```

## 🎨 Customization

### Colors & Theme

The color palette is defined using Tailwind CSS classes with custom hex values.

-   **Primary (Deep Navy)**: `#0A2342`
-   **Accent (Warm Yellow)**: `#FFD447`
-   **Background (Cool Gray)**: `#F8F9FA`
-   **Font**: 'Poppins' (headings) and 'Inter' (body), loaded from Google Fonts in `index.html`.

### Content

- **General Content**: Update text directly within the `.tsx` files in the `src/pages/` directory.
- **Product Catalog**: Modify the `src/data/products.json` file to add, remove, or update product information. Ensure image paths in the JSON file correspond to actual files in `src/assets/images/`.
