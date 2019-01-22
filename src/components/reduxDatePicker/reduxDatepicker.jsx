import React, { Component } from 'react'
import DateTimePicker from 'react-widgets/lib/DateTimePicker';

export const reduxDatepicker = ({ input: { onChange, value }, showTime, min, label, meta: { touched, error, warning } }) =>
    (<div className='mb-10'>
        <label>{label}</label>
        <DateTimePicker
        onChange={onChange}
        format="YYYY-MM-DDTHH:mm"
        time={showTime}
        value={!value ? null : new Date(value)}
        min={min}
    />
        {touched &&
            ((error && <span className="red-error">{error}</span>) ||
                (warning && <span>{warning}</span>))}
    </div>
    )
