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

  

});