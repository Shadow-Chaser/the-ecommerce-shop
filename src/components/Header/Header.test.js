import React from 'react'
import { render } from '@testing-library/react'
import 'jest-dom/extend-expect'
import { Link } from 'react-router-dom'
import Header from './Header'


it("Checking the name", ()=>{
    const {queryByTitle}=render(<Link to="/"></Link>)
    const link = queryByTitle("dummyName")
    expect(link).toHaveTextContent("eCommerce")
})