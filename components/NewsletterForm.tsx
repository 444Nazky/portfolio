"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!email.trim()) return;
        setSent(true);
        setEmail("");
      }}
      className="mt-4"
    >
      <div className="flex overflow-hidden rounded-full border border-line bg-black/40 p-1 transition-colors focus-within:border-neon/50">
        <input
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="your@email.com"
          aria-label="Email address"
          className="w-full bg-transparent px-4 text-sm text-white placeholder:text-muted focus:outline-none"
        />
        <button
          type="submit"
          className="shrink-0 rounded-full bg-neon px-5 py-2.5 text-sm font-bold text-black transition-all hover:shadow-[0_0_20px_rgba(198,255,0,0.4)]"
        >
          Join
        </button>
      </div>
      {sent && (
        <p className="mt-2 text-xs font-medium text-neon">
          Signed up — welcome to the inside.
        </p>
      )}
    </form>
  );
}