import {useSelector} from "react-redux"
import { Link } from "react-router-dom";
import { selectEmail } from '../../redux/slice/authSlice'

const AdminOnlyRoute = ({children}) => {
  const userEmail = useSelector(selectEmail);
  
  if(userEmail === "assandalida@gmail.com"){
    return children;
  }
  return (
    <section className="h-3/4">
      <div className="container mb-10">
          <p className="text-center text-2xl text-[#141010]">Permission Denied</p>
          <p className="font-semibold text-[#141010]">Эта страничка может быть открыта только Админом.</p>
          <br/>
          <Link to="/">
           <button className="text-[#141010]">&larr;Обратно на Главную</button>
          </Link>
      </div>
    </section>
  );
}

export const AdminOnlyLink = ({children}) => {
  const userEmail = useSelector(selectEmail);
  
  if(userEmail === "assandalida@gmail.com"){
    return children;
  }
  return null;
}

export default AdminOnlyRoute