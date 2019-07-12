import React from 'react';

const InputGroup = ({
    labelContent,
    field,
    error,
    touched
}) => {
    return (
        <tr>
            <td><label htmlFor={field.name}>{labelContent}</label></td>
            <td style={{ position: "relative" }}>
                <input type="text" id={field.name} {...field} placeholder={labelContent} /> <br />
                {error && touched ? <div className="error" style={{ position: "absolute" }}>{error}</div> : null}
            </td>
        </tr>
    );
};

export default InputGroup;