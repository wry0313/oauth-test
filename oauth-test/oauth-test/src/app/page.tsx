"use client";

import { getGoogleUrl } from "@/utils/getGoogleUrl";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {

    const fetchUser = async () => {
      // console.log(document.cookie)
      const res = await fetch("http://localhost:8080/users/me", {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
    };
    fetchUser();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href={getGoogleUrl("/")}>log in with google</Link>
    </main>
  );
}
