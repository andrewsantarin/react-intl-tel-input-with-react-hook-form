import React, { FunctionComponent, useState } from 'react';
import { Controller, useForm, EventFunction } from 'react-hook-form';
import IntlTelInput, { IntlTelInputProps, CountryData } from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';

// a simple "API" during submit
import { logValues } from './hook-form-example.services';
// to work around <Controller>'s onChange: (args: any[]) => any shape, where arg[0] is all of the event handler params.
import { spreadArgs } from './hook-form-example.utilities';


export const HookFormExample: FunctionComponent = (props) => {
  const [ countryData, setCountryData ] = useState<CountryData | undefined>();
  const { handleSubmit, control } = useForm();
  const name = 'tel';

  const handlePhoneNumberChange: IntlTelInputProps['onPhoneNumberChange'] = (isValid, value, selectedCountryData, fullNumber, extension) => {
    const nextValue = isValid
      ? fullNumber.replace(/\s|-/g, '')
      : value;
    return nextValue;
  };

  const handlePhoneNumberFocus: IntlTelInputProps['onPhoneNumberFocus'] = (isValid, value, seletedCountryData, fullNumber, extension, event) => {
    console.log(isValid, value, seletedCountryData, fullNumber, extension, event);
  };

  const handlePhoneNumberBlur: IntlTelInputProps['onPhoneNumberBlur'] = (isValid, value, seletedCountryData, fullNumber, extension, event) => {
    console.log(isValid, value, seletedCountryData, fullNumber, extension, event);
  };

  // This is just a typical HTML click event handler.
  const handleFlagClick: IntlTelInputProps['onFlagClick'] = (event) => {
    console.log(event);
  };

  // This is where you retrieve the country data.
  const handleSelectFlag: IntlTelInputProps['onSelectFlag'] = (currentNumber, seletedCountryData, fullNumber, isValid) => {
    setCountryData(seletedCountryData);
  };

  return (
    <form onSubmit={handleSubmit(logValues)}>
      <Controller
        as={IntlTelInput}
        control={control}
        fieldId={name}
        fieldName={name}
        format
        formatOnInit
        name={name}
        onChangeName="onPhoneNumberChange" // As required by the <Controller> API: https://react-hook-form.com/api#Controller
        onChange={spreadArgs(handlePhoneNumberChange) as EventFunction}
        onPhoneNumberFocus={handlePhoneNumberFocus}
        onPhoneNumberBlur={handlePhoneNumberBlur}
        onFlagClick={handleFlagClick}
        onSelectFlag={handleSelectFlag}
        telInputProps={{
          required: true
        }}
        // HACK:
        // Don't control `value` directly because it interferes with react-intl-tel-input's formatters.
        // Use `defaultValue` instead and send the actual value to react-hook-form for storage while leaving the input untouched.
        valueName="defaultValue"
      />
      <button type="submit">
        Log value
      </button>
      <h2>Value of <u><code>countryData</code></u>:</h2>
      <pre>
        {countryData && JSON.stringify(countryData, null, 2)}
        {!countryData && 'No countryData available.\nChoose a country or enter a phone number to infer countryData.'}
      </pre>
    </form>
  );
};
