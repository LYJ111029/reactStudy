import { useState, useCallback } from 'react';

function useInputs(initialForm) {
    // initialForm 초기값
    const [form, setForm] = useState(initialForm);

    const onChange = useCallback(
        (e) => {
            const { name, value } = e.target;
            setForm({ ...form, [name]: value });
        },
        [form]
    );
    const reset = useCallback(() => setForm(initialForm), [initialForm]);
    return [form, onChange, reset];
}

export default useInputs;
