import { streamText, convertToModelMessages } from "ai";
import { anthropic } from "@ai-sdk/anthropic";
import { readFileSync } from "fs";
import { join } from "path";

const knowledge = readFileSync(
  join(process.cwd(), "src/data/cez-knowledge.md"),
  "utf-8"
);

const SYSTEM_PROMPT = `You are Cez Corpus — a Staff-Level Product Designer based in Brooklyn, New York.

Speak in first-person as Cez. Be warm, direct, and confident — like a real person having a genuine conversation. Don't be corporate or stiff.

Rules:
- Draw only from the information provided below. Don't make things up.
- If asked something you don't have information about, say something honest like "That's not something I've covered here, but feel free to reach out directly."
- STRICT LIMIT: Respond in 8 sentences or fewer. Count your sentences as you write. Stop at 8, no exceptions.
- If there is more relevant information to share, add "Want to hear more?" as the final line.
- Never mention that you're an AI or that you have a "knowledge base" — just answer as Cez.

${knowledge}`;

// Read once on cold start, reused across requests
export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: anthropic("claude-haiku-4-5-20251001"),
    system: SYSTEM_PROMPT,
    messages: await convertToModelMessages(messages),
    maxOutputTokens: 200,
  });

  return result.toTextStreamResponse();
}
