import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import { Oval } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Section_container from "../../Components/Section_container/Section_container";
export default function ForgetPassword() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  async function forgetPassword(values) {
    try {
      setLoading(true);
      let { data } = await axios.post(
        `https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`,
        values
      );
      // check data success
      if (data.statusMsg === "success") {
        navigate("/verify-code");
        setLoading(false);
        setMsg(""); // There is no user registered with this email address
      }
    } catch (error) {
      setMsg(error.response.data.message); // There is no user registered with this email address
      setLoading(false);
    }
  }

  // validation form
  const validationSchema = Yup.object({
    email: Yup.string()
      .required("email is required")
      .email("email is not valid"),
  });

  // formik
  let formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema,
    onSubmit: forgetPassword,
  });
  return (
    <>
      <Section_container>
        <div className="h-fit">
          <div className="w-full md:w-1/2 mx-auto py-10  bg-white">
            <h1 className="text-cyan-700 font-bold text-2xl mb-3">
              please enter your Email{" "}
            </h1>
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
              <button
                type="submit"
                className={`block w-full bg-cyan-800 mt-4 py-2 rounded-2xl text-white font-semibold mb-2 cursor-pointer`}
                disabled={!(formik.isValid && formik.dirty)}
              >
                {loading ? (
                  <Oval
                    visible={true}
                    height="25"
                    color="#8ae689"
                    ariaLabel="oval-loading"
                    wrapperStyle={{}}
                    wrapperClass="text-center mx-auto w-[50px]"
                  />
                ) : (
                  "Verify"
                )}
              </button>
            </form>
          </div>
        </div>
      </Section_container>
    </>
  );
}
