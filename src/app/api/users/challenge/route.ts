import { NextRequest, NextResponse } from "next/server";
import { Connect } from "../../../../../dbConfig/dbConfig";
import User from "../../../../../models/userModel";

Connect();

export async function POST(request : NextRequest){
    try {
        
        const reqBody = await request.json();
        console.log(reqBody);

        const {userName, userEmail, friendsEmail,friendsName,amount,goal,date} = reqBody;

        const newUser = new User({
            userName, 
            userEmail,
            friendsEmail,
            friendsName,
            amount,
            goal,
            date
        })
        console.log(newUser);

        const savedUser = newUser.save();
        console.log(savedUser);

        return NextResponse.json({
            data : savedUser,
            sucess : true,
            msg : 'Challenge created successfully'
        })

    } catch (error : any) {
        console.log("Error handeling request" + error.message)

    }
}