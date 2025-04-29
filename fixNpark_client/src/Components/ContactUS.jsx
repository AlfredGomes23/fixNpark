import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const ContactUsSection = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        console.log(data);

        try {
            await fetch("http://localhost:5000/contact", {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then(r => r.json())
                .then(d => {
                    console.log(d);
                    if (d.insertedId) { //check inserted
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Your Parking Listed Successfully.",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                });
        } catch (err) {
            console.log(err);
            Swal.fire({
                position: "center",
                icon: "error",
                title: err,
                showConfirmButton: false,
                timer: 1000
            });
        }
    };
    

    return (
        <section className="py-16 bg-blue-50">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Contact Us</h2>
                <p className="text-lg text-gray-600 mb-8">
                    Have questions? We're here to help. Reach out to us today.
                </p>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md"
                >
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            {...register("email", { required: "Email is required" })}
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            placeholder="Your Email"
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            {...register("message", { required: "Message is required" })}
                            className="w-full p-3 border border-gray-300 rounded-lg"
                            rows="4"
                            placeholder="Your Message"
                        />
                        {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactUsSection;
