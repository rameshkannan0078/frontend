import PrCircularProgressIndicator from "@/components/common/Loader/PrCircularProgressIndicator";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Cookies from 'js-cookie';

export default function Home() {
    const router=useRouter();

    useEffect(() => {
        const token = Cookies.get('x-access-token');
        if (!token) {
            router.push('/signin')
        }
        else{
          router.push('/dashboard')
        }
    }, []);

  return (
    <PrCircularProgressIndicator></PrCircularProgressIndicator>
  )
}