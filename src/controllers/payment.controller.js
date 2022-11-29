import axios from "axios";

import { PAYPAL_API, PAYPAL_API_CLIENT, PAYPAL_API_SECRET, HOST } from "../config";



export const createOrder = async (req, res) => {

    try {
        const order = {
            intent: "CAPTURE",
            purchase_units: [
                {
                    amount:{
                        currency_code:"MXN",
                        value: '350'
                    },
                    description: "GESTICK SERVICE"
                },
            ],
            application_context: {
                brand_name: "GESTICK@business.gestick.com",
                landing_page: "LOGIN", //Si no se esta logeado pedira logearse
                user_action: "PAY_NOW",
                return_url: `${HOST}/capture-order`,
                cancel_url: `${HOST}/cancel-order`, 
            },
        };
    
        const response = await axios.post(`${PAYPAL_API}/v2/checkout/orders`, order,{
            auth:{
                username: PAYPAL_API_CLIENT,
                password: PAYPAL_API_SECRET,
            },
        }); 
    
        console.log(response.data); //Este solo sirve para ver que funciona
    
        res.json(response.data);
    } catch (error) {
        return res.status(500).send("Something went wrong");
        
    }
};

export const captureOrder = async (req, res) => {

    console.log("a")

    console.log(req)

    try {
        const {token} = req.query
        console.log(token);
        
        const response = await axios.post(`${PAYPAL_API}/v2/checkout/orders/${token}/capture`, {}, {
            auth: {
                username: PAYPAL_API_CLIENT,
                password: PAYPAL_API_SECRET,
            }
        });
        
        console.log(response.data);//Este solo sirve para ver que funciona 
        
        return res.redirect('https://gestick.up.railway.app/logAdmin');
        
    } catch (error) {

        return res.status(500).send("Something went wrong");
        
    }


};

export const cancelOrder = (req, res) => {
    res.redirect('https://facebook.com');//Cambair el link dependiendo a donde tenga que redirigirte  dentro del front
};