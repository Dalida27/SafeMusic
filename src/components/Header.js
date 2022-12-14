import React, { useEffect, useState } from 'react'
import './Header.css'
import { auth } from "../utils/firebase"
import { onAuthStateChanged, signOut } from "firebase/auth";
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux"
import { REMOVE_ACTIVE_USER, SET_ACTIVE_USER } from '../redux/slice/authSlice';
import ShowOnLogin, { ShowOnLogout } from './hiddenLink/hiddenLink';
import AdminOnlyRoute, { AdminOnlyLink } from './adminOnlyRoute/AdminOnlyRoute';

const Header = () => {
  const navigate = useNavigate()
  const [displayName, setDisplayName] = useState("")

  const dispatch = useDispatch()

  const cart = (
    <span className="cart">
      <Link to="/cart">
        <i class="fas fa-shopping-cart"></i>
      </Link>
    </span>
  )

  //Monitor user
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // const uid = user.uid;
        // console.log(user.displayName);
        if (user.displayName == null) {
          const u1 = user.email.slice(0, -10);
          const uName = u1.charAt(0).toUpperCase() + u1.slice(1)
          setDisplayName(uName)
        } else {
          setDisplayName(user.displayName)
        }

        dispatch(SET_ACTIVE_USER({
          email: user.email,
          userName: user.displayName ? user.displayName : displayName,
          userID: user.uid,
        }))

      } else {
        setDisplayName("");
        dispatch(REMOVE_ACTIVE_USER())
      }
    });
  }, []);

  const logoutUser = () => {
    signOut(auth).then(() => {
      toast.success("Вы вышли с аккаунта...")
      navigate("/")
    }).catch((error) => {
      toast.error(error.message)
    });
  }

  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <nav className="nav bg-[#fff] text-[#a98467] py-10">
      <div className='flex items-center w-1/4'>
        <img className="lg:w-1/4 lg:block hidden" src={require('../assets/logo.webp')} alt="Logo" />
        <a href="/" className='text-3xl text-[#a98467] font-semibold text-yellow-400'>SafeMusic</a>
      </div>
      <div className='flex'>
        <ul className={active}>
          <li className="nav__item">
            <AdminOnlyLink>
              <Link to="/admin/home">
                <button className=' text-[#a98467]'> Admin </button>
              </Link>
            </AdminOnlyLink>
          </li>
          <li className="nav__item">
            <a href="/products" className="nav__link">
              Онлайн магазин
            </a>
          </li>
          <li className="nav__item">
            <a href="/about" className="nav__link">
              О нас
            </a>
          </li>
          <li className="nav__item">
            <a href="/contact" className="nav__link">
              Связаться с нами
            </a>
          </li>
        </ul>
      </div>
      <div>
        <div className='flex items-center '>
          <ul className='flex items-center'>
            <a href="/cart" className='mr-5 text-[#a98467]'>{cart}</a>
            <li className="nav__item">
              <ShowOnLogout>
                <a className='text-lg  text-[#a98467] border-b w-4/5 border-[#a98467] font-semibold nav-item' href='/login'>Вход</a>
              </ShowOnLogout>
            </li>
            <li className="nav__item">
              <ShowOnLogin>
                <p className='lg:mr-5 mr-2 text-[#a98467] font-semibold w-1/2'>Hi,{displayName}</p>
              </ShowOnLogin>
            </li>
            <li className="nav__item">
              <ShowOnLogin>
                <a onClick={logoutUser} className='text-lg  text-[#a98467] border-b w-4/5 mr-3 border-[#a98467] font-semibold' href='/'>Выйти</a>
              </ShowOnLogin>
            </li>
          </ul>
        </div>
      </div>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  );
}
export default Header
