import  nodemailer from "nodemailer";
import ApiResponse from "./ApiResponse.utils";
import type { NextFunction } from "express";

const transport = nodemailer.createTransport({
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: process.env.MAILTRAP_USER,
      pass: process.env.MAILTRAP_PASS
    }
  });

export async function sendVerificationMail(email:string,username:string,link:string) {
    try{
    // send mail with defined transport object
        const info = await transport.sendMail({
        from: '"test 👻" <foo@example.com>', // sender address
        to: email, // list of receivers
        //   to: "goku05555@gmail.com, baz@example.com", // list of receivers
        subject: "Verification ✔", // Subject line
        text: `Hii ${username}`, // plain text body
        html: `<h1>Hello ${username}</h1><br/>
                    <h3>Click Here to <a href='${link}'>Verify</a> your e-mail</h3>
                    <p>If above link doesn't work! Please copy and paste this <b>${link}</b></p>`, // html body
        },function(err,info){
            if(err){
                console.log(err);

            }
            if(info){
                // console.log(info);
                // return info
                
            }
            
        });
    }catch(err){
        throw new Error("Failed to send verification mail!")
    }
}

export async function sendGreetingMail(email:string,username:string) {
    try{
    // send mail with defined transport object
        const info = await transport.sendMail({
        from: '"test 👻" <foo@example.com>', // sender address
        to: email, // list of receivers
        //   to: "goku05555@gmail.com, baz@example.com", // list of receivers
        subject: "Greetings ✔", // Subject line
        text: `Hii ${username}`, // plain text body
        html: `<h1>Welcome ${username}</h1><br/>
        <p>Welcome to MovieFlex ! We are thrilled to have you on board as a part of our cinematic community. Get ready for an exciting journey through the world of movies, where entertainment knows no bounds.

        Here at MovieFlex, we understand the magic of movies and the joy they bring into our lives. Whether you're a devoted film buff or just looking for a cozy movie night, we've got you covered with a vast collection of films spanning various genres, from timeless classics to the latest blockbusters.
        
        <b>Team MovieFlex</b> 
        </p>
        
        <h3>Lights Camera Action !!<h3>`, // html body
        },function(err,info){
            if(err){
                console.log(err);

            }
            if(info){
                // console.log(info);
                // return info
                
            }
            
        });
    }catch(err){
        throw new Error("Failed to send greeting mail!")
    }
}

export async function sendBookedMail(email:string,username:string,Amount:number,) {
    try{
    // send mail with defined transport object
        const info = await transport.sendMail({
        from: '"test 👻" <foo@example.com>', // sender address
        to: email, // list of receivers
        //   to: "goku05555@gmail.com, baz@example.com", // list of receivers
        subject: "Booking Confirmation ✔", // Subject line
        text: `Hii ${username}`, // plain text body
        html: `<h1>Welcome ${username}</h1><br/>
        <p>Dear [User's Name],

        We are thrilled to inform you that your booking has been successfully confirmed for [Event/Service Name]. Thank you for choosing MovieFlex for your movie needs.
        
        Here are the details of your booking:
        
        Event/Service Name: [Name of the Event/Service]
        Booking Reference Number: [Reference Number]
        Date and Time: [Date and Time of the Event/Service]
        Venue/Location: [Venue/Location Details]
        Number of Tickets/Participants: [Number of Tickets/Participants]
        Total Cost: [Total Cost of the Booking]
        Please review the information above to ensure that everything is accurate. If you have any questions or concerns, feel free to reach out to our customer support team at [Customer Support Email/Phone Number].
        
        Payment Details:
        
        Payment Method: [Credit Card/PayPal/etc.]
        Transaction ID: [Transaction ID]
        Amount Charged: [Amount]
        Your e-ticket(s) will be sent to you via email shortly. Please make sure to bring a copy of your e-ticket or provide the booking reference number at the event/service venue for smooth entry.
        
        We appreciate your trust and we look forward to delivering an exceptional experience for you. If you have any specific requests or special accommodations, please let us know in advance, and we will do our best to accommodate them.
        
        Thank you once again for choosing us. We can't wait to welcome you to [Event/Service Name]!
        
        
        <b>Best regards,
        MovieFlex</b> 
        </p>
        
        <h3>Lights Camera Action !!<h3>`, // html body
        },function(err,info){
            if(err){
                console.log(err);

            }
            if(info){
                // console.log(info);
                // return info
                
            }
            
        });
    }catch(err){
        throw new Error("Failed to send greeting mail!")
    }
}


//Example demo
    // send mail with defined transport object
    // const info = await transport.sendMail({
    //     from: '"Fred Foo 👻" <foo@example.com>', // sender address
    //     to: "bar@example.com, baz@example.com", // list of receivers
    //     subject: "Hello ✔", // Subject line
    //     text: "Hello world?", // plain text body
    //     html: "<b>Hello world?</b>", // html body
    //   });
