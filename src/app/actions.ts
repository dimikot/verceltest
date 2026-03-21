"use server";

export async function getGreeting() {
  const values = [3.14, 6.28, 9.42, 12.56];
  const message = ["numbers:"];
  for (let i = 0; i < values.length; i++) {
    message.push(String(values[i].toFixed(1)));
  }
  return message.join(" ");
}
