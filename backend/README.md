# Top 10 Binge-Watch Movies

## Project Idea
The "Top 10 Binge-Watch Movies" is a web app that allows users to explore a personalized list of the top 10 binge-worthy movies based on their preferences. The app will display a dynamic list that can vary based on the logged-in user, where each user can have their own top 10 list tailored to their taste in genres, mood, and recommendations from others. Users can add, remove, update, or favorite movies in their list.


## Features
- **User Authentication**: Secure user sign-up, login, and authentication with session storage.
- **Movie List**: Dynamic movie list that changes based on user preferences and history.
- **CRUD Operations**: Users can add, update, or delete movies in their list.
- **Search & Filter**: Users can search for movies by genre, rating, and other preferences.
- **Personalized Recommendations**: Based on user input, recommendations will be shown to enhance the binge-watching experience.
- **Responsive Design**: Mobile-friendly and accessible UI using React.


## Technologies Used
- **Frontend**: React.js (Vite for faster development)
- **Backend**: Express.js
- **Database**: MongoDB (Mongoose schema for managing movie data and user preferences)
- **Authentication**: JWT or session storage for secure login
- **API**: Custom API built using Express for handling CRUD operations for movies.
- **Deployment**: Deployed both frontend (React app) and backend (API) using popular hosting services.
- **Testing**: API testing via Postman for ensuring all routes are functioning correctly.


## How It Works
1. **Sign up/Log in**: Users can create an account or log in to start creating their personalized movie list.
2. **Movie Management**: Once logged in, users can manage their list of binge-worthy movies:
   - **Add movies**: Users can add new movies to their list, including the title, description, and rating.
   - **Update movies**: Users can update the details of movies already on their list.
   - **Delete movies**: Users can remove movies from their list if they change their mind.
3. **Movie Recommendations**: Based on user preferences, the app will suggest movies they might like based on genres or ratings.
4. **CRUD via API**: The backend will expose API endpoints to interact with the movie database. Frontend React components will communicate with the backend API to perform CRUD operations.

