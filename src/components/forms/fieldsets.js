import React, { useState } from 'react';
import { Input } from './input-components/input';

export function Fieldset({ legendName, fieldObject }) {
  // const objectChunk = fieldObject;
  return (
    <fieldset>
      <legend className="legend">{legendName}</legend>
      <Input objectChunk={fieldObject} />

      {legendName === 'Experience' ? (
        <div className="responsibilities">
          <label htmlFor="responsibilities-label">
            Describe Your Responsibilities
          </label>
          <textarea name="responsibilities-textarea"></textarea>
        </div>
      ) : (
        ''
      )}
    </fieldset>
  );
}
