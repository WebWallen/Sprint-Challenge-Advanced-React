import React from "react";
import * as rtl from '@testing-library/react';
import { render } from '@testing-library/react';
import PlayerCard from "./PlayerCard";

test('It renders without crashing', () => {
    render(<PlayerCard />);
})