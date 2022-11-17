import { useContext } from 'react';
import AppContext from '../context/contextProvider';
import Form from './Form'
import Complete from "./Complete";

import { useState, useEffect } from 'react'

export default function Main() {
    const { sent } = useContext(AppContext)
    return (
        <main className='main'>
            {
                sent
                    ? <Complete />
                    : <Form />
            }
        </main>
    )
}