import { config } from "dotenv";

config();

export const PAYPAL_API_CLIENT = process.env.PAYPAL_API_CLIENT ; //

export const PAYPAL_API_SECRET = process.env.PAYPAL_API_SECRET ; //

export const PAYPAL_API = process.env.PAYPAL_API ;

export const PORT = 3000 ; //Nose si se tenga que cambiar el puerto dependiendo de como indique el lugar donde se hoste

export const HOST = process.env.HOST ; //Creo que se tendría que cambiar por el link de railway o heroku

