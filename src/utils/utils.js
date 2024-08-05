


export const parseData = (input, output) => {
    if (!input && !output) {
        return {
            parsedInput: null,
            parsedOutput: null,
            error: "Inputs and Outputs data can't be empty"
        };
    }

    try {
        return {
            parsedInput: JSON.parse(input),
            parsedOutput: JSON.parse(output),
            error: null
        };
    } catch (error) {
        return {
            parsedInput: null,
            parsedOutput: null,
            error: 'Invalid JSON format'
        };
    }
};
