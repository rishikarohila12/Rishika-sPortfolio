import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "ai", text: "Hi 👋 I’m Rishika’s AI assistant. Ask me anything!" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);

  // 🔥 Auto scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async () => {
  if (!input.trim()) return;

  const userMessage = { role: "user", text: input };
  setMessages(prev => [...prev, userMessage]);
  setInput("");
  setLoading(true);

  try {
    const res = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/api/chat`,
      { message: input }
    );

    setMessages(prev => [
      ...prev,
      { role: "ai", text: res.data.reply }
    ]);
  } catch (error) {
    console.error(error);
    setMessages(prev => [
      ...prev,
      { role: "ai", text: "Something went wrong. Please try again." }
    ]);
  } finally {
    setLoading(false);
  }
};

  return (
    <>
      {/* Chat Bubble */}
      <motion.button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 left-6 bg-gradient-to-r from-teal-500 to-indigo-500 text-white rounded-full w-14 h-14 shadow-lg text-2xl z-50"
        whileHover={{ scale: 1.1 }}
      >
        💬
      </motion.button>

      {/* Chat Window */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-24 left-6 w-80 h-[450px] bg-slate-900 border border-slate-700 rounded-xl shadow-xl z-50 flex flex-col"
        >
          {/* Header */}
         <div className="p-3 border-b border-slate-700 flex justify-between items-center">
  <span className="font-semibold text-teal-400">
    Ask Me Anything
  </span>

  {/* ❌ Close Button */}
  <button
    onClick={() => setOpen(false)}
    className="text-gray-400 hover:text-red-400 transition text-lg font-bold"
    aria-label="Close chat"
  >
    ✕
  </button>
</div>


          {/* Messages */}
          <div className="flex-1 p-3 space-y-2 overflow-y-auto text-sm scroll-smooth">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg max-w-[85%] ${
                  msg.role === "user"
                    ? "bg-indigo-500 text-white ml-auto"
                    : "bg-slate-800 text-gray-200"
                }`}
              >
                {msg.text}
              </div>
            ))}
            {loading && (
              <div className="text-gray-400 text-xs">AI is typing...</div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-2 border-t border-slate-700 flex gap-2">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 bg-slate-800 text-white px-3 py-2 rounded-lg outline-none text-sm"
              onKeyDown={e => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="bg-teal-500 px-4 rounded-lg text-white"
            >
              Send
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default ChatBot;
