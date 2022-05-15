import React from 'react';

const InputGroups = () => {
    return (
        <>
            <div className="bg-neutral mt-[-50px] mx-8 lg:mx-36 mb-36 p-10 rounded-lg">
            <h1 className="text-4xl text-primary mb-8">Get Free Estimate</h1>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
                <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-lg" />
                <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-lg" />
                <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-lg" />
                <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-lg" />
                <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-lg" />
                <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-lg" />
                <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-lg" />
                <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-lg" />
            </div>
            <div  className="mt-8">
                <div className="btn btn-primary">REQUEST A QUOTE</div>
            </div>
            </div>
        </>
    );
};

export default InputGroups;