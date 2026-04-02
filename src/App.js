import { useState } from "react";

function App() {

  const [user, setUser] = useState(null);

  const data = {
    ikhsan: {
      nama: "Ikhsan Arlatin Sani",
      nim: "253140707111114",
      foto: "ikhsan.png",
      deskripsi: "Ikhsan lulusan SMK Muhammadiyah 09 Jakarta, tertarik di Web3 dan UI modern."
    },
    fachri: {
      nama: "Achmad Fachri Amrullah",
      nim: "253140707111104",
      foto: "facri.jpeg",
      deskripsi: "Fachri suka dunia teknologi dan web development modern."
    },
    fathiya: {
      nama: "Fathiyyah Balqis Ulya",
      nim: "253140707111095",
      foto: "fathiya.jpeg",
      deskripsi: "Fathiya fokus di UI/UX dan frontend design."
    }
  };

  return (
    <div className="bg-gradient-to-br from-green-50 to-gray-100 min-h-screen flex flex-col items-center justify-center p-6">

      {/* HEADER */}
      <div className="flex items-center gap-4 mb-8 w-full max-w-5xl">
        <div className="flex-1 h-[2px] bg-green-700"></div>
        <h1 className="px-6 py-2 border-2 border-green-700 rounded-full font-bold tracking-widest">
          PROFIL ANGGOTA
        </h1>
        <div className="flex-1 h-[2px] bg-green-700"></div>
      </div>

      {/* MENU */}
      {!user && (
        <div className="flex gap-4">
          <button onClick={() => setUser("ikhsan")} className="btn">Ikhsan</button>
          <button onClick={() => setUser("fachri")} className="btn">Fachri</button>
          <button onClick={() => setUser("fathiya")} className="btn">Fathiya</button>
        </div>
      )}

      {/* PROFILE CARD */}
      {user && (
        <div className="grid md:grid-cols-3 bg-white rounded-3xl shadow-2xl overflow-hidden max-w-5xl w-full">

          {/* LEFT */}
          <div className="bg-gradient-to-b from-green-100 to-green-200 p-6 flex flex-col items-center justify-center">

            <img 
              src={data[user].foto}
              alt="foto"
              className="w-36 h-36 rounded-full object-cover border-4 border-white shadow-lg mb-4 hover:scale-110 transition"
            />

            <h2 className="text-lg font-bold text-gray-800">
              {data[user].nama}
            </h2>

            <div className="flex gap-3 mt-4">
              <a href="https://instagram.com" target="_blank" className="bg-pink-500 text-white px-4 py-1 rounded-full">
                IG
              </a>
              <span className="bg-blue-500 text-white px-4 py-1 rounded-full">FB</span>
              <span className="bg-gray-800 text-white px-4 py-1 rounded-full">GH</span>
            </div>

          </div>

          {/* RIGHT */}
          <div className="col-span-2 p-8">

            <h2 className="text-2xl font-bold text-gray-800">
              {data[user].nama}
            </h2>

            <p className="text-gray-500 mb-4">
              NIM: {data[user].nim}
            </p>

            <div className="flex gap-2 mb-4">
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">Web Dev</span>
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">UI/UX</span>
              <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">Web3</span>
            </div>

            <p className="text-gray-600 leading-relaxed">
              {data[user].deskripsi}
            </p>

            <div className="grid grid-cols-3 gap-4 mt-6 text-center">
              <div className="bg-gray-100 p-4 rounded-xl">
                <h3 className="font-bold text-lg">10+</h3>
                <p className="text-sm text-gray-500">Project</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-xl">
                <h3 className="font-bold text-lg">2</h3>
                <p className="text-sm text-gray-500">Tahun</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-xl">
                <h3 className="font-bold text-lg">5</h3>
                <p className="text-sm text-gray-500">Skill</p>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <button onClick={() => setUser(null)} className="btn">
                ⬅ Kembali
              </button>

              <a href="https://instagram.com" target="_blank">
                <button className="px-6 py-2 bg-pink-500 text-white rounded-full">
                  Instagram
                </button>
              </a>
            </div>

          </div>

        </div>
      )}

    </div>
  );
}

export default App;