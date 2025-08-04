# Local Event Finder Backend

This is the backend server for the Local Event Finder app.

- Built with Node.js, Express, and MongoDB.
- Provides API endpoints to create, read, update, and delete local events.
- Connects with MongoDB Atlas for database.

## Setup

1. Clone the repo  
2. Run `npm install`  
3. Create a `.env` file with your MongoDB URI as `MONGO_URI`  
4. Start the server: `node server.js`

## API Endpoints

- `GET /api/events` — List all events  
- `POST /api/events` — Add a new event  
- `PUT /api/events/:id` — Update an event  
- `DELETE /api/events/:id` — Delete an event

---

Feel free to contribute or report issues!
