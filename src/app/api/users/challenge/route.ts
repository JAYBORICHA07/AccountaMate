import { NextRequest, NextResponse } from "next/server";
import supabase from "../../../../../dbConfig/dbConfig";



export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const { userName, userEmail, friendsEmail, friendsName, amount, goal } = reqBody
        const { data, error } = await supabase
            .from("accountmate")
            .insert([{
                user_name: userName,
                user_email: userEmail,
                friend_name: friendsName,
                friend_email: friendsEmail,
                goal: goal,
                amount: amount
            }])
            .select()
        if (error) console.log(error);
        console.log(data);
        return NextResponse.json({
            sucess: true,
            msg: 'Challenge created successfully'
        })

    } catch (error: any) {
        console.log("Error handeling request" + error.message)

    }
}