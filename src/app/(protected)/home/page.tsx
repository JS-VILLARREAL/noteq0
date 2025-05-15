export default function Page() {
  return (
    <div className="p-8 w-full font-sans">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-primary mb-6">
          Bienvenido a tu Espacio Personal
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <span className="mr-2">📝</span> Tus Notas Recientes
            </h2>
            <div className="space-y-4">
              {[1, 2, 3].map((note) => (
                <div
                  key={note}
                  className="p-4 text-black bg-indigo-50 rounded-md hover:bg-indigo-100 transition"
                >
                  <h3 className="font-medium">Nota #{note}</h3>
                  <p className="text-sm text-gray-600">
                    Última actualización: hace {note} día(s)
                  </p>
                  <p className="mt-2 text-gray-700">
                    Esta es una vista previa de tu nota. Haz clic para ver más
                    detalles...
                  </p>
                </div>
              ))}
            </div>
            <button className="mt-4 text-indigo-600 hover:text-indigo-800 font-medium flex items-center">
              Ver todas las notas <span className="ml-1">→</span>
            </button>
          </section>

          <section className="hidden bg-white p-6 rounded-lg shadow-md text-gray-800">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <span className="mr-2">🚀</span> Estado del Proyecto
            </h2>
            <div className="mb-4">
              <h3 className="font-medium">Progreso General</h3>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div
                  className="bg-indigo-600 h-2.5 rounded-full"
                  style={{ width: "65%" }}
                ></div>
              </div>
              <p className="text-right text-sm text-gray-600">65% completado</p>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span>Diseño de UI</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                  Completado
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span>Desarrollo Backend</span>
                <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">
                  En progreso
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span>Pruebas</span>
                <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">
                  Pendiente
                </span>
              </div>
            </div>

            <button className="mt-6 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">
              Ver detalles del proyecto
            </button>
          </section>
        </div>

        <section className="hidden mt-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Actividad Reciente
          </h2>
          <div className="space-y-4">
            {[
              { action: "Creaste una nueva nota", time: "Hace 2 horas" },
              { action: "Actualizaste el estado del proyecto", time: "Ayer" },
              {
                action: "Completaste una tarea pendiente",
                time: "Hace 2 días",
              },
            ].map((activity, index) => (
              <div
                key={index}
                className="flex items-start border-b border-gray-100 pb-3"
              >
                <div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mr-3">
                  {index + 1}
                </div>
                <div>
                  <p className="text-gray-800">{activity.action}</p>
                  <p className="text-sm text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
