import { NextRequest, NextResponse } from "next/server";
import { Connect } from "../../../../../dbConfig/dbConfig";
import User from "../../../../../models/userModel";

Connect();

export async function POST(request : NextRequest){
    try {
        
        const reqBody = await request.json();
        console.log(reqBody);


        const {userName, userEmail, friendsEmail,friendsName,amount,goal,date} = reqBody;

        console.log("hi")
        const addedUser = new User({
            userName, 
            userEmail,
            friendsEmail,
            friendsName,
            amount,
            goal,
            date
        })
        console.log(addedUser);

        const savedUser = addedUser.save();
        console.log(savedUser);

        return NextResponse.json({
            // data : savedUser,
            sucess : true,
            msg : 'Challenge created successfully'
        })

    } catch (error : any) {
        console.log("Error handeling request" + error.message)

    }
}