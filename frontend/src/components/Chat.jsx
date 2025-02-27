import { useState } from "react";
import api from "../utils/api";

function Chat() {
  const [message, setMessage] = useState("");
  const [replies, setReplies] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    setLoading(true);
    try {
      const res = await api.post("/chat", { message });
      setReplies([...replies, { user: message, bot: res.data.reply }]);
      setMessage("");
    } catch (error) {
      alert("Failed to get response");
    }
    setLoading(false);
  };

  return (
    <div className="fixed bottom-4 right-4 w-80 bg-white rounded-xl shadow-lg p-4 border border-teal-100">
      <h3 className="text-lg font-semibold text-teal-800 mb-4">Chat Support</h3>
      <div className="h-64 overflow-y-auto space-y-4">
        {replies.map((chat, index) => (
          <div key={index}>
            <p className="text-sm text-gray-600">
              <strong>You:</strong> {chat.user}
            </p>
            <p className="text-sm text-teal-700">
              <strong>Bot:</strong> {chat.bot}
            </p>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="mt-4 flex space-x-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="flex-1 p-2 border border-teal-200 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
          placeholder="Ask a question..."
          disabled={loading}
        />
        <button
          type="submit"
          className="bg-coral-500 text-white px-4 py-2 rounded-full hover:bg-coral-600 transition-all duration-300"
          disabled={loading}
        >
          {loading ? "..." : "Send"}
        </button>
      </form>
    </div>
  );
}

export default Chat;
