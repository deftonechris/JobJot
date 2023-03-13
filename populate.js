import { readFile } from 'fs/promises';

import dotenv from 'dotenv';
dotenv.config();

import connectDB from './db/connection.js';
import Job from './models/Jobs.js';

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);

    const jsonProducts = JSON.parse(
      await readFile(new URL('./MOCK_DATA.json', import.meta.url))
    );
    await Job.create(jsonProducts);
    console.log('Success!!!');
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();