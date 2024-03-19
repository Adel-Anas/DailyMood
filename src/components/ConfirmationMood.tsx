import React from 'react'

const ConfirmationMood = ({ mood }: { mood: string }) => {
    return (
        <div>
            <h1 className="text-4xl font-semibold capitalize text-white">You picked {mood}</h1>
        </div>
    )
}

export default ConfirmationMood
