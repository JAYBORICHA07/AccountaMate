import { NextRequest, NextResponse } from "next/server";
import supabase from "../../../../../dbConfig/dbConfig";



export async function POST(request : NextRequest){
    try {
            const { data , error} = await supabase.from("accountmate").select()
            console.log("data")
            console.log({data})

        return NextResponse.json({
            sucess : true,
            msg : 'Challenge created successfully'
        })

    } catch (error : any) {
        console.log("Error handeling request" + error.message)

    }
}