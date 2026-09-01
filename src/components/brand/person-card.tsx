import type { Person } from "@/lib/people";

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function PersonCard({ person }: { person: Person }) {
  return (
    <div className="flex flex-col items-start">
      <div
        className="flex h-16 w-16 items-center justify-center rounded-full bg-am-text/8 font-sans text-[14px] tracking-label text-am-text/60"
        aria-hidden="true"
      >
        {initials(person.name)}
      </div>
      <h3 className="mt-4 font-serif text-[18px] text-am-text">{person.name}</h3>
      <p className="mt-1 font-sans text-[11px] tracking-label uppercase text-am-accent">
        {person.role}
      </p>
      <p className="mt-2 max-w-[240px] font-serif text-[14px] leading-relaxed text-am-text/70">
        {person.bio}
      </p>
    </div>
  );
}
