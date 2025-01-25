# Inventory Management App

A simple React-based inventory management system that helps track products, their quantities, and categories.

## Features

- **Item Management**
  - Add new items with name, category, quantity, and price
  - Edit existing items
  - Delete items from inventory
  - Real-time form validation

- **Inventory Overview**
  - Clear tabular display of all inventory items
  - Visual highlighting of low-stock items (quantity < 10)
  - Sort items by quantity
  - Filter items by category

- **Responsive Design**
  - Works on both desktop and mobile devices
  - Adaptive layout for different screen sizes

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
```

2. Navigate to the project directory:
```bash
cd GyanGrove Assignment
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev or vite
```

The app will be available at `http://localhost:5173`

## Usage

1. **Adding Items**
   - Fill in the form at the top with item details
   - Click "Add Item" to add to inventory

2. **Editing Items**
   - Click "Edit" on any item row
   - Form will be populated with item details
   - Make changes and click "Update"

3. **Filtering and Sorting**
   - Use the category dropdown to filter items
   - Click "Sort by Quantity" to sort items by stock level

4. **Low Stock Alerts**
   - Items with quantity below 10 are highlighted in red
   - Helps identify items that need restocking

## Tech Stack

- React.js
- Vite
- CSS3

## Project Structure

```
src/
├── App.jsx        # Main application component
├── App.css        # Styles for the application
├── main.jsx       # Application entry point
└── index.css      # Global styles
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
