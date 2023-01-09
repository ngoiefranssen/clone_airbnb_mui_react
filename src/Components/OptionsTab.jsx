import React from 'react'

const OptionsTab = () => {
    const [value, setValue] = React.useState(0)
    const handleChange = (event, newEvent) => {
        setValue(newEvent);
    }
    return (
        <div>OptionsTab</div>
    )
}

export default OptionsTab