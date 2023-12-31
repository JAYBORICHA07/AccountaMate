"use client"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardFooter,
    CardTitle
} from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import {DatePickerWithRange} from "@/components/ui/calenderRangePicker"

const addtask = () => {
    return (
        <div className="flex justify-center h-screen items-center">
            <Card className="w-[50%] h-[33%]">
                <CardHeader>
                    <CardTitle>Add your commitment here</CardTitle>
                    <CardDescription>Add the activity you wanna be cimmited to...</CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid w-full items-center gap-4">
                            <div>
                                <Label htmlFor="name">Enter activity name</Label>
                                <Input id="name" placeholder="Name of the activity" />
                            </div>
                            <div className="flex flex-col">
                                <Label htmlFor="activity_type"></Label>
                                {/* <Select>
                                    <SelectTrigger id="activity_type">
                                        <SelectValue placeholder="Select activity type" />
                                    </SelectTrigger>
                                    <SelectContent position="popper">
                                        <SelectItem value="study">Study</SelectItem>
                                        <SelectItem value="exercise">Exercise</SelectItem>
                                        <SelectItem value="walking">Walking</SelectItem>
                                        <SelectItem value="swimming">Swimming</SelectItem>
                                    </SelectContent>
                                </Select> */}
                                <DatePickerWithRange />
                            </div>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}

export default addtask;