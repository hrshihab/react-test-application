# T-Shirt Designer Application

Welcome to the **T-Shirt Designer Application** 👕✨, a dynamic React-based project that allows users to customize T-shirts by adding logos, resizing, and repositioning them, and then downloading the final design as an image. This README provides an overview of the project, its features, and detailed instructions for setup and usage.

### Live Link 🔗:

[https://react-test-application-hrshihab-hrshihabs-projects.vercel.app/](https://react-test-application-hrshihab-hrshihabs-projects.vercel.app/)

---

## Features 🚀

### 1. **T-Shirt Customization**

- Select a T-shirt color from the provided options (white, black, blue).
- Upload a custom logo image to add to the T-shirt.
- Drag and drop the logo to any position on the T-shirt.
- Resize the logo using an interactive slider.

### 2. **User-Friendly Controls**

- Intuitive interface for uploading images.
- Drag-and-drop functionality for easy logo placement.
- Remove uploaded logos with a single click.

### 3. **Download Final Design**

- Generate and download a high-quality image of the customized T-shirt.

### 4. **Responsive Design**

- Fully responsive layout, ensuring compatibility with devices of all screen sizes.

---

## Technologies Used

- **React**: For building the user interface.
- **Tailwind CSS**: For styling and responsiveness.
- **html2canvas**: For generating the downloadable image.
- **react-dnd**: For implementing drag-and-drop functionality.

---

## Setup and Installation

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** (v6 or higher)

### Steps to Run Locally

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-repo/tshirt-designer.git
   cd tshirt-designer
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Start the Development Server**

   ```bash
   npm start
   ```

   This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) in your browser to view it.

4. **Build for Production**

   ```bash
   npm run build
   ```

   This will create an optimized production build in the `build` folder.

---

## Usage Instructions

### Customizing a T-Shirt

1. **Select T-Shirt Color**:

   - Choose from white, black, or blue by clicking on the corresponding thumbnail.

2. **Upload a Logo**:

   - Click on the upload area or drag and drop a logo file (supports `.png`, `.jpg`, and `.jpeg` formats).

3. **Position and Resize the Logo**:

   - Drag the logo to your desired position on the T-shirt.
   - Use the slider to resize the logo.

4. **Download the Final Design**:

   - Click the "Download Final Design" button to save your customized T-shirt as an image.

---

## Folder Structure

```
src/
├── components/
│   ├── DraggableLogo.js      # Handles drag-and-drop functionality for the logo
│   ├── TShirtPreview.js      # Displays the T-shirt mockup and applied logo
│   └── TShirtControls.js     # Provides upload, resize, and download controls
├── assets/
│   ├── black.png             # Black T-shirt image
│   ├── blue.avif             # Blue T-shirt image
│   ├── white.png             # White T-shirt image
├── pages/
│   └── TShirtDesigner.js     # Main page combining all components
└── App.js                    # Root application component
```

---

## Known Issues ⚠️

- Ensure the uploaded logo has a transparent background for the best visual results.
- Drag-and-drop functionality may not work properly on some older browsers.

---

## Future Enhancements

- Add support for multiple logos on a single T-shirt.
- Include text customization with font and color options.
- Implement an undo/redo feature.
- Support for saving and sharing designs.

---

## Contribution

We welcome contributions! If you would like to contribute, please:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Submit a pull request with a detailed description of your changes.

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

## Contact 📧

For any queries or feedback, please contact:

- **Name**: Habibur Rahman Shihab
- **Email**: [hrshihab10@gmail.com](mailto:hrshihab10@gmail.com)


