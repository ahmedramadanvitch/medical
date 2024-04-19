import { useFormik } from "formik";
import Section_container from "../../Components/Section_container/Section_container";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import * as Yup from "yup";
import { Oval } from "react-loader-spinner";
import { Helmet } from "react-helmet";

export default function Register() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  async function getRegister(values) {
    try {
      setLoading(true);
      let { data } = await axios.post(
        `https://ecommerce.routemisr.com/api/v1/auth/signup`,
        values
      );
      // check if data success
      if (data.message === "success") {
        navigate("/login");
        setLoading(false);
        setMsg(""); //Account Already Exists
      }
    } catch (error) {
      setMsg(error.response.data.message); //Account Already Exists
      setLoading(false);
    }
  }

  // validation form
  const validationSchema = Yup.object({
    name: Yup.string()
      .required("name is required")
      .min(2, "too short min is 2")
      .max(10, "too long max is 6"),
    email: Yup.string()
      .required("email is required")
      .email("email is not valid"),
    password: Yup.string()
      .required("password is required")
      .min(5, "too short min is 5")
      .max(10, "too long max is 10")
      .matches(
        /^[A-Z][a-z0-9]{5,10}$/,
        "password not valid it must start with capital character and only 10"
      ),
    rePassword: Yup.string()
      .required("rePassword is required")
      .oneOf([Yup.ref("password")], "must be like password"),
    phone: Yup.string()
      .required("phone is required")
      .matches(/^(002)?(01)[0-25][0-9]{8}/, "phone not valid"),
  });

  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    validationSchema,
    onSubmit: getRegister,
  });

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Register</title>
      </Helmet>
      <Section_container cssClassProps={"m"}>
        <div className="h-fit">
          <div className="w-full md:w-1/2 mx-auto py-10  bg-white">
            <h1 className="text-cyan-700 font-bold text-2xl mb-1">
              Register Now
            </h1>
            <p className="text-sm font-normal text-gray-400 mb-7">Welcome</p>

            <form className="bg-white" onSubmit={formik.handleSubmit}>
              {msg ? (
                <div className="mb-2 -mt-2 ml-2 gap-2 flex justify-start items-center text-2xl text-red-700">
                  <i className="fa-solid fa-triangle-exclamation"></i>
                  <p> {msg} </p>
                </div>
              ) : (
                ""
              )}
              <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                <i className="fa-solid fa-user"></i>
                <input
                  className="w-full pl-2 outline-none border-none"
                  type="text"
                  placeholder="Full name"
                  id="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.errors.name && formik.touched.name ? (
                <div className="mb-2 -mt-2 ml-2 gap-2 flex justify-start items-center text-red-700">
                  <i className="fa-solid fa-triangle-exclamation "></i>
                  <p> {formik.errors.name} </p>
                </div>
              ) : (
                ""
              )}

              <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                <i className="fa-solid fa-at"></i>
                <input
                  className="w-full pl-2 outline-none border-none"
                  type="email"
                  placeholder="Email Address"
                  id="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.errors.email && formik.touched.email ? (
                <div className="mb-2 -mt-2 ml-2 gap-2 flex justify-start items-center text-red-700">
                  <i className="fa-solid fa-triangle-exclamation "></i>
                  <p> {formik.errors.email} </p>
                </div>
              ) : (
                ""
              )}

              <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                <i className="fa-solid fa-lock"></i>
                <input
                  className="w-full pl-2 outline-none border-none"
                  type="password"
                  placeholder="Password"
                  maxLength={10}
                  id="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.errors.password && formik.touched.password ? (
                <div className="mb-2 -mt-2 ml-2 gap-2 flex justify-start items-center text-red-700">
                  <i className="fa-solid fa-triangle-exclamation "></i>
                  <p> {formik.errors.password} </p>
                </div>
              ) : (
                ""
              )}

              <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                <i className="fa-solid fa-lock"></i>
                <input
                  className="w-full pl-2 outline-none border-none"
                  type="password"
                  placeholder="Re-Password"
                  maxLength={10}
                  id="rePassword"
                  value={formik.values.rePassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.errors.rePassword && formik.touched.rePassword ? (
                <div className="mb-2 -mt-2 ml-2 gap-2 flex justify-start items-center text-red-700">
                  <i className="fa-solid fa-triangle-exclamation "></i>
                  <p> {formik.errors.rePassword} </p>
                </div>
              ) : (
                ""
              )}

              <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                <i className="fa-solid fa-phone"></i>
                <input
                  className="w-full pl-2 outline-none border-none"
                  type="tel"
                  placeholder="Phone"
                  id="phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </div>
              {formik.errors.phone && formik.touched.phone ? (
                <div className="mb-2 -mt-2 ml-2 gap-2 flex justify-start items-center text-red-700">
                  <i className="fa-solid fa-triangle-exclamation "></i>
                  <p> {formik.errors.phone} </p>
                </div>
              ) : (
                ""
              )}

              <button
                type="submit"
                className={`block w-full bg-cyan-800 mt-4 py-2 rounded-2xl text-white font-semibold mb-2 cursor-pointer`}
                disabled={!(formik.isValid && formik.dirty)}
              >
                {loading ? (
                  <Oval
                    visible={true}
                    height="25"
                    // width="65"
                    color="#8ae689"
                    ariaLabel="oval-loading"
                    wrapperStyle={{}}
                    wrapperClass="text-center mx-auto w-[50px]"
                  />
                ) : (
                  "Register"
                )}
              </button>
            </form>
          </div>
        </div>
      </Section_container>
    </>
  );
}
