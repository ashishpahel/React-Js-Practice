import { useState, useCallback, useEffect, useRef } from "react";

function Password() {
    const [length, setLength] = useState(8);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const [password, setPassword] = useState("");
    const [copied, setCopied] = useState(false);

    // useRef hook
    const passwordRef = useRef(null);

    //  useCallback hook
    const passwordGenerator = useCallback(() => {
        let pass = [];
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        let numbers = "0123456789";
        let symbols = "!@#$%^&*()_+";

        // Ensure at least one number if allowed
        if (numberAllowed) {
            pass.push(numbers.charAt(Math.floor(Math.random() * numbers.length)));
            str += numbers;
        }

        // Ensure at least one symbol if allowed
        if (charAllowed) {
            pass.push(symbols.charAt(Math.floor(Math.random() * symbols.length)));
            str += symbols;
        }

        // Complete the rest of the password length with random characters
        while (pass.length < length) {
            let char = str.charAt(Math.floor(Math.random() * str.length));
            pass.push(char);
        }

        // Shuffle the password using => Fisher Yates Method

        for (let i = pass.length - 1; i > 0; i--) {
            //random J, find out using random function
            const j = Math.floor(Math.random() * (i + 1));
            //swap number at i index and j index
            const temp = pass[i];
            pass[i] = pass[j];
            pass[j] = temp;
        }

        // Set the password from the array
        setPassword(pass.join(""));
    }, [length, numberAllowed, charAllowed]);

    const copyPasswordToClipboard = useCallback(() => {
        const passwordToCopy = passwordRef.current?.value;
        if (passwordToCopy) {
            navigator.clipboard.writeText(passwordToCopy);
            setCopied(true);
            setTimeout(() => {
                setCopied(false);
            }, 2000);
        }
    }, [password]);

    useEffect(() => {
        passwordGenerator();
    }, [length, numberAllowed, charAllowed]);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-purple-800 to-purple-900 px-4">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
                <h1 className="text-3xl font-bold text-center text-purple-800 mb-6">
                    Password Generator
                </h1>

                <div className="relative mb-6">
                    <input
                        type="text"
                        value={password}
                        className="w-full bg-gray-200  rounded-md py-2 pl-3 pr-10 text-lg focus:outline-none focus:ring focus:border-purple-600"
                        readOnly
                        ref={passwordRef}
                    />
                    <button
                        onClick={copyPasswordToClipboard}
                        className={`absolute inset-y-0 right-0 px-3 py-1 rounded-md text-white font-semibold transition duration-300 ease-in-out ${copied
                                ? "bg-green-600 hover:bg-green-700"
                                : "bg-purple-600 hover:bg-purple-700"
                            }`}
                    >
                        {copied ? "Copied!" : "Copy"}
                    </button>
                </div>

                <div className="mb-6">
                    <label className="block mb-2 text-md text-purple-800">
                        Password Length: {length}
                    </label>
                    <input
                        type="range"
                        min={6}
                        max={20}
                        value={length}
                        onChange={(e) => setLength(e.target.value)}
                        className="w-full h-2 bg-purple-800 rounded-lg appearance-none cursor-pointer"
                    />
                </div>
                <div className="mb-6">
                    <label className="flex items-center gap-2 cursor-pointer text-md text-purple-800">
                        <input
                            type="checkbox"
                            checked={numberAllowed}
                            onChange={() => setNumberAllowed((prev) => !prev)}
                            className="form-checkbox h-5 w-5 text-purple-600 bg-purple-800 rounded border-purple-600 cursor-pointer"
                        />
                        <span>Include Numbers</span>
                    </label>
                </div>
                <div className="mb-6">
                    <label className="flex items-center gap-2 cursor-pointer text-md text-purple-800">
                        <input
                            type="checkbox"
                            checked={charAllowed}
                            onChange={() => setCharAllowed((prev) => !prev)}
                            className="form-checkbox h-5 w-5 text-purple-600 bg-purple-800 rounded border-purple-600 cursor-pointer"
                        />
                        <span>Include Symbols</span>
                    </label>
                </div>
                <button
                    onClick={passwordGenerator}
                    className="w-full py-2 bg-purple-600 hover:bg-purple-700 rounded-md text-white font-semibold transition duration-300 ease-in-out"
                >
                    Generate Password
                </button>
            </div>
        </div>
    );
}

export default Password;
