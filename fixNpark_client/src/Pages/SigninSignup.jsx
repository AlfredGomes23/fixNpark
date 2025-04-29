import { useForm } from "react-hook-form"
import { AuthContext } from "../Providers/AuthProvider";
import { useContext, useState } from "react";
import Swal from 'sweetalert2'
import { BiLoaderCircle } from "react-icons/bi";
import { useLocation, useNavigate } from "react-router-dom";

const SigninSignup = () => {
    const { user, createUser, signinUser } = useContext(AuthContext);
    const [err, setErr] = useState("");
    const [doing, setDoing] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    // signin
    const { register: signin, handleSubmit: handleSigninSubmit, watch: watchIn, formState: { errors: signinErr } } = useForm();

    const onSignin = async data => {
        setDoing(true);
        // console.log(data);

        try {
            await signinUser(data.email, data.password);
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Signin Successful",
                showConfirmButton: false,
                timer: 2000
            });
            // navigate where user was going
            navigate(location?.state ? location.state : '/');
        } catch (err) {
            // console.log(err);
            Swal.fire({
                position: "center",
                icon: "error",
                title: err,
                showConfirmButton: false,
                timer: 3000
            });
        }
        setDoing(false);
    };


    // signup
    const { register: signup, handleSubmit: handleSignupSubmit, watch: watchUp, formState: { errors: signupErr } } = useForm();

    const onSignup = async data => {
        setDoing(true);
        // console.log(data);

        try {
            await createUser(data.email, data.password);
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Account Registered",
                showConfirmButton: false,
                timer: 2000
            });
            // navigate where user was going
            navigate(location?.state ? location.state : '/');
        } catch (err) {
            console.log(err);
            Swal.fire({
                position: "center",
                icon: "error",
                title: err,
                showConfirmButton: false,
                timer: 3000
            });
        }
        setDoing(false);
    };

    return (
        <div className="flex flex-col lg:flex-row bg-gradient-to-r from-accent to-primary">
            {/* signin */}
            <div className="hero min-h-screen mb-10">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <p className="font-bold">Have an account?</p>
                        <h1 className="text-5xl font-bold">Signin here</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm bg-base-300 pb-5">
                        <form className="card-body" onSubmit={handleSigninSubmit(onSignin)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Email</span>
                                </label>
                                <input type="email"
                                    name="emailin"
                                    placeholder="email" className="input input-bordered" required {...signin("email")} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Password</span>
                                </label>
                                <input type="password" name="passwordin" placeholder="password" className="input input-bordered" required {...signin("password")} />
                            </div>
                            <div className="form-control">
                                {
                                    doing ? <span className="loading loading-dots loading-lg mx-auto text-center text-primary"></span> : <button className="btn btn-accent btn-outline w-fit mx-auto">Signin</button>
                                }
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* signup */}
            <div className="hero min-h-screen mb-10">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left text-neutral-content">
                        <p className="font-bold">New here?</p>
                        <h1 className="text-5xl font-bold">signup now</h1>
                    </div>
                    <div className="card flex-shrink-0  w-fit bg-base-300">
                        <form className="card-body" onSubmit={handleSignupSubmit(onSignup)}>
                            {/* name url */}
                            <div className="flex flex-col lg:flex-row gap-3">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Your Name</span>
                                    </label>
                                    <input type="text"
                                        name="name"
                                        placeholder="Your Name" className="input input-bordered" required {...signup("name")} />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Photo URL</span>
                                    </label>
                                    <input type="text"
                                        name="url"
                                        placeholder="Photo URL" className="input input-bordered" required {...signup("url")} />
                                </div>
                            </div>
                            {/* email password */}
                            <div className="flex flex-col lg:flex-row gap-3">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Email</span>
                                    </label>
                                    <input type="email"
                                        name="email"
                                        placeholder="email" className="input input-bordered" required {...signup("email")} />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Password</span>
                                    </label>
                                    <input type="password"
                                        name="password" placeholder="password" className="input input-bordered" required {...signup("password", { pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/ })} />
                                </div>
                            </div>
                            {signupErr.email && <p className="text-center text-error font-semibold">Enter a Valid Email Address</p>}
                            {signupErr.password && <p className="text-center text-error font-semibold w-96 mx-auto">Password MUST contain Minimum 6 characters Including at least a Upper, a Lower case letter, also a Number</p>}
                            <label className="label mx-auto">
                                <input type="checkbox" name="checkbox" id="" required {...signup("termsConditions")} />
                                <p className="label-text-alt link link-hover ml-2 text-secondary">Accept our terms and conditions</p>
                            </label>

                            <div className="form-control mt-6">
                                {
                                    doing ? <span className="loading loading-dots loading-lg mx-auto text-center text-primary"></span> : <button className="btn btn-primary btn-outline w-fit mx-auto">Signup</button>
                                }
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SigninSignup;