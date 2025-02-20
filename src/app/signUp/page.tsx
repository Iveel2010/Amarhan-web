"use client";
import * as React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { jwtDecode } from "jwt-decode";
import { format, set } from "date-fns";
import { CalendarIcon, Phone } from "lucide-react";
import Footer from "@/components/Footer"
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"
 
import { Checkbox } from "@/components/ui/checkbox"
import { Value } from "@radix-ui/react-select";

const page = () => {
  const router = useRouter();
  const [value, setValue] = useState("")
  const [value2, setValue2] = useState("")
  const [one,setOne] = useState<boolean>(false)
  const [two,setTwo] = useState<boolean>(false)
  const [three,setThree] = useState<boolean>(false)
  const [four, setFour]=useState<boolean>(false)
  const [isZipTrue , setIsZipTrue] = useState<boolean>(false)
  const [blinkToken , setBlinkToken] = useState<string>("")
  const [isCheck , setIsCheck] = useState<boolean>(false)
  const [isCodeTrue , setIsCodeTrue] = useState<boolean>(true)
const value22 = ({value2}:{value2: string}) => {
  if(value2.length === 6){
  setFour(true)
  }
  if(value2.length < 6){
    setFour(false)
    }
  setValue2(value2)
}
const isOnClick = async() => { 
if(value.length < 8){
setOne(true)
} 
if(value.length === 8){
  setOne(false)
  if(isCheck === true){
     setTwo(true)
     const newBro = {phoneNumber: value}
     const jsonData = await fetch(
    `https://amarhan-server.onrender.com/signup`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBro),
    }
  );
  const res = await jsonData.json()
  setBlinkToken(res)
  console.log(res)
}
  }
}
const isOnClick2 = async() => { 
if(value2.length < 6){
  setThree(true)
}
if(value2.length === 6){
  const decoded: { zipCode: string } = jwtDecode(blinkToken|| "");
  const zipCode = decoded.zipCode;
  if(zipCode === value2) {
    setThree(false) 
     const newBro = {phoneNumber: value}
     const jsonData = await fetch(
    `https://amarhan-server.onrender.com/signup`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBro),
    }
  );
  const res = await jsonData.json()
  localStorage.setItem("token",blinkToken)
  setIsZipTrue(true)
  }
  if(zipCode !== value2){
    setThree(true)
  }
}
}
  return (

<div>
  <div> 
  <header
        className="bg-white shadow-md fixed w-full top-0 z-50"
      >
        <div className="container mx-auto px-5 py-3 flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-800">User Gallery</h1>
        </div>
      </header>
  </div>
{
  two === true ?   <div className="h-screen flex items-center justify-center flex-col">
  <div>
  <CardHeader>
        <CardTitle className="text-gray-800 text-[50px]">Нэвтрэх</CardTitle>
        <CardDescription>Таны утас руу мессеж илгээгдлээ.</CardDescription>
      </CardHeader>
      <CardContent >  
        <div className="text-gray-800">Код оруулна уу</div>
      <div className="space-y-2 flex items-center gap-2">
        <InputOTP
          maxLength={6}
          value={value2}
          onChange={(value2) => value22({value2} )}
        >
          <InputOTPGroup className="mb-2">
            <InputOTPSlot className="h-12 text-[20px] w-12" index={0} />
            <InputOTPSlot className="h-12 text-[20px] w-12" index={1} />
            <InputOTPSlot className="h-12 text-[20px] w-12" index={2} />
            <InputOTPSlot className="h-12 text-[20px] w-12" index={3} />
            <InputOTPSlot className="h-12 text-[20px] w-12" index={4} />
            <InputOTPSlot className="h-12 text-[20px] w-12" index={5} />
          </InputOTPGroup>
        </InputOTP>
      </div>
      <div>{three == true ? "Koд хоосон байна эсвэл буруу байна": null}</div>
      </CardContent>
        <CardFooter className="flex justify-between">
          <Button className={ four === true? "w-full py-1 bg-red-500 hover:bg-red-400" : "w-full py-1 bg-gray-500 hover:bg-gray-500"} onClick={() => isOnClick2()}>Нэвтрэх</Button>
        </CardFooter>
  </div>
    </div>:  
  <div className="h-screen flex items-center justify-center flex-col">
  <div>
  <CardHeader>
        <CardTitle className="text-gray-800 text-[50px]">Нэвтрэх</CardTitle>
        <CardDescription>Хамгийн амархан Amarhan.mn-д тавтай морил.</CardDescription>
      </CardHeader>
      <CardContent >  
        <div className="text-gray-800">Таны утасны дугаар</div>
      <div className="space-y-2 flex items-center gap-2">
      <Select >
        <SelectTrigger className="w-[180px] h-12">
          <SelectValue placeholder="Mongolia +976" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Country</SelectLabel>
            <SelectItem value="Mongolia">Mongolia +976</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
        <InputOTP
          maxLength={8}
          value={value}
          onChange={(value) => setValue(value)}
        >
          <InputOTPGroup className="mb-2">
            <InputOTPSlot className="h-12 text-[20px] w-12" index={0} />
            <InputOTPSlot className="h-12 text-[20px] w-12" index={1} />
            <InputOTPSlot className="h-12 text-[20px] w-12" index={2} />
            <InputOTPSlot className="h-12 text-[20px] w-12" index={3} />
            <InputOTPSlot className="h-12 text-[20px] w-12" index={4} />
            <InputOTPSlot className="h-12 text-[20px] w-12" index={5} />
            <InputOTPSlot className="h-12 text-[20px] w-12" index={6} />
            <InputOTPSlot className="h-12 text-[20px] w-12" index={7} />
          </InputOTPGroup>
        </InputOTP>
      </div>
      <div>{one == true ? "Дугаар хоосон байна эсвэл ашиглалтанд байхгүй дугаар": null}</div>
      <div className="items-top flex space-x-2 pt-5">
        <Checkbox id="terms1" onCheckedChange={isCheck === true? () => setIsCheck(false): () => setIsCheck(true)}/>
        <div className="grid gap-1.5 leading-none">
          <label
            htmlFor="terms1"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-800"
          >
         Би Amarhan.mn сайтын үйлчилгээний нөхцөл
          </label>
          <p className="text-sm text-muted-foreground">
         зар нийтлэх журмыг хүлээн зөвшөөрч, мөн өөрийгөө 18 нас хүрсэн болохыг баталж байна.
          </p>
        </div>
      </div>
      </CardContent>
        <CardFooter className="flex justify-between">
          <Button className={isCheck === true? "w-full py-1 bg-red-500 hover:bg-red-400" : "w-full py-1 bg-gray-500 hover:bg-gray-500"} onClick={() => isOnClick()}>Koд илгээх</Button>
        </CardFooter>
  </div>
    </div>
}
  <div>
  </div>
</div>

)

};

export default page;
