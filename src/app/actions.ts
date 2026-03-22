"use server";

export async function getGreeting() {
  const values = [3.14, 6.28, 9.42, 12.56];
  const message = ["numbers:"];
  for (const value of values) {
    message.push(String(value.toFixed(1)));
  }
  return message.join(" ");
}
