import React from 'react'
import Buscar from '../user-interface/Buscar'
import Navegacion from './Navegacion'
import Boton from '../user-interface/Boton'
import Link from 'next/link'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

const ContenedorHeader = styled.div`
    max-width:1200px;
    width: 95%;
    margin: 0 auto;
    @media(min-width:768px){
        display: flex;
        justify-content: space-between;
    }
`

const Logo = styled.p`
    color: var(--naranja);
    font-size:4rem;
    line-height: 0;
    font-weight: 700;
    font-family: "Robot Slab", serif;
    margin-right: 2rem;
    &:hover{
        cursor:pointer;
    }
`

const Header = () => {

    const user = false;

  return (
    <header
        css={css`
            border-bottom: 2px solid var(--gris3);
            padding: 1rem 0;
        `}
    >
        <ContenedorHeader>
            <div 
                css={css`
                    display:flex;
                    align-items: center;
                `}
            >
                <Link href="/">
                    <Logo>P</Logo>
                </Link>

                <Buscar/>

                <Navegacion/>
            </div>
            <div 
                css={css`
                    display:flex;
                    align-items:center;
                `}
            >
                { user ? (
                    <>
                        <p
                            css={css`
                                margin-right:2rem;
                            `}                
                        >Hola: Sergio</p>

                        <Boton
                            bgColor="true"
                        >
                            Cerrar Sesión
                        </Boton>
                    </>
                ): (
                    <>
                        <Link href="/login">
                            <Boton bgColor="true">Login</Boton>
                        </Link>

                        <Link href="/crear-cuenta">
                            <Boton bgColor="true">Crear Cuenta</Boton>
                        </Link>
                    </>
                )}

            </div>
        </ContenedorHeader>
    </header>
  )
}

export default Header