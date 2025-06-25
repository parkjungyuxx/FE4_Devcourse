"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RegigsterClient() {
  const router = useRouter();
  useEffect(() => {
    // router.push("/");
  }, [router]);
  return (
    <>
      <h1>RegigsterClient</h1>
      <button onClick={() => router.push("/")}>홈으로</button>
    </>
  );
}
