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
    const { getByPlaceholderText, getByText } = render(
      <MemoryRouter>
        <Form />
      </MemoryRouter>
    );
    const firstField = getByPlaceholderText("Dog");
    expect(firstField).toHaveValue('');

    const hersheySelection = getByText("Hershey");
    expect(hersheySelection).toHaveValue('Hershey');

  })

});