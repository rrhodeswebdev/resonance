import { prisma } from "@/lib/db";

export default async function TestPage() {
  const voices = await prisma.voice.findMany();

  return (
    <div className="p-8">
      <h1>Voices - ({voices.length})</h1>
      <ul className="list-none p-0 m-0">
        {voices.map((voice) => (
          <li key={voice.id}>
            {voice.name} - {voice.variant}
          </li>
        ))}
      </ul>
    </div>
  );
}
