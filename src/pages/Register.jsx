import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useAuthcontext from '../context/AuthContext';

const Register = () => {
  const [name, setNombre] = useState("");
  const [paterno, setPaterno] = useState("");
  const [materno, setMaterno] = useState("");
  const [email, setEmail] = useState("");
  const [password, setContraseña] = useState("");
  const [password_confirmation, setConfirmarContraseña] = useState("");
  const { register, errors} = useAuthcontext();


  const handleRegister = async (event) => {
    event.preventDefault();
    register( {name, email, password, password_confirmation})
  }

  return (
    <section className='bg-[#F4F7FF] py-20 lg:py-[120px]'>
      <div className='container mx-auto'>
        <div className='-mx-4 flex flex-wrap'>
          <div className='w-full px-4'>
            <div
              className='
                        relative
                        mx-auto
                        max-w-[525px]
                        overflow-hidden
                        rounded-lg
                        bg-white
                        py-16
                        px-10
                        text-center
                        sm:px-12
                        md:px-[60px]
                    '
            >
              <div className='mb-10 text-center md:mb-16'>Laraveller</div>
              <form onSubmit={handleRegister}>
                <div className='mb-4'>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder='Nombre'
                    className='
                                    border-[#E9EDF4]
                                    w-full
                                    rounded-md
                                    border
                                    bg-[#FCFDFE]
                                    py-3
                                    px-5
                                    text-base text-body-color
                                    placeholder-[#ACB6BE]
                                    outline-none
                                    focus:border-primary
                                    focus-visible:shadow-none
                                '
                  />
                                {errors.name && 
                                <div className='flex'>
                                    <span className='text-red-400 text-sm m-2 p-2'>
                                        {errors.name[0]}
                                    </span>
                                </div>}
                </div>

                <div className='mb-4'>
                  <input
                    type="text"
                    value={paterno}
                    onChange={(e) => setPaterno(e.target.value)}
                    placeholder='Apellido Paterno'
                    className='
                                    border-[#E9EDF4]
                                    w-full
                                    rounded-md
                                    border
                                    bg-[#FCFDFE]
                                    py-3
                                    px-5
                                    text-base text-body-color
                                    placeholder-[#ACB6BE]
                                    outline-none
                                    focus:border-primary
                                    focus-visible:shadow-none
                                '
                  />
                  <div className='flex'>
                    <span className='text-red-400 text-sm m-2 p-2'>Error</span>
                  </div>
                </div>

                <div className='mb-4'>
                  <input
                    type="text"
                    value={materno}
                    onChange={(e) => setMaterno(e.target.value)}
                    placeholder='Apellido Materno'
                    className='
                                    border-[#E9EDF4]
                                    w-full
                                    rounded-md
                                    border
                                    bg-[#FCFDFE]
                                    py-3
                                    px-5
                                    text-base text-body-color
                                    placeholder-[#ACB6BE]
                                    outline-none
                                    focus:border-primary
                                    focus-visible:shadow-none
                                '
                  />
                  <div className='flex'>
                    <span className='text-red-400 text-sm m-2 p-2'>Error</span>
                  </div>
                </div>

                <div className='mb-4'>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Email'
                    className='
                                    border-[#E9EDF4]
                                    w-full
                                    rounded-md
                                    border
                                    bg-[#FCFDFE]
                                    py-3
                                    px-5
                                    text-base text-body-color
                                    placeholder-[#ACB6BE]
                                    outline-none
                                    focus:border-primary
                                    focus-visible:shadow-none
                                '
                  />
                  {errors.email &&
                    <div className='flex'>
                      <span className='text-red-400 text-sm m-2 p-2'>
                        {errors.email[0]}
                      </span>
                    </div>}
                </div>

                <div className='mb-4'>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setContraseña(e.target.value)}
                    placeholder='Contraseña'
                    className="
                                    border-[#E9EDF4]
                                    w-full
                                    rounded-md
                                    border
                                    bg-[#FCFDFE]
                                    py-3
                                    px-5
                                    text-base text-body-color
                                    placeholder-[#ACB6BE]
                                    outline-none
                                    focus:border-primary
                                    focus-visible:shadow-none
                                "
                  />
                                {errors.password && 
                                <div className='flex'>
                                    <span className='text-red-400 text-sm m-2 p-2'>
                                        {errors.password[0]}
                                    </span>
                                </div>}
                </div>


                <div className='mb-4'>
                  <input
                    type="password"
                    value={password_confirmation}
                    onChange={(e) => setConfirmarContraseña(e.target.value)}
                    placeholder='Confirmar contraseña'
                    className="
                                    border-[#E9EDF4]
                                    w-full
                                    rounded-md
                                    border
                                    bg-[#FCFDFE]
                                    py-3
                                    px-5
                                    text-base text-body-color
                                    placeholder-[#ACB6BE]
                                    outline-none
                                    focus:border-primary
                                    focus-visible:shadow-none
                                "
                  />
                  <div className='flex'>
                    <span className='text-red-400 text-sm m-2 p-2'>Errorsirijillo</span>
                  </div>
                </div>

                <div className="mb-10">
                  <button
                    type="submit"
                    className='
                                    w-full
                                    px-4
                                    py-3
                                    bg-indigo-500
                                    hover:bg-indigo-700
                                    rounded-md
                                    text-white
                                '
                  >Registrar</button>
                </div>
              </form>
                <p className='text-base text-[#adadad]'>
                              ¿Ya tiene cuenta?  
                              <Link to="/login" className='text-primary hover:ubderline'>
                                  Iniciar Sesión
                              </Link>                      
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register