"use client";

import { useState } from "react";
import { person, services } from "@/lib/content";

export default function ContactActions() {
  const [name, setName] = useState("");
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");

  const subject = topic ? `Enquiry: ${topic}` : "Enquiry via website";
  const body = [
    "Dear Mr. Sharma,",
    topic && `I would like to discuss: ${topic}.`,
    message.trim(),
    name.trim() && `Regards,\n${name.trim()}`,
  ]
    .filter(Boolean)
    .join("\n\n");
  const mail = `mailto:${person.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  const wa = `https://wa.me/${person.whatsapp}?text=${encodeURIComponent(
    [
      name.trim() ? `Hello, this is ${name.trim()}.` : "Hello,",
      topic ? `I would like to discuss: ${topic}.` : "I found your website and would like to get in touch.",
      message.trim(),
    ].join(" "),
  )}`;

  return (
    <div className="contact-box">
      <div className="fields">
        <label>
          <span className="label">Your name</span>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
        </label>
        <label>
          <span className="label">What do you need?</span>
          <select value={topic} onChange={(e) => setTopic(e.target.value)}>
            <option value="">Choose a service (optional)</option>
            {services.map((s) => (
              <option key={s.n} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Something else">Something else</option>
          </select>
        </label>
        <label>
          <span className="label">Brief (optional)</span>
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
