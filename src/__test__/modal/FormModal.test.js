import React from "react";
import { render, screen } from "@testing-library/react";

import FormModal from '../../components/modal/FormModal'


describe("Modal component mount", () => {
    it('must render a modal', () => {
        render(<FormModal />)
        expect(screen.getByTestId('modal')).toBeInTheDocument();
    })
})

