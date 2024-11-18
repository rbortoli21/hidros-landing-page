import { useState, FormEvent } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Pricing } from "./components/Pricing";
import { Reviews } from "./components/Reviews";

interface RequestBody {
  toMail: string;
  content: string;
}

function App() {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!email || !message || !name) {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    const body: RequestBody = {
      toMail: email,
      content: message,
    };

    try {
      const response = await fetch(
        "https://southamerica-east1-speedy-cedar-440722-s4.cloudfunctions.net/function-sendmail",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImQ5NzQwYTcwYjA5NzJkY2NmNzVmYTg4YmM1MjliZDE2YTMwNTczYmQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNjE4MTA0NzA4MDU0LTlyOXMxYzRhbGczNmVybGl1Y2hvOXQ1Mm4zMm42ZGdxLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTE0MzY5MTYzOTQwNDU4NDg5NjAxIiwiaGQiOiJtaW5oYS5mYWcuZWR1LmJyIiwiZW1haWwiOiJyYm9ydG9saTJAbWluaGEuZmFnLmVkdS5iciIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoiWklCOUxRbzVlT1MzeG1NRHMtdTBuUSIsIm5iZiI6MTczMTk0OTkzNSwiaWF0IjoxNzMxOTUwMjM1LCJleHAiOjE3MzE5NTM4MzUsImp0aSI6IjA0NDljNjFkMTVmZjlkODE4ZDg5NzNlN2EyNzRhZDNhYjQ4M2U0ZjUifQ.G1S4d3C-lJXKwoa-B4p1vexSvqGU8PPQG1M7qjvQPA9xLo2H9MTrSXfYPqKQ2o4FSqdvWW5mO-yxgxn0yDsuEp5BmHXwY6iTbnGt3sjvEXOyiCeEXNKd_CtU8UwlVrIvWzj4b7lDnIRBuor-2mwZNaS9mM8i9z9n-MJK3ZfHtnb0wD5sgdHql99zGhuKXMvZ4kOLYWGu1v1e-WQGrCSFXxYoJSG8SGrBd_dcSgE2sDcbwfqHjHWfbtw5Nn4neT8XMdxDPlau3FZWqBLxd-81VITLopZrVke-8pHubv2rwLKSmFJropjBD7hPxaPFFYtf2NXd_U1ZUv2FxZysiYt_-w",
          },
          body: JSON.stringify(body),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert("E-mail enviado com sucesso!");
      } else {
        alert(
          `Erro ao enviar e-mail: ${
            data.error || "Tente novamente mais tarde."
          }`
        );
      }
    } catch (error) {
      console.error(error);
      alert("Erro de rede. Tente novamente mais tarde.");
    }
  };

  return (
    <main className="relative flex flex-col justify-center mx-auto bg-white gap-6 overflow-clip">
      <div className="absolute top-80 lg:top-40 left-3 lg:left-10 w-48 h-44 bg-teal-200 flex justify-center items-center drop-shadow rounded-lg"></div>
      <div className="absolute top-[55vh] left-[75vw] w-80 h-60 bg-teal-200 flex justify-center items-center drop-shadow rounded-lg"></div>
      <div className="absolute top-[105vh] left-10 w-96 h-60 bg-teal-200 flex justify-center items-center drop-shadow rounded-lg"></div>
      <div className="absolute top-[120vh] lg:top-[140vh] left-[78vw] w-96 h-64 bg-teal-200 flex justify-center items-center drop-shadow rounded-lg"></div>

      <div className="z-10 flex-col justify-center max-w-[1280px] mx-auto">
        <Header />
        <Hero />
      </div>

      <div className="flex flex-col gap-8 mx-auto z-10">
        <Reviews />
        <Pricing />

        <section id="contato" className="bg-gray-50 py-16 px-4 rounded-xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-teal-900 mb-4">
              Junte-se a nós
            </h2>
            <p className="text-gray-600 mb-6">
              Cadastre seu email para receber novidades sobre descontos e novos
              produtos !!
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4"
            >
              <input
                type="text"
                placeholder="Digite seu nome"
                className="flex-grow px-4 py-2 rounded-md border-2 border-teal-500 focus:outline-none focus:border-teal-500 text-teal-800 placeholder-teal-400"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Digite seu email"
                className="flex-grow px-4 py-2 rounded-md border-2 border-teal-500 focus:outline-none focus:border-teal-500 text-teal-800 placeholder-teal-400"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                placeholder="Digite sua mensagem"
                className="flex-grow px-4 py-2 rounded-md border-2 border-teal-500 focus:outline-none focus:border-teal-500 text-teal-800 placeholder-teal-400"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button
                type="submit"
                className="px-6 py-2 bg-teal-600 text-white font-semibold rounded-md hover:bg-teal-700 transition duration-300 ease-in-out"
              >
                Inscrever-se
              </button>
            </form>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}

export default App;
