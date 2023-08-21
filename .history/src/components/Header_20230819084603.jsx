// Define el componente Header que recibe dos props: changeShowModal y resetModalForm
const Header = ({ changeShowModal, resetModalForm }) => {
  // Función que se ejecuta cuando se hace clic en el botón
  const handleClick = () => {
    // Llama a la función changeShowModal y pasa la función resetModalForm como argumento
    // Esto parece un error, es probable que desees pasar solo changeShowModal
    changeShowModal(resetModalForm);
  };

  // Renderiza el componente Header
  return (
    <header
      className="p-4 flex flex-wrap justify-between items-center"
      style={{
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      {/* Título del encabezado */}
      <h1 className="text-2xl font-bold">Lista de Participantes</h1>
      
      {/* Botón para abrir el modal */}
      <button onClick={handleClick} className="bg-[#555A88] text-white p-2">
        <i className="bx bx-plus"></i> Inscribir Nuevo Participante
      </button>
    </header>
  );
};

// Exporta el componente Header
export default Header;
