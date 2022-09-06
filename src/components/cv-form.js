import React, { useState } from 'react';
import { Fieldset } from './forms/fieldsets';

const general = [
  {
    name: 'First Name',
    type: 'text',
    value: '',
  },
  {
    name: 'Last name',
    type: 'text',
    value: '',
  },
  {
    name: 'Email Address',
    type: 'email',
    value: '',
  },
  {
    name: 'Phone Number',
    type: 'tel',
    value: '',
  },
];

const education = [
  {
    name: 'School Name',
    type: 'text',
    value: '',
  },
  {
    name: 'Major',
    type: 'text',
    value: '',
  },
  {
    name: 'Graduation Year',
    type: 'text',
    value: '',
  },
];
const experience = [
  {
    name: 'Company Name',
    type: 'text',
    value: '',
  },
  { name: 'Job Title', type: 'text', value: '' },
  {
    name: 'Started',
    type: 'date',
    value: '',
  },
  {
    name: 'Finished',
    type: 'date',
    value: '',
  },
];

export const CvForm = () => {
  const [generalField, setGeneralField] = useState(general);
  const [educationField, setEducationField] = useState(education);
  const [experienceField, setExperienceField] = useState(experience);
  const [allFields, setAllFields] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setAllFields((prev) => [
      generalField,
      educationField,
      experienceField,
      ...prev,
    ]);
    // console.log(allFields);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Fieldset legendName="General Information" fieldObject={generalField} />
      <Fieldset legendName="Education" fieldObject={educationField} />
      <Fieldset legendName="Experience" fieldObject={experienceField} />
      <button type="submit" className="button submit">
        Submit
      </button>
    </form>
  );
};
