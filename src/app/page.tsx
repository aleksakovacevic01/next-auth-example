"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
export default function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Dobrodošli!</h1>
      <Link href="/auth/signin">
        <button
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            backgroundColor: "#333",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Login with GitHub
        </button>
      </Link>
    </div>
  );
}
