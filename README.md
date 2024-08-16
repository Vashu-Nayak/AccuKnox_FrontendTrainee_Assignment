# AccuKnox_FrontendTrainee_Assignment
 
 # React Dashboard Application

This is a dynamic dashboard application built with React and Redux. The application allows users to manage widgets across different categories, search for widgets by name, and dynamically add or remove widgets.

## Features

- **Dynamic Dashboard**: Add and remove widgets within categories.
- **Search Functionality**: Search for widgets by name across all categories.
- **Responsive Design**: Styled using Tailwind CSS to ensure a responsive layout.

## Prerequisites

Make sure you have the following installed on your machine:

- Node.js (v12 or higher)
- npm (Node Package Manager)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Vashu-Nayak/AccuKnox_FrontendTrainee_Assignment
   cd dashboard-app
 2. **Install dependencies:**

    ```bash
    npm install
 3. **Start the application:**

    ```bash
    npm run dev

This will start the application in development mode and open it in your default web browser at http://localhost:3000.

## File Structure

src/

components/: Contains all the React components.

Dashboard.jsx

Category.jsx

Widget.jsx

WidgetForm.jsx

SearchBar.jsx

redux/: Contains Redux slice and store.

dashboardSlice.jsx

store.jsx

main.jsx: Entry point of the application.

index.css: Tailwind CSS configuration.

## How to Use

1. **Add a Widget:**

Navigate to a category and click on + Add Widget.
Enter the widget name and text, and click Add Widget.

2. **Remove a Widget:**

Click the × icon on a widget to remove it from the category.

3. **Search for Widgets:**

Use the search bar at the top of the dashboard to filter widgets by name.

## Dependencies

React

Redux Toolkit

React-Redux

Tailwind CSS

React-icons


