# Solution: SQL Databases

## Lab Requirements

- Compose an Express Server
- Integrate the retrieval and storage of location data into the SQL Database

### Grading Standards & Notes

- Deployment
  - Live Heroku URL required for full points.
    - Partial credit available for obvious/reasonable effort even if deployment is non-working
  - Use the student supplied deployed URL to validate their code against the official City Explorer Application
- Features / Code Standards
  - Server must have 404 and 500 error handlers
  - Route definitions and handlers should be separated
  - Location data must come from SQL Cache when available
  - All non-location data must be retrieved from live API

#### Lab Assistance Notes

- Students will need to supply their API keys in a .env file locally and at Heroku, in the environment variables settings area.
- Connections to PG -- check the conn strings locally and for heroku
- Good opportunity to use `heroku logs`!!
