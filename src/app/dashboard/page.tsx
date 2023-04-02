"use client";

import { useSession, signOut } from "next-auth/react";
import React from "react";
import Image from "next/image";
export default function Dashboard() {
  const { data } = useSession();
  return (
    <>
      <h1>Olá, {data?.user?.name}</h1>
      <img src={data?.user?.image} alt="image user" />
      <button onClick={() => signOut()}>sair</button>
    </>
  );
}
