import React from "react";
import * as rtl from '@testing-library/react';
import { render } from '@testing-library/react';
import App from "../App";
import PlayerCard from "./PlayerCard";

test('It renders without crashing', () => {
    render(<App />);
})

test('Search volume successfully pulled from API', () => {
    const wrapper = render(<PlayerCard />);
    const hasSearchResults = wrapper.getByText(/searches/i)
    expect(hasSearchResults).toBeInTheDocument();
})