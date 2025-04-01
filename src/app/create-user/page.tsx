"use client";

import { useState } from "react"; // Importujemo useState iz React-a
import Link from "next/link";

<Link href="/users">Pogledaj sve korisnike</Link>;

export default function CreateUser() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    });

    const data = await response.json();

    if (response.status === 200) {
      setSuccess("Korisnik je uspešno dodat!");
      setName("");
      setEmail("");
    } else {
      setError(data.error || "Greška prilikom dodavanja korisnika");
    }
  };

  return (
    <div>
      <h1>Dodaj novog korisnika</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Ime:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Dodaj korisnika</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
    </div>
  );
}
