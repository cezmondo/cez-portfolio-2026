"use client";

import { useChat } from "@ai-sdk/react";
import { TextStreamChatTransport } from "ai";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

/* ------------------------------------------------------------------ */
/*  Types                                                               */
/* ------------------------------------------------------------------ */

type ChatState = "closed" | "welcome" | "chat";

/* ------------------------------------------------------------------ */
/*  Topic cards shown on the welcome screen                            */
/* ------------------------------------------------------------------ */

const TOPIC_CARDS = [
  {
    label: "Talk\nwith me",
    prompt: "Tell me about yourself — who is Cez?",
    color: "bg-[#0d3f4a]",
    accent: "text-[#04b477]",
  },
  {
    label: "Design\nphilosophy",
    prompt: "What's your design philosophy and approach?",
    color: "bg-[#1a1200]",
    accent: "text-[#ffc453]",
  },
  {
    label: "Career\nhistory",
    prompt: "Walk me through your career journey.",
    color: "bg-[#0d0022]",
    accent: "text-[#c084fc]",
  },
  {
    label: "Side\nprojects",
    prompt: "Tell me about your side projects, like Kidventure Hub.",
    color: "bg-[#1a0000]",
    accent: "text-[#c70039]",
  },
];

/* ------------------------------------------------------------------ */
/*  Quick prompt chips                                                  */
/* ------------------------------------------------------------------ */

const QUICK_PROMPTS = [
  { emoji: "🎵", label: "Music taste", prompt: "What music are you into?" },
  { emoji: "🛠", label: "Favorite tools", prompt: "What are your favorite design tools?" },
  { emoji: "✈️", label: "How I work", prompt: "How do you like to work and collaborate?" },
  { emoji: "💡", label: "Design process", prompt: "Walk me through your design process." },
  { emoji: "📍", label: "Brooklyn life", prompt: "What's it like living in Brooklyn?" },
  { emoji: "🤖", label: "AI + design", prompt: "How do you use AI in your design work?" },
];

/* ------------------------------------------------------------------ */
/*  Arrow icon                                                          */
/* ------------------------------------------------------------------ */

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 8 8" fill="none" className={className}>
      <path
        d="M1 7L7 1M7 1H2M7 1V6"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Typing indicator                                                    */
/* ------------------------------------------------------------------ */

function TypingDots() {
  return (
    <div className="flex items-center gap-1 px-4 py-3">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="h-1.5 w-1.5 rounded-full bg-foreground-muted"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
        />
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Helper: extract text from message parts                            */
/* ------------------------------------------------------------------ */

function getMessageText(parts: Array<{ type: string; text?: string }>): string {
  return parts
    .filter((p) => p.type === "text")
    .map((p) => p.text ?? "")
    .join("");
}

/* ------------------------------------------------------------------ */
/*  Main ChatWidget                                                     */
/* ------------------------------------------------------------------ */

export default function ChatWidget() {
  const [chatState, setChatState] = useState<ChatState>("closed");
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const transport = useMemo(() => new TextStreamChatTransport({ api: "/api/chat" }), []);

  const { messages, sendMessage, status } = useChat({ transport });

  const isLoading = status === "streaming" || status === "submitted";

  // Scroll to bottom when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Send a message and transition to chat view
  function send(text: string) {
    if (!text.trim()) return;
    setChatState("chat");
    sendMessage({ text });
    setInput("");
  }

  return (
    <>
      {/* ── Floating Button ── */}
      <AnimatePresence>
        {chatState === "closed" && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 28 }}
            className="fixed bottom-6 right-6 z-50 overflow-hidden rounded-full p-[1.5px] shadow-xl"
          >
            {/* Spinning gradient border */}
            <motion.div
              className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[600%]"
              style={{
                x: "-50%",
                y: "-50%",
                background:
                  "conic-gradient(from 0deg, transparent 50%, #ffc453 65%, #ffc45380 72%, transparent 82%)",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 28 }}
              onClick={() => setChatState("welcome")}
              className="relative flex items-center gap-3 rounded-full bg-background px-7 py-4 font-(family-name:--font-body) text-base font-medium text-foreground backdrop-blur-sm transition-colors hover:text-accent-yellow"
              aria-label="Open AI chat"
            >
              <span className="text-accent-yellow">✦</span>
              Ask Cez anything
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Chat Overlay ── */}
      <AnimatePresence>
        {chatState !== "closed" && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-background/60 backdrop-blur-sm"
              onClick={() => setChatState("closed")}
            />

            {/* Panel */}
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.97 }}
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
              className="fixed bottom-6 right-6 z-50 flex w-[min(440px,calc(100vw-3rem))] flex-col overflow-hidden rounded-2xl border border-foreground/10 bg-[#111110] shadow-2xl"
              style={{ maxHeight: "calc(100dvh - 3rem)" }}
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-foreground/10 px-5 py-4">
                <div className="flex items-center gap-2.5">
                  {chatState === "chat" && (
                    <button
                      onClick={() => setChatState("welcome")}
                      className="text-foreground-muted transition-colors hover:text-foreground"
                      aria-label="Back to topics"
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path
                          d="M10 3L5 8L10 13"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  )}
                  <span className="font-(family-name:--font-body) text-body-sm font-medium text-foreground">
                    Ask Cez anything
                  </span>
                </div>
                <button
                  onClick={() => setChatState("closed")}
                  className="text-foreground-muted transition-colors hover:text-foreground"
                  aria-label="Close chat"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M3 3L13 13M13 3L3 13"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>

              {/* ── Screen content ── */}
              <AnimatePresence mode="wait">

                {/* Welcome Screen */}
                {chatState === "welcome" && (
                  <motion.div
                    key="welcome"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="flex flex-col overflow-hidden"
                  >
                    {/* Heading */}
                    <div className="px-5 pb-4 pt-5">
                      <h2 className="font-(family-name:--font-body) text-[28px] font-medium leading-none tracking-tight text-foreground">
                        What do you want to know?
                      </h2>
                    </div>

                    {/* Topic cards */}
                    <div className="flex gap-3 overflow-x-auto px-5 pb-1 [scrollbar-width:none] [-webkit-overflow-scrolling:touch]">
                      {TOPIC_CARDS.map((card) => (
                        <button
                          key={card.label}
                          onClick={() => send(card.prompt)}
                          className={`group relative flex w-[160px] shrink-0 flex-col justify-between rounded-xl p-4 text-left transition-opacity hover:opacity-90 ${card.color}`}
                          style={{ aspectRatio: "1 / 1.05" }}
                        >
                          <ArrowIcon className="text-foreground/30 transition-colors group-hover:text-foreground/60" />
                          <span
                            className={`font-(family-name:--font-display) text-[20px] font-medium uppercase leading-tight tracking-tight ${card.accent} whitespace-pre-line`}
                          >
                            {card.label}
                          </span>
                        </button>
                      ))}
                    </div>

                    {/* Quick prompt chips */}
                    <div className="px-5 pb-1 pt-5">
                      <p className="mb-3 font-(family-name:--font-body) text-[10px] font-medium uppercase tracking-widest text-foreground-muted">
                        Quick questions
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {QUICK_PROMPTS.map((chip) => (
                          <button
                            key={chip.label}
                            onClick={() => send(chip.prompt)}
                            className="flex items-center gap-1.5 rounded-full border border-foreground/15 px-3 py-1.5 font-(family-name:--font-body) text-[12px] font-medium text-foreground-muted transition-colors hover:border-foreground/30 hover:text-foreground"
                          >
                            <span>{chip.emoji}</span>
                            {chip.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Input */}
                    <div className="p-4 pt-4">
                      <div className="flex items-center gap-2 rounded-xl border border-foreground/15 bg-foreground/5 px-4 py-3 focus-within:border-foreground/30">
                        <span className="text-foreground-muted">→</span>
                        <input
                          value={input}
                          onChange={(e) => setInput(e.target.value)}
                          onKeyDown={(e) => e.key === "Enter" && send(input)}
                          placeholder="Ask Cez's portfolio anything..."
                          className="min-w-0 flex-1 bg-transparent font-(family-name:--font-body) text-body-sm text-foreground placeholder:text-foreground-muted/60 focus:outline-none"
                          autoComplete="off"
                        />
                        {input.trim() && (
                          <button
                            onClick={() => send(input)}
                            className="shrink-0 rounded-lg bg-accent-yellow px-2.5 py-1 font-(family-name:--font-body) text-[11px] font-medium uppercase tracking-wide text-background"
                          >
                            Send
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Footer */}
                    <p className="pb-4 text-center font-(family-name:--font-body) text-[11px] text-foreground-muted/50">
                      Powered by Claude · Trained on Cez&apos;s portfolio data
                    </p>
                  </motion.div>
                )}

                {/* Chat Screen */}
                {chatState === "chat" && (
                  <motion.div
                    key="chat"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="flex flex-1 flex-col overflow-hidden"
                    style={{ minHeight: 0 }}
                  >
                    {/* Messages */}
                    <div
                      className="flex-1 overflow-y-auto px-4 py-4 [scrollbar-width:thin]"
                      style={{ minHeight: 0, maxHeight: "380px" }}
                    >
                      <div className="flex flex-col gap-3">
                        {messages.map((m) => {
                          const text = getMessageText(
                            m.parts as Array<{ type: string; text?: string }>
                          );
                          if (!text) return null;
                          return (
                            <div
                              key={m.id}
                              className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                            >
                              <div
                                className={`max-w-[85%] rounded-2xl px-4 py-2.5 font-(family-name:--font-body) text-body-sm leading-relaxed ${
                                  m.role === "user"
                                    ? "rounded-br-sm bg-accent-yellow text-background"
                                    : "rounded-bl-sm bg-foreground/8 text-foreground"
                                }`}
                              >
                                {text}
                              </div>
                            </div>
                          );
                        })}

                        {isLoading && (
                          <div className="flex justify-start">
                            <div className="rounded-2xl rounded-bl-sm bg-foreground/8">
                              <TypingDots />
                            </div>
                          </div>
                        )}
                        <div ref={messagesEndRef} />
                      </div>
                    </div>

                    {/* Input */}
                    <div className="border-t border-foreground/10 p-4">
                      <div className="flex items-center gap-2 rounded-xl border border-foreground/15 bg-foreground/5 px-4 py-3 focus-within:border-foreground/30">
                        <span className="text-foreground-muted">→</span>
                        <input
                          value={input}
                          onChange={(e) => setInput(e.target.value)}
                          onKeyDown={(e) => e.key === "Enter" && send(input)}
                          placeholder="Ask a follow-up..."
                          className="min-w-0 flex-1 bg-transparent font-(family-name:--font-body) text-body-sm text-foreground placeholder:text-foreground-muted/60 focus:outline-none"
                          autoComplete="off"
                          autoFocus
                        />
                        <button
                          onClick={() => send(input)}
                          disabled={!input.trim() || isLoading}
                          className="shrink-0 rounded-lg bg-accent-yellow px-2.5 py-1 font-(family-name:--font-body) text-[11px] font-medium uppercase tracking-wide text-background disabled:opacity-30"
                        >
                          Send
                        </button>
                      </div>
                    </div>

                    {/* Footer */}
                    <p className="pb-3 text-center font-(family-name:--font-body) text-[11px] text-foreground-muted/50">
                      Powered by Claude · Trained on Cez&apos;s portfolio data
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
