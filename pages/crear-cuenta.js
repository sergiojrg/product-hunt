import React, { useState } from 'react'
import Router from 'next/router'
import { css } from '@emotion/react'
import Layout from '../components/layout/Layout'
import { Formulario, Campo, InputSubmit, Error } from '../components/user-interface/Formulario'
import validarCrearCuenta from '../validacion/validarCrearCuenta'

//Firebase
import firebase from '../firebase'

// Validaciones
import useValidacion from '../hooks/useValidacion'

const STATE_INICIAL = {
  nombre:'',
  email:'',
  password:''
}

const CrearCuenta = () => {

  const [ error, guardarError ] = useState('')

  const {valores,
    errores,
    submitForm,
    handleChange,
    handleBlur,
    handleSubmit} = useValidacion(STATE_INICIAL,validarCrearCuenta, crearCuenta)

    const { nombre, email, password } = valores

  async function crearCuenta() {
    try {
      await firebase.registrar(nombre,email,password);
      Router.push('/')
    }catch (error) {
      guardarError('Ya existe una cuenta con ese correo')
    }
  }

  return (
    <Layout>
        <>
            <h1
              css={css`
                text-align:center;
                margin-top:5rem;
              `}
            >
              Crear Cuenta
            </h1>
            <Formulario
              onSubmit={handleSubmit}
              noValidate
            >

              { errores.nombre && <Error>{errores.nombre}</Error>}
              <Campo>
                <label htmlFor="nombre">Nombre</label>
                <input
                  type="text"
                  id="nombre"
                  placeholder="Tu nombre"
                  name="nombre"
                  value={nombre}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Campo>

              { errores.email && <Error>{errores.email}</Error>}
              <Campo>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Tu email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Campo>

              { errores.password && <Error>{errores.password}</Error>}
              <Campo>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Tu password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Campo>

              { error && <Error>{error}</Error>}

              <InputSubmit
                type="submit"
                value="Crear Cuenta"
              />
            </Formulario>
        </>
    </Layout>
  )
}

export default CrearCuenta