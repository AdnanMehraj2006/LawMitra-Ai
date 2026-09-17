const MEMORY_KEY = "lawmitra_memory";
const MAX_MESSAGES = 60;

export let memory = [];

function canUseStorage() {

  return typeof sessionStorage !== "undefined";
}

export function saveMessage(role, content) {

  memory.push({
    role,
    content: String(content),
    time: Date.now()
  });

  memory = memory.slice(-MAX_MESSAGES);

  if (!canUseStorage()) return;

  try {

    sessionStorage.setItem(
      MEMORY_KEY,
      JSON.stringify(memory)
    );
  } catch (error) {

    console.warn("Unable to save conversation memory", error);
  }
}

export function loadMemory() {

  if (!canUseStorage()) return;

  try {

    const data = sessionStorage.getItem(MEMORY_KEY);

    if (!data) return;

    const parsed = JSON.parse(data);

    if (Array.isArray(parsed)) {
      memory = parsed.slice(-MAX_MESSAGES);
    }
  } catch (error) {

    memory = [];

    console.warn("Unable to load conversation memory", error);
  }
}

export function clearMemory() {

  memory = [];

  if (!canUseStorage()) return;

  try {

    sessionStorage.removeItem(MEMORY_KEY);
  } catch (error) {

    console.warn("Unable to clear conversation memory", error);
  }
}

export function getRecentMessages(options = {}) {

  const {
    role,
    limit = 6
  } = options;

  const source = role
    ? memory.filter((message) => message.role === role)
    : memory;

  return source.slice(-limit);
}

loadMemory();
