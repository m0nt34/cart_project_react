
import cors from 'cors';
import express from 'express';

const configureApp = (app) => {
  app.use(
    cors({
      origin: 'http://localhost:5173',
      credentials: false,
    })
  );
  app.use(express.json()); 
};

export default configureApp;