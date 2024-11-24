const currentTime = new Date().toISOString();

const name = process.env.NAME || "NO_NAME";

console.log(`Hi ${name} 👋! The current time is: ${currentTime}`);
