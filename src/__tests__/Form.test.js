import { React } from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router';

import Form from '../Form';

afterEach(cleanup);

describe("Form", () => {

  it("should render without crashing", () => {
    render(
      <MemoryRouter>
        <Form />
      </MemoryRouter>
    );
  });

  it("should sequentially display new form fields", () => {
    const { getByText, queryByText, getByDisplayValue } = render(
      <MemoryRouter>
        <Form />
      </MemoryRouter>
    );
    const firstField = getByDisplayValue("Dog");
    expect(firstField).toHaveValue('');

    expect(getByText("Hershey")).toHaveValue('Hershey');
    expect(queryByText(/CWAGS/i)).toBeNull();

    // Simulating the click doesn't change these, we need to
    // change it manually.
    fireEvent.change(firstField, {target: {value: 'Hershey'}});
    expect(firstField).toHaveValue('Hershey');

    expect(getByText("CWAGS")).toBeInTheDocument();
    expect(queryByText(/Scent/i)).toBeNull();

    const secondField = getByDisplayValue("Organization");
    fireEvent.change(secondField, {target: {value: 'CWAGS'}});
    expect(secondField).toHaveValue('CWAGS');

    expect(getByText('Scent')).toBeInTheDocument();

    
  })

});