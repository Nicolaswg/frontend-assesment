import React from "react"
import { render, screen } from "@testing-library/react"
import App from "../../App"


describe('Main App amount', () => {
    it('must render title tag', () => {
        render(<App />)
        expect(screen.getByTestId('title')).toBeInTheDocument()
        expect(screen.getByTestId('searchbar')).toBeInTheDocument()
    })
})