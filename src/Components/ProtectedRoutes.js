import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  // Aquí va la condición. Puede ser una condición de cualquier tipo. Lo que
  // Importa es que valide si el usuario está loggeado o no
  const userName = useSelector((state) => state.userName);

  //userName !== "" --> opcion para la condicion del if, hacer esto es decirle que si username es diferente a un string vacio puede cumplir la condicion y si esto no se cumple no dejara acceder a las rutas protegidas

  if (userName) {
    return <Outlet />;
  } else {
    return <Navigate to="/" />;
  } // Aquí le debemos decir la ruta a la que queremos llevar
}; // al usuario si no está autenticado

export default ProtectedRoutes;