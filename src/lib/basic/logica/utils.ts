export async function getRandomNumber() {
  // buscar 10 usuarios
  // (com um atraso, para que possamos ver)
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  if (res.ok) {
    return await res.json() as Promise<{
      id: number; name: string; username: string; email: string; address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
          lat: string;
          lng: string
        }
    }}[]>;
  } else {
    // Às vezes a API falha!
    throw new Error("Request failed");
  }
}