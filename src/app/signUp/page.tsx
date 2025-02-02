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
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import Footer from "@/components/Footer"
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
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

  return (
<div >
  <div>
    
  </div>
  <div className="h-screen flex items-center justify-center">
  <Card className="m-3">
    <CardHeader>
      <CardTitle>Таны утасы дугаар</CardTitle>
      <CardDescription>Хамгийн амархан Amarhan.mn-д тавтай морил.</CardDescription>
    </CardHeader>
    <CardContent >  
    <div className="space-y-2">
      <InputOTP
        maxLength={8}
        value={value}
        onChange={(value) => setValue(value)}
      >
        <InputOTPGroup>
          <InputOTPSlot className="h-14 text-[20px]" index={0} />
          <InputOTPSlot className="h-14 text-[20px]" index={1} />
          <InputOTPSlot className="h-14 text-[20px]" index={2} />
          <InputOTPSlot className="h-14 text-[20px]" index={3} />
          <InputOTPSlot className="h-14 text-[20px]" index={4} />
          <InputOTPSlot className="h-14 text-[20px]" index={5} />
          <InputOTPSlot className="h-14 text-[20px]" index={6} />
          <InputOTPSlot className="h-14 text-[20px]" index={7} />
        </InputOTPGroup>
      </InputOTP>

    </div>
    <div className="items-top flex space-x-2 pt-5">
      <Checkbox id="terms1" />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor="terms1"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
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
        <Button className="w-full py-1">Deploy</Button>
      </CardFooter>
    </Card>
  </div>
  <div>
    <Footer/>
  </div>
</div>
)

};
export default page;
