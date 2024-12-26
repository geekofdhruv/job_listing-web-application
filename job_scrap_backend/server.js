import express from 'express';
import bodyParser from 'body-parser';
import pg from 'pg';
import dotenv from 'dotenv';
import cors from 'cors'

dotenv.config();

const app = express();
const port = 3000;
app.use(cors());

// Use express built-in JSON body parser
app.use(express.json()); // For parsing application/json

// PostgreSQL database client setup
const db = new pg.Client({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});

db.connect()
  .then(() => console.log('Connected to PostgreSQL'))
  .catch((err) => console.error('Failed to connect to PostgreSQL', err));

  app.post('/jobs', async (req, res) => {

    console.log('Received data:', req.body);
    
    for (let i = 0; i < req.body.length; i++) {
    const job_title = req.body[i].job_title
    const company_name = req.body[i].company_name
    const location = req.body[i].location
    const duration_of_work = req.body[i].duration_of_work
  
    
    console.log("ok1");
    
    try {
        console.log("trying inserting data")
      const jobInsert = await db.query(
        'INSERT INTO jobs (job_title, company_name, location, duration_of_work) VALUES ($1, $2, $3, $4)',
        [job_title, company_name, location, duration_of_work]
      );
      console.log('Data inserted:', { job_title, company_name, location, duration_of_work });
      
    } catch (err) {
      console.error('Error inserting job data:', err);
      
    }
  }});

  app.get('/jobs', async (req, res) => {
    try {
      const result = await db.query('SELECT * FROM jobs');
      res.status(200).json(result.rows);
    } catch (err) {
      console.error('Error fetching job data:', err);
      res.status(500).send('Error fetching data');
    }
  });
  
  

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
