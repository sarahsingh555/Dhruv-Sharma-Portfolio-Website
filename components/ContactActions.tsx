"use client";

import { useState } from "react";
import { person } from "@/lib/content";

export default function ContactActions() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const intro = name.trim() ? `Dear Mr. Sharma,\n\n${message}\n\nRegards,\n${name.trim()}` : message;
  const mail = `mailto:${person.email}?subject=${encodeURIComponent("Enquiry via website")}&body=${encodeURIComponent(intro)}`;
  const wa = `https://wa.me/${person.whatsapp}?text=${encodeURIComponent(
    [name.trim() && `Hello, this is ${name.trim()}.`, message.trim() || "I found your website and would like to get in touch."]
      .filter(Boolean)
      .join(" "),
  )}`;

  return (
    <div className="contact-box">
      <div className="fields">
        <label>
          <span className="label">Your name</span>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
        </label>
        <label>
          <span className="label">Message (optional)</span>
          <textarea rows={4} value={message} onChange={(e) => setMessage(e.target.value)} />
        </label>
      </div>
      <div className="cta-row">
        <a className="btn btn-solid" href={mail}>
          Write by email
        </a>
        <a className="btn" href={wa} target="_blank" rel="noopener noreferrer">
          Message on WhatsApp
        </a>
      </div>
      <p className="hint">Either option opens your own email or WhatsApp with this message ready to send.</p>
    </div>
  );
}
