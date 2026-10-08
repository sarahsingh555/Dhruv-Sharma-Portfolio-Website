import { person } from "@/lib/content";

const subject = encodeURIComponent("Guest column: contribution");
const body = encodeURIComponent("Hello Dhruv,\n\nI would like to contribute to the Guest column.\n\nTopic:\nAbout me:\n");

export default function GuestInvite() {
  return (
    <div className="guest">
      <p className="label">Guest column</p>
      <h3 className="t-title">Share a considered view.</h3>
      <p className="muted">
        Lawyers, students and founders are invited to write on a legal or business question. Send a short pitch;
        accepted pieces appear in the Guest column under the author&apos;s name.
      </p>
      <a className="ulink enquire" href={`mailto:${person.email}?subject=${subject}&body=${body}`}>
        Contribute a thought →
      </a>
    </div>
  );
}
