# Job Listing Web Application
## Overview
### This is a full-stack web application designed to display job listings sourced from external job portals. The application includes a user-friendly interface, backend APIs for data management, and web scraping functionality to aggregate job data dynamically.
## Features
###
- Dynamic Job Listings: Fetches and displays job data from a PostgreSQL database via API.
- Web Scraping: Utilizes Selenium to scrape job data from a live job portal, including pagination handling.
- RESTful APIs: Implements GET and POST endpoints for data retrieval and insertion.
- User-Friendly UI: A clean and responsive frontend built with React.js and styled using Tailwind CSS.
- Database Integration: Efficient data storage and management using PostgreSQL.
## Tools & Technologies
###
- Frontend: React.js, Tailwind CSS, Vite
- Backend: Express.js, RESTful API
- Database: PostgreSQL
- Scraping Framework: Selenium (Python)
## How It Works
###
1. Web Scraping:

- Scrapes job listings, including key attributes like title, company, location, and more.
- Handles pagination to retrieve data from multiple pages.
2. Data Management:

- Scraped data is sent to the backend using POST requests and stored in a PostgreSQL database.
- Data is retrieved and displayed on the frontend using a GET request to the backend API.
3. Frontend:

- Displays job listings in a structured, easy-to-navigate layout.
- Users can browse through job opportunities with details such as title, location, and company.
