# Events App

This is a web application for managing events. Users can add new events, view existing events, and more.

<img width="400" alt="Zrzut ekranu 2024-06-20 o 11 16 35" src="https://github.com/SzymonMrzyglod/events-app/assets/62983152/c5f380bb-e024-4ead-a894-fa821b185c4d">
<img width="400" alt="Zrzut ekranu 2024-06-20 o 11 17 17" src="https://github.com/SzymonMrzyglod/events-app/assets/62983152/9d40eccf-7a0c-4812-b8f4-375e4dd1392a">
<img width="400" alt="Zrzut ekranu 2024-06-20 o 11 17 23" src="https://github.com/SzymonMrzyglod/events-app/assets/62983152/71d643e4-556a-42ff-8369-b6da05058f6e">
<img width="400" alt="Zrzut ekranu 2024-06-20 o 11 17 27" src="https://github.com/SzymonMrzyglod/events-app/assets/62983152/b79b5fb4-f8b1-4ef6-8f1d-842673535ced">
<img width="400" alt="Zrzut ekranu 2024-06-20 o 11 17 38" src="https://github.com/SzymonMrzyglod/events-app/assets/62983152/eefa2188-01cc-477b-881c-2a5678290f55">
<img width="400" alt="Zrzut ekranu 2024-06-20 o 11 17 56" src="https://github.com/SzymonMrzyglod/events-app/assets/62983152/553859ba-140a-47a3-a862-16be828c0559">
<img width="400" alt="Zrzut ekranu 2024-06-20 o 11 18 07" src="https://github.com/SzymonMrzyglod/events-app/assets/62983152/82a18b72-3b91-4e2d-8477-0bcc5e7b2791">
<img width="400" alt="Zrzut ekranu 2024-06-20 o 11 19 03" src="https://github.com/SzymonMrzyglod/events-app/assets/62983152/0634eb25-b681-492a-be9c-b59a63f72567">
<img width="400" alt="Zrzut ekranu 2024-06-20 o 11 19 08" src="https://github.com/SzymonMrzyglod/events-app/assets/62983152/98cc9452-a34e-40b1-a792-23c614b09e2b">
<img width="400" alt="Zrzut ekranu 2024-06-20 o 11 19 14" src="https://github.com/SzymonMrzyglod/events-app/assets/62983152/7b61a875-5aab-4338-b6ac-4f41b0372f96">

## Technologies Used

- **Frontend:**

  - React.js
  - React Router DOM for routing
  - Atomic Design Methodology
  - Material-UI for UI components and styling
  - Formik and Yup for form handling and validation
  - Axios for HTTP requests
  - Redux Toolkit for state management
  - React Helmet for managing document head tags
  - React Toastify for displaying notifications
  - Jest and React Testing Library for testing
  - TypeScript for type safety
  - EsLint and Prettier

- **Backend:**
  - Express.js for API server
  - CORS for handling cross-origin requests
  - Multer to support uploading files that are saved for testing purposes in public/uploads
    
- **CI/CD:**  
![Zrzut ekranu 2024-06-20 o 11 15 29](https://github.com/SzymonMrzyglod/events-app/assets/62983152/83fc7fd4-5a63-4a21-b226-d6c36e33456b)

## Features

- **Add Event:** Users can add new events with title, date, description, type, phone number, email, location, and image.
- **View Events:** Users can view a list of existing events.
- **Validation:** Form validation is implemented using Yup.
- **Responsive Design:** The application is designed to work seamlessly on various screen sizes.

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository:**
```
git clone git@github.com:SzymonMrzyglod/events-app.git
cd events-app
```
2. **Install dependencies:**
```
yarn
```
3. **Start the development server:**
```
yarn start:server;
yarn start;
```
4. **Open the application in your browser:**

Open http://localhost:3000 in your browser
