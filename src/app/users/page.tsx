"use client"; // Ovim označavamo da je komponenta klijentska (koristi React hooks)

import { useEffect, useState } from "react";
import Link from "next/link";

<Link href="/create-user">Dodaj novog korisnika</Link>;

export default function Users() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch("/api/users"); // Poziv API-ja
      const data = await response.json();

      if (response.status === 200) {
        setUsers(data);
      } else {
        setError(data.error || "Greška pri dohvatanju korisnika");
      }
    }

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Lista korisnika</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {users.map((user: any) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
