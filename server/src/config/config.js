import cors from "cors";
import express from "express";

const configureApp = (app) => {
  app.use(
    cors({
      origin: [
        "http://localhost:5173",
        "https://cart-project-mern.netlify.app",
      ],
      credentials: false,
    })
  );
  app.use(express.json());
};

export default configureApp;
