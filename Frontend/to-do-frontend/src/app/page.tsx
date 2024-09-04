import "boxicons/css/boxicons.min.css";
import StatusButton from "./components/StatusButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-100 to-pink-100 py-8">
      <div className="container mx-auto p-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-center text-purple-800">
          Mis Notas
        </h1>
        <div className="flex justify-between gap-4 mb-8">
          <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg">
            <i className="bx bx-plus-circle"></i>
            Agregar
          </button>
          <button className="flex items-center gap-2 font-bold px-4 py-2 rounded-lg bg-white">
            <i className="bx bx-filter-alt"></i>
            Filtrar
          </button>
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-purple-600 text-white">
              <tr>
                <th className="py-3 px-4 text-left">Title</th>
                <th className="py-3 px-4 text-left">Description</th>
                <th className="py-3 px-4 text-left">Created at</th>
                <th className="py-3 px-4 text-left">Updated at</th>
                <th className="py-3 px-4 text-left">Actions</th>
                <th className="py-3 px-4 text-left">Completed</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="py-3 px-4">Nombre</td>
                <td className="py-3 px-4">Descripción</td>
                <td className="py-3 px-4">Fecha</td>
                <td className="py-3 px-4">Fecha</td>
                <td className="py-3 px-4">
                  <div className="flex justify-evenly gap-2">
                    <button className="text-blue-600 hover:text-blue-800">
                      <i className="bx bx-edit text-2xl"></i>
                    </button>
                    <button className="text-red-600 hover:text-red-800">
                      <i className="bx bxs-trash text-2xl"></i>
                    </button>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <StatusButton />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
