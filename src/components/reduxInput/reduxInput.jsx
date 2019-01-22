import React, { Component } from 'react'

export const reduxInput = ({
    input,
    label,
    type,
    meta: { touched, error, warning }
}) => (
        <div className='mb-10'>
            <label>{label}</label>
            <div>
                <input {...input} placeholder={label} type={type} className='form-control' />
                {touched &&
                    ((error && <span className="red-error">{error}</span>) ||
                        (warning && <span>{warning}</span>))}
            </div>
        </div>
    )


export const reduxTextarea = ({
    input,
    label,
    type,
    meta: { touched, error, warning }
}) => (
        <div className='mb-10'>
            <label>{label}</label>
            <div>
                <textarea {...input} placeholder={label} className='form-control' />
                {touched &&
                    ((error && <span className="red-error">{error}</span>) ||
                        (warning && <span>{warning}</span>))}
            </div>
        </div>
    )